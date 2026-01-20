import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Pipeline } from "@/components/Pipeline";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Pipeline />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
