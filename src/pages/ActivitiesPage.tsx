import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Leaf, Plus } from 'lucide-react';
import { seedActivities } from '../lib/seedData';

export function ActivitiesPage() {
  const { navigate } = useRouter();

  const verifiedActivities = seedActivities.filter((a) => a.status === 'verified');
  const pendingActivities = seedActivities.filter((a) => a.status === 'pending');

  const ActivityList = ({ activities }: { activities: typeof seedActivities }) => {
    if (activities.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            You haven't logged anything yet. Click Add New Activity to start earning points.
          </p>
          <Button
            onClick={() => navigate('/activity/add')}
            className="bg-[#2ecc71] hover:bg-[#27ae60]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add New Activity
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2ecc71]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-[#2ecc71]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="mb-1">{activity.type}</h3>
                      <p className="text-sm text-gray-600">
                        {activity.quantity} {activity.unit}
                      </p>
                    </div>
                    <Badge
                      variant={activity.status === 'verified' ? 'default' : 'secondary'}
                      className={activity.status === 'verified' ? 'bg-[#2ecc71]' : ''}
                    >
                      {activity.status}
                    </Badge>
                  </div>
                  {activity.description && (
                    <p className="text-sm text-gray-600 mb-2">{activity.description}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#2ecc71]">
                      +{activity.pointsEarned} points
                    </span>
                    <span className="text-gray-500">
                      {new Date(activity.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
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
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="mb-2">Activities</h1>
          <p className="text-gray-600">View all your eco-actions and track your progress</p>
        </div>
        <Button
          onClick={() => navigate('/activity/add')}
          className="bg-[#2ecc71] hover:bg-[#27ae60]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Activity
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All ({seedActivities.length})</TabsTrigger>
          <TabsTrigger value="verified">Verified ({verifiedActivities.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingActivities.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ActivityList activities={seedActivities} />
        </TabsContent>

        <TabsContent value="verified" className="mt-6">
          <ActivityList activities={verifiedActivities} />
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          {pendingActivities.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                Pending activities must be verified by partner or admin within 48–72 hours.
                Points will be added once verified.
              </p>
            </div>
          )}
          <ActivityList activities={pendingActivities} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
