import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { userData } = useAppContext();

  // Generate mission based on goal and fitness level
  const getMissionData = () => {
    const missions: Record<string, any> = {
      "Weight Loss": {
        name: "Burner Circuit Quest",
        game: "CalorieBurn",
        duration: 10,
        description: "High-intensity interval training to maximize calorie burn",
      },
      "Muscle Building": {
        name: "Strength Titan Mission",
        game: "ResistanceRush",
        duration: 15,
        description: "Progressive resistance exercises to build muscle mass",
      },
      "Cardio Health": {
        name: "Beginner JumpVerse Quest",
        game: "JumpVerse",
        duration: 5,
        description: "Improve cardio endurance with rhythmic jump patterns",
      },
      "General Wellness": {
        name: "Balance & Flow",
        game: "MindfulMove",
        duration: 7,
        description: "Low-intensity wellness routine for overall health",
      },
    };
    return missions[userData.goal] || missions["General Wellness"];
  };

  const mission = getMissionData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-fitverse-dark mb-2">
              Welcome to FitVerse, Explorer 👋
            </h1>
            <p className="text-gray-600 text-lg">
              {userData.name ? `Ready for your mission, ${userData.name}?` : "Ready for your mission?"}
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-fitverse-pink to-fitverse-orange bg-clip-text text-transparent mb-2">
                {userData.streak}
              </div>
              <p className="text-gray-600">🔥 Streak: {userData.streak} days</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-fitverse-purple to-fitverse-blue bg-clip-text text-transparent mb-2">
                {userData.level}
              </div>
              <p className="text-gray-600">⭐ Level: {userData.level}</p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-fitverse-green to-fitverse-blue bg-clip-text text-transparent mb-2">
                85%
              </div>
              <p className="text-gray-600">🔋 Energy: 85%</p>
            </Card>
          </div>

          {/* Today's Mission Card */}
          <Card className="border-2 border-fitverse-purple mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-fitverse-purple to-fitverse-pink text-white p-6 mb-6 -mx-6 -mt-6">
              <h2 className="text-3xl font-bold">🎯 Today's Mission</h2>
            </div>

            <div className="space-y-6">
              {/* Mission Title */}
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2">MISSION NAME</p>
                <h3 className="text-2xl font-bold text-fitverse-dark">
                  {mission.name}
                </h3>
              </div>

              {/* Mission Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">🎮 GAME</p>
                  <p className="text-lg font-bold text-fitverse-dark">
                    {mission.game}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">⏱️ DURATION</p>
                  <p className="text-lg font-bold text-fitverse-dark">
                    {mission.duration} minutes
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">🎯 GOAL</p>
                  <p className="text-lg font-bold text-fitverse-dark">
                    {userData.goal}
                  </p>
                </div>
              </div>

              {/* AI Reason */}
              <div className="bg-blue-50 border-l-4 border-fitverse-blue p-4 rounded">
                <p className="text-sm font-semibold text-fitverse-blue mb-2">
                  🧠 AI REASON
                </p>
                <p className="text-gray-700">
                  Chosen based on your {userData.goal} goal and{" "}
                  {userData.fitnessLevel} fitness level. This mission adapts
                  perfectly to your available {userData.dailyTime}-minute daily
                  window.
                </p>
              </div>

              {/* Start Button */}
              <div className="pt-4">
                <FitverseButton
                  size="lg"
                  className="w-full"
                  onClick={() => navigate("/wellness-check")}
                >
                  ▶ Start Workout
                </FitverseButton>
              </div>
            </div>
          </Card>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-2 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
