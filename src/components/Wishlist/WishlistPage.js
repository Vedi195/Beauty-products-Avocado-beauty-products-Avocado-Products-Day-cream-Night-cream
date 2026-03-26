import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import ProductCard from '../Products/ProductCard';
import toast from 'react-hot-toast';
import './WishlistPage.css';

const WishlistPage = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlist();

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear your wishlist?')) {
      clearWishlist();
      toast.success('Wishlist cleared');
    }
  };

  return (
    <div className="wishlistPage" data-testid="wishlist-page">
      <div className="container">
        <div className="pageHeader">
          <h1 className="pageTitle">My Wishlist</h1>
          <p className="pageSubtitle">
            {wishlistCount > 0 
              ? `You have ${wishlistCount} saved item${wishlistCount > 1 ? 's' : ''}`
              : 'Save your favorite products here'
            }
          </p>
        </div>

        {wishlistCount === 0 ? (
          <div className="emptyWishlist" data-testid="empty-wishlist">
            <div className="emptyIcon" style={{ fontSize: '60px' }}>
              ❤️
            </div>
            <h2 className="emptyTitle">No saved products yet!</h2>
            <p className="emptyText">
              Browse our collection and tap the heart icon to save your favorite products.
            </p>
            <Link to="/shop" className="browseBtn" data-testid="browse-shop-btn">
              🛍️ Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="wishlistActions">
              <button 
                className="clearWishlistBtn"
                onClick={handleClearAll}
                data-testid="clear-wishlist-btn"
              >
                🗑️ Clear All
              </button>
            </div>
            <div className="wishlistGrid">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;