import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export function PricingPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Pricing</h1>
            <p className="text-xl opacity-90">
              Choose the plan that's right for you
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Free</CardTitle>
                  <Badge variant="secondary">Popular</Badge>
                </div>
                <div className="mb-4">
                  <span className="text-4xl">$0</span>
                  <span className="text-gray-600"> / month</span>
                </div>
                <CardDescription>
                  Perfect for individuals getting started with eco-rewards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Log unlimited activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Earn eco points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Access to rewards marketplace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Track your impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Leaderboard access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Community challenges</span>
                  </li>
                </ul>
                <Button
                  onClick={() => navigate('/register')}
                  variant="outline"
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-[#2ecc71] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#2ecc71]">Recommended</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Premium</CardTitle>
                </div>
                <div className="mb-4">
                  <span className="text-4xl">$4.99</span>
                  <span className="text-gray-600"> / month</span>
                </div>
                <CardDescription>
                  For dedicated eco-warriors who want to maximize their impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2ecc71]">Everything in Free, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>20% bonus points on all activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Exclusive premium rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Priority verification (24hrs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Advanced impact analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Premium badge & recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Monthly impact report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                    <span>Early access to new features</span>
                  </li>
                </ul>
                <Button
                  onClick={() => navigate('/register')}
                  className="w-full bg-[#2ecc71] hover:bg-[#27ae60]"
                >
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2">Can I switch plans later?</h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade to Premium or downgrade to Free at any time. 
                    Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2">Do my points carry over if I downgrade?</h3>
                  <p className="text-gray-600">
                    Absolutely. Your earned points are always yours, regardless of your plan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2">Is there a contract or commitment?</h3>
                  <p className="text-gray-600">
                    No contract required. Premium is billed monthly and you can cancel anytime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to start earning rewards?</h2>
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-[#2ecc71] hover:bg-[#27ae60]"
          >
            Join EcoRewards Today
          </Button>
        </div>
      </section>
    </div>
  );
}
