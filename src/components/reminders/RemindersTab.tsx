"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, isPast, isToday, addDays } from "date-fns";
import { FaCalendarAlt, FaCheckCircle, FaStar, FaInfoCircle, FaPlus, FaCog, FaClock, FaBrain } from "react-icons/fa";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { KoalaMascot } from "@/components/ui/koala-mascot";
import { cn } from "@/lib/utils";
import { useReminders } from "@/hooks/useReminders";
import { useAchievements } from "@/hooks/useAchievements";
import { checkAchievementProgress } from "@/lib/supabase/client";
import { RemindersSkeleton } from "./RemindersSkeleton";
import { ReminderSettings } from "./ReminderSettings";
import type { Reminder, ReminderCreateInput } from "@/types/reminders";
import { useAuth } from "@clerk/nextjs";
import { CelebrationOverlay } from "@/components/stu";
import { StuLottieAnimation } from "@/components/stu/StuLottieAnimation";

// Stu's messages (can be externalized)
const stuMessages = {
    greeting: "Ready to crush some goals today?",
    noReminders: "No reminders yet. Let's add one!",
    reminderDue: "Don't forget, {title} is due today!",
    encouragement: "Awesome job! Keep that momentum going!",
    achievement: "Woohoo! New achievement unlocked!",
    tap: "Need a tip? Just ask!"
};

