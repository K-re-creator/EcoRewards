import { useRouter } from '../lib/router';
import { LayoutDashboard, Activity, Gift, Trophy, User, Wallet } from 'lucide-react';

export function PrivateNav() {
  const { navigate, currentPath } = useRouter();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Activity, label: 'Activities', path: '/activities' },
    { icon: Gift, label: 'Rewards', path: '/rewards' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
  ];

  return (
    <nav className="border-b bg-white sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? 'border-[#2ecc71] text-[#2ecc71]'
                    : 'border-transparent hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
