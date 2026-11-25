import { useMotion } from './hooks/useMotion';
import { useRoute } from './hooks/useRoute';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Expertise } from './components/Expertise';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Faq } from './components/Faq';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingBar } from './components/FloatingBar';
import { ProjectPage } from './components/ProjectPage';

export default function App() {
  const route = useRoute();
  const pageKey = route.page === 'project' ? `project:${route.slug}` : 'home';
  useMotion(pageKey);
  return (
    <>
      <Header />
      <main className="main" key={pageKey}>
        {route.page === 'project' ? (
          <ProjectPage slug={route.slug} />
        ) : (
          <>
            <Hero />
            <Work />
            <Expertise />
            <About />
            <Experience />
            <Faq />
            <Testimonials />
          </>
        )}
      </main>
      <Footer />
      <FloatingBar />
    </>
  );
}