const RemindersTab = () => {
    const { userId, getToken } = useAuth();
    const { reminders, loading, error, editReminder, addReminder } = useReminders();
    const { userStats, userAchievements, reload: reloadAchievements } = useAchievements();

    const [stuMessage, setStuMessage] = useState("");
    const [stuAnimation, setStuAnimation] = useState<"idle" | "talking" | "excited">("idle");
    const [isAnimating, setIsAnimating] = useState(false);
    const [showAchievementsDialog, setShowAchievementsDialog] = useState(false);
    const [showReminderSettings, setShowReminderSettings] = useState(false);
    const [showAddReminder, setShowAddReminder] = useState(false);
    
    // Add Reminder Form State
    const [reminderForm, setReminderForm] = useState({
        title: '',
        description: '',
        due_date: null as Date | null,
        due_time: '12:00', // Add time field
        reminder_time: '11:00', // Add reminder time field
        priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
        type: 'personal' as 'academic' | 'personal' | 'event',
        subject: '',
        useAI: true
    });
    const [isSubmittingReminder, setIsSubmittingReminder] = useState(false);

    const showStuMessage = (message: string, animation: "talking" | "excited" = "talking", duration = 3000) => {
        setStuMessage(message);
        setStuAnimation(animation);
        
        // Start Lottie animation for talking or excited states
        if (animation === "talking" || animation === "excited") {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setStuAnimation("idle");
            }, duration);
        } else {
            setTimeout(() => setStuAnimation("idle"), duration);
        }
    };

    const handleStuClick = () => {
        showStuMessage(stuMessages.tap, "excited", 3000);
    };

    useEffect(() => {
        if (!loading) {
            const upcoming = reminders.find(r => !r.completed && isToday(new Date(r.due_date)));
            if (upcoming) {
                showStuMessage(stuMessages.reminderDue.replace("{title}", upcoming.title));
            } else if (reminders.length === 0) {
                showStuMessage(stuMessages.noReminders);
            } else {
                showStuMessage(stuMessages.greeting);
            }
        }
    }, [loading, reminders]);
    
    const handleCompleteReminder = async (reminder: Reminder) => {
        if (!userId) return;
        await editReminder(reminder.id, { completed: true });
        toast.success(`Completed: "${reminder.title}"`, { description: `+${reminder.points || 0} points! Great work!` });
        try {
            const token = await getToken({ template: 'supabase-integration' });
            await checkAchievementProgress(userId, { type: 'reminder_completed', payload: { ...reminder } }, () => Promise.resolve(token));
            showStuMessage(stuMessages.achievement, "excited", 4000);
            reloadAchievements();
        } catch (e) {
            console.error("Failed to check achievement progress:", e);
            showStuMessage(stuMessages.encouragement, "excited");
        }
    };

    const handleAddReminder = async () => {
        if (!userId || !reminderForm.title || !reminderForm.due_date) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmittingReminder(true);
        try {
            if (reminderForm.useAI) {
                // Use AI-powered ReminderEngine for smart reminders
                const { ReminderEngine } = await import('@/lib/reminders/ReminderEngine');
                const reminderEngine = ReminderEngine.getInstance();
                
                const taskForAI = {
                    id: `custom-${Date.now()}`, // Temporary ID for custom reminders
                    title: reminderForm.title,
                    due_date: reminderForm.due_date.toISOString(),
                    user_id: userId,
                    priority: reminderForm.priority,
                    type: reminderForm.type,
                    subject: reminderForm.subject || undefined,
                    description: reminderForm.description || undefined,
                    is_completed: false
                };

                const aiReminderSuccess = await reminderEngine.scheduleSmartReminder(taskForAI);
                
                if (aiReminderSuccess) {
                    toast.success('AI-powered reminder created!', {
                        description: 'Smart reminders will be optimized based on your patterns and preferences.'
                    });
                    showStuMessage("Great choice! I'll help you stay on track with smart reminders!", "excited");
                } else {
                    toast.error('Failed to create AI reminder. Please try basic reminder instead.');
                    return;
                }
            } else {
                // Use basic reminder system
                const [hours, minutes] = reminderForm.due_time.split(':');
                const [reminderHours, reminderMinutes] = reminderForm.reminder_time.split(':');
                
                // Create due date with time
                const dueDateTime = new Date(reminderForm.due_date);
                dueDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
                
                // Create reminder date with time (same day as due date)
                const reminderDateTime = new Date(reminderForm.due_date);
                reminderDateTime.setHours(parseInt(reminderHours), parseInt(reminderMinutes), 0, 0);
                
                const reminderData: ReminderCreateInput = {
                    title: reminderForm.title,
                    description: reminderForm.description,
                    due_date: dueDateTime.toISOString(),
                    reminder_time: reminderDateTime.toISOString(),
                    priority: reminderForm.priority === 'urgent' ? 'high' : reminderForm.priority, // Map urgent to high
                };

                await addReminder(reminderData);
                toast.success('Reminder created successfully!');
                showStuMessage("Nice! I'll remind you when it's time!", "talking");
            }

            // Reset form and close dialog
            setReminderForm({
                title: '',
                description: '',
                due_date: null,
                due_time: '12:00',
                reminder_time: '11:00',
                priority: 'medium',
                type: 'personal',
                subject: '',
                useAI: true
            });
            setShowAddReminder(false);

        } catch (error) {
            console.error('Error creating reminder:', error);
            toast.error('Failed to create reminder. Please try again.');
        } finally {
            setIsSubmittingReminder(false);
        }
    };
    
    if (loading) return <RemindersSkeleton />;
    if (error) return <div className="flex items-center justify-center h-full text-red-500"><FaInfoCircle className="mr-4"/>Error: {error.message}</div>;

    return (
        <div className="h-full overflow-y-auto overflow-x-hidden">
            {/* Celebration Overlay for Reminders */}
            <CelebrationOverlay 
                position="center"
                enableParticles={true}
                enableConfetti={true}
                enableSound={true}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 min-h-full overflow-hidden">
                {/* Mobile: Reminders First, Desktop: Stu and Stats */}
                <div className="lg:col-span-2 lg:order-2 flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3 sm:gap-0">
                        <h1 className="text-2xl font-bold">Your Reminders</h1>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:gap-2">
                            <Button variant="outline" onClick={() => setShowReminderSettings(true)} size="sm" className="w-full sm:w-auto">
                                <FaCog className="mr-2"/> Settings
                            </Button>
                            <Button onClick={() => setShowAddReminder(true)} size="sm" className="w-full sm:w-auto">
                                <FaPlus className="mr-2"/> Add Reminder
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-3 flex-1 overflow-hidden">
                        {reminders.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground">You're all clear! Add a new reminder.</p>
                            </div>
                        ) : (
                            <AnimatePresence>
                                {reminders.map(r => <ReminderCard key={r.id} reminder={r} onComplete={handleCompleteReminder} />)}
                            </AnimatePresence>
                        )}
                    </div>
                </div>

                {/* Mobile: Stu at Bottom, Desktop: Left Column */}
                <div className="lg:col-span-1 lg:order-1 flex flex-col gap-6">
                    <Card className="flex-grow flex flex-col items-center justify-center p-6 text-center bg-muted/30">
                        <motion.div
                            animate={stuAnimation}
                            variants={{
                                idle: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity } },
                                talking: { y: [0, -8, 0], transition: { duration: 0.5, repeat: Infinity } },
                                excited: { scale: [1, 1.1, 1], rotate: [-5, 5, -5, 0], transition: { duration: 0.5 } }
                            }}
                            onClick={handleStuClick}
                            className="cursor-pointer w-32 h-32 mx-auto"
                        >
                            {isAnimating ? (
                                <StuLottieAnimation
                                    className="w-full h-full"
                                    loop={false}
                                    autoplay={true}
                                    onComplete={() => setIsAnimating(false)}
                                />
                            ) : (
                                <KoalaMascot size="xl" className="drop-shadow-md" />
                            )}
                        </motion.div>
                        <AnimatePresence>
                            {stuMessage && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-4 font-semibold text-lg text-primary"
                                >
                                    {stuMessage}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Your Stats</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between"><span>Total Points:</span> <span className="font-bold text-primary">{userStats?.total_points || 0}</span></div>
                            <div className="flex justify-between"><span>Current Streak:</span> <span className="font-bold text-green-600">{userStats?.current_streak || 0} Days</span></div>
                            <div className="flex justify-between"><span>Level:</span> <span className="font-bold text-purple-600">{userStats?.level || 1}</span></div>
                            <Button className="w-full" onClick={() => setShowAchievementsDialog(true)}><FaStar className="mr-2"/>View Achievements</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Dialog open={showAchievementsDialog} onOpenChange={setShowAchievementsDialog}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center">
                            <FaStar className="mr-2 text-amber-500" />
                            Your Achievements
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        {/* User Stats Summary */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{userStats?.total_points || 0}</div>
                                <div className="text-sm text-muted-foreground">Total Points</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{userStats?.current_streak || 0}</div>
                                <div className="text-sm text-muted-foreground">Day Streak</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">{userAchievements?.length || 0}</div>
                                <div className="text-sm text-muted-foreground">Achievements</div>
                            </div>
                        </div>
                        
                        {/* Achievement Collection */}
                        {userAchievements && userAchievements.length > 0 ? (
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Unlocked Achievements</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {userAchievements.map((userAchievement, i) => (
                                        <div key={userAchievement.id} className="flex items-center gap-3 p-3 bg-card border rounded-lg">
                                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                                <span className="text-lg">
                                                    {userAchievement.achievements?.icon || '🏆'}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium">
                                                    {userAchievement.achievements?.name || `Achievement #${i + 1}`}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    +{userAchievement.achievements?.points_reward || 0} points
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <FaStar className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-muted-foreground mb-2">No achievements yet</h3>
                                <p className="text-sm text-muted-foreground">
                                    Complete reminders and maintain streaks to unlock your first achievements!
                                </p>
                            </div>
                        )}
                        
                        {/* Quick Link to Full Gamification Hub */}
                        <div className="pt-4 border-t">
                            <Button 
                                variant="outline" 
                                className="w-full"
                                onClick={() => {
                                    setShowAchievementsDialog(false);
                                    // Note: This would need proper navigation implementation
                                    console.log('Navigate to Gamification Hub');
                                }}
                            >
                                <FaStar className="mr-2" />
                                View Full Gamification Hub
                            </Button>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setShowAchievementsDialog(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Reminder Settings Dialog */}
            <Dialog open={showReminderSettings} onOpenChange={setShowReminderSettings}>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center">
                            <FaCog className="mr-2 text-blue-500" />
                            Proactive Reminder Settings
                        </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                        <ReminderSettings />
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setShowReminderSettings(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Add Reminder Dialog */}
            <Dialog open={showAddReminder} onOpenChange={setShowAddReminder}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="flex items-center">
                            <FaPlus className="mr-2 text-green-500" />
                            Create Smart Reminder
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                        {/* Title Field */}
                        <div className="space-y-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                                id="title"
                                placeholder="What would you like to be reminded about?"
                                value={reminderForm.title}
                                onChange={(e) => setReminderForm(prev => ({...prev, title: e.target.value}))}
                            />
                        </div>

                        {/* Description Field */}
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Add any additional details or notes..."
                                value={reminderForm.description}
                                onChange={(e) => setReminderForm(prev => ({...prev, description: e.target.value}))}
                                rows={3}
                            />
                        </div>

                        {/* Due Date Field */}
                        <div className="space-y-2">
                            <Label>Due Date *</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !reminderForm.due_date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {reminderForm.due_date ? format(reminderForm.due_date, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={reminderForm.due_date || undefined}
                                        onSelect={(date) => setReminderForm(prev => ({...prev, due_date: date || null}))}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Time Fields */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="due_time">Due Time</Label>
                                <Input
                                    id="due_time"
                                    type="time"
                                    value={reminderForm.due_time}
                                    onChange={(e) => setReminderForm(prev => ({...prev, due_time: e.target.value}))}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reminder_time">Reminder Time</Label>
                                <Input
                                    id="reminder_time"
                                    type="time"
                                    value={reminderForm.reminder_time}
                                    onChange={(e) => setReminderForm(prev => ({...prev, reminder_time: e.target.value}))}
                                />
                                <p className="text-xs text-muted-foreground">
                                    When you want to be reminded (before due time)
                                </p>
                            </div>
                        </div>

                        {/* Priority and Type Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Priority</Label>
                                <Select 
                                    value={reminderForm.priority} 
                                    onValueChange={(value: 'low' | 'medium' | 'high' | 'urgent') => 
                                        setReminderForm(prev => ({...prev, priority: value}))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="urgent">Urgent</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Type</Label>
                                <Select 
                                    value={reminderForm.type} 
                                    onValueChange={(value: 'academic' | 'personal' | 'event') => 
                                        setReminderForm(prev => ({...prev, type: value}))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="academic">Academic</SelectItem>
                                        <SelectItem value="personal">Personal</SelectItem>
                                        <SelectItem value="event">Event</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Subject Field (conditional) */}
                        {reminderForm.type === 'academic' && (
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject/Course</Label>
                                <Input
                                    id="subject"
                                    placeholder="e.g., Mathematics, Computer Science..."
                                    value={reminderForm.subject}
                                    onChange={(e) => setReminderForm(prev => ({...prev, subject: e.target.value}))}
                                />
                            </div>
                        )}

                        {/* AI Toggle */}
                        <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <input
                                    id="useAI"
                                    type="checkbox"
                                    checked={reminderForm.useAI}
                                    onChange={(e) => setReminderForm(prev => ({...prev, useAI: e.target.checked}))}
                                    className="w-4 h-4"
                                />
                                <Label htmlFor="useAI" className="flex items-center cursor-pointer">
                                    <FaBrain className="mr-2 text-purple-500" />
                                    Enable AI-Powered Smart Reminders
                                </Label>
                            </div>
                        </div>
                        
                        {reminderForm.useAI && (
                            <div className="text-sm text-muted-foreground bg-blue-50 border border-blue-200 rounded-lg p-3">
                                <FaInfoCircle className="inline mr-2 text-blue-500" />
                                AI will optimize reminder timing based on your patterns, task priority, and preferences. 
                                You'll receive multiple adaptive reminders at the most effective times.
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowAddReminder(false)}>
                            Cancel
                        </Button>
                        <Button 
                            onClick={handleAddReminder}
                            disabled={isSubmittingReminder || !reminderForm.title || !reminderForm.due_date}
                        >
                            {isSubmittingReminder ? (
                                <FaClock className="mr-2 animate-spin" />
                            ) : (
                                <FaPlus className="mr-2" />
                            )}
                            {reminderForm.useAI ? 'Create Smart Reminder' : 'Create Reminder'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

const ReminderCard = ({ reminder, onComplete }: { reminder: Reminder; onComplete: (r: Reminder) => void }) => {
    const isOverdue = !reminder.completed && isPast(new Date(reminder.due_date));
    return (
        <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -50 }}>
            <Card className={cn("mb-3 transition-all", reminder.completed && "bg-muted/50 opacity-50")}>
                <CardContent className="p-4 flex items-center gap-4">
                    <FaCheckCircle
                        className={cn("w-7 h-7 cursor-pointer transition-colors", reminder.completed ? "text-green-500" : "text-gray-300 hover:text-green-400")}
                        onClick={() => !reminder.completed && onComplete(reminder)}
                    />
                    <div className="flex-1">
                        <p className={cn("font-semibold text-lg", reminder.completed && "line-through")}>{reminder.title}</p>
                        <div className={cn("flex items-center gap-2 text-sm", isOverdue ? "text-red-500 font-semibold" : "text-muted-foreground")}>
                            <FaCalendarAlt />
                            <span>{format(new Date(reminder.due_date), "PPp")}</span>
                            {isOverdue && <span>(Overdue)</span>}
                        </div>
                    </div>
                    <div className="font-bold text-lg text-yellow-500">+{reminder.points || 0} pts</div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default RemindersTab;
