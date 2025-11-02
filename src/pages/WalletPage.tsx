import { useAuth } from '../lib/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';

export function WalletPage() {
  const { user } = useAuth();

  if (!user) return null;

  const transactions = [
    {
      id: '1',
      type: 'earned',
      description: 'Recycled plastic bottles',
      points: 20,
      date: '2025-11-01T10:30:00',
    },
    {
      id: '2',
      type: 'earned',
      description: 'Planted a tree',
      points: 200,
      date: '2025-10-28T14:20:00',
    },
    {
      id: '3',
      type: 'spent',
      description: 'Redeemed: Eco T-shirt',
      points: -100,
      date: '2025-10-26T16:00:00',
    },
    {
      id: '4',
      type: 'earned',
      description: 'Beach clean-up',
      points: 15,
      date: '2025-10-25T09:00:00',
    },
  ];

  const TransactionList = ({ filter }: { filter: 'all' | 'earned' | 'spent' }) => {
    const filtered = filter === 'all' 
      ? transactions 
      : transactions.filter(t => t.type === filter);

    return (
      <div className="space-y-2">
        {filtered.map((transaction) => (
          <Card key={transaction.id}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'earned' 
                    ? 'bg-green-100' 
                    : 'bg-red-100'
                }`}>
                  {transaction.type === 'earned' ? (
                    <ArrowUpCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <ArrowDownCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate">{transaction.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-lg ${
                    transaction.type === 'earned' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {transaction.points > 0 ? '+' : ''}{transaction.points}
                  </p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Wallet</h1>
        <p className="text-gray-600">Track your points history and transactions</p>
      </div>

      {/* Balance Card */}
      <Card className="mb-8 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 mb-1">Current Balance</p>
              <div className="flex items-center gap-2">
                <Wallet className="w-8 h-8" />
                <span className="text-4xl">{user.ecoPoints.toLocaleString()}</span>
              </div>
              <p className="text-white/80 mt-1">points</p>
            </div>
            <div className="text-right">
              <Badge className="bg-white/20 text-white border-white/20 mb-2">
                {user.level}
              </Badge>
              <p className="text-sm text-white/80">760 pts to next level</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Transactions</TabsTrigger>
          <TabsTrigger value="earned">Earned</TabsTrigger>
          <TabsTrigger value="spent">Spent</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>All your points activity</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionList filter="all" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="earned">
          <Card>
            <CardHeader>
              <CardTitle>Points Earned</CardTitle>
              <CardDescription>Points from your eco-activities</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionList filter="earned" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spent">
          <Card>
            <CardHeader>
              <CardTitle>Points Spent</CardTitle>
              <CardDescription>Rewards you've redeemed</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionList filter="spent" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
