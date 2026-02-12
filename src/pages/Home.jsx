import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Hero from '../components/home/Hero';
import MissionSection from '../components/home/MissionSection';
import DualFocus from '../components/home/DualFocus';
import ImpactStats from '../components/home/ImpactStats';
import ImpactGallery from '../components/home/ImpactGallery';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import Newsletter from '../components/home/Newsletter';
import { queryKeys } from '../api/queryKeys';
import { getPrograms } from '../api/services/programs.service';
import { getTeamMembers } from '../api/services/team.service';
import { getCategories } from '../api/services/categories.service';
import { prefetchMultiple } from '../utils/prefetchHelpers';

const Home = () => {
  const queryClient = useQueryClient();

  // Prefetch data for pages users commonly navigate to from Home
  useEffect(() => {
    prefetchMultiple(queryClient, [
      // Prefetch programs for Programs page
      {
        queryKey: queryKeys.programs.all,
        queryFn: getPrograms,
        staleTime: 30 * 60 * 1000, // 30 minutes
      },
      // Prefetch team members for About/Team page
      {
        queryKey: queryKeys.teamMembers.all,
        queryFn: getTeamMembers,
        staleTime: 30 * 60 * 1000, // 30 minutes
      },
      // Prefetch categories for Blog navigation
      {
        queryKey: queryKeys.categories.all,
        queryFn: getCategories,
        staleTime: 30 * 60 * 1000, // 30 minutes
      },
    ]);
  }, [queryClient]);

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
