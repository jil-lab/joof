import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import Section from '../common/Section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  location?: string;
}

const TestimonialCard = ({ quote, author, role, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
      <div className="flex items-start mb-6">
        <FaQuoteLeft className="text-4xl text-teal-500 opacity-50 mr-4 flex-shrink-0" />
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <p className="font-semibold text-gray-900 text-lg">{author}</p>
        {role && <p className="text-gray-600">{role}</p>}
        {location && (
          <p className="text-sm text-gray-500 mt-1">{location}</p>
        )}
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote:
        "The JOOF Foundation's healthcare program changed our lives. When my wife was in labor, they provided the medical support we desperately needed. Our family is forever grateful for their compassion and care.",
      author: 'The Omoboye Family',
      role: 'Healthcare Program Beneficiary',
      location: 'Lagos, Nigeria',
    },
    {
      quote:
        'Through the education scholarship program, I was able to complete my secondary education. Today, I am pursuing my dream of becoming a teacher to give back to my community.',
      author: 'Blessing Adeyemi',
      role: 'Scholarship Recipient',
      location: 'Ogun State, Nigeria',
    },
    {
      quote:
        "The foundation's outreach program brought medical care to our remote village. They treated over 200 people in just one day. We had never experienced such dedicated service.",
      author: 'Chief Okonkwo',
      role: 'Community Leader',
      location: 'Enugu, Nigeria',
    },
  ];

  return (
    <Section
      title="Stories of Transformation"
      subtitle="Testimonials"
      backgroundColor="gray"
      padding="normal"
    >
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-teal-500',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={true}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-teal-500 !w-10 !h-10 after:!text-2xl"></div>
        <div className="swiper-button-next !text-teal-500 !w-10 !h-10 after:!text-2xl"></div>
      </div>

      {/* Custom Styles for Swiper */}
      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #cbd5e0;
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #f0fdfa;
        }
      `}</style>
    </Section>
  );
};

export default TestimonialsCarousel;
