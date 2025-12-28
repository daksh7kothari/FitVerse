import React, { createContext, useState, ReactNode } from "react";

export interface WorkoutRecord {
  id: string;
  date: string;
  duration: number;
  calories: number;
  formScore: number;
  missionName: string;
  goal: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedDate?: string;
}

export interface WeeklyStat {
  date: string;
  totalCalories: number;
  totalMissions: number;
  avgFormScore: number;
}

export interface UserData {
  name: string;
  fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
  dailyTime: 15 | 30 | 45;
  goal:
    | "Weight Loss"
    | "Muscle Building"
    | "Cardio Health"
    | "General Wellness";
  energyLevel?: "Tired" | "Okay" | "Good" | "Energetic";
  streak: number;
  level: number;
  totalXP: number;
  workoutHistory: WorkoutRecord[];
  achievements: Achievement[];
  weeklyStats: WeeklyStat[];
}

interface AppContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

// Default achievements
const DEFAULT_ACHIEVEMENTS: Achievement[] = [
  {
    id: "first-steps",
    name: "First Steps",
    description: "Complete your first mission",
    icon: "👣",
  },
  {
    id: "week-warrior",
    name: "Week Warrior",
    description: "Complete 7 missions in a week",
    icon: "⚔️",
  },
  {
    id: "consistency-king",
    name: "Consistency King",
    description: "Maintain a 7-day streak",
    icon: "👑",
  },
  {
    id: "perfect-form",
    name: "Perfect Form",
    description: "Achieve 95% form score",
    icon: "💎",
  },
  {
    id: "calorie-crusher",
    name: "Calorie Crusher",
    description: "Burn 500 calories total",
    icon: "🔥",
  },
];

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    fitnessLevel: "Beginner",
    dailyTime: 15,
    goal: "General Wellness",
    streak: 0,
    level: 1,
    totalXP: 0,
    workoutHistory: [],
    achievements: DEFAULT_ACHIEVEMENTS,
    weeklyStats: [],
  });

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <AppContext.Provider value={{ userData, updateUserData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
}
