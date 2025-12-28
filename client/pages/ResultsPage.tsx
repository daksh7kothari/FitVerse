import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";
import { useAppContext } from "@/context/AppContext";

export default function ResultsPage() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useAppContext();

  // Award XP and update streak on page load
  const handleViewProgress = () => {
    // Update with completed mission data
    updateUserData({
      streak: userData.streak + 1,
      totalXP: userData.totalXP + 50,
      level: Math.floor((userData.totalXP + 50) / 200) + 1,
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light to-white pt-12 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Celebration Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="text-9xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold text-fitverse-dark mb-6">
              Mission Complete!
            </h1>
            <p className="text-xl text-gray-600">
              Amazing work! You crushed your workout today.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Total Jumps
              </p>
              <p className="text-4xl font-bold text-fitverse-orange">143</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Duration
              </p>
              <p className="text-4xl font-bold text-fitverse-blue">5 min</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Calories Burned
              </p>
              <p className="text-4xl font-bold text-fitverse-green">~45</p>
              <p className="text-xs text-gray-600 mt-1">kcal</p>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100">
              <p className="text-sm font-semibold text-gray-600 mb-2">
                Form Accuracy
              </p>
              <p className="text-4xl font-bold text-fitverse-purple">87%</p>
            </Card>
          </div>

          {/* Rewards Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-fitverse-dark mb-6">
              🏆 Rewards Earned
            </h2>
            <div className="space-y-4">
              <Card className="border-l-4 border-fitverse-purple bg-purple-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-fitverse-dark">⭐ XP Earned</p>
                    <p className="text-gray-600 text-sm">
                      Keep the momentum going!
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-fitverse-purple">+50</p>
                </div>
              </Card>

              <Card className="border-l-4 border-fitverse-pink bg-pink-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-fitverse-dark">🔥 Streak Started</p>
                    <p className="text-gray-600 text-sm">Day 1 of your journey</p>
                  </div>
                  <p className="text-3xl font-bold text-fitverse-pink">Day 1</p>
                </div>
              </Card>

              <Card className="border-l-4 border-fitverse-orange bg-orange-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-fitverse-dark">🏅 Achievement Unlocked</p>
                    <p className="text-gray-600 text-sm">
                      First Steps - Complete your first mission
                    </p>
                  </div>
                  <p className="text-2xl">🌟</p>
                </div>
              </Card>
            </div>
          </div>

          {/* AI Insight */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-fitverse-blue mb-12">
            <div className="flex gap-4">
              <div className="text-4xl">🧠</div>
              <div>
                <h3 className="font-bold text-fitverse-dark text-lg mb-2">
                  AI Insight for Tomorrow
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your performance shows good endurance and excellent form
                  consistency. Tomorrow's mission will slightly increase
                  difficulty to keep challenging your cardiovascular system while
                  maintaining your enthusiasm. You're on track for great results!
                </p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <FitverseButton
              variant="outline"
              size="lg"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </FitverseButton>
            <FitverseButton
              size="lg"
              onClick={handleViewProgress}
            >
              View Progress
            </FitverseButton>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
            <div className="h-2 w-8 bg-fitverse-purple rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
