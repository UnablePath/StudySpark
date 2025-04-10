"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FaGoogle, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Onboarding steps component
const OnboardingPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<"signup" | "tour">("signup");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    year: "",
    subjects: "",
    interests: "",
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would save the user data
    setCurrentStep("tour");
  };

  const handleGoogleSignIn = () => {
    // In a real application, this would initiate Google Auth
    setCurrentStep("tour");
  };

  const handleSkipTour = () => {
    router.push("/dashboard");
  };

  const handleFinishTour = () => {
    router.push("/dashboard");
  };

  const tourSlides = [
    {
      id: "connect",
      title: "Connect with Classmates",
      description: "Find and connect with students in your classes to form study groups and share notes.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      id: "tasks",
      title: "Set Up Tasks & Events",
      description: "Add assignments, exams, and other events to your calendar to stay organized.",
      icon: "📅",
    },
    {
      id: "reminders",
      title: "Gamified Reminders with Stu",
      description: "Meet Stu, your koala companion who will keep you on track with fun, gamified reminders.",
      icon: "🐨",
    },
  ];

  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const handleNextSlide = () => {
    api?.scrollNext();
  };

  const handlePrevSlide = () => {
    api?.scrollPrev();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {currentStep === "signup" ? (
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create your account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Year of Study (e.g., Freshman)"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Subjects (e.g., Math, History)"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Interests (e.g., Sports, Music)"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Continue
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="google">
                <div className="flex flex-col space-y-4">
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Click the button below to sign in with your Google account
                  </p>
                  <Button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
                  >
                    <FaGoogle className="mr-2" /> Sign in with Google
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ) : (
        <Card className="w-full max-w-md shadow-lg overflow-hidden">
          <CardHeader className="space-y-1 text-center border-b pb-4">
            <CardTitle className="text-2xl font-bold">Welcome to StudySpark</CardTitle>
            <CardDescription>Here's a quick tour of the app</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 px-1">
            <Carousel
              orientation="horizontal"
              className="w-full"
              setApi={setApi}
              opts={{
                align: "center",
                loop: false,
              }}
            >
              <CarouselContent>
                {tourSlides.map((slide) => (
                  <CarouselItem key={slide.id} className="md:basis-full">
                    <div className="p-6 flex flex-col items-center text-center gap-6">
                      <div className="text-6xl animate-floating">
                        {slide.icon}
                      </div>
                      <h2 className="text-xl font-semibold">{slide.title}</h2>
                      <p className="text-muted-foreground">{slide.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            {current > 0 ? (
              <Button variant="outline" onClick={handlePrevSlide}>
                <FaArrowLeft className="mr-2" /> Back
              </Button>
            ) : (
              <Button variant="outline" onClick={handleSkipTour}>
                Skip
              </Button>
            )}
            {current < count - 1 ? (
              <Button onClick={handleNextSlide}>
                Next <FaArrowRight className="ml-2" />
              </Button>
            ) : (
              <Button onClick={handleFinishTour}>
                Get Started <FaArrowRight className="ml-2" />
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default OnboardingPage;
