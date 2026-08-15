export const student = {
  name: "Aisha Kaur",
  grade: "Class 9 · Section B",
  school: "Govt. Sr. Sec. School, Patiala",
  level: 7,
  title: "Waste Whisperer",
  xp: 2140,
  xpToNext: 2500,
  streak: 12,
  totalPoints: 2140,
  co2Kg: 38.4,
  wasteKg: 61,
  waterL: 240,
  treesLogged: 4,
};

export const badges = [
  { id: "b1", name: "Water Warrior", icon: "droplets", earned: true },
  { id: "b2", name: "Waste Whisperer", icon: "recycle", earned: true },
  { id: "b3", name: "Sapling Starter", icon: "sprout", earned: true },
  { id: "b4", name: "Energy Sentinel", icon: "zap", earned: false },
  { id: "b5", name: "Plastic-Free 7", icon: "shield", earned: true },
  { id: "b6", name: "Eco Olympian", icon: "trophy", earned: false },
];

export const quests = [
  {
    id: "q1",
    title: "Segregate & log 3 days of home waste",
    category: "Waste",
    points: 120,
    difficulty: "Easy",
    window: "Due in 2 days",
    description:
      "Sort wet, dry and reject waste at home for three consecutive days. Upload one photo per day showing the sorted bins.",
    icon: "recycle",
  },
  {
    id: "q2",
    title: "Plant & geo-tag a sapling",
    category: "Plantation",
    points: 200,
    difficulty: "Medium",
    window: "Due in 5 days",
    description:
      "Plant a native sapling on campus or at home. Submit a geo-tagged photo — your pin joins the school's green cover map.",
    icon: "sprout",
  },
  {
    id: "q3",
    title: "Run a 5-minute water leak audit",
    category: "Water",
    points: 90,
    difficulty: "Easy",
    window: "Due today",
    description:
      "Check taps, tanks and pipes at home or school for leaks. Log what you find and report it to the eco-club coordinator.",
    icon: "droplets",
  },
  {
    id: "q4",
    title: "Host a 10-minute class quiz on Mission LiFE",
    category: "Awareness",
    points: 150,
    difficulty: "Medium",
    window: "Due in 4 days",
    description:
      "Run the built-in quiz deck for your class and submit the participation photo. Boosts the whole class's streak.",
    icon: "sparkles",
  },
];

export const pendingVerifications = [
  {
    id: "v1",
    student: "Rohan Mehta",
    grade: "Class 10-A",
    quest: "Plant & geo-tag a sapling",
    submittedAgo: "18 min ago",
    points: 200,
    thumbnailTone: "canopy",
  },
  {
    id: "v2",
    student: "Simran Kaur",
    grade: "Class 8-C",
    quest: "Segregate & log 3 days of home waste",
    submittedAgo: "42 min ago",
    points: 120,
    thumbnailTone: "amber",
  },
  {
    id: "v3",
    student: "Aarav Sharma",
    grade: "Class 9-B",
    quest: "Run a 5-minute water leak audit",
    submittedAgo: "1 hr ago",
    points: 90,
    thumbnailTone: "sky",
  },
  {
    id: "v4",
    student: "Priya Nair",
    grade: "Class 10-A",
    quest: "Host a 10-minute class quiz on Mission LiFE",
    submittedAgo: "2 hr ago",
    points: 150,
    thumbnailTone: "soil",
  },
];

export const schoolLeaderboard = [
  { rank: 1, name: "Govt. Model Sr. Sec. School, Ludhiana", points: 48210, delta: "up" },
  { rank: 2, name: "Govt. Sr. Sec. School, Patiala", points: 45870, delta: "same", isYou: true },
  { rank: 3, name: "SKV Public School, Amritsar", points: 41120, delta: "down" },
  { rank: 4, name: "Govt. Girls School, Bathinda", points: 38990, delta: "up" },
  { rank: 5, name: "DAV Sr. Sec. School, Jalandhar", points: 36540, delta: "same" },
];

export const classLeaderboard = [
  { rank: 1, name: "Simran Kaur", grade: "8-C", points: 3120, delta: "up" },
  { rank: 2, name: "Aisha Kaur", grade: "9-B", points: 2140, delta: "up", isYou: true },
  { rank: 3, name: "Rohan Mehta", grade: "10-A", points: 2080, delta: "same" },
  { rank: 4, name: "Priya Nair", grade: "10-A", points: 1950, delta: "down" },
  { rank: 5, name: "Aarav Sharma", grade: "9-B", points: 1870, delta: "up" },
];

export const impactTotals = {
  schools: 42,
  students: 18640,
  co2Kg: 96400,
  wasteKg: 154200,
  waterL: 612000,
  saplings: 7360,
};

export const impactBySchool = [
  { name: "Ludhiana", co2: 21400, waste: 33200, saplings: 1620 },
  { name: "Patiala", co2: 18300, waste: 28900, saplings: 1340 },
  { name: "Amritsar", co2: 15900, waste: 24100, saplings: 1180 },
  { name: "Bathinda", co2: 12200, waste: 19800, saplings: 960 },
  { name: "Jalandhar", co2: 10600, waste: 17400, saplings: 820 },
];

export const weeklyTrend = [40, 52, 48, 61, 58, 70, 82];
