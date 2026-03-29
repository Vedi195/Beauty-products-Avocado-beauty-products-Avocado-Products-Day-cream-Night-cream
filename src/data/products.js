import DayCream from '../assets/DC.jpeg';
import NightCream from '../assets/NC.jpeg';
import CharcoalSoap1 from '../assets/charcolshop1.png';
import CharcoalSoap2 from '../assets/charcolsoap2.png';
import CharcoalFacialkit from '../assets/Cfacialkit.jpeg';
import DimondFacialkit from '../assets/Dfacialkit.jpeg';
import CompactPowder from '../assets/CompactPowder.png';
import VadhiyaCream from '../assets/VadhiyaCream.jpeg';
import LipBalm from '../assets/Lipbalm.jpg';
import RiceFaceWash from '../assets/RiceFacewash.png';
import CoffeeSoap from "../assets/coffeesoap.png";
import Daycream_Nightcream from "../assets/daynightcombo.png";
import AvocadoCombo from "../assets/avocadocombo.png";

const products = [
  {
    id: "1",
    name: "Avocado Day Cream",
    shortDescription: "Deep hydration with pure avocado extracts",
    fullDescription: "Our signature Avocado Day Cream delivers intense hydration with 100% pure avocado oil.",
    category: "Skincare",
    gender: "",
    price: 499,
    originalPrice: 599,
    discountPercent: 10,
    images: [DayCream],
    rating: 4.9,
    ratingCount: 194,
    isCombo: false,
    isSpecial: true,
    isNewArrival: false,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
  },

  {
    id: "2",
    name: "Avocado Night Cream",
    shortDescription: "Deep hydration with pure avocado extracts",
    fullDescription: "Our signature Avocado Night Cream delivers intense hydration with 100% pure avocado oil.",
    category: "Skincare",
    gender: "",
    price: 489,
    originalPrice: 543,
    discountPercent: 10,
    images: [NightCream],
    rating: 4.5,
    ratingCount: 190,
    isCombo: false,
    isSpecial: true,
    isNewArrival: false,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
  },

  {
    id: "3",
    name: "Avocado Charcoal Soap",
    shortDescription: "Deep cleansing with natural charcoal",
    fullDescription: "Our Avocado Charcoal Soap provides deep cleansing while nourishing your skin.",
    category: "Skincare",
    gender: "",
    price: 149,
    originalPrice: 140,
    images: [CharcoalSoap1],
    rating: 4,
    ratingCount: 140,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
  },

  {
    id: "4",
    name: "Avocado Charcoal Soap",
    shortDescription: "Deep cleansing with natural charcoal",
    fullDescription: "Our Avocado Charcoal Soap provides deep cleansing while nourishing your skin.",
    category: "Skincare",
    gender: "",
    price: 149,
    originalPrice: 199,
    images: [CharcoalSoap2],
    rating: 4.1,
    ratingCount: 120,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["soap", "organic"]
  },

  {
    id: "5",
    name: "Avocado Charcoal Facial Kit",
    shortDescription: "Complete skincare solution with natural charcoal",
    fullDescription: "Our Avocado Charcoal Facial Kit provides a complete skincare routine with natural charcoal.",
    category: "Skincare",
    gender: "",
    price: 499,
    originalPrice: 629,
    discountPercent: 20,
    images: [CharcoalFacialkit],
    rating: 4.2,
    ratingCount: 136,
    isCombo: false,
    isSpecial: false,
    isNewArrival: false,
    isFeatured: true,
    tags: ["facial kit", "organic"]
  },

  {
    id: "6",
    name: "Avocado Dimond Facial Kit",
    shortDescription: "Luxurious skincare solution with natural diamonds",
    fullDescription: "Our Avocado Dimond Facial Kit provides a luxurious skincare routine with natural diamonds.",
    category: "Skincare",
    gender: "",
    price: 549,
    originalPrice: 689,
    discountPercent: 20,
    images: [DimondFacialkit],
    rating: 4.7,
    ratingCount: 151,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["facial kit", "organic"]
  },

  {
    id: "7",
    name: "Green Tea Compact Powder",
    shortDescription: "Natural glow with pure avocado extracts",
    fullDescription: "Our Green Tea Compact Powder provides a natural glow with 100% pure green tea extracts.",
    category: "Skincare",
    gender: "",
    price: 199,
    images: [CompactPowder],
    rating: 4.3,
    ratingCount: 128,
    isCombo: true,
    isSpecial: false,
    isNewArrival: false,
    isFeatured: true,
    tags: ["organic", "makeup"]
  },

  {
    id: "8",
    name: "Coffee Soap",
    shortDescription: "Intensive care for dry and cracked feet",
    fullDescription: "Our Coffee Soap provides intensive care for dry and cracked feet with natural ingredients.",
    category: "Skincare",
    gender: "",
    price: 149,
    images: [CoffeeSoap],
    rating: 4,
    ratingCount: 132,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["soap", "organic"]
  },

  {
    id: "9",
    name: "Vadhiya Foot Cream",
    shortDescription: "Intensive care for dry and cracked feet",
    fullDescription: "Our Vadhiya Foot Cream provides intensive care for dry and cracked feet with natural ingredients.",
    category: "Skincare",
    gender: "",
    price: 249,
    originalPrice: 279,
    discountPercent: 10,
    images: [VadhiyaCream],
    rating: 4.1,
    ratingCount: 112,
    isCombo: false,
    isSpecial: false,
    isNewArrival: false,
    isFeatured: true,
    tags: ["organic", "skincare"]
  },

  {
    id: "10",
    name: "Avocado Lip Balm",
    shortDescription: "Moisturizes and protects lips",
    fullDescription: "A blend of avocado, coconut, and amla oils for healthy, hydrated lips.",
    category: "Skincare",
    gender: "",
    price: 149,
    images: [LipBalm],
    rating: 4.6,
    ratingCount: 104,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["makeup", "organic"]
  },

  {
    id: "11",
    name: "Rise Face Wash",
    shortDescription: "Gently cleanses and refreshes the face",
    fullDescription: "A gentle face wash that cleanses and refreshes the skin without stripping its natural oils.",
    category: "Skincare",
    gender: "",
    price: 199,
    originalPrice: 219,
    discountPercent: 5,
    images: [RiceFaceWash],
    rating: 4.3,
    ratingCount: 164,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["organic", "skincare"]
  },

  // Add combo products here if needed
  {
    id: "12",
    name : "Avocado Day & Night Cream Combo",
    shortDescription: "Day Cream + Night Cream combo for complete skincare",
    fullDescription: "Our Avocado Day & Night Cream Combo provides complete skincare with our signature day and night creams.",
    category: "Skincare",
    gender: "",
    price: 999,
    originalPrice: 1198,
    discountPercent: 20,
    images: [Daycream_Nightcream],
    rating: 4.5,
    ratingCount: 182,
    isCombo: true,
    isSpecial: true,
    isNewArrival: false,
    isFeatured: true,
    tags: ["organic", "skincare"]
  },
  
  {
    id: "13",
    name: "Avocado Cream Combo",
    shortDescription: "Buy 2 Day Creams and get 1 Night Cream free",
    fullDescription: "Our signature combo of 2 Day Creams and 1 Night Cream delivers intense hydration with 100% pure avocado oil.",
    category: "Skincare",
    gender: "",
    price: 1100,
    originalPrice: 1300,
    discountPercent: 15,
    images: [AvocadoCombo],
    rating: 4.8,
    ratingCount: 191,
    isCombo: true,
    isSpecial: true,
    isNewArrival: false,
    isFeatured: true,
    tags: ["organic", "skincare"]
  }

];

export default products;