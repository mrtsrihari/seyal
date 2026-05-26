import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { getSiteData } from "@/lib/actions";

export default async function Home() {
  const data = await getSiteData();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats statsData={data.stats} />
        <Services />
        <WhyChooseUs />
        <Portfolio initialProjects={data.projects} />
        <Process />
        <Testimonials initialTestimonials={data.testimonials} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
