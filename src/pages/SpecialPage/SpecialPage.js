import React, { useState, useMemo } from 'react';
import ProductGrid from '../../components/Products/ProductGrid';
import products from '../../data/products';
import './SpecialPage.css';

const tabs = [
  { id: 'all', label: 'All Offers' },
  { id: 'combo', label: 'Combo Packs' },
  { id: 'discount', label: 'Best Discounts' },
  { id: 'featured', label: "Editor's Pick" }
];

const SpecialPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = useMemo(() => {
    switch (activeTab) {
      case 'combo':
        return products.filter(p => p.isCombo);
      case 'discount':
        return products
          .filter(p => p.discountPercent >= 20)
          .sort((a, b) => b.discountPercent - a.discountPercent);
      case 'featured':
        return products.filter(p => p.isFeatured);
      default:
        return products.filter(
          p => p.isSpecial || p.isCombo || p.isFeatured || p.discountPercent >= 20
        );
    }
  }, [activeTab]);

  return (
    <div className="specialPage" data-testid="special-page">
      <div className="container">
        <div className="specialHeader">
          <span className="specialBadge">
            🌟
            Limited Time Offers
          </span>
          <h1 className="specialTitle">Special Offers</h1>
          <p className="specialSubtitle">
            Exclusive deals, combo packs, and discounts on your favorite herbal products
          </p>
        </div>

        <div className="filterTabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`filterTab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ProductGrid 
          products={filteredProducts}
          emptyMessage="No special offers available in this category"
        />
      </div>
    </div>
  );
};

export default SpecialPage;