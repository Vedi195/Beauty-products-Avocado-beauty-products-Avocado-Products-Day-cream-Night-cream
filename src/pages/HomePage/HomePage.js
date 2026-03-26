import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/Hero/HeroSection';
import ProductGrid from '../../components/Products/ProductGrid';
import SpecialOffers from '../../components/SpecialOffers/SpecialOffers';
import products from '../../data/products';
import './HomePage.css';

const categories = [
  { name: 'Skincare', icon: '✨', count: products.filter(p => p.category === 'Skincare').length },
  { name : 'Foot Care', icon: '👣', count: products.filter(p => p.category === 'Foot Care').length },
  { name : 'Face Care', icon: '🌿', count: products.filter(p => p.category === 'Face Care').length },
  { name : 'Bath & Body', icon: '🛁', count: products.filter(p => p.category === 'Bath & Body').length },];

const whyChooseUs = [
  {
    icon: '🌿',
    title: '100% Organic',
    text: 'All our products are made with certified organic ingredients, free from harmful chemicals.'
  },
  {
    icon: '✨',
    title: 'Premium Quality',
    text: 'We source the finest ingredients and follow strict quality control standards.'
  },
  {
    icon: '❤️',
    title: 'Cruelty Free',
    text: 'No animal testing. All our products are vegan-friendly and ethically made.'
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    text: 'Quick and reliable charging delivery across India. Your wellness, delivered to your doorstep.'
  }
];

const HomePage = () => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="homePage" data-testid="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section id="featured-products" className="featuredSection">
        <ProductGrid 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Handpicked favorites loved by our customer"
          showViewAll={true}
          viewAllLink="shop"
          maxItems={8}
        />
      </section>

      {/* Categories Section */}
      <section className="categoriesSection" data-testid="categories-section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Shop by Category</h2>
            <p className="sectionSubtitle">Find exactly what you're looking for</p>
          </div>
          <div className="categoriesGrid">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="categoryCard"
                data-testid={`category-${category.name.toLowerCase().replace(' ', '-')}`}
              >
                <div className="categoryIcon" style={{ fontSize: '28px' }}>
                  {category.icon}
                </div>
                <h3 className="categoryName">{category.name}</h3>
                <span className="categoryCount">{category.count} products</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <SpecialOffers maxItems={4} showBanner={true} />

      {/* Why Choose Us */}
      <section className="whySection" data-testid="why-section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Why Choose Us</h2>
            <p className="sectionSubtitle">Experience the difference with Avocado Herbal Products</p>
          </div>
          <div className="whyGrid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="whyCard">
                <div className="whyIcon" style={{ fontSize: '32px' }}>
                  {item.icon}
                </div>
                <h3 className="whyTitle">{item.title}</h3>
                <p className="whyText">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;