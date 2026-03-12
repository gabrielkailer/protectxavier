import { Hero } from "@/components/Hero";
import { CrimeStatisticsSection } from "@/components/CrimeStatisticsSection";
import { Header } from "@/components/Header";
import { ContactModal } from "@/components/ContactModal";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { ServicesSection } from "@/components/ServicesSection";
import { BlogSection } from "@/components/BlogSection";
import { MonitoringSection } from "@/components/MonitoringSection";
import { AboutUsSection } from "@/components/AboutUsSection";
import { Footer } from "@/components/Footer";
import { createClient } from "@supabase/supabase-js";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default async function Home() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

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
