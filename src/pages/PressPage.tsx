import { Card, CardContent } from '../components/ui/card';
import { impactStats } from '../lib/seedData';

export function PressPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Press & Media</h1>
            <p className="text-xl opacity-90">
              Latest news and updates from EcoRewards
            </p>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="mb-6">About EcoRewards</h2>
            <p className="text-lg text-gray-700 mb-4">
              EcoRewards, Recycle More, Earn More. We reward everyday eco-actions to build 
              sustainable habits. We started as a pilot and saw a 70% rise in recycling in 
              3 months.
            </p>
            <p className="text-gray-700">
              Presented by Morgan Mwashi, EcoRewards combines rewards, gamification, and data 
              to create scalable behaviour change and revenue opportunities in the global waste 
              management market, projected to reach $2.3T by 2030.
            </p>
          </div>

          {/* Key Stats */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-center mb-8">Key Statistics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2 text-[#2ecc71]">
                    {impactStats.kgRecycled.toLocaleString()}
                  </div>
                  <p className="text-gray-600">kg recycled</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2 text-[#2ecc71]">
                    {impactStats.treesPlanted.toLocaleString()}
                  </div>
                  <p className="text-gray-600">trees planted</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2 text-[#2ecc71]">
                    {impactStats.recyclingRise}%
                  </div>
                  <p className="text-gray-600">rise in recycling</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* News */}
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">Recent News</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">November 2025</div>
                  <h3 className="mb-3">EcoRewards Launches Public Platform</h3>
                  <p className="text-gray-700">
                    Following a successful 3-month pilot program that saw a 70% increase in 
                    recycling rates, EcoRewards officially launches to the public with 15 
                    partner locations across the region.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">October 2025</div>
                  <h3 className="mb-3">1,200 Trees Planted Through Community Efforts</h3>
                  <p className="text-gray-700">
                    EcoRewards community members have collectively redeemed points to plant 
                    over 1,200 trees, demonstrating the platform's ability to drive meaningful 
                    environmental action.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">September 2025</div>
                  <h3 className="mb-3">Pilot Program Shows Promising Results</h3>
                  <p className="text-gray-700">
                    Initial pilot program data reveals significant behavior change, with 
                    participants recycling 70% more than before joining the platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Media Contact</h2>
            <p className="text-gray-700 mb-4">
              For press inquiries, interviews, or additional information, please contact:
            </p>
            <Card>
              <CardContent className="p-6">
                <p className="mb-2">Morgan Mwashi</p>
                <p className="text-gray-600">Founder, EcoRewards</p>
                <p className="text-gray-600">press@ecorewards.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
