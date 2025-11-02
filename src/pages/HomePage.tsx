import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Recycle, TreePine, Sparkles, TrendingUp, Award, Users } from 'lucide-react';
import { impactStats } from '../lib/seedData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Earn rewards for saving the planet</h1>
            <p className="text-xl mb-8 opacity-90">
              Recycle, plant, clean up — log actions, earn points, redeem rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/register')}
                className="bg-white text-[#2ecc71] hover:bg-gray-100"
              >
                Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/how-it-works')}
                className="border-white text-white hover:bg-white/10"
              >
                Track Your Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Value Strip */}
      <section className="border-b bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#2ecc71]" />
              </div>
              <p>Simple actions, real rewards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#2ecc71]" />
              </div>
              <p>Track your impact instantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#2ecc71]" />
              </div>
              <p>Support local partners and causes</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#2ecc71] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>1</span>
                </div>
                <h3 className="mb-2">Log your action</h3>
                <p className="text-gray-600">or scan at a partner point</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#2ecc71] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>2</span>
                </div>
                <h3 className="mb-2">Earn eco points</h3>
                <p className="text-gray-600">based on impact</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#2ecc71] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>3</span>
                </div>
                <h3 className="mb-2">Redeem rewards</h3>
                <p className="text-gray-600">or plant trees in your name</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-16 bg-[#2ecc71] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Impact snapshot</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="mb-2">{impactStats.kgRecycled.toLocaleString()} kg</div>
              <p className="text-white/80">recycled</p>
            </div>
            <div>
              <div className="mb-2">{impactStats.treesPlanted.toLocaleString()} trees</div>
              <p className="text-white/80">planted</p>
            </div>
            <div>
              <div className="mb-2">{impactStats.recyclingRise}%</div>
              <p className="text-white/80">rise in recycling during pilot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-6">Why it matters</h2>
            <p className="text-center text-gray-600">
              Millions of recyclable items end up in landfills yearly. EcoRewards makes
              recycling tangible and rewarding, creating behaviour that scales.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">What people are saying</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-700">
                  "EcoRewards made recycling fun for our staff — and cut our waste costs."
                </p>
                <p className="text-sm text-gray-500">— Local shop owner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4 text-gray-700">
                  "I redeemed my points for a voucher and planted a tree for my family."
                </p>
                <p className="text-sm text-gray-500">— User</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2ecc71] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to make an impact?</h2>
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-white text-[#2ecc71] hover:bg-gray-100"
          >
            Join EcoRewards Today
          </Button>
        </div>
      </section>
    </div>
  );
}
