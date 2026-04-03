import Hero from '../components/home/Hero';
import MissionSection from '../components/home/MissionSection';
import DualFocus from '../components/home/DualFocus';
import ImpactStats from '../components/home/ImpactStats';
import ImpactGallery from '../components/home/ImpactGallery';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <DualFocus />
      <ImpactStats />
      <ImpactGallery />
      <TestimonialsCarousel />
      <Newsletter />
    </div>
  );
};

export default Home;
