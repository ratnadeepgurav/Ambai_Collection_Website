import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import DailyDealsSection from '@/components/home/DailyDealsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FeaturesSection from '@/components/home/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <BestsellersSection />
        <DailyDealsSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
