import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { WishlistProvider } from './context/WishlistContext';

// Components
import TopNavbar from './components/Navbar/TopNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import ContactFloat from './components/Contact/ContactFloat';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Common/SrollToTop';

// Pages
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SpecialPage from './pages/SpecialPage/SpecialPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Component Pages
import ProductDetail from './components/Products/ProductDetail';
import WishlistPage from './components/Wishlist/WishlistPage';
import ContactPage from './components/Contact/ContactPage';

// Styles
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="app">
          <TopNavbar />

          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/special" element={<SpecialPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <ContactFloat />
          <BottomNavbar />
        </div>

        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#2D3B1F',
              color: '#fff',
              borderRadius: '24px',
              padding: '12px 20px',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#5C8A3C',
                secondary: '#fff',
              },
            },
          }}
        />
      </BrowserRouter>
    </WishlistProvider>
  );
}

export default App;