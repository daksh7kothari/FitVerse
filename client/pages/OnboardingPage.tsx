import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { updateUserData } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    fitnessLevel: "Beginner" as "Beginner" | "Intermediate" | "Advanced",
    dailyTime: 15 as 15 | 30 | 45,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return;
    }
    updateUserData(formData);
    navigate("/goal-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-fitverse-dark mb-6">
              Who Are You?
            </h1>
            <p className="text-gray-600 text-lg">
              Help us personalize your fitness experience
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-2 border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-fitverse-dark mb-4">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-fitverse-coral-dark text-lg"
                />
              </div>

              {/* Fitness Level */}
              <div>
                <label className="block text-sm font-semibold text-fitverse-dark mb-5">
                  Fitness Level
                </label>
                <div className="space-y-4">
                  {(
                    [
                      "Beginner",
                      "Intermediate",
                      "Advanced",
                    ] as const
                  ).map((level) => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="fitnessLevel"
                        value={level}
                        checked={formData.fitnessLevel === level}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fitnessLevel: e.target.value as any,
                          })
                        }
                        className="w-5 h-5 cursor-pointer accent-fitverse-purple"
                      />
                      <span className="text-lg text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Daily Time Available */}
              <div>
                <label className="block text-sm font-semibold text-fitverse-dark mb-4">
                  Daily Time Available
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {([15, 30, 45] as const).map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, dailyTime: time })
                      }
                      className={`py-4 px-4 rounded-lg font-semibold text-center transition-all duration-200 ${
                        formData.dailyTime === time
                          ? "bg-fitverse-purple text-white scale-105"
                          : "bg-gray-100 text-fitverse-dark hover:bg-gray-200"
                      }`}
                    >
                      {time}
                      <br />
                      <span className="text-sm">min</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <FitverseButton size="lg" className="w-full" type="submit">
                  👉 Continue
                </FitverseButton>
              </div>
            </form>
          </Card>

          {/* Progress Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
