import React, { createContext, useState, ReactNode } from "react";

export interface UserData {
  name: string;
  fitnessLevel: "Beginner" | "Intermediate" | "Advanced";
  dailyTime: 15 | 30 | 45;
  goal: "Weight Loss" | "Muscle Building" | "Cardio Health" | "General Wellness";
  energyLevel?: "Tired" | "Okay" | "Good" | "Energetic";
  streak: number;
  level: number;
  totalXP: number;
}

interface AppContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    fitnessLevel: "Beginner",
    dailyTime: 15,
    goal: "General Wellness",
    streak: 0,
    level: 1,
    totalXP: 0,
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
