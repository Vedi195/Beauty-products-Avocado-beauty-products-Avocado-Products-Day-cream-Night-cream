import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { getWhatsAppLink, getCallLink } from '../../utils/helpers';
import LOGO_URL from '../../assets/logo.png';
import './TopNavbar.css';


const TopNavbar = ({ onSearch = () => {} }) => {
  const [searchValue, setSearchValue] = useState('');
  const { wishlistCount = 0 } = useWishlist() || {};
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchValue.trim();
    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="topNavbar" data-testid="top-navbar">
      <div className="navContainer">

        {/* Logo Section */}
        <Link to="/" className="logoSection" data-testid="logo-link">
          <img
            src={LOGO_URL}
            alt="Avocado Herbal Products Logo"
            className="logo"
          />
          <div className="brandName">
            AVOCADO
            <span>Herbal Products</span>
          </div>
        </Link>

        {/* Search Section */}
        <div className="searchSection">
          <form onSubmit={handleSearchSubmit} className="searchWrapper">
            <span className="searchIcon">🔍</span>
            <input
              type="text"
              className="searchInput"
              placeholder="Search herbal products..."
              value={searchValue}
              onChange={handleSearchChange}
              data-testid="search-input"
            />
          </form>
        </div>

        {/* Actions Section */}
        <div className="actionsSection">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="navAction wishlist"
            title="Wishlist"
            data-testid="wishlist-nav-btn"
          >
            <span>❤️</span>
            {wishlistCount > 0 && (
              <span className="wishlistBadge" data-testid="wishlist-count">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Call */}
          <a
            href={getCallLink?.() || "tel:+917096287029"}
            className="navAction call"
            title="Call to Order"
            data-testid="call-nav-btn"
          >
            <span>📞</span>
          </a>

          {/* WhatsApp */}
          <a
            href={getWhatsAppLink?.() || "https://wa.me/917096287029"}
            className="navAction whatsapp"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="whatsapp-nav-btn"
          >
            <span>💬</span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;