import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

type EnergyLevel = "Tired" | "Okay" | "Good" | "Energetic";

export default function WellnessCheckPage() {
  const navigate = useNavigate();
  const { updateUserData } = useAppContext();
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyLevel | null>(null);

  const energyOptions: { emoji: string; level: EnergyLevel; description: string }[] = [
    {
      emoji: "😴",
      level: "Tired",
      description: "Need to rest",
    },
    {
      emoji: "😐",
      level: "Okay",
      description: "Normal energy",
    },
    {
      emoji: "😊",
      level: "Good",
      description: "Feeling great",
    },
    {
      emoji: "🔥",
      level: "Energetic",
      description: "Peak performance",
    },
  ];

  const handleContinue = () => {
    if (selectedEnergy) {
      updateUserData({ energyLevel: selectedEnergy });
    }
    navigate("/game-simulation");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-fitverse-dark mb-6">
              How Are You Feeling Today?
            </h1>
            <p className="text-gray-600 text-lg">
              This helps FitVerse AI optimize your workout intensity
            </p>
          </div>

          {/* Energy Scale */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {energyOptions.map((option) => (
              <button
                key={option.level}
                onClick={() => setSelectedEnergy(option.level)}
                className={`p-6 rounded-2xl transition-all duration-300 transform ${
                  selectedEnergy === option.level
                    ? "bg-gradient-to-br from-fitverse-purple to-fitverse-pink text-white scale-110 shadow-xl"
                    : "bg-white border-2 border-gray-200 hover:border-fitverse-purple hover:scale-105"
                }`}
              >
                <div className="text-5xl mb-3">{option.emoji}</div>
                <p className="font-bold text-lg">{option.level}</p>
                <p className="text-sm opacity-75">{option.description}</p>
              </button>
            ))}
          </div>

          {/* AI Explanation Card */}
          <Card className="border-l-4 border-fitverse-blue bg-blue-50 mb-12">
            <div className="flex gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="font-bold text-fitverse-dark text-lg mb-2">
                  AI Adaptation Explained
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  FitVerse AI adjusts workout intensity based on your energy level:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  <li>• <strong>Tired:</strong> Lower intensity, focus on recovery</li>
                  <li>• <strong>Okay:</strong> Standard intensity mission</li>
                  <li>• <strong>Good:</strong> Increased challenge and reps</li>
                  <li>• <strong>Energetic:</strong> Maximum difficulty and performance</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Continue Button */}
          <div className="text-center">
            <FitverseButton
              size="lg"
              onClick={handleContinue}
              className="mb-4"
            >
              Continue
            </FitverseButton>
            {!selectedEnergy && (
              <p className="text-gray-500 text-sm">Please select your energy level</p>
            )}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
