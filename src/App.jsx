import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';

// Pages
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';

function MainAppContent() {
  const { currentPage } = useStore();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'category':
        return <Category />;
      case 'product-detail':
        return <ProductDetail />;
      case 'about':
        return <AboutUs />;
      case 'services':
        return <Services />;
      case 'contact':
        return <ContactUs />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-conditions':
        return <TermsConditions />;
      case 'refund-policy':
        return <RefundPolicy />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      <Footer />

      {/* Slide Drawers */}
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainAppContent />
    </StoreProvider>
  );
}
