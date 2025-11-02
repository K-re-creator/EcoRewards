import { useRouter } from '../lib/router';
import { Leaf } from 'lucide-react';

export function Footer() {
  const { navigate } = useRouter();

  const links = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy', path: '/privacy' },
    { label: 'Terms', path: '/terms' },
    { label: 'Partners', path: '/partners' },
    { label: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2ecc71] rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">EcoRewards</span>
            </div>
            <p className="text-gray-600">
              Recycle More, Earn More. Presented by Morgan Mwashi.
            </p>
          </div>
          <div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-gray-600 hover:text-[#2ecc71] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-sm text-gray-500">
          © 2025 EcoRewards. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
