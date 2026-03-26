import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notFoundPage" data-testid="not-found-page">
      <div className="notFoundContent">
        <div className="notFoundIcon" style={{ fontSize: '60px' }}>
          🔍
        </div>
        <h1 className="notFoundTitle">404</h1>
        <h2 className="notFoundSubtitle">Page Not Found</h2>
        <p className="notFoundText">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="notFoundActions">
          <Link to="/" className="notFoundBtn primary" data-testid="go-home-btn">
            🏠
            <span style={{ marginLeft: '6px' }}>Go Home</span>
          </Link>
          <Link to="/shop" className="notFoundBtn secondary" data-testid="browse-products-btn">
            🛍️
            <span style={{ marginLeft: '6px' }}>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;