import { useAuth } from '../lib/AuthContext';
import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Plus, TrendingUp, Leaf, Trophy } from 'lucide-react';
import { seedActivities, seedLeaderboard, userImpactStats } from '../lib/seedData';

export function DashboardPage() {
  const { user } = useAuth();
  const { navigate } = useRouter();

  if (!user) return null;

  const nextLevelPoints = 2000;
  const progressPercent = (user.ecoPoints / nextLevelPoints) * 100;

  const getLevelEmoji = (level: string) => {
    const emojiMap: Record<string, string> = {
      'Seedling': '🌱',
      'Greener': '🌿',
      'Eco Hero': '🌱',
      'Guardian': '🛡️',
    };
    return emojiMap[level] || '🌱';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Strip */}
      <div className="bg-white border rounded-lg p-4 mb-8 flex flex-wrap items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback className="bg-[#2ecc71] text-white">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span>Hi, {user.name}</span>
            <span className="text-gray-400">•</span>
            <span>Eco points: <strong>{user.ecoPoints.toLocaleString()}</strong></span>
            <span className="text-gray-400">•</span>
            <span>Level: {user.level} {getLevelEmoji(user.level)}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Cards */}
        <div className="lg:col-span-2 space-y-6">
          {/* Points & Level Card */}
          <Card>
            <CardHeader>
              <CardTitle>Your Points</CardTitle>
              <CardDescription>{user.ecoPoints.toLocaleString()} points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Next level at {nextLevelPoints.toLocaleString()} pts</span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <Progress value={progressPercent} className="h-2" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Level names:</strong> Seedling (0–199), Greener (200–799), Eco Hero (800–2,499), Guardian (2,500+)
                  </p>
                  <Button
                    onClick={() => navigate('/rewards')}
                    className="bg-[#2ecc71] hover:bg-[#27ae60]"
                  >
                    Redeem rewards
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Feed */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {seedActivities.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No activities yet. Click Add New Activity to start earning points.
                </p>
              ) : (
                <div className="space-y-3">
                  {seedActivities.slice(0, 5).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#2ecc71]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-5 h-5 text-[#2ecc71]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="truncate">{activity.type}</p>
                          <Badge
                            variant={activity.status === 'verified' ? 'default' : 'secondary'}
                            className={activity.status === 'verified' ? 'bg-[#2ecc71]' : ''}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {activity.quantity} {activity.unit} • +{activity.pointsEarned} pts
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => navigate('/activities')}
                    className="w-full"
                  >
                    View all activities
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Stats & Leaderboard */}
        <div className="space-y-6">
          {/* Impact Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Your Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">CO₂ reduced</span>
                    <span>{userImpactStats.co2Reduced} kg</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Trees planted</span>
                    <span>{userImpactStats.treesPlanted}</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Waste recycled</span>
                    <span>{userImpactStats.wasteRecycled} kg</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>Top 5 in {user.city}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {seedLeaderboard.slice(0, 5).map((entry) => (
                  <div key={entry.rank} className="flex items-center gap-3">
                    <span className="w-6 text-center">{entry.rank}</span>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                        {entry.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">{entry.name}</p>
                    </div>
                    <span className="text-sm">{entry.points.toLocaleString()}</span>
                  </div>
                ))}
                <Button
                  variant="outline"
                  onClick={() => navigate('/leaderboard')}
                  className="w-full mt-2"
                >
                  View full leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Area */}
      <div className="mt-8 text-center">
        <Button
          size="lg"
          onClick={() => navigate('/activity/add')}
          className="bg-[#2ecc71] hover:bg-[#27ae60]"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Activity
        </Button>
      </div>
    </div>
  );
}
