export const seedUser = {
  name: "Morgan Mwashi",
  email: "morgan@example.com",
  ecoPoints: 1240,
  level: "Eco Hero",
  city: "Nairobi",
  avatarUrl: "",
};

export const seedActivities = [
  {
    id: "1",
    type: "Recycling",
    quantity: 2,
    unit: "kg",
    description: "Recycled plastic bottles",
    pointsEarned: 20,
    status: "verified",
    date: "2025-11-01T10:30:00",
    photoUrl: "",
  },
  {
    id: "2",
    type: "Tree planting",
    quantity: 1,
    unit: "trees",
    description: "Planted a tree in my backyard",
    pointsEarned: 200,
    status: "verified",
    date: "2025-10-28T14:20:00",
    photoUrl: "",
  },
  {
    id: "3",
    type: "Clean-up",
    quantity: 3,
    unit: "kg",
    description: "Beach clean-up weekend",
    pointsEarned: 15,
    status: "verified",
    date: "2025-10-25T09:00:00",
    photoUrl: "",
  },
  {
    id: "4",
    type: "Recycling",
    quantity: 5,
    unit: "kg",
    description: "Cardboard and paper recycling",
    pointsEarned: 50,
    status: "pending",
    date: "2025-11-02T08:15:00",
    photoUrl: "",
  },
];

export const seedRewards = [
  {
    id: "1",
    title: "Eco T-shirt",
    pointsRequired: 100,
    description: "Wear your impact",
    imageUrl: "",
    type: "physical",
    inventory: 45,
  },
  {
    id: "2",
    title: "Tree planted in your name",
    pointsRequired: 250,
    description: "Plant a tree and receive a certificate",
    imageUrl: "",
    type: "donation",
    inventory: null,
  },
  {
    id: "3",
    title: "KSh 1,000 voucher at partner eco-store",
    pointsRequired: 500,
    description: "Redeem at any participating partner store",
    imageUrl: "",
    type: "voucher",
    inventory: 20,
  },
  {
    id: "4",
    title: "Reusable home kit",
    pointsRequired: 1200,
    description: "Includes reusable bags, bottles, and containers",
    imageUrl: "",
    type: "physical",
    inventory: 12,
  },
  {
    id: "5",
    title: "Company-sponsored donation",
    pointsRequired: 2500,
    description: "Donation to local recycling program in your name",
    imageUrl: "",
    type: "donation",
    inventory: null,
  },
];

export const seedLeaderboard = [
  {
    rank: 1,
    name: "Sarah Kimani",
    points: 3420,
    city: "Nairobi",
    badge: "Guardian",
    avatarUrl: "",
  },
  {
    rank: 2,
    name: "James Omondi",
    points: 2890,
    city: "Nairobi",
    badge: "Guardian",
    avatarUrl: "",
  },
  {
    rank: 3,
    name: "Morgan Mwashi",
    points: 1240,
    city: "Nairobi",
    badge: "Eco Hero",
    avatarUrl: "",
  },
  {
    rank: 4,
    name: "Grace Wanjiru",
    points: 1105,
    city: "Nairobi",
    badge: "Eco Hero",
    avatarUrl: "",
  },
  {
    rank: 5,
    name: "David Mutua",
    points: 945,
    city: "Nairobi",
    badge: "Eco Hero",
    avatarUrl: "",
  },
];

export const impactStats = {
  kgRecycled: 10000,
  treesPlanted: 1200,
  recyclingRise: 70,
};

export const userImpactStats = {
  co2Reduced: 34,
  treesPlanted: 12,
  wasteRecycled: 48,
};
