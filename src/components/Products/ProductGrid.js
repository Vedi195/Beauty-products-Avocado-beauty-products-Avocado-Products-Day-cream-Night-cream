import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({
  products = [],
  title,
  subtitle,
  showViewAll = false,
  viewAllLink = '/shop',
  loading = false,
  maxItems = null,
  emptyMessage = 'No products found',
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle loading properly
  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const displayProducts = maxItems ? products.slice(0, maxItems) : products;

  // Skeleton UI
  const renderSkeleton = () => (
    <div className="skeletonGrid">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="skeletonCard">
          <div className="skeletonImage" />
          <div className="skeletonContent">
            <div className="skeletonLine short" />
            <div className="skeletonLine medium" />
            <div className="skeletonLine" />
            <div className="skeletonLine short" />
          </div>
        </div>
      ))}
    </div>
  );

  // Empty State
  const renderEmptyState = () => (
    <div className="emptyState">
      <div className="emptyIcon" style={{ fontSize: '40px' }}>📦</div>
      <h3 className="emptyTitle">No Products Found</h3>
      <p className="emptyText">{emptyMessage}</p>
      <Link to="/shop" className="emptyBtn">
        Browse All Products <span style={{ fontSize: '18px' }}>➡️</span>
      </Link>
    </div>
  );

  return (
    <section className="productGridSection" data-testid="product-grid">
      <div className="container">

        {(title || subtitle) && (
          <div className="sectionHeader">
            {title && <h2 className="sectionTitle">{title}</h2>}
            {subtitle && <p className="sectionSubtitle">{subtitle}</p>}
          </div>
        )}

        {isLoading
          ? renderSkeleton()
          : displayProducts.length === 0
          ? renderEmptyState()
          : (
            <div className="productGrid">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )
        }

        {showViewAll && displayProducts.length > 0 && (
          <div className="viewAllContainer">
            <Link
              to={viewAllLink}
              className="viewAllLink"
              data-testid="view-all-btn"
            >
              View All Products <span style={{ fontSize: '18px' }}>➡️</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;