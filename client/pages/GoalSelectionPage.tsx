import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

type Goal = "Weight Loss" | "Muscle Building" | "Cardio Health" | "General Wellness";

export default function GoalSelectionPage() {
  const navigate = useNavigate();
  const { updateUserData } = useAppContext();
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const goals: { icon: string; title: Goal; description: string }[] = [
    {
      icon: "🔥",
      title: "Weight Loss",
      description: "Burn calories and shed those extra pounds",
    },
    {
      icon: "💪",
      title: "Muscle Building",
      description: "Build strength and increase muscle mass",
    },
    {
      icon: "❤️",
      title: "Cardio Health",
      description: "Improve heart health and endurance",
    },
    {
      icon: "⚖️",
      title: "General Wellness",
      description: "Maintain overall health and fitness",
    },
  ];

  const handleSubmit = () => {
    if (!selectedGoal) {
      alert("Please select a goal");
      return;
    }
    updateUserData({ goal: selectedGoal });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-fitverse-dark mb-6">
              Choose Your Path
            </h1>
            <p className="text-gray-600 text-lg">
              FitVerse AI will design your missions based on your goal
            </p>
          </div>

          {/* Goal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {goals.map((goal) => (
              <Card
              key={goal.title}
              hoverable
              onClick={() => setSelectedGoal(goal.title)}
              className={`cursor-pointer transition-all duration-300 border-2 p-8 ${
                selectedGoal === goal.title
                  ? "border-fitverse-coral-dark bg-red-50 scale-105 shadow-lg"
                  : "border-gray-200 hover:border-fitverse-coral-dark"
              }`}
            >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{goal.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-fitverse-dark mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                  {selectedGoal === goal.title && (
                    <div className="text-2xl">✓</div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <FitverseButton
              size="lg"
              onClick={handleSubmit}
              disabled={!selectedGoal}
              className={!selectedGoal ? "opacity-50 cursor-not-allowed" : ""}
            >
              👉 Generate My Mission
            </FitverseButton>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
