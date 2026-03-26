import React from 'react';
import ABOUT_IMAGE from '../../assets/about.png';
import './AboutPage.css';

const values = [
  {
    icon: '🌿',
    title: 'Natural',
    text: 'We use only the purest natural ingredients sourced responsibly.'
  },
  {
    icon: '✨',
    title: 'Organic',
    text: 'Certified organic products that are safe for you and the environment.'
  },
  {
    icon: '❤️',
    title: 'Cruelty-Free',
    text: 'No animal testing. All our products are vegan and ethically made.'
  },
  {
    icon: '🛡️',
    title: 'Sustainable',
    text: 'Eco-friendly packaging and sustainable business practices.'
  }
];

const AboutPage = () => {
  return (
    <div className="aboutPage" data-testid="about-page">
      <div className="container">
        {/* Header */}
        <div className="aboutHeader">
          <h1 className="aboutTitle">About Avocado Herbal Products</h1>
          <p className="aboutSubtitle">
            We're passionate about bringing the power of nature to your wellness routine. 
            Our journey began with a simple belief: that natural ingredients can transform 
            lives when crafted with care and expertise.
          </p>
        </div>

        {/* Story Section */}
        <div className="storySection">
          <div className="storyImage">
            <img 
              src={ABOUT_IMAGE}
              alt="Natural herbal products"
            />
          </div>
          <div className="storyContent">
            <h2>Our Story</h2>
            <p>
              Avocado Herbal Products was founded with a vision to make premium, 
              organic herbal products accessible to everyone. We believe that nature 
              holds the key to true wellness, and our products are designed to harness 
              that power.
            </p>
            <p>
              Every product in our collection is carefully formulated using traditional 
              herbal wisdom combined with modern science. We source the finest organic 
              ingredients from trusted farmers and suppliers who share our commitment 
              to quality and sustainability.
            </p>
            <p>
              From skincare to haircare, from wellness supplements to essential oils, 
              each product is crafted to deliver real results while being gentle on 
              your body and the planet.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="valuesSection">
          <h2 className="sectionTitle">Our Values</h2>
          <div className="valuesGrid">
            {values.map((value, index) => (
              <div key={index} className="valueCard">
                <div className="valueIcon" style={{ fontSize: '28px' }}>
                  {value.icon}
                </div>
                <h3 className="valueTitle">{value.title}</h3>
                <p className="valueText">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="missionSection">
          <div className="missionCard">
            <h3>🎯 Our Mission</h3>
            <p>
              To provide high-quality, organic herbal products that enhance wellness 
              naturally. We're committed to making herbal remedies accessible, 
              affordable, and effective for everyone seeking a healthier lifestyle.
            </p>
          </div>
          <div className="missionCard">
            <h3>👁️ Our Vision</h3>
            <p>
              To become the most trusted name in herbal wellness, inspiring millions 
              to embrace natural solutions for health and beauty. We envision a world 
              where people choose nature over chemicals for their wellbeing.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="teamSection">
          <h2 className="sectionTitle">Meet Our Founder</h2>
          <div className="teamContent">
            <div className="teamAvatar" style={{ fontSize: '48px' }}>
              👤
            </div>
            <h3 className="teamName">Mitali Patel</h3>
            <p className="teamRole">Founder & Wellness Expert</p>
            <p className="teamBio">
              With years of experience in herbal sciences and a deep passion for 
              natural wellness, our team works tirelessly to bring you products 
              that truly make a difference. We believe in the power of plants and 
              are dedicated to sharing that power with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;