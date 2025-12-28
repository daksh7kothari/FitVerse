import { useNavigate } from "react-router-dom";
import FitverseButton from "@/components/common/FitversButton";
import Card from "@/components/common/Card";

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "🎮",
      title: "Game-Based Workouts",
      description: "Turn fitness into an engaging game experience",
    },
    {
      icon: "🧠",
      title: "AI-Personalized Routines",
      description: "Workouts tailored to your goals and level",
    },
    {
      icon: "🔋",
      title: "Fatigue-Aware Training",
      description: "AI adapts intensity based on your energy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitverse-light via-white to-fitverse-light">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fitverse-purple to-fitverse-pink bg-clip-text text-transparent mb-6 animate-fade-in">
            FitVerse
          </h1>
          <p className="text-xl md:text-2xl font-bold text-fitverse-dark mb-4">
            Your AI-Powered Fitness Universe
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            Traditional wellness programs fail because they are boring and one-size-fits-all.
            <br />
            <span className="font-semibold text-fitverse-purple">
              FitVerse turns fitness into a personalized game powered by AI.
            </span>
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-fitverse-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-fitverse-dark mb-8">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Start your personalized fitness journey today. Our AI will create custom missions just for you.
          </p>
          <FitverseButton
            size="lg"
            onClick={() => navigate("/onboarding")}
            className="animate-slide-up"
          >
            👉 Start Your Fitness Journey
          </FitverseButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-fitverse-purple to-fitverse-pink text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 FitVerse. Built for Hackathon with ❤️ by Builder.io
          </p>
        </div>
      </footer>
    </div>
  );
}
