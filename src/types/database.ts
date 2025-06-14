export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          progress: number | null
          total: number | null
          unlocked: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          progress?: number | null
          total?: number | null
          unlocked?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          progress?: number | null
          total?: number | null
          unlocked?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_collaborative_insights: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          insight_data: Json
          insight_type: string
          is_active: boolean | null
          relevance_score: number | null
          user_cluster: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          insight_data: Json
          insight_type: string
          is_active?: boolean | null
          relevance_score?: number | null
          user_cluster?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          insight_data?: Json
          insight_type?: string
          is_active?: boolean | null
          relevance_score?: number | null
          user_cluster?: string | null
        }
        Relationships: []
      }
      ai_embeddings: {
        Row: {
          created_at: string | null
          embedding_type: string
          embedding_vector: string | null
          id: string
          metadata: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          embedding_type: string
          embedding_vector?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          embedding_type?: string
          embedding_vector?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      ai_pattern_data: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          id: string
          pattern_data: Json
          pattern_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          pattern_data: Json
          pattern_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          pattern_data?: Json
          pattern_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ai_suggestion_feedback: {
        Row: {
          created_at: string
          feedback: string
          id: string
          suggestion_context: Json | null
          suggestion_id: string
          suggestion_title: string
          suggestion_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          feedback: string
          id?: string
          suggestion_context?: Json | null
          suggestion_id: string
          suggestion_title: string
          suggestion_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          feedback?: string
          id?: string
          suggestion_context?: Json | null
          suggestion_id?: string
          suggestion_title?: string
          suggestion_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_user_profiles: {
        Row: {
          created_at: string | null
          difficulty_preference: number | null
          id: string
          is_anonymous: boolean | null
          learning_style: string
          preferences_vector: string | null
          subject_interests: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          difficulty_preference?: number | null
          id?: string
          is_anonymous?: boolean | null
          learning_style?: string
          preferences_vector?: string | null
          subject_interests?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          difficulty_preference?: number | null
          id?: string
          is_anonymous?: boolean | null
          learning_style?: string
          preferences_vector?: string | null
          subject_interests?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      connections: {
        Row: {
          connected_user_id: string
          created_at: string | null
          id: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          connected_user_id: string
          created_at?: string | null
          id?: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          connected_user_id?: string
          created_at?: string | null
          id?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "connections_connected_user_id_fkey"
            columns: ["connected_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "connections_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          read: boolean | null
          recipient_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          recipient_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          recipient_id?: string
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          achievements: boolean | null
          break_reminders: boolean | null
          created_at: string | null
          daily_summary: boolean | null
          email_enabled: boolean | null
          id: string
          push_enabled: boolean | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          reminder_minutes_before: number | null
          study_sessions: boolean | null
          task_reminders: boolean | null
          timezone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          achievements?: boolean | null
          break_reminders?: boolean | null
          created_at?: string | null
          daily_summary?: boolean | null
          email_enabled?: boolean | null
          id?: string
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          reminder_minutes_before?: number | null
          study_sessions?: boolean | null
          task_reminders?: boolean | null
          timezone?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          achievements?: boolean | null
          break_reminders?: boolean | null
          created_at?: string | null
          daily_summary?: boolean | null
          email_enabled?: boolean | null
          id?: string
          push_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          reminder_minutes_before?: number | null
          study_sessions?: boolean | null
          task_reminders?: boolean | null
          timezone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          ai_preferences: Json | null
          avatar_url: string | null
          clerk_user_id: string
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          interests: string[] | null
          learning_style:
            | Database["public"]["Enums"]["learning_style_enum"]
            | null
          onboarding_completed: boolean | null
          subjects: string[] | null
          updated_at: string | null
          year_of_study: string | null
        }
        Insert: {
          ai_preferences?: Json | null
          avatar_url?: string | null
          clerk_user_id: string
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          interests?: string[] | null
          learning_style?:
            | Database["public"]["Enums"]["learning_style_enum"]
            | null
          onboarding_completed?: boolean | null
          subjects?: string[] | null
          updated_at?: string | null
          year_of_study?: string | null
        }
        Update: {
          ai_preferences?: Json | null
          avatar_url?: string | null
          clerk_user_id?: string
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          interests?: string[] | null
          learning_style?:
            | Database["public"]["Enums"]["learning_style_enum"]
            | null
          onboarding_completed?: boolean | null
          subjects?: string[] | null
          updated_at?: string | null
          year_of_study?: string | null
        }
        Relationships: []
      }
      push_notification_logs: {
        Row: {
          body: string
          clicked_at: string | null
          data: Json | null
          delivered_at: string | null
          error_message: string | null
          id: string
          notification_type: string
          sent_at: string | null
          status: string | null
          subscription_id: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          body: string
          clicked_at?: string | null
          data?: Json | null
          delivered_at?: string | null
          error_message?: string | null
          id?: string
          notification_type: string
          sent_at?: string | null
          status?: string | null
          subscription_id?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          body?: string
          clicked_at?: string | null
          data?: Json | null
          delivered_at?: string | null
          error_message?: string | null
          id?: string
          notification_type?: string
          sent_at?: string | null
          status?: string | null
          subscription_id?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "push_notification_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "push_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      push_subscriptions: {
        Row: {
          auth_key: string
          created_at: string | null
          endpoint: string
          id: string
          is_active: boolean | null
          last_used: string | null
          p256dh_key: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          auth_key: string
          created_at?: string | null
          endpoint: string
          id?: string
          is_active?: boolean | null
          last_used?: string | null
          p256dh_key: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          auth_key?: string
          created_at?: string | null
          endpoint?: string
          id?: string
          is_active?: boolean | null
          last_used?: string | null
          p256dh_key?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      scheduled_notifications: {
        Row: {
          body: string
          created_at: string | null
          data: Json | null
          id: string
          is_recurring: boolean | null
          notification_type: string
          recurrence_pattern: string | null
          scheduled_for: string
          sent_at: string | null
          status: string | null
          task_id: string | null
          title: string
          user_id: string
        }
        Insert: {
          body: string
          created_at?: string | null
          data?: Json | null
          id?: string
          is_recurring?: boolean | null
          notification_type: string
          recurrence_pattern?: string | null
          scheduled_for: string
          sent_at?: string | null
          status?: string | null
          task_id?: string | null
          title: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string | null
          data?: Json | null
          id?: string
          is_recurring?: boolean | null
          notification_type?: string
          recurrence_pattern?: string | null
          scheduled_for?: string
          sent_at?: string | null
          status?: string | null
          task_id?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_notifications_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          accessibility: Json | null
          created_at: string | null
          font_size: string | null
          high_contrast: boolean | null
          id: string
          notifications: Json | null
          privacy: Json | null
          reduced_motion: boolean | null
          theme: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accessibility?: Json | null
          created_at?: string | null
          font_size?: string | null
          high_contrast?: boolean | null
          id?: string
          notifications?: Json | null
          privacy?: Json | null
          reduced_motion?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          accessibility?: Json | null
          created_at?: string | null
          font_size?: string | null
          high_contrast?: boolean | null
          id?: string
          notifications?: Json | null
          privacy?: Json | null
          reduced_motion?: boolean | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      streaks: {
        Row: {
          best_streak: number | null
          current_streak: number | null
          id: string
          last_completed_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          best_streak?: number | null
          current_streak?: number | null
          id?: string
          last_completed_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          best_streak?: number | null
          current_streak?: number | null
          id?: string
          last_completed_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "streaks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          color: string
          created_at: string | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          clerk_user_id: string | null
          completed: boolean | null
          created_at: string | null
          description: string | null
          due_date: string | null
          id: string
          original_due_date: string | null
          priority: string | null
          recurrence_rule: string | null
          reminder_settings: Json | null
          subject: string | null
          title: string
          type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          clerk_user_id?: string | null
          completed?: boolean | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          original_due_date?: string | null
          priority?: string | null
          recurrence_rule?: string | null
          reminder_settings?: Json | null
          subject?: string | null
          title: string
          type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          clerk_user_id?: string | null
          completed?: boolean | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          original_due_date?: string | null
          priority?: string | null
          recurrence_rule?: string | null
          reminder_settings?: Json | null
          subject?: string | null
          title?: string
          type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_timetables: {
        Row: {
          color: string | null
          course_code: string | null
          course_name: string
          created_at: string | null
          days_of_week: string[]
          detailed_description: string | null
          end_time: string
          id: string
          instructor: string | null
          is_active: boolean | null
          location: string | null
          semester_end_date: string | null
          semester_start_date: string | null
          start_time: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color?: string | null
          course_code?: string | null
          course_name: string
          created_at?: string | null
          days_of_week: string[]
          detailed_description?: string | null
          end_time: string
          id?: string
          instructor?: string | null
          is_active?: boolean | null
          location?: string | null
          semester_end_date?: string | null
          semester_start_date?: string | null
          start_time: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string | null
          course_code?: string | null
          course_name?: string
          created_at?: string | null
          days_of_week?: string[]
          detailed_description?: string | null
          end_time?: string
          id?: string
          instructor?: string | null
          is_active?: boolean | null
          location?: string | null
          semester_end_date?: string | null
          semester_start_date?: string | null
          start_time?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          interests: string[] | null
          subjects: string[] | null
          updated_at: string | null
          year_of_study: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          interests?: string[] | null
          subjects?: string[] | null
          updated_at?: string | null
          year_of_study?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          interests?: string[] | null
          subjects?: string[] | null
          updated_at?: string | null
          year_of_study?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      timetable_entries: {
        Row: {
          color: string | null
          course_code: string | null
          course_name: string | null
          created_at: string | null
          days_of_week: string[] | null
          end_time: string | null
          id: string | null
          instructor: string | null
          location: string | null
          semester_end_date: string | null
          semester_start_date: string | null
          start_time: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          color?: string | null
          course_code?: string | null
          course_name?: string | null
          created_at?: string | null
          days_of_week?: string[] | null
          end_time?: string | null
          id?: string | null
          instructor?: string | null
          location?: string | null
          semester_end_date?: string | null
          semester_start_date?: string | null
          start_time?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          color?: string | null
          course_code?: string | null
          course_name?: string | null
          created_at?: string | null
          days_of_week?: string[] | null
          end_time?: string | null
          id?: string | null
          instructor?: string | null
          location?: string | null
          semester_end_date?: string | null
          semester_start_date?: string | null
          start_time?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      cleanup_old_notification_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clerk_webhook_handler: {
        Args: { webhook_payload: Json }
        Returns: Json
      }
      ensure_authenticated: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      find_similar_users: {
        Args: {
          user_vector: string
          user_id: string
          similarity_threshold?: number
          max_results?: number
        }
        Returns: {
          id: string
          similarity: number
          learning_style: string
          subject_interests: string[]
          avg_session_length: number
          success_rate: number
        }[]
      }
      get_clerk_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_ai_preferences: {
        Args: { user_uuid: string }
        Returns: {
          user_id: string
          preferences_vector: string
          learning_style: string
          difficulty_preference: number
          subject_interests: string[]
        }[]
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      handle_clerk_webhook: {
        Args: { event_type: string; user_data: Json }
        Returns: undefined
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: string
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      upsert_user_pattern: {
        Args: {
          user_uuid: string
          pattern_type_param: string
          pattern_data_param: Json
          confidence_param?: number
        }
        Returns: string
      }
      validate_clerk_jwt: {
        Args: { token: string }
        Returns: Json
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      learning_style_enum:
        | "Visual"
        | "Auditory"
        | "Kinesthetic"
        | "Reading/Writing"
        | "Unspecified"
      priority_level: "low" | "medium" | "high"
      task_type: "academic" | "personal" | "event"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      learning_style_enum: [
        "Visual",
        "Auditory",
        "Kinesthetic",
        "Reading/Writing",
        "Unspecified",
      ],
      priority_level: ["low", "medium", "high"],
      task_type: ["academic", "personal", "event"],
    },
  },
} as const
