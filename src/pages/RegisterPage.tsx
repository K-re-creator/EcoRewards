import { useState } from 'react';
import { useRouter } from '../lib/router';
import { useAuth } from '../lib/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Leaf } from 'lucide-react';

export function RegisterPage() {
  const { navigate } = useRouter();
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('individual');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(name, email, password, accountType);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Create your account</h1>
          <p className="text-gray-600">Let's make the Earth greener together.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Join EcoRewards</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">
                  Use 8+ characters, include letters and numbers.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Account Type</Label>
                <RadioGroup value={accountType} onValueChange={setAccountType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="cursor-pointer">
                      Individual
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="organization" id="organization" />
                    <Label htmlFor="organization" className="cursor-pointer">
                      Organization
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full bg-[#2ecc71] hover:bg-[#27ae60]">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-[#2ecc71] hover:underline"
              >
                Login
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
