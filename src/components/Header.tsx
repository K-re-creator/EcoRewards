import { useAuth } from '../lib/AuthContext';
import { useRouter } from '../lib/router';
import { Button } from './ui/button';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { isAuthenticated, logout } = useAuth();
  const { navigate, currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const publicLinks = [
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Partners', path: '/partners' },
    { label: 'Press', path: '/press' },
    { label: 'Pricing', path: '/pricing' },
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/')}
            className="flex items-center gap-2 hover:opacity-80"
          >
            <div className="w-8 h-8 bg-[#2ecc71] rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl">EcoRewards</span>
          </button>

          {/* Desktop Navigation */}
          {!isAuthenticated && (
            <nav className="hidden md:flex items-center gap-6">
              {publicLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`hover:text-[#2ecc71] transition-colors ${
                    currentPath === link.path ? 'text-[#2ecc71]' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button onClick={() => navigate('/register')} className="bg-[#2ecc71] hover:bg-[#27ae60]">
                  Join Now
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            {!isAuthenticated && (
              <nav className="flex flex-col gap-3 mb-4">
                {publicLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className="text-left hover:text-[#2ecc71] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            )}
            <div className="flex flex-col gap-2">
              {!isAuthenticated ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/register');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#2ecc71] hover:bg-[#27ae60]"
                  >
                    Join Now
                  </Button>
                </>
              ) : (
                <Button variant="outline" onClick={handleLogout} className="w-full">
                  Logout
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
