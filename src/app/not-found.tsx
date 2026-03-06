import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seite nicht gefunden</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Zur Startseite
        </Link>
      </section>
      <Footer />
    </main>
  );
}
