import DayCream from '../assets/DC.jpeg';
import NightCream from '../assets/NC.jpeg';
import CharcoalSoap1 from '../assets/charcolshop1.png';
import CharcoalSoap2 from '../assets/charcolsoap2.jpeg';
import CharcoalFacialkit from '../assets/Cfacialkit.jpeg';
import DimondFacialkit from '../assets/Dfacialkit.jpeg';
import CompactPowder from '../assets/CompactPowder.jpeg';
import VadhiyaCream from '../assets/VadhiyaCream.jpeg';
import LipBalm from '../assets/Lipbalm.jpg';
import RiceFaceWash from '../assets/RiceFacewash.jpeg';


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
    rating: 0,
    totalReviews: 0,
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
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
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
    originalPrice: 199,
    images: [CharcoalSoap1],
    rating: 0,
    totalReviews: 0,
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
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
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
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
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
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["moisturizer", "organic"]
  },

  {
    id: "7",
    name: "Avocado Compact Powder",
    shortDescription: "Natural glow with pure avocado extracts",
    fullDescription: "Our Avocado Compact Powder provides a natural glow with 100% pure avocado extracts.",
    category: "Skincare",
    gender: "",
    price: 199,
    originalPrice: 219,
    discountPercent: 10,
    images: [CompactPowder],
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["organic", "makeup"]
  },

  {
    id: "8",
    name: "Vadhiya Foot Cream",
    shortDescription: "Intensive care for dry and cracked feet",
    fullDescription: "Our Vadhiya Foot Cream provides intensive care for dry and cracked feet with natural ingredients.",
    category: "Skincare",
    gender: "",
    price: 249,
    originalPrice: 279,
    discountPercent: 10,
    images: [VadhiyaCream],
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["organic", "skincare"]
  },

  {
    id: "9",
    name: "Avocado Lip Balm",
    shortDescription: "Moisturizes and protects lips",
    fullDescription: "A blend of avocado, coconut, and amla oils for healthy, hydrated lips.",
    category: "Skincare",
    gender: "",
    price: 149,
    images: [LipBalm],
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["hair oil", "growth"]
  },

  {
    id: "10",
    name: "Rise Face Wash",
    shortDescription: "Gently cleanses and refreshes the face",
    fullDescription: "A gentle face wash that cleanses and refreshes the skin without stripping its natural oils.",
    category: "Skincare",
    gender: "",
    price: 199,
    originalPrice: 219,
    discountPercent: 5,
    images: [RiceFaceWash],
    rating: 0,
    totalReviews: 0,
    isCombo: false,
    isSpecial: false,
    isNewArrival: true,
    isFeatured: true,
    tags: ["organic", "skincare"]
  }


];

export default products;