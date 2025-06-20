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
      achievement_templates: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          hidden: boolean | null
          icon: string | null
          id: string
          name: string
          points: number | null
          rarity: string | null
          repeatable: boolean | null
          requirements: Json
          reward: Json | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          hidden?: boolean | null
          icon?: string | null
          id?: string
          name: string
          points?: number | null
          rarity?: string | null
          repeatable?: boolean | null
          requirements: Json
          reward?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          hidden?: boolean | null
          icon?: string | null
          id?: string
          name?: string
          points?: number | null
          rarity?: string | null
          repeatable?: boolean | null
          requirements?: Json
          reward?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
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
      ai_usage_tracking: {
        Row: {
          ai_requests_count: number | null
          clerk_user_id: string
          created_at: string | null
          feature_usage: Json | null
          id: string
          reset_at: string | null
          updated_at: string | null
          usage_date: string
        }
        Insert: {
          ai_requests_count?: number | null
          clerk_user_id: string
          created_at?: string | null
          feature_usage?: Json | null
          id?: string
          reset_at?: string | null
          updated_at?: string | null
          usage_date?: string
        }
        Update: {
          ai_requests_count?: number | null
          clerk_user_id?: string
          created_at?: string | null
          feature_usage?: Json | null
          id?: string
          reset_at?: string | null
          updated_at?: string | null
          usage_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_usage_tracking_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ai_usage_tracking_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
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
      coin_balances: {
        Row: {
          current_balance: number
          last_updated: string | null
          lifetime_earned: number
          lifetime_spent: number
          user_id: string
        }
        Insert: {
          current_balance?: number
          last_updated?: string | null
          lifetime_earned?: number
          lifetime_spent?: number
          user_id: string
        }
        Update: {
          current_balance?: number
          last_updated?: string | null
          lifetime_earned?: number
          lifetime_spent?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coin_balances_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "coin_balances_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      coin_bonus_events: {
        Row: {
          bonus_amount: number | null
          conditions: Json | null
          created_at: string | null
          description: string | null
          end_date: string | null
          event_type: string
          id: string
          is_active: boolean | null
          multiplier: number
          name: string
          start_date: string | null
        }
        Insert: {
          bonus_amount?: number | null
          conditions?: Json | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          event_type: string
          id?: string
          is_active?: boolean | null
          multiplier?: number
          name: string
          start_date?: string | null
        }
        Update: {
          bonus_amount?: number | null
          conditions?: Json | null
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          event_type?: string
          id?: string
          is_active?: boolean | null
          multiplier?: number
          name?: string
          start_date?: string | null
        }
        Relationships: []
      }
      coin_transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          reference_id: string | null
          source: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          source: string
          transaction_type?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          source?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coin_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "coin_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      connections: {
        Row: {
          created_at: string
          id: string
          receiver_id: string
          requester_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          receiver_id: string
          requester_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          receiver_id?: string
          requester_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "connections_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "connections_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "connections_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "connections_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      conversation_participants: {
        Row: {
          conversation_id: string
          id: string
          joined_at: string | null
          last_read_at: string | null
          muted: boolean | null
          role: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          id?: string
          joined_at?: string | null
          last_read_at?: string | null
          muted?: boolean | null
          role?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          id?: string
          joined_at?: string | null
          last_read_at?: string | null
          muted?: boolean | null
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_participants_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "conversation_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      conversations: {
        Row: {
          conversation_type: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          last_message_at: string | null
          metadata: Json | null
          name: string | null
          updated_at: string | null
        }
        Insert: {
          conversation_type?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          last_message_at?: string | null
          metadata?: Json | null
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          conversation_type?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          last_message_at?: string | null
          metadata?: Json | null
          name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "conversations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      crashout_post_comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_deleted: boolean | null
          moderated_at: string | null
          moderated_by: string | null
          post_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_deleted?: boolean | null
          moderated_at?: string | null
          moderated_by?: string | null
          post_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_deleted?: boolean | null
          moderated_at?: string | null
          moderated_by?: string | null
          post_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crashout_post_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "crashout_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      crashout_post_reactions: {
        Row: {
          created_at: string | null
          id: string
          post_id: string | null
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id?: string | null
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string | null
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crashout_post_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "crashout_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      crashout_post_votes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
          vote_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
          vote_type: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
          vote_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "crashout_post_votes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "crashout_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      crashout_posts: {
        Row: {
          attachment_urls: string[] | null
          content: string
          created_at: string | null
          downvotes: number | null
          id: string
          is_anonymous: boolean | null
          is_private: boolean | null
          mood_emoji: string | null
          mood_type: string | null
          reaction_counts: Json | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          upvotes: number | null
          user_id: string
        }
        Insert: {
          attachment_urls?: string[] | null
          content: string
          created_at?: string | null
          downvotes?: number | null
          id?: string
          is_anonymous?: boolean | null
          is_private?: boolean | null
          mood_emoji?: string | null
          mood_type?: string | null
          reaction_counts?: Json | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          upvotes?: number | null
          user_id: string
        }
        Update: {
          attachment_urls?: string[] | null
          content?: string
          created_at?: string | null
          downvotes?: number | null
          id?: string
          is_anonymous?: boolean | null
          is_private?: boolean | null
          mood_emoji?: string | null
          mood_type?: string | null
          reaction_counts?: Json | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          upvotes?: number | null
          user_id?: string
        }
        Relationships: []
      }
      daily_streaks: {
        Row: {
          activity_count: number | null
          completed: boolean | null
          completion_time: string | null
          created_at: string | null
          date: string
          id: string
          points_earned: number | null
          tasks_completed: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          activity_count?: number | null
          completed?: boolean | null
          completion_time?: string | null
          created_at?: string | null
          date: string
          id?: string
          points_earned?: number | null
          tasks_completed?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          activity_count?: number | null
          completed?: boolean | null
          completion_time?: string | null
          created_at?: string | null
          date?: string
          id?: string
          points_earned?: number | null
          tasks_completed?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      journal_streaks: {
        Row: {
          created_at: string | null
          current_streak: number | null
          id: string
          last_entry_date: string | null
          longest_streak: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_streak?: number | null
          id?: string
          last_entry_date?: string | null
          longest_streak?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_streak?: number | null
          id?: string
          last_entry_date?: string | null
          longest_streak?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "journal_streaks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "journal_streaks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      message_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          message_id: string
          thumbnail_url: string | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          message_id: string
          thumbnail_url?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          message_id?: string
          thumbnail_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_attachments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      message_reactions: {
        Row: {
          created_at: string | null
          id: string
          message_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_reactions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_reactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "message_reactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      message_read_receipts: {
        Row: {
          id: string
          message_id: string
          read_at: string | null
          user_id: string
        }
        Insert: {
          id?: string
          message_id: string
          read_at?: string | null
          user_id: string
        }
        Update: {
          id?: string
          message_id?: string
          read_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_read_receipts_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_read_receipts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "message_read_receipts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          conversation_id: string | null
          created_at: string | null
          deleted_at: string | null
          delivery_status: string | null
          edited_at: string | null
          encrypted: boolean | null
          id: string
          message_type: string | null
          metadata: Json | null
          read: boolean | null
          recipient_id: string | null
          reply_to_id: string | null
          sender_id: string
          thread_id: string | null
        }
        Insert: {
          content: string
          conversation_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          delivery_status?: string | null
          edited_at?: string | null
          encrypted?: boolean | null
          id?: string
          message_type?: string | null
          metadata?: Json | null
          read?: boolean | null
          recipient_id?: string | null
          reply_to_id?: string | null
          sender_id: string
          thread_id?: string | null
        }
        Update: {
          content?: string
          conversation_id?: string | null
          created_at?: string | null
          deleted_at?: string | null
          delivery_status?: string | null
          edited_at?: string | null
          encrypted?: boolean | null
          id?: string
          message_type?: string | null
          metadata?: Json | null
          read?: boolean | null
          recipient_id?: string | null
          reply_to_id?: string | null
          sender_id?: string
          thread_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "messages_reply_to_id_fkey"
            columns: ["reply_to_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_analytics: {
        Row: {
          additional_data: Json | null
          category_id: string | null
          category_key: string | null
          event_type: string
          external_user_id: string | null
          id: string
          notification_id: string | null
          onesignal_notification_id: string | null
          timestamp: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          additional_data?: Json | null
          category_id?: string | null
          category_key?: string | null
          event_type: string
          external_user_id?: string | null
          id?: string
          notification_id?: string | null
          onesignal_notification_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          additional_data?: Json | null
          category_id?: string | null
          category_key?: string | null
          event_type?: string
          external_user_id?: string | null
          id?: string
          notification_id?: string | null
          onesignal_notification_id?: string | null
          timestamp?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_analytics_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "notification_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_analytics_notification_id_fkey"
            columns: ["notification_id"]
            isOneToOne: false
            referencedRelation: "notification_queue"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_categories: {
        Row: {
          color: string | null
          created_at: string | null
          default_enabled: boolean | null
          description: string | null
          display_name: string
          icon: string | null
          id: string
          name: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          default_enabled?: boolean | null
          description?: string | null
          display_name: string
          icon?: string | null
          id?: string
          name: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          default_enabled?: boolean | null
          description?: string | null
          display_name?: string
          icon?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      notification_history: {
        Row: {
          clerk_user_id: string | null
          data: Json | null
          delivery_status: string | null
          id: string
          message: string
          notification_type: string
          player_id: string | null
          sent_at: string
          title: string
          user_id: string | null
        }
        Insert: {
          clerk_user_id?: string | null
          data?: Json | null
          delivery_status?: string | null
          id?: string
          message: string
          notification_type: string
          player_id?: string | null
          sent_at?: string
          title: string
          user_id?: string | null
        }
        Update: {
          clerk_user_id?: string | null
          data?: Json | null
          delivery_status?: string | null
          id?: string
          message?: string
          notification_type?: string
          player_id?: string | null
          sent_at?: string
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          achievements: boolean | null
          break_reminders: boolean | null
          clerk_user_id: string | null
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
          clerk_user_id?: string | null
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
          clerk_user_id?: string | null
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
      notification_queue: {
        Row: {
          action_url: string | null
          badge_url: string | null
          body: string
          category_id: string | null
          clerk_user_id: string | null
          created_at: string | null
          data: Json | null
          icon_url: string | null
          id: string
          onesignal_notification_id: string | null
          priority: number | null
          scheduled_for: string | null
          sent_at: string | null
          status: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          badge_url?: string | null
          body: string
          category_id?: string | null
          clerk_user_id?: string | null
          created_at?: string | null
          data?: Json | null
          icon_url?: string | null
          id?: string
          onesignal_notification_id?: string | null
          priority?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          badge_url?: string | null
          body?: string
          category_id?: string | null
          clerk_user_id?: string | null
          created_at?: string | null
          data?: Json | null
          icon_url?: string | null
          id?: string
          onesignal_notification_id?: string | null
          priority?: number | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_queue_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "notification_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_transactions: {
        Row: {
          amount: number
          billing_period: string
          clerk_user_id: string
          created_at: string | null
          currency: string | null
          gateway_response: string | null
          id: string
          metadata: Json | null
          paid_at: string | null
          payment_provider: string | null
          paystack_transaction_id: number | null
          reference: string
          status: Database["public"]["Enums"]["payment_status_enum"] | null
          tier_id: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          billing_period: string
          clerk_user_id: string
          created_at?: string | null
          currency?: string | null
          gateway_response?: string | null
          id?: string
          metadata?: Json | null
          paid_at?: string | null
          payment_provider?: string | null
          paystack_transaction_id?: number | null
          reference: string
          status?: Database["public"]["Enums"]["payment_status_enum"] | null
          tier_id: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          billing_period?: string
          clerk_user_id?: string
          created_at?: string | null
          currency?: string | null
          gateway_response?: string | null
          id?: string
          metadata?: Json | null
          paid_at?: string | null
          payment_provider?: string | null
          paystack_transaction_id?: number | null
          reference?: string
          status?: Database["public"]["Enums"]["payment_status_enum"] | null
          tier_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_transactions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "payment_transactions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      post_reactions: {
        Row: {
          created_at: string
          id: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "crashout_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      private_journal_entries: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_favorite: boolean | null
          mood: string
          mood_intensity: number | null
          prompt_id: string | null
          tags: string[] | null
          title: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_favorite?: boolean | null
          mood: string
          mood_intensity?: number | null
          prompt_id?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_favorite?: boolean | null
          mood?: string
          mood_intensity?: number | null
          prompt_id?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "private_journal_entries_prompt_id_fkey"
            columns: ["prompt_id"]
            isOneToOne: false
            referencedRelation: "writing_prompts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "private_journal_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "private_journal_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      private_mood_analytics: {
        Row: {
          average_intensity: number | null
          created_at: string | null
          date: string
          dominant_mood: string | null
          entry_count: number | null
          id: string
          mood_entries: Json
          user_id: string
        }
        Insert: {
          average_intensity?: number | null
          created_at?: string | null
          date?: string
          dominant_mood?: string | null
          entry_count?: number | null
          id?: string
          mood_entries?: Json
          user_id: string
        }
        Update: {
          average_intensity?: number | null
          created_at?: string | null
          date?: string
          dominant_mood?: string | null
          entry_count?: number | null
          id?: string
          mood_entries?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "private_mood_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "private_mood_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          ai_preferences: Json | null
          avatar_url: string | null
          bio: string | null
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
          bio?: string | null
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
          bio?: string | null
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
          auth_key: string | null
          clerk_user_id: string | null
          created_at: string | null
          device_type: string | null
          endpoint: string | null
          external_user_id: string | null
          id: string
          is_active: boolean | null
          last_used: string | null
          onesignal_player_id: string | null
          p256dh_key: string | null
          platform: string | null
          updated_at: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          auth_key?: string | null
          clerk_user_id?: string | null
          created_at?: string | null
          device_type?: string | null
          endpoint?: string | null
          external_user_id?: string | null
          id?: string
          is_active?: boolean | null
          last_used?: string | null
          onesignal_player_id?: string | null
          p256dh_key?: string | null
          platform?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          auth_key?: string | null
          clerk_user_id?: string | null
          created_at?: string | null
          device_type?: string | null
          endpoint?: string | null
          external_user_id?: string | null
          id?: string
          is_active?: boolean | null
          last_used?: string | null
          onesignal_player_id?: string | null
          p256dh_key?: string | null
          platform?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "push_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "push_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      questionnaire_analytics: {
        Row: {
          completion_rates: Json | null
          generated_at: string | null
          id: string
          question_effectiveness: Json | null
          response_patterns: Json | null
          template_id: string
          user_demographics: Json | null
        }
        Insert: {
          completion_rates?: Json | null
          generated_at?: string | null
          id?: string
          question_effectiveness?: Json | null
          response_patterns?: Json | null
          template_id: string
          user_demographics?: Json | null
        }
        Update: {
          completion_rates?: Json | null
          generated_at?: string | null
          id?: string
          question_effectiveness?: Json | null
          response_patterns?: Json | null
          template_id?: string
          user_demographics?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_analytics_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "questionnaire_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      questionnaire_templates: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          order_priority: number | null
          questions: Json
          title: string
          updated_at: string | null
          version: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          order_priority?: number | null
          questions: Json
          title: string
          updated_at?: string | null
          version?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          order_priority?: number | null
          questions?: Json
          title?: string
          updated_at?: string | null
          version?: number | null
        }
        Relationships: []
      }
      refund_requests: {
        Row: {
          admin_notes: string | null
          clerk_user_id: string
          created_at: string | null
          id: string
          payment_reference: string | null
          processed_at: string | null
          reason: string
          refund_amount: number | null
          refund_currency: string | null
          requested_at: string
          status: string
          subscription_id: string | null
          updated_at: string | null
          user_email: string
        }
        Insert: {
          admin_notes?: string | null
          clerk_user_id: string
          created_at?: string | null
          id?: string
          payment_reference?: string | null
          processed_at?: string | null
          reason: string
          refund_amount?: number | null
          refund_currency?: string | null
          requested_at?: string
          status?: string
          subscription_id?: string | null
          updated_at?: string | null
          user_email: string
        }
        Update: {
          admin_notes?: string | null
          clerk_user_id?: string
          created_at?: string | null
          id?: string
          payment_reference?: string | null
          processed_at?: string | null
          reason?: string
          refund_amount?: number | null
          refund_currency?: string | null
          requested_at?: string
          status?: string
          subscription_id?: string | null
          updated_at?: string | null
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "refund_requests_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      reminder_analytics: {
        Row: {
          created_at: string | null
          effectiveness_score: number | null
          id: string
          reminder_type: string
          response_time_minutes: number | null
          scheduled_for: string
          sent_at: string
          task_id: string | null
          user_id: string
          user_response: string | null
        }
        Insert: {
          created_at?: string | null
          effectiveness_score?: number | null
          id?: string
          reminder_type: string
          response_time_minutes?: number | null
          scheduled_for: string
          sent_at: string
          task_id?: string | null
          user_id: string
          user_response?: string | null
        }
        Update: {
          created_at?: string | null
          effectiveness_score?: number | null
          id?: string
          reminder_type?: string
          response_time_minutes?: number | null
          scheduled_for?: string
          sent_at?: string
          task_id?: string | null
          user_id?: string
          user_response?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reminder_analytics_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminder_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reminder_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      reminder_preferences: {
        Row: {
          adaptive_scheduling: boolean | null
          created_at: string | null
          default_reminder_offsets: number[] | null
          enabled: boolean | null
          frequency: string | null
          id: string
          priority_based_timing: boolean | null
          procrastination_compensation: number | null
          quiet_hours_enabled: boolean | null
          quiet_hours_end: string | null
          quiet_hours_start: string | null
          smart_timing: boolean | null
          snooze_options: number[] | null
          sound_enabled: boolean | null
          stress_level_adjustment: boolean | null
          stu_animations: boolean | null
          updated_at: string | null
          user_id: string
          weekends_enabled: boolean | null
        }
        Insert: {
          adaptive_scheduling?: boolean | null
          created_at?: string | null
          default_reminder_offsets?: number[] | null
          enabled?: boolean | null
          frequency?: string | null
          id?: string
          priority_based_timing?: boolean | null
          procrastination_compensation?: number | null
          quiet_hours_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          smart_timing?: boolean | null
          snooze_options?: number[] | null
          sound_enabled?: boolean | null
          stress_level_adjustment?: boolean | null
          stu_animations?: boolean | null
          updated_at?: string | null
          user_id: string
          weekends_enabled?: boolean | null
        }
        Update: {
          adaptive_scheduling?: boolean | null
          created_at?: string | null
          default_reminder_offsets?: number[] | null
          enabled?: boolean | null
          frequency?: string | null
          id?: string
          priority_based_timing?: boolean | null
          procrastination_compensation?: number | null
          quiet_hours_enabled?: boolean | null
          quiet_hours_end?: string | null
          quiet_hours_start?: string | null
          smart_timing?: boolean | null
          snooze_options?: number[] | null
          sound_enabled?: boolean | null
          stress_level_adjustment?: boolean | null
          stu_animations?: boolean | null
          updated_at?: string | null
          user_id?: string
          weekends_enabled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "reminder_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reminder_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      reminders: {
        Row: {
          completed: boolean
          created_at: string
          description: string | null
          due_date: string
          id: string
          points: number | null
          priority: string | null
          task_id: string | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed?: boolean
          created_at?: string
          description?: string | null
          due_date: string
          id?: string
          points?: number | null
          priority?: string | null
          task_id?: string | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed?: boolean
          created_at?: string
          description?: string | null
          due_date?: string
          id?: string
          points?: number | null
          priority?: string | null
          task_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reminders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reminders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      reward_shop_items: {
        Row: {
          availability: Json | null
          category: string
          created_at: string | null
          description: string | null
          effect: Json | null
          icon: string | null
          id: string
          metadata: Json | null
          name: string
          price: number
          requirements: Json | null
          updated_at: string | null
        }
        Insert: {
          availability?: Json | null
          category: string
          created_at?: string | null
          description?: string | null
          effect?: Json | null
          icon?: string | null
          id?: string
          metadata?: Json | null
          name: string
          price: number
          requirements?: Json | null
          updated_at?: string | null
        }
        Update: {
          availability?: Json | null
          category?: string
          created_at?: string | null
          description?: string | null
          effect?: Json | null
          icon?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          price?: number
          requirements?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: string
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          id?: string
          permission: Database["public"]["Enums"]["app_permission"]
          role: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          id?: string
          permission?: Database["public"]["Enums"]["app_permission"]
          role?: Database["public"]["Enums"]["app_role"]
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
      scheduled_tasks: {
        Row: {
          actual_end: string | null
          actual_start: string | null
          confidence_score: number | null
          created_at: string
          id: string
          reasoning: string | null
          reschedule_reason: string | null
          scheduled_end: string
          scheduled_start: string
          task_id: string
          updated_at: string
          user_id: string
          was_rescheduled: boolean | null
        }
        Insert: {
          actual_end?: string | null
          actual_start?: string | null
          confidence_score?: number | null
          created_at?: string
          id?: string
          reasoning?: string | null
          reschedule_reason?: string | null
          scheduled_end: string
          scheduled_start: string
          task_id: string
          updated_at?: string
          user_id: string
          was_rescheduled?: boolean | null
        }
        Update: {
          actual_end?: string | null
          actual_start?: string | null
          confidence_score?: number | null
          created_at?: string
          id?: string
          reasoning?: string | null
          reschedule_reason?: string | null
          scheduled_end?: string
          scheduled_start?: string
          task_id?: string
          updated_at?: string
          user_id?: string
          was_rescheduled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_tasks_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "scheduled_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
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
      smart_reminder_queue: {
        Row: {
          created_at: string | null
          id: string
          is_final_reminder: boolean | null
          message: string
          onesignal_notification_id: string | null
          priority_level: number | null
          processed_at: string | null
          reminder_type: string
          scheduled_for: string
          snooze_options: number[] | null
          status: string | null
          stu_animation: string | null
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_final_reminder?: boolean | null
          message: string
          onesignal_notification_id?: string | null
          priority_level?: number | null
          processed_at?: string | null
          reminder_type?: string
          scheduled_for: string
          snooze_options?: number[] | null
          status?: string | null
          stu_animation?: string | null
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_final_reminder?: boolean | null
          message?: string
          onesignal_notification_id?: string | null
          priority_level?: number | null
          processed_at?: string | null
          reminder_type?: string
          scheduled_for?: string
          snooze_options?: number[] | null
          status?: string | null
          stu_animation?: string | null
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "smart_reminder_queue_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "smart_reminder_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "smart_reminder_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      streak_activities: {
        Row: {
          activity_count: number | null
          activity_date: string
          created_at: string | null
          id: string
          metadata: Json | null
          streak_type: string
          user_id: string
        }
        Insert: {
          activity_count?: number | null
          activity_date?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          streak_type: string
          user_id: string
        }
        Update: {
          activity_count?: number | null
          activity_date?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          streak_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "streak_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "streak_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      streak_milestones: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          milestone_days: number
          reward_coins: number | null
          reward_description: string | null
          reward_title: string | null
          streak_type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          milestone_days: number
          reward_coins?: number | null
          reward_description?: string | null
          reward_title?: string | null
          streak_type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          milestone_days?: number
          reward_coins?: number | null
          reward_description?: string | null
          reward_title?: string | null
          streak_type?: string
        }
        Relationships: []
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
      study_group_achievements: {
        Row: {
          achieved_at: string
          achievement_id: string | null
          awarded_by: string | null
          group_id: string | null
          id: string
        }
        Insert: {
          achieved_at?: string
          achievement_id?: string | null
          awarded_by?: string | null
          group_id?: string | null
          id?: string
        }
        Update: {
          achieved_at?: string
          achievement_id?: string | null
          awarded_by?: string | null
          group_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_group_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_achievements_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_achievements_awarded_by_fkey"
            columns: ["awarded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "study_group_achievements_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      study_group_invitations: {
        Row: {
          created_at: string
          group_id: string | null
          id: string
          invitee_id: string | null
          inviter_id: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          group_id?: string | null
          id?: string
          invitee_id?: string | null
          inviter_id?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          group_id?: string | null
          id?: string
          invitee_id?: string | null
          inviter_id?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_group_invitations_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_invitations_invitee_id_fkey"
            columns: ["invitee_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_invitations_invitee_id_fkey"
            columns: ["invitee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "study_group_invitations_inviter_id_fkey"
            columns: ["inviter_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_invitations_inviter_id_fkey"
            columns: ["inviter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      study_group_members: {
        Row: {
          group_id: string | null
          id: string
          joined_at: string
          role: string
          user_id: string | null
        }
        Insert: {
          group_id?: string | null
          id?: string
          joined_at?: string
          role?: string
          user_id?: string | null
        }
        Update: {
          group_id?: string | null
          id?: string
          joined_at?: string
          role?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      study_group_resources: {
        Row: {
          content: string | null
          created_at: string
          file_path: string | null
          group_id: string | null
          id: string
          resource_type: string
          title: string
          url: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          file_path?: string | null
          group_id?: string | null
          id?: string
          resource_type: string
          title: string
          url?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          file_path?: string | null
          group_id?: string | null
          id?: string
          resource_type?: string
          title?: string
          url?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_resources_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_resources_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_resources_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      study_group_schedule: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          end_time: string
          group_id: string | null
          id: string
          start_time: string
          title: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time: string
          group_id?: string | null
          id?: string
          start_time: string
          title: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string
          group_id?: string | null
          id?: string
          start_time?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_group_schedule_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_group_schedule_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "study_group_schedule_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      study_groups: {
        Row: {
          conversation_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          updated_at: string
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          updated_at?: string
        }
        Update: {
          conversation_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_conversation_id"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "study_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
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
      subscription_tiers: {
        Row: {
          ai_requests_per_day: number | null
          ai_requests_per_month: number | null
          created_at: string | null
          description: string | null
          display_name: string
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price_monthly: number | null
          price_yearly: number | null
          updated_at: string | null
        }
        Insert: {
          ai_requests_per_day?: number | null
          ai_requests_per_month?: number | null
          created_at?: string | null
          description?: string | null
          display_name: string
          features?: Json | null
          id: string
          is_active?: boolean | null
          name: string
          price_monthly?: number | null
          price_yearly?: number | null
          updated_at?: string | null
        }
        Update: {
          ai_requests_per_day?: number | null
          ai_requests_per_month?: number | null
          created_at?: string | null
          description?: string | null
          display_name?: string
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price_monthly?: number | null
          price_yearly?: number | null
          updated_at?: string | null
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
      tutorial_analytics: {
        Row: {
          action: string
          created_at: string | null
          help_requests: number | null
          id: string
          interaction_count: number | null
          metadata: Json | null
          step: Database["public"]["Enums"]["tutorial_step_enum"]
          stu_interactions: number | null
          time_spent_seconds: number | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string | null
          help_requests?: number | null
          id?: string
          interaction_count?: number | null
          metadata?: Json | null
          step: Database["public"]["Enums"]["tutorial_step_enum"]
          stu_interactions?: number | null
          time_spent_seconds?: number | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string | null
          help_requests?: number | null
          id?: string
          interaction_count?: number | null
          metadata?: Json | null
          step?: Database["public"]["Enums"]["tutorial_step_enum"]
          stu_interactions?: number | null
          time_spent_seconds?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tutorial_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tutorial_analytics_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      tutorial_progress: {
        Row: {
          completed_at: string | null
          completed_steps:
            | Database["public"]["Enums"]["tutorial_step_enum"][]
            | null
          created_at: string | null
          current_step: Database["public"]["Enums"]["tutorial_step_enum"]
          id: string
          is_completed: boolean | null
          is_skipped: boolean | null
          last_seen_at: string | null
          started_at: string | null
          step_data: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          completed_steps?:
            | Database["public"]["Enums"]["tutorial_step_enum"][]
            | null
          created_at?: string | null
          current_step?: Database["public"]["Enums"]["tutorial_step_enum"]
          id?: string
          is_completed?: boolean | null
          is_skipped?: boolean | null
          last_seen_at?: string | null
          started_at?: string | null
          step_data?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          completed_steps?:
            | Database["public"]["Enums"]["tutorial_step_enum"][]
            | null
          created_at?: string | null
          current_step?: Database["public"]["Enums"]["tutorial_step_enum"]
          id?: string
          is_completed?: boolean | null
          is_skipped?: boolean | null
          last_seen_at?: string | null
          started_at?: string | null
          step_data?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tutorial_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tutorial_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      tutorial_rewards: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          reward_data: Json | null
          reward_type: string
          reward_value: number
          step: Database["public"]["Enums"]["tutorial_step_enum"]
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          reward_data?: Json | null
          reward_type: string
          reward_value: number
          step: Database["public"]["Enums"]["tutorial_step_enum"]
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          reward_data?: Json | null
          reward_type?: string
          reward_value?: number
          step?: Database["public"]["Enums"]["tutorial_step_enum"]
        }
        Relationships: []
      }
      typing_indicators: {
        Row: {
          conversation_id: string
          expires_at: string | null
          id: string
          is_typing: boolean | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          conversation_id: string
          expires_at?: string | null
          id?: string
          is_typing?: boolean | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          conversation_id?: string
          expires_at?: string | null
          id?: string
          is_typing?: boolean | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "typing_indicators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "typing_indicators_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string
          created_at: string | null
          id: string
          progress: Json | null
          unlocked_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          achievement_id: string
          created_at?: string | null
          id?: string
          progress?: Json | null
          unlocked_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          achievement_id?: string
          created_at?: string | null
          id?: string
          progress?: Json | null
          unlocked_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_ai_patterns: {
        Row: {
          analysis_version: number | null
          attention_span: number | null
          break_preferences: Json | null
          collaboration_preference: string | null
          created_at: string | null
          data_sources: Json | null
          deadline_pressure_response: string | null
          difficulty_preference: string | null
          id: string
          last_analyzed_at: string | null
          learning_style: string | null
          motivation_factors: Json | null
          notification_timing: Json | null
          pattern_confidence: Json | null
          preferred_study_times: Json | null
          productivity_peaks: Json | null
          reminder_frequency: string | null
          stress_relief_preferences: Json | null
          stress_triggers: Json | null
          task_completion_style: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          analysis_version?: number | null
          attention_span?: number | null
          break_preferences?: Json | null
          collaboration_preference?: string | null
          created_at?: string | null
          data_sources?: Json | null
          deadline_pressure_response?: string | null
          difficulty_preference?: string | null
          id?: string
          last_analyzed_at?: string | null
          learning_style?: string | null
          motivation_factors?: Json | null
          notification_timing?: Json | null
          pattern_confidence?: Json | null
          preferred_study_times?: Json | null
          productivity_peaks?: Json | null
          reminder_frequency?: string | null
          stress_relief_preferences?: Json | null
          stress_triggers?: Json | null
          task_completion_style?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          analysis_version?: number | null
          attention_span?: number | null
          break_preferences?: Json | null
          collaboration_preference?: string | null
          created_at?: string | null
          data_sources?: Json | null
          deadline_pressure_response?: string | null
          difficulty_preference?: string | null
          id?: string
          last_analyzed_at?: string | null
          learning_style?: string | null
          motivation_factors?: Json | null
          notification_timing?: Json | null
          pattern_confidence?: Json | null
          preferred_study_times?: Json | null
          productivity_peaks?: Json | null
          reminder_frequency?: string | null
          stress_relief_preferences?: Json | null
          stress_triggers?: Json | null
          task_completion_style?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_ai_patterns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_ai_patterns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_questionnaire_responses: {
        Row: {
          completed_at: string | null
          completion_percentage: number | null
          completion_status: string | null
          id: string
          responses: Json
          started_at: string | null
          template_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          completion_percentage?: number | null
          completion_status?: string | null
          id?: string
          responses: Json
          started_at?: string | null
          template_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          completion_percentage?: number | null
          completion_status?: string | null
          id?: string
          responses?: Json
          started_at?: string | null
          template_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_questionnaire_responses_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "questionnaire_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      user_reminder_patterns: {
        Row: {
          average_task_duration: number | null
          completion_rate: number | null
          created_at: string | null
          id: string
          last_updated_at: string | null
          preferred_reminder_frequency: string | null
          preferred_study_times: string[] | null
          procrastination_tendency: number | null
          quiet_hours: Json | null
          stress_level: number | null
          timezone: string | null
          user_id: string
        }
        Insert: {
          average_task_duration?: number | null
          completion_rate?: number | null
          created_at?: string | null
          id?: string
          last_updated_at?: string | null
          preferred_reminder_frequency?: string | null
          preferred_study_times?: string[] | null
          procrastination_tendency?: number | null
          quiet_hours?: Json | null
          stress_level?: number | null
          timezone?: string | null
          user_id: string
        }
        Update: {
          average_task_duration?: number | null
          completion_rate?: number | null
          created_at?: string | null
          id?: string
          last_updated_at?: string | null
          preferred_reminder_frequency?: string | null
          preferred_study_times?: string[] | null
          procrastination_tendency?: number | null
          quiet_hours?: Json | null
          stress_level?: number | null
          timezone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_reminder_patterns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_reminder_patterns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_stats: {
        Row: {
          current_streak: number | null
          level: number | null
          longest_streak: number | null
          total_points: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          current_streak?: number | null
          level?: number | null
          longest_streak?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          current_streak?: number | null
          level?: number | null
          longest_streak?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_streaks: {
        Row: {
          created_at: string | null
          current_streak: number
          id: string
          is_active: boolean | null
          last_activity_date: string | null
          longest_streak: number
          metadata: Json | null
          streak_start_date: string | null
          streak_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_streak?: number
          id?: string
          is_active?: boolean | null
          last_activity_date?: string | null
          longest_streak?: number
          metadata?: Json | null
          streak_start_date?: string | null
          streak_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_streak?: number
          id?: string
          is_active?: boolean | null
          last_activity_date?: string | null
          longest_streak?: number
          metadata?: Json | null
          streak_start_date?: string | null
          streak_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_streaks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_streaks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          clerk_user_id: string
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          metadata: Json | null
          paystack_customer_id: string | null
          paystack_subscription_code: string | null
          status: Database["public"]["Enums"]["subscription_status_enum"] | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tier_id: string
          updated_at: string | null
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          clerk_user_id: string
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          metadata?: Json | null
          paystack_customer_id?: string | null
          paystack_subscription_code?: string | null
          status?:
            | Database["public"]["Enums"]["subscription_status_enum"]
            | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id: string
          updated_at?: string | null
        }
        Update: {
          cancel_at_period_end?: boolean | null
          clerk_user_id?: string
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          metadata?: Json | null
          paystack_customer_id?: string | null
          paystack_subscription_code?: string | null
          status?:
            | Database["public"]["Enums"]["subscription_status_enum"]
            | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_subscriptions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
          {
            foreignKeyName: "user_subscriptions_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: false
            referencedRelation: "subscription_tiers"
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
      writing_prompts: {
        Row: {
          category: string
          created_at: string | null
          id: string
          is_active: boolean | null
          mood_target: string[]
          prompt_text: string
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          mood_target: string[]
          prompt_text: string
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          mood_target?: string[]
          prompt_text?: string
        }
        Relationships: []
      }
    }
    Views: {
      leaderboard: {
        Row: {
          rank: number | null
          total_points: number | null
          user_id: string | null
          user_name: string | null
        }
        Relationships: []
      }
      payment_history: {
        Row: {
          amount: number | null
          billing_period: string | null
          clerk_user_id: string | null
          created_at: string | null
          currency: string | null
          gateway_response: string | null
          id: string | null
          paid_at: string | null
          payment_provider: string | null
          reference: string | null
          status: Database["public"]["Enums"]["payment_status_enum"] | null
          tier_id: string | null
          tier_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_transactions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "payment_transactions_clerk_user_id_fkey"
            columns: ["clerk_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["clerk_user_id"]
          },
        ]
      }
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
      add_coins_to_user: {
        Args: {
          p_user_id: string
          p_amount: number
          p_source: string
          p_description: string
          p_metadata?: Json
        }
        Returns: boolean
      }
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["app_permission"]
          user_id: string
        }
        Returns: boolean
      }
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      calculate_coin_earning: {
        Args: { p_user_id: string; p_source: string; p_metadata?: Json }
        Returns: number
      }
      calculate_current_streak: {
        Args: { p_user_id: string }
        Returns: number
      }
      can_make_ai_request: {
        Args: { p_clerk_user_id: string; p_usage_date?: string }
        Returns: {
          can_request: boolean
          current_usage: number
          daily_limit: number
          remaining_requests: number
        }[]
      }
      check_daily_login_bonus_eligibility: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      cleanup_expired_typing_indicators: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_old_notification_logs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_old_reminder_analytics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clerk_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
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
      get_coin_analytics: {
        Args: { p_user_id: string }
        Returns: {
          total_earned: number
          total_spent: number
          current_balance: number
          transactions_count: number
        }[]
      }
      get_mood_insights: {
        Args: { p_user_id: string; p_days?: number }
        Returns: Json
      }
      get_or_create_direct_conversation: {
        Args: { user1_id: string; user2_id: string }
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
      get_user_coin_balance: {
        Args: { p_user_id: string }
        Returns: number
      }
      get_user_coin_history: {
        Args: { p_user_id: string; p_limit?: number; p_offset?: number }
        Returns: {
          id: string
          user_id: string
          amount: number
          transaction_type: string
          source: string
          description: string
          metadata: Json
          created_at: string
        }[]
      }
      get_user_coin_transactions: {
        Args: { p_user_id: string; p_limit?: number; p_offset?: number }
        Returns: {
          id: string
          amount: number
          source: string
          description: string
          reference_id: string
          metadata: Json
          created_at: string
        }[]
      }
      get_user_reaction: {
        Args: { post_id_param: string; user_id_param: string }
        Returns: string
      }
      get_user_recommendations: {
        Args: { user_id_input: string }
        Returns: {
          clerk_user_id: string
          full_name: string
          email: string
          avatar_url: string
          similarity_score: number
        }[]
      }
      get_user_streaks: {
        Args: { p_user_id: string }
        Returns: {
          streak_type: string
          current_streak: number
          longest_streak: number
          last_activity_date: string
          streak_start_date: string
          is_active: boolean
        }[]
      }
      get_user_study_groups: {
        Args: { p_user_id: string }
        Returns: {
          id: string
          name: string
          description: string
          created_by: string
          created_at: string
          updated_at: string
          metadata: Json
          conversation_id: string
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
      handle_reaction: {
        Args: {
          post_id_param: string
          user_id_param: string
          reaction_type_param: string
        }
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
      increment_ai_usage: {
        Args: {
          p_clerk_user_id: string
          p_usage_date: string
          p_feature_type: string
          p_increment?: number
        }
        Returns: boolean
      }
      is_streak_active: {
        Args: { p_user_id: string; p_streak_type: string }
        Returns: boolean
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
      mark_daily_completion: {
        Args: {
          p_user_id: string
          p_date?: string
          p_tasks_completed?: number
          p_points_earned?: number
        }
        Returns: Json
      }
      mark_message_as_read: {
        Args: { message_uuid: string; reader_id: string }
        Returns: undefined
      }
      remove_reaction: {
        Args:
          | { post_id_param: string; user_id_param: string }
          | {
              post_id_param: string
              user_id_param: string
              reaction_type_param: string
            }
        Returns: undefined
      }
      remove_vote_from_post: {
        Args: { post_id_param: string; user_id_param: string }
        Returns: undefined
      }
      reset_daily_ai_usage: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      search_users: {
        Args: { search_term: string }
        Returns: {
          clerk_user_id: string
          full_name: string
          email: string
          avatar_url: string
        }[]
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
      spend_user_coins: {
        Args: {
          p_user_id: string
          p_amount: number
          p_source: string
          p_description: string
          p_metadata?: Json
        }
        Returns: boolean
      }
      sync_user_streak_stats: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      track_notification_event: {
        Args: {
          p_notification_id: string
          p_event_type: string
          p_user_agent?: string
          p_additional_data?: Json
        }
        Returns: undefined
      }
      trigger_daily_login_bonus: {
        Args: { p_user_id: string }
        Returns: number
      }
      update_post_reaction_counts: {
        Args: { post_id_param: string }
        Returns: undefined
      }
      update_typing_indicator: {
        Args: { user_uuid: string; conversation_uuid: string; typing: boolean }
        Returns: undefined
      }
      update_user_streak: {
        Args: {
          p_user_id: string
          p_streak_type: string
          p_activity_date?: string
        }
        Returns: Json
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
      vote_on_post: {
        Args: {
          post_id_param: string
          user_id_param: string
          vote_type_param: string
        }
        Returns: undefined
      }
    }
    Enums: {
      app_permission: "channels.delete" | "messages.delete"
      app_role: "admin" | "moderator"
      learning_style_enum:
        | "Visual"
        | "Auditory"
        | "Kinesthetic"
        | "Reading/Writing"
        | "Unspecified"
      payment_status_enum: "pending" | "completed" | "failed" | "cancelled"
      priority_level: "low" | "medium" | "high"
      subscription_status_enum: "active" | "inactive" | "cancelled" | "past_due"
      subscription_tier_enum: "free" | "premium" | "enterprise"
      task_type: "academic" | "personal" | "event"
      tutorial_step_enum:
        | "welcome"
        | "navigation"
        | "task_creation"
        | "ai_suggestions"
        | "social_features"
        | "crashout_room"
        | "achievements"
        | "completion"
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
      app_permission: ["channels.delete", "messages.delete"],
      app_role: ["admin", "moderator"],
      learning_style_enum: [
        "Visual",
        "Auditory",
        "Kinesthetic",
        "Reading/Writing",
        "Unspecified",
      ],
      payment_status_enum: ["pending", "completed", "failed", "cancelled"],
      priority_level: ["low", "medium", "high"],
      subscription_status_enum: ["active", "inactive", "cancelled", "past_due"],
      subscription_tier_enum: ["free", "premium", "enterprise"],
      task_type: ["academic", "personal", "event"],
      tutorial_step_enum: [
        "welcome",
        "navigation",
        "task_creation",
        "ai_suggestions",
        "social_features",
        "crashout_room",
        "achievements",
        "completion",
      ],
    },
  },
} as const
