// Contact information - Replace with actual numbers
export const SELLER_PHONE = '+917096287029';
export const SELLER_WHATSAPP = '917096287029';

// Format price with Indian Rupee symbol
export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

// Generate WhatsApp message link
export const getWhatsAppLink = (productName = null) => {
  const baseUrl = `https://wa.me/${SELLER_WHATSAPP}`;
  if (productName) {
    const message = encodeURIComponent(
      `Hi! I'm interested in buying "${productName}". Can you help me with the details?`
    );
    return `${baseUrl}?text=${message}`;
  }
  const defaultMessage = encodeURIComponent('Hi! I want to order a product.');
  return `${baseUrl}?text=${defaultMessage}`;
};

// Generate phone call link
export const getCallLink = () => {
  return `tel:${SELLER_PHONE}`;
};

// Generate star rating display
export const getStarDisplay = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return {
    full: fullStars,
    half: hasHalfStar ? 1 : 0,
    empty: emptyStars
  };
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, currentPrice) => {
  if (!originalPrice || originalPrice <= currentPrice) return 0;
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};

// Filter products based on criteria
export const filterProducts = (products, filters) => {
  return products.filter((product) => {
    // Category filter
    if (filters.category && filters.category !== 'All' && product.category !== filters.category) {
      return false;
    }

    // Gender filter
    if (filters.gender && filters.gender !== 'All' && product.gender !== filters.gender) {
      return false;
    }

    // Price range filter
    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false;
    }

    // Combo filter
    if (filters.comboOnly && !product.isCombo) {
      return false;
    }

    // Discount filter
    if (filters.discountOnly && product.discountPercent <= 0) {
      return false;
    }

    // Special filter
    if (filters.specialOnly && !product.isSpecial) {
      return false;
    }

    // New arrival filter
    if (filters.newArrivalsOnly && !product.isNewArrival) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(searchLower);
      const matchesDescription = product.shortDescription.toLowerCase().includes(searchLower);
      const matchesTags = product.tags.some((tag) => tag.toLowerCase().includes(searchLower));
      if (!matchesName && !matchesDescription && !matchesTags) {
        return false;
      }
    }

    return true;
  });
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'newest':
      return sorted.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
    case 'discount':
      return sorted.sort((a, b) => b.discountPercent - a.discountPercent);
    default:
      return sorted;
  }
};

// Get unique categories from products
export const getCategories = (products) => {
  const categories = new Set(products.map((p) => p.category));
  return ['All', ...Array.from(categories).sort()];
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

// Debounce function for search
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};