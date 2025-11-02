import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2, Coins, Gift } from 'lucide-react';

export function HowItWorksPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">How It Works</h1>
            <p className="text-xl opacity-90">
              Three simple steps to start earning rewards for your eco-actions
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#2ecc71]/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-[#2ecc71]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-4 py-1 bg-[#2ecc71] text-white rounded-full mb-4">
                  Step 1
                </div>
                <h2 className="mb-4">Log your action, or scan at a partner point</h2>
                <p className="text-gray-600">
                  Record your eco-friendly activities through the app or visit a partner 
                  collection point and scan the QR code. Activities include recycling, 
                  tree planting, clean-ups, and more.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#2ecc71]/10 rounded-full flex items-center justify-center">
                  <Coins className="w-16 h-16 text-[#2ecc71]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-4 py-1 bg-[#2ecc71] text-white rounded-full mb-4">
                  Step 2
                </div>
                <h2 className="mb-4">Earn eco points based on impact</h2>
                <p className="text-gray-600">
                  Each activity earns you points calculated based on environmental impact. 
                  Add a photo for bonus points! Your points accumulate and help you level 
                  up from Seedling to Guardian.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-[#2ecc71]/10 rounded-full flex items-center justify-center">
                  <Gift className="w-16 h-16 text-[#2ecc71]" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="inline-block px-4 py-1 bg-[#2ecc71] text-white rounded-full mb-4">
                  Step 3
                </div>
                <h2 className="mb-4">Redeem rewards or plant trees in your name</h2>
                <p className="text-gray-600">
                  Use your points to redeem eco-friendly products, vouchers, or have trees 
                  planted in your name. Every redemption creates real-world impact while 
                  rewarding your efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">How Points Are Calculated</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span>Recycling</span>
                    <span className="text-[#2ecc71]">10 points per kg</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span>Tree planting</span>
                    <span className="text-[#2ecc71]">200 points per tree</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span>Clean-up</span>
                    <span className="text-[#2ecc71]">5 points per kg collected</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span>Energy saving</span>
                    <span className="text-[#2ecc71]">20 points per action</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Photo bonus</span>
                    <span className="text-[#2ecc71]">+10% extra points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/register')}
              className="bg-[#2ecc71] hover:bg-[#27ae60]"
            >
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/pricing')}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
