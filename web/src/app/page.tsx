import { Hero } from "@/components/sections/Hero";
import { CrimeStatisticsSection } from "@/components/sections/CrimeStatisticsSection";
import { Header } from "@/components/layout/Header";
import { ContactModal } from "@/components/ui/ContactModal";
import { ClientsCarousel } from "@/components/sections/ClientsCarousel";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { MonitoringSection } from "@/components/sections/MonitoringSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { Footer } from "@/components/layout/Footer";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function Home() {
  const { data: latestArticles = [] } = await supabaseAdmin
    .from("articles")
    .select("id, slug, title, excerpt, cover_image, category, created_at, read_time")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="min-h-screen bg-[var(--background)] relative w-full overflow-x-hidden">
      <Header />
      <ContactModal />
      <Hero />
      <CrimeStatisticsSection />
      <ServicesSection />
      <BlogSection articles={latestArticles} />
      <MonitoringSection />
      <AboutUsSection />
      <ClientsCarousel />
      <Footer />
    </main>
  );
}
