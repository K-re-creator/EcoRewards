import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function CareersPage() {
  const { navigate } = useRouter();

  const openings = [
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Remote',
      description: 'Help build the future of sustainable technology.',
    },
    {
      title: 'Partnership Manager',
      type: 'Full-time',
      location: 'Nairobi, Kenya',
      description: 'Grow our network of eco-friendly partners and collection points.',
    },
    {
      title: 'Marketing Specialist',
      type: 'Contract',
      location: 'Remote',
      description: 'Spread the word about EcoRewards and drive user growth.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2ecc71] to-[#27ae60] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90">
              Help us build a more sustainable future, one action at a time
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">Why EcoRewards?</h2>
            <p className="text-lg text-gray-700">
              We're on a mission to make sustainability rewarding and accessible to everyone. 
              Join a passionate team working at the intersection of technology and environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="mb-3">Make an Impact</h3>
                <p className="text-gray-600">
                  Your work directly contributes to environmental conservation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="mb-3">Grow with Us</h3>
                <p className="text-gray-600">
                  Early-stage startup with huge growth potential
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="mb-3">Flexible Work</h3>
                <p className="text-gray-600">
                  Remote-friendly with flexible schedules
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="mb-2">{job.title}</CardTitle>
                        <CardDescription>{job.description}</CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.location}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => navigate('/contact')}
                      className="bg-[#2ecc71] hover:bg-[#27ae60]"
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Don't see a position that fits? We're always looking for talented people.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
              >
                Send Us Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
