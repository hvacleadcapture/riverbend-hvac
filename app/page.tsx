import SpecialsBanner from '@/components/SpecialsBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Why from '@/components/Why';
import Portfolio from '@/components/Portfolio';
import Reviews from '@/components/Reviews';
import ServiceArea from '@/components/ServiceArea';
import QuoteSection from '@/components/QuoteSection';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export default function HomePage() {
  return (
    <>
      <SpecialsBanner />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Why />
        <Portfolio />
        <ServiceArea />
        <Reviews />
        <QuoteSection />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
