export const menuItems = [
  // Appetizers
  {
    id: "1",
    name: "Vegetable Roti",
    description: "Green color, Many delicious vegetables",
    price: 150,
    image: "/images/foods/vegetable-roti.jpeg",
    category: "appetizers",
    details: {
      sinhala: "එළවලු රොටි",
      prepTime: "10-15 minutes",
      fullDescription:
        "Flaky flatbread stuffed with spiced vegetables and herbs, served with fresh chutney.",
    },
  },
  {
    id: "2",
    name: "Aloo Samosa",
    description: "Samosa Stuffed With Spiced Potato and Peas",
    price: 100,
    image: "/images/foods/samosa.png",
    category: "appetizers",
    details: {
      sinhala: "සමෝසා",
      servingSize: "2-3 people",
      prepTime: "5-10 minutes",
      fullDescription:
        "Fresh seasonal vegetables lightly sautéed with traditional Sri Lankan spices.",
      rating: 4.0,
    },
  },
  {
    id: "3",
    name: "Fish Cutlet",
    description: "Crispy fish cutlets with herbs and spices",
    price: 150,
    image: "/images/foods/fish-cutlet.jpg",
    category: "appetizers",
    details: {
      sinhala: "මාළු කට්ලට්",
      servingSize: "2-3 people",
      prepTime: "10-15 minutes",
      fullDescription:
        "Golden-fried fish cutlets made with fresh fish, herbs, and spices, served with tangy sauce.",
    },
  },
  // Rice Dishes
  {
    id: "4",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice with tender chicken and spices",
    price: 1400,
    image: "/images/foods/chicken-biryani.jpg",
    category: "rice",
    popular: true,
    details: {
      sinhala: "බිරියානි",
      servingSize: "2-3 people",
      prepTime: "20-25 minutes",
      fullDescription:
        "Fragrant basmati rice layered with tender chicken, saffron, and a blend of authentic spices. Cooked to perfection in the traditional dum style.",
      rating: 4.7,
      reviewCount: 89,
    },
  },
  {
    id: "5",
    name: "Yellow Rice & Curry",
    description: "Turmeric rice with choice of 3 curries",
    price: 900,
    image: "/images/foods/yellow-rice-curry.jpg",
    category: "rice",
    details: {
      sinhala: "කහ බත්",
    },
  },
  {
    id: "6",
    name: "Fried Rice",
    description: "Wok-fried rice with vegetables and egg",
    price: 1000,
    image: "/images/foods/fried-rice.jpg",
    category: "rice",
    details: {
      sinhala: "ෆ්‍රයිඩ් රයිස්",
    },
  },

  // Kottu
  {
    id: "7",
    name: "Chicken Kottu",
    description: "Chopped roti with chicken, vegetables, and egg",
    price: 1200,
    image: "/images/foods/chicken-kottu.jpg",
    category: "kottu",
    popular: true,
    details: {
      sinhala: "චිකන් කොත්තු",
      servingSize: "2-3 people",
      prepTime: "15-20 minutes",
      fullDescription:
        "This traditional family recipe has been passed down through generations, featuring fresh coconut milk and aromatic spices sourced from local markets. Our signature Chicken Kottu is prepared on a hot griddle with rhythmic chopping sounds that echo through the restaurant.",
      rating: 4.5,
      reviewCount: 47,
    },
  },
  {
    id: "8",
    name: "Cheese Kottu",
    description: "Vegetable kottu with melted cheese topping",
    price: 1500,
    image: "/images/foods/cheese-kottu.png",
    category: "kottu",
    details: {
      sinhala: "චීස් කොත්තු",
    },
  },
  {
    id: "9",
    name: "Seafood Kottu",
    description: "Mixed seafood kottu with prawns and squid",
    price: 2000,
    image: "/images/foods/seafood-kottu.png",
    category: "kottu",
  },

  // Curries
  {
    id: "10",
    name: "Chicken Curry",
    description: "Traditional chicken curry with coconut milk",
    price: 600,
    image: "/images/foods/chicken-curry.png",
    category: "curries",
    popular: true,
    details: {
      sinhala: "චිකන් කරි",
    },
  },
  {
    id: "11",
    name: "Dhal Curry",
    description: "Lentil curry with coconut and spices",
    price: 400,
    image: "/images/foods/dhal-curry.jpeg",
    category: "curries",
    details: {
      sinhala: "පරිප්පු කරි",
    },
  },
  {
    id: "12",
    name: "Potato Curry",
    description: "Spiced potato curry with curry leaves",
    price: 350,
    image: "/images/foods/potato-curry.jpg",
    category: "curries",
    details: {
      sinhala: "අල කරි",
    },
  },

  // Seafood
  {
    id: "13",
    name: "Deviled Prawns",
    description: "Spicy prawns in tangy sauce with onions",
    price: 2200,
    image: "/images/foods/deviled-prawns.png",
    category: "seafood",
    popular: true,
    details: {
      sinhala: "ඉස්සෝ ඩෙවල්",
    },
  },
  {
    id: "14",
    name: "Fish Ambul Thiyal",
    description: "Traditional fish curry with ground spices",
    price: 1800,
    image: "/images/foods/fish-ambul-thiyal.jpg",
    category: "seafood",
    details: {
      sinhala: "මාලු අඹුල් තියල්",
    },
  },
  {
    id: "15",
    name: "Crab Curry",
    description: "Fresh crab in rich coconut curry",
    price: 2500,
    image: "/images/foods/crab-curry.jpg",
    category: "seafood",
    details: {
      sinhala: "කකුළු කරි",
    },
  },

  // Desserts
  {
    id: "16",
    name: "Watalappam",
    description: "Coconut custard with jaggery and cardamom",
    price: 450,
    image: "/images/foods/watalappam.jpeg",
    category: "desserts",
    popular: true,
    details: {
      sinhala: "වටලප්පම්",
    },
  },
  {
    id: "17",
    name: "Kiri Peni",
    description: "Curd and treacle - traditional favorite",
    price: 400,
    image: "/images/foods/kiri-peni.jpeg",
    category: "desserts",
    details: {
      sinhala: "කිරි පැණි",
    },
  },

  // Drinks
  {
    id: "18",
    name: "King Coconut",
    description: "Fresh natural king coconut water",
    price: 300,
    image: "/images/foods/king-coconut.jpeg",
    category: "drinks",
    popular: true,
    details: {
      sinhala: "තැඹිලි",
    },
  },
  {
    id: "19",
    name: "Wood Apple Juice",
    description: "Refreshing wood apple juice with honey",
    price: 350,
    image: "/images/foods/wood-apple-juice.jpeg",
    category: "drinks",
    details: {
      sinhala: "දිවුල්",
    },
  },
  {
    id: "20",
    name: "Faluda",
    description: "Rose-flavored milk drink with jelly",
    price: 500,
    image: "/images/foods/faluda.jpg",
    category: "drinks",
    details: {
      sinhala: "ෆලුඩා",
    },
  },

  {
    id: "21",
    name: "Egg Hoppers",
    description: "Crispy bowl-shaped pancakes with egg, served with lunu miris",
    price: 400,
    image: "/images/foods/egg-hoppers.jpg",
    category: "appetizers",
    details: {
      sinhala: "බිත්තර ආප්ප",
    },
  },
  {
    id: "22",
    name: "Traditional Rice & Curry",
    description: "Steamed rice with 5 authentic curries and homemade sambol",
    price: 900,
    image: "/images/foods/rice-curry.jpg",
    category: "rice",
    details: {
      sinhala: "රයිස් & කරි",
    },
  }
];

export const categories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "rice", name: "Rice Dishes" },
  { id: "kottu", name: "Kottu" },
  { id: "curries", name: "Curries" },
  { id: "seafood", name: "Seafood" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

// Helper function to get dish by ID
export function getDishById(id) {
  return menuItems.find((item) => item.id === id);
}
