import { useState } from 'react';
import { useRouter } from '../lib/router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Switch } from '../components/ui/switch';
import { CheckCircle2, Upload } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AddActivityPage() {
  const { navigate } = useRouter();
  const [activityType, setActivityType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [useLocation, setUseLocation] = useState(false);
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const activityTypes = [
    'Recycling',
    'Tree planting',
    'Clean-up',
    'Donation',
    'Energy saving',
    'Other',
  ];

  const calculatePoints = (type: string, qty: number, hasPhoto: boolean) => {
    let basePoints = 0;
    switch (type) {
      case 'Recycling':
        basePoints = qty * 10;
        break;
      case 'Tree planting':
        basePoints = qty * 200;
        break;
      case 'Clean-up':
        basePoints = qty * 5;
        break;
      case 'Energy saving':
        basePoints = 20;
        break;
      default:
        basePoints = qty * 5;
    }
    
    const photoBonus = hasPhoto ? Math.round(basePoints * 0.1) : 0;
    return { basePoints, photoBonus, total: basePoints + photoBonus };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!activityType) {
      toast.error('Please choose an activity type.');
      return;
    }

    if (!quantity) {
      toast.error('Tell us how much to calculate your points.');
      return;
    }

    const points = calculatePoints(activityType, parseFloat(quantity), !!photo);
    setShowSuccess(true);

    setTimeout(() => {
      toast.success(`You earned ${points.total} points${photo ? `. +${points.photoBonus} bonus for photo.` : '.'}`);
      navigate('/dashboard');
    }, 2000);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Please upload a valid image under 5 MB.');
        return;
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please upload a valid image (JPG or PNG).');
        return;
      }
      setPhoto(file);
    }
  };

  if (showSuccess) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="mb-4">Activity logged, points awarded!</h2>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-2">Log an activity</h1>
          <p className="text-gray-600">
            Choose an activity and add proof to earn points instantly.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Activity Details</CardTitle>
            <CardDescription>
              Fill in the details below to log your eco-action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Activity Type */}
              <div className="space-y-2">
                <Label htmlFor="activityType">Activity Type *</Label>
                <Select value={activityType} onValueChange={setActivityType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an activity" />
                  </SelectTrigger>
                  <SelectContent>
                    {activityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  step="0.1"
                  placeholder="Enter kg, items, or number of trees"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                <p className="text-xs text-gray-500">
                  Enter kg, items, or number of trees
                </p>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo">Evidence (optional)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#2ecc71] transition-colors">
                  <input
                    id="photo"
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm">
                      {photo ? photo.name : 'Upload a photo (earns +10% bonus points)'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">JPG/PNG under 5MB</p>
                  </label>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label>Location</Label>
                <div className="flex items-center space-x-2 mb-2">
                  <Switch
                    id="use-location"
                    checked={useLocation}
                    onCheckedChange={setUseLocation}
                  />
                  <Label htmlFor="use-location" className="cursor-pointer">
                    Use my location
                  </Label>
                </div>
                {!useLocation && (
                  <Input
                    placeholder="Enter address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                )}
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Short note about the action"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>

              {/* Point Calculation Info */}
              {activityType && quantity && (
                <div className="bg-[#2ecc71]/10 border border-[#2ecc71]/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Estimated points:</strong>{' '}
                    {calculatePoints(activityType, parseFloat(quantity) || 0, !!photo).total} points
                    {photo && (
                      <span className="text-[#2ecc71]">
                        {' '}(+{calculatePoints(activityType, parseFloat(quantity) || 0, true).photoBonus} photo bonus)
                      </span>
                    )}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#2ecc71] hover:bg-[#27ae60]"
                >
                  Log Activity
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Point Calculation Reference */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Point Calculation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>• Recycling: 10 points per kg</p>
              <p>• Tree planting: 200 points per tree</p>
              <p>• Clean-up: 5 points per kg collected</p>
              <p>• Energy saving: 20 points per action</p>
              <p className="text-[#2ecc71]">• Photo bonus: +10% points when photo uploaded</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
