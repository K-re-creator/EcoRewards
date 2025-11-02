import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, Users, BarChart, CheckCircle2 } from 'lucide-react';

export function PartnersPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Partner with EcoRewards</h1>
            <p className="text-xl opacity-90 mb-8">
              Get foot traffic, brand exposure, and measurable impact. Join 15 local 
              businesses already signed for the pilot.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-white text-[#2ecc71] hover:bg-gray-100"
            >
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Partnership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#2ecc71]" />
                </div>
                <h3 className="mb-3">Increased Foot Traffic</h3>
                <p className="text-gray-600">
                  Attract eco-conscious customers to your location as a verified collection point
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#2ecc71]" />
                </div>
                <h3 className="mb-3">Brand Exposure</h3>
                <p className="text-gray-600">
                  Featured in our app and marketing materials, reaching thousands of users
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#2ecc71]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-[#2ecc71]" />
                </div>
                <h3 className="mb-3">Measurable Impact</h3>
                <p className="text-gray-600">
                  Track your environmental contributions with detailed analytics and reports
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works for Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">How It Works for Partners</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#2ecc71] text-white rounded-full flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">Register as a Partner</h3>
                  <p className="text-gray-600">
                    Complete our simple onboarding form and set up your collection point
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#2ecc71] text-white rounded-full flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">Receive Your QR Code</h3>
                  <p className="text-gray-600">
                    Get a unique QR code for each collection point to track contributions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#2ecc71] text-white rounded-full flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">Verify & Track</h3>
                  <p className="text-gray-600">
                    Use our partner dashboard to verify drop-offs and track monthly impact
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#2ecc71] text-white rounded-full flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2">Grow Your Impact</h3>
                  <p className="text-gray-600">
                    Earn recognition, rewards, and support from the EcoRewards community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">What Partners Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  "EcoRewards made recycling fun for our staff — and cut our waste costs."
                </p>
                <p className="text-sm text-gray-500">— Local shop owner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  "Being a collection point brought new customers and showed our commitment 
                  to sustainability."
                </p>
                <p className="text-sm text-gray-500">— Coffee shop manager</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2ecc71] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Join 15+ Partners in Making a Difference</h2>
          <p className="text-xl opacity-90 mb-8">
            Market: Global waste management market $2.3T by 2030
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-white text-[#2ecc71] hover:bg-gray-100"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
