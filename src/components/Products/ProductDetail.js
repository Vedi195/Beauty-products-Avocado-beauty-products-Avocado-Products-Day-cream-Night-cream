import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import {
  formatPrice,
  getWhatsAppLink,
  getCallLink,
  getStarDisplay,
} from '../../utils/helpers';
import products from '../../data/products';
import toast from 'react-hot-toast';
import './ProductDetail.css';

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg';

/* ─── Star renderer ─────────────────────────────────────────────────────── */
const StarIcon = ({ filled, half }) => (
  <svg
    width="16" height="16" viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor" strokeWidth="1.5"
    style={{ opacity: half ? 0.5 : 1 }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const renderStars = (rating = 0) => {
  const { full, half, empty } = getStarDisplay(rating);
  return (
    <div className="starsRow">
      {[...Array(full)].map((_, i) => (
        <StarIcon key={`f-${i}`} filled />
      ))}
      {half > 0 && <StarIcon half />}
      {[...Array(empty)].map((_, i) => (
        <StarIcon key={`e-${i}`} />
      ))}
    </div>
  );
};

/* ─── Component ─────────────────────────────────────────────────────────── */
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(0);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const product = products?.find((p) => p.id === id);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <div className="productDetailPage">
        <div className="container">
          <div className="emptyState">
            <h2>Product Not Found</h2>
            <p>This product does not exist.</p>
            <button onClick={() => navigate('/shop')} className="btn btn-primary">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const imageList = product.images || [];
  const mainImage = imageList[selectedImage] || FALLBACK_IMAGE;

  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const handleWishlistToggle = () => {
    const added = toggleWishlist(product);
    added
      ? toast.success('Saved to wishlist')
      : toast('Removed from wishlist');
  };

  return (
    <div className="productDetailPage" data-testid="product-detail-page">
      <div className="container">
        <div className="productDetailContainer">

          {/* ── Image Gallery ── */}
          <div className="imageGallery">
            <div className="mainImage">
              <img
                src={mainImage}
                alt={product.name}
                onError={(e) => (e.target.src = FALLBACK_IMAGE)}
              />
            </div>

            {imageList.length > 1 && (
              <div className="thumbnails">
                {imageList.map((img, i) => (
                  <button
                    key={i}
                    className={`thumbnail ${selectedImage === i ? 'active' : ''}`}
                    onClick={() => setSelectedImage(i)}
                  >
                    <img src={img} alt={`view-${i}`} onError={(e) => (e.target.src = FALLBACK_IMAGE)} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Product Info ── */}
          <div className="productInfo">

            {/* Breadcrumb */}
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumbSep">◆</span>
              <Link to="/shop">Shop</Link>
              <span className="breadcrumbSep">◆</span>
              <span>{product.category}</span>
            </nav>

            {/* Category & Title */}
            {product.category && (
              <p className="productCategory">{product.category}</p>
            )}
            <h1 className="productTitle">{product.name}</h1>

            {/* Ornamental divider */}
            <div className="ornamentalDivider">
              <span>✦</span>
            </div>

            {/* ── Rating Section ── */}
            <div className="ratingSection">
              <div className="ratingDisplay">
                <span className="ratingNumber">
                  {product.rating?.toFixed(1) || '0.0'}
                </span>
                <div className="ratingStars">
                  {renderStars(product.rating || 0 )}
                </div>
              </div>
            </div>

            {/* ── Price ── */}
            <div className="priceSection">
              <span className="currentPrice">{formatPrice(product.price || 0)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="originalPrice">{formatPrice(product.originalPrice)}</span>
                  {discountPercent > 0 && (
                    <span className="savingsTag">{discountPercent}% off</span>
                  )}
                </>
              )}
            </div>

            {/* ── Description ── */}
            {(product.fullDescription || product.description) && (
              <div className="descriptionSection">
                <p className="sectionLabel">About</p>
                <p className="description">
                  {product.fullDescription || product.description || 'No description available.'}
                </p>
              </div>
            )}

            {/* ── Ingredients ── */}
            {product.ingredients?.length > 0 && (
              <div className="listSection">
                <p className="sectionLabel">Key Ingredients</p>
                <div className="itemList">
                  {product.ingredients.map((item, i) => (
                    <span className="listItem" key={i}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── Benefits ── */}
            {product.benefits?.length > 0 && (
              <div className="listSection">
                <p className="sectionLabel">Benefits</p>
                <div className="itemList">
                  {product.benefits.map((item, i) => (
                    <span className="listItem" key={i}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Ornamental divider */}
            <div className="ornamentalDivider">
              <span>✦</span>
            </div>

            {/* ── Wishlist ── */}
            <button
              className={`wishlistFullBtn ${inWishlist ? 'active' : ''}`}
              onClick={handleWishlistToggle}
            >
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill={inWishlist ? 'currentColor' : 'none'}
                stroke="currentColor" strokeWidth="1.8"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {inWishlist ? 'Saved to Wishlist' : 'Save to Wishlist'}
            </button>

            {/* ── Action Buttons ── */}
            <div className="actionButtons">
              <a
                href={getCallLink?.() || 'tel:+917096287029'}
                className="actionBtn call"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.52 2 2 0 0 1 3.62 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.09a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                Call Us
              </a>

              <a
                href={getWhatsAppLink?.(product.name) || 'https://wa.me/917096287029'}
                target="_blank"
                rel="noopener noreferrer"
                className="actionBtn whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* ── Order Note ── */}
            <div className="orderNote">
              <h4>How to Order</h4>
              <p>
                Reach us via call or WhatsApp. We'll confirm availability, guide
                you through the process, and arrange delivery at your convenience.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;