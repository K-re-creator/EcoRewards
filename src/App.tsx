import { AuthProvider, useAuth } from './lib/AuthContext';
import { RouterProvider, useRouter } from './lib/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PrivateNav } from './components/PrivateNav';
import { Toaster } from './components/ui/sonner';

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PartnersPage } from './pages/PartnersPage';
import { PressPage } from './pages/PressPage';
import { PricingPage } from './pages/PricingPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { CareersPage } from './pages/CareersPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

// Private Pages
import { DashboardPage } from './pages/DashboardPage';
import { AddActivityPage } from './pages/AddActivityPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { RewardsPage } from './pages/RewardsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { WalletPage } from './pages/WalletPage';

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const { isAuthenticated } = useAuth();

  // Protected route check
  const protectedRoutes = [
    '/dashboard',
    '/activity/add',
    '/activities',
    '/rewards',
    '/leaderboard',
    '/profile',
    '/wallet',
  ];

  const isProtectedRoute = protectedRoutes.some(route => currentPath.startsWith(route));

  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to login if trying to access protected route
    if (currentPath !== '/login') {
      setTimeout(() => navigate('/login'), 0);
    }
  }

  const renderPage = () => {
    // Public routes
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/partners':
        return <PartnersPage />;
      case '/press':
        return <PressPage />;
      case '/pricing':
        return <PricingPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/contact':
        return <ContactPage />;
      case '/terms':
        return <TermsPage />;
      case '/careers':
        return <CareersPage />;
      case '/login':
        return <LoginPage />;
      case '/register':
        return <RegisterPage />;
      
      // Private routes
      case '/dashboard':
        return isAuthenticated ? <DashboardPage /> : <LoginPage />;
      case '/activity/add':
        return isAuthenticated ? <AddActivityPage /> : <LoginPage />;
      case '/activities':
        return isAuthenticated ? <ActivitiesPage /> : <LoginPage />;
      case '/rewards':
        return isAuthenticated ? <RewardsPage /> : <LoginPage />;
      case '/leaderboard':
        return isAuthenticated ? <LeaderboardPage /> : <LoginPage />;
      case '/profile':
        return isAuthenticated ? <ProfilePage /> : <LoginPage />;
      case '/wallet':
        return isAuthenticated ? <WalletPage /> : <LoginPage />;
      
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {isAuthenticated && <PrivateNav />}
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </AuthProvider>
  );
}
