import { useState } from 'react';
import { useAuth } from '../lib/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Trophy, Medal, Award } from 'lucide-react';
import { seedLeaderboard } from '../lib/seedData';

export function LeaderboardPage() {
  const { user } = useAuth();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return null;
    }
  };

  const LeaderboardTable = ({ data }: { data: typeof seedLeaderboard }) => (
    <div className="space-y-2">
      {data.map((entry, index) => {
        const isCurrentUser = user?.name === entry.name;
        return (
          <Card key={entry.rank} className={isCurrentUser ? 'border-[#2ecc71] border-2' : ''}>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 text-center flex items-center justify-center">
                  {getRankIcon(entry.rank) || (
                    <span className="text-lg text-gray-500">#{entry.rank}</span>
                  )}
                </div>
                <Avatar className="h-12 w-12">
                  <AvatarFallback className={isCurrentUser ? 'bg-[#2ecc71] text-white' : 'bg-gray-200'}>
                    {entry.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="truncate">
                      {entry.name}
                      {isCurrentUser && (
                        <span className="text-[#2ecc71] ml-2">(You)</span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {entry.badge}
                    </Badge>
                    <span className="text-xs text-gray-500">{entry.city}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg">{entry.points.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Leaderboard</h1>
        <p className="text-gray-600">Top eco-warriors in {user?.city} and globally.</p>
      </div>

      <Tabs defaultValue="city" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="city">City</TabsTrigger>
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>

        <TabsContent value="city">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers in {user?.city}</CardTitle>
              <CardDescription>See who's leading the green revolution in your city</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable data={seedLeaderboard} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="global">
          <Card>
            <CardHeader>
              <CardTitle>Global Leaders</CardTitle>
              <CardDescription>Top eco-warriors from around the world</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable data={seedLeaderboard} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friends">
          <Card>
            <CardHeader>
              <CardTitle>Friends Leaderboard</CardTitle>
              <CardDescription>Compete with your friends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <p>Connect with friends to see their rankings</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
