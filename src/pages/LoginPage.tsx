import { useState } from 'react';
import { useRouter } from '../lib/router';
import { useAuth } from '../lib/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Leaf } from 'lucide-react';

export function LoginPage() {
  const { navigate } = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2">Welcome back</h1>
          <p className="text-gray-600">Every small act counts.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#2ecc71] hover:bg-[#27ae60]">
                Login
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-[#2ecc71] hover:underline"
              >
                Forgot password? Reset it here.
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/register')}
                className="text-[#2ecc71] hover:underline"
              >
                Register
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
