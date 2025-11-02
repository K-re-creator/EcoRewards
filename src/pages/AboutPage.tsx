import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { impactStats } from '../lib/seedData';

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About EcoRewards</h1>
            <p className="text-xl opacity-90">
              Recycle More, Earn More.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              EcoRewards, Recycle More, Earn More. We reward everyday eco-actions to build 
              sustainable habits. We started as a pilot and saw a 70% rise in recycling in 
              3 months.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                <p className="text-gray-600">rise in recycling during pilot</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                EcoRewards was founded with a simple idea: make sustainability rewarding. 
                Millions of recyclable items end up in landfills yearly, not because people 
                don't care, but because there's no immediate incentive to change behavior.
              </p>
              <p className="text-gray-700 mb-4">
                We created EcoRewards to make recycling tangible and rewarding, creating 
                behaviour that scales. Through gamification, instant rewards, and community 
                engagement, we're transforming how people think about their environmental impact.
              </p>
              <p className="text-gray-700 mb-4">
                Brought about by Morgan Mwashi, EcoRewards is more than just an app — it's a 
                movement towards a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2ecc71] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Join the Movement</h2>
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-white text-[#2ecc71] hover:bg-gray-100"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}
