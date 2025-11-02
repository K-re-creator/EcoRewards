import { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Gift, Sparkles } from 'lucide-react';
import { seedRewards } from '../lib/seedData';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function RewardsPage() {
  const { user } = useAuth();
  const [selectedReward, setSelectedReward] = useState<typeof seedRewards[0] | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  if (!user) return null;

  const handleRedeem = (reward: typeof seedRewards[0]) => {
    if (user.ecoPoints < reward.pointsRequired) {
      toast.error(`You need ${reward.pointsRequired - user.ecoPoints} more points to redeem this reward.`);
      return;
    }
    setSelectedReward(reward);
    setShowConfirmDialog(true);
  };

  const confirmRedeem = () => {
    if (selectedReward) {
      toast.success(`Success: Redeemed! We sent your voucher to ${user.email}. Thank you.`);
      setShowConfirmDialog(false);
      setSelectedReward(null);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'physical':
        return 'bg-blue-100 text-blue-800';
      case 'voucher':
        return 'bg-green-100 text-green-800';
      case 'donation':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Rewards marketplace</h1>
        <p className="text-gray-600">
          Redeem points for items, discounts, or plant trees in your name.
        </p>
      </div>

      {/* User Points Banner */}
      <Card className="mb-8 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 mb-1">Your Points</p>
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                <span className="text-3xl">{user.ecoPoints.toLocaleString()}</span>
              </div>
            </div>
            <Gift className="w-12 h-12 text-white/20" />
          </div>
        </CardContent>
      </Card>

      {/* Rewards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seedRewards.map((reward) => {
          const canAfford = user.ecoPoints >= reward.pointsRequired;
          const progressPercent = Math.min((user.ecoPoints / reward.pointsRequired) * 100, 100);

          return (
            <Card key={reward.id} className={!canAfford ? 'opacity-75' : ''}>
              <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                <ImageWithFallback
                  src={reward.imageUrl || `https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop`}
                  alt={reward.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg">{reward.title}</CardTitle>
                  <Badge className={getTypeColor(reward.type)}>
                    {reward.type}
                  </Badge>
                </div>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-lg">{reward.pointsRequired.toLocaleString()} pts</span>
                      {!canAfford && (
                        <span className="text-red-600">
                          {(reward.pointsRequired - user.ecoPoints).toLocaleString()} pts away
                        </span>
                      )}
                    </div>
                    <Progress value={progressPercent} className="h-2" />
                  </div>

                  {reward.inventory !== null && (
                    <p className="text-xs text-gray-500">
                      {reward.inventory} available
                    </p>
                  )}

                  <Button
                    onClick={() => handleRedeem(reward)}
                    disabled={!canAfford}
                    className={canAfford ? 'w-full bg-[#2ecc71] hover:bg-[#27ae60]' : 'w-full'}
                  >
                    {canAfford ? 'Redeem' : 'Not enough points'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Confirm Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Redemption</DialogTitle>
            <DialogDescription>
              Redeem {selectedReward?.title} for {selectedReward?.pointsRequired.toLocaleString()} points?
              This will deduct from your balance.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmRedeem} className="bg-[#2ecc71] hover:bg-[#27ae60]">
              Confirm Redemption
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
