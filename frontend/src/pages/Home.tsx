import Hero from '../components/home/Hero';
import MissionSection from '../components/home/MissionSection';
import DualFocus from '../components/home/DualFocus';
import ImpactStats from '../components/home/ImpactStats';
import CallToAction from '../components/common/CallToAction/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <DualFocus />
      <ImpactStats />
      {/* <ImpactGallery /> */}
      {/* <TestimonialsCarousel /> */}
      {/* <Newsletter /> */}
      <CallToAction />
    </div>
  );
};

export default Home;
