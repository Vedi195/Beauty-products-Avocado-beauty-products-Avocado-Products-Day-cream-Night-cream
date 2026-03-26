import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import './BottomNavbar.css';

const BottomNavbar = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const { wishlistCount = 0 } = useWishlist() || {};
  const moreRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsMoreOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottomNavbar" data-testid="bottom-navbar">
      <div className="navItems">
        
        {/* Home */}
        <Link
          to="/"
          className={`navItem ${isActive('/') ? 'active' : ''}`}
          data-testid="nav-home"
        >
          <span className="navIcon">🏠</span>
          <span className="navLabel">Home</span>
        </Link>

        {/* Shop */}
        <Link
          to="/shop"
          className={`navItem ${isActive('/shop') ? 'active' : ''}`}
          data-testid="nav-shop"
        >
          <span className="navIcon">🛍️</span>
          <span className="navLabel">Shop</span>
        </Link>

        {/* Special */}
        <Link
          to="/special"
          className={`navItem ${isActive('/special') ? 'active' : ''}`}
          data-testid="nav-special"
        >
          <span className="navIcon">🎁</span>
          <span className="navLabel">Special</span>
        </Link>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          className={`navItem ${isActive('/wishlist') ? 'active' : ''}`}
          data-testid="nav-wishlist"
        >
          <span className="navIcon">
            ❤️
            {wishlistCount > 0 && (
              <span className="wishlistBadge">{wishlistCount}</span>
            )}
          </span>
          <span className="navLabel">Saved</span>
        </Link>

        {/* More Menu */}
        <div
          className={`navItem moreMenu ${isMoreOpen ? 'open' : ''}`}
          ref={moreRef}
        >
          <button
            className="moreButton"
            onClick={() => setIsMoreOpen((prev) => !prev)}
            data-testid="nav-more"
          >
            <span className="navIcon">👤</span>
            <span className="navLabel">More</span>
          </button>

          {isMoreOpen && (
            <div className="moreDropdown" data-testid="more-dropdown">
              <Link to="/about" className="dropdownItem">
                ℹ️ About Us
              </Link>
              <Link to="/contact" className="dropdownItem">
                📞 Contact Us
              </Link>
              <Link to="/privacy" className="dropdownItem">
                🛡️ Privacy Policy
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default BottomNavbar;