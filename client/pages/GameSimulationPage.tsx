import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

export default function GameSimulationPage() {
  const navigate = useNavigate();
  const { userData } = useAppContext();
  const [timeElapsed, setTimeElapsed] = useState("00:00");
  const [jumpsCount, setJumpsCount] = useState(0);
  const [formScore, setFormScore] = useState(85);

  // Simulate timer and stats
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const minutes = Math.floor(Math.random() * 5);
      const seconds = Math.floor(Math.random() * 60);
      setTimeElapsed(
        `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
      setJumpsCount(Math.floor(Math.random() * 80) + 30);
      setFormScore(Math.floor(Math.random() * 20) + 75);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const missionName =
    userData.goal === "Cardio Health" ? "JumpVerse" : "Fitness Mission";

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-fitverse-dark">
              🎮 {missionName} — Cardio Mission
            </h1>
            <p className="text-gray-600 mt-3">In real version, webcam-based jump detection runs here</p>
          </div>

          {/* Game Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left Side - Game Area */}
            <div className="lg:col-span-2">
              <Card className="h-96 bg-gradient-to-br from-red-800 to-red-700 text-white flex flex-col items-center justify-center relative overflow-hidden p-8">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-pink-400 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
                </div>

                <div className="relative z-10 text-center">
                  <div className="text-7xl mb-5">🎮</div>
                  <h2 className="text-3xl font-bold mb-5">Game Simulation Area</h2>
                  <p className="text-lg opacity-90 mb-8 max-w-sm">
                    Webcam-based jump detection in real version
                  </p>
                  <div className="inline-block">
                    <div className="animate-bounce text-4xl">▼</div>
                  </div>
                </div>

                {/* Camera mock indicator */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-black bg-opacity-50 px-4 py-3 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">CAMERA READY</span>
                </div>
              </Card>

              {/* AI Feedback */}
              <Card className="mt-8 bg-green-50 border-l-4 border-green-400 p-8">
                <div className="flex gap-4">
                  <div className="text-4xl">✨</div>
                  <div>
                    <p className="font-bold text-fitverse-dark mb-2">
                      AI Feedback
                    </p>
                    <p className="text-gray-700">
                      Great form! Keep your knees slightly bent. Your rhythm is improving!
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Side - Stats */}
            <div className="space-y-8">
              {/* Timer */}
              <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-8">
                <p className="text-sm font-semibold text-gray-600 mb-3">⏱️ TIME</p>
                <p className="text-5xl font-bold text-blue-600 font-mono">
                  {timeElapsed} / 05:00
                </p>
              </Card>

              {/* Jump Counter */}
              <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 p-8">
                <p className="text-sm font-semibold text-gray-600 mb-3">🎯 JUMPS</p>
                <p className="text-5xl font-bold text-orange-600 font-mono">
                  {jumpsCount}
                </p>
              </Card>

              {/* Form Score */}
              <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-8">
                <p className="text-sm font-semibold text-gray-600 mb-3">
                  ⭐ FORM SCORE
                </p>
                <p className="text-5xl font-bold text-green-600 font-mono">
                  {formScore}%
                </p>
              </Card>

              {/* Mission Info */}
              <Card className="bg-red-50 border-red-200 p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 mb-4">
                    📊 SESSION INFO
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>
                      <span className="font-semibold">Goal:</span>{" "}
                      {userData.goal}
                    </p>
                    <p>
                      <span className="font-semibold">Difficulty:</span>{" "}
                      {userData.fitnessLevel}
                    </p>
                    <p>
                      <span className="font-semibold">Duration:</span> 5 min
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Finish Button */}
          <div className="text-center">
            <FitverseButton
              size="lg"
              className="px-12"
              onClick={() => navigate("/results")}
            >
              Finish Workout
            </FitverseButton>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-coral-dark rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-coral-dark rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-coral-dark rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-coral-dark rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
