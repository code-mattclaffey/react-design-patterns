import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseStructure } from './components/CourseStructure';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Features } from './components/Features';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CourseStructure />
      <CallToAction />
      <Footer />
    </div>
  );
};
