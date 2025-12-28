import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();

  // Only show header on non-landing pages
  const showHeader = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-fitverse-light">
      {showHeader && (
        <header className="bg-gradient-to-r from-fitverse-purple to-fitverse-pink text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">✨ FitVerse</h1>
              <p className="text-sm opacity-90">Your AI-Powered Fitness Journey</p>
            </div>
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
