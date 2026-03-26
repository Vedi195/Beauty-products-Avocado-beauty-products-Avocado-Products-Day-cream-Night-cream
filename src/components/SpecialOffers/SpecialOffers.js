import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../Products/ProductGrid';
import products from '../../data/products.js';
import './SpecialOffers.css';

const SpecialOffers = ({ maxItems = 4, showBanner = true }) => {
  // Filter special/featured products
  const specialProducts = products.filter(
    p => p.isSpecial || p.isCombo || p.isFeatured
  );

  return (
    <section className="specialOffersSection" data-testid="special-offers-section">
      <div className="container">
        <div className="specialHeader">
          <span className="specialBadge">
            <span style={{ fontSize: '16px' }}>✨</span> Limited Time
          </span>
          <h2 className="specialTitle">Special Offers</h2>
          <p className="specialSubtitle">
            Don't miss out on our exclusive deals and combo packs
          </p>
        </div>

        {showBanner && (
          <div className="promoBanner">
            <div className="promoContent">
              <h3>Get Up to 30% Off on Combo Packs!</h3>
              <p>Complete your wellness routine with our curated bundles</p>
            </div>
            <div className="promoAction">
              <Link to="/special" className="promoBtn" data-testid="view-offers-btn">
                View All Offers <span style={{ fontSize: '16px', marginLeft: '8px' }}>➡️</span>
              </Link>
            </div>
          </div>
        )}

        <ProductGrid 
          products={specialProducts}
          maxItems={maxItems}
          showViewAll={true}
          viewAllLink="/special"
          emptyMessage="No special offers available at the moment"
        />
      </div>
    </section>
  );
};

export default SpecialOffers;