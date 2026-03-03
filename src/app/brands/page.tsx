import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { BrandsContent } from "./content";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Brand Shops – Brand Agent GmbH",
  description: "Wir bieten Ihnen die Möglichkeit, Ihr eigenes E-Commerce-Geschäft aufzubauen und Ihre einzigartige Eigenmarke zu entwickeln.",
};

export default function BrandsPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="E-Commerce"
        title="Brand Shops"
        description="Wir bieten Ihnen die Möglichkeit, Ihr eigenes E-Commerce-Geschäft aufzubauen und Ihre einzigartige Eigenmarke zu entwickeln."
      />
      <BrandsContent />
      <Footer />
    </main>
  );
}
