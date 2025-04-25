import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
