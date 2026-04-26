import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialsBanner from '@/components/SpecialsBanner';

export default function NotFound() {
  return (
    <>
      <SpecialsBanner />
      <Header />
      <main className="navy-gradient text-white">
        <div className="container-x grid place-items-center py-32 text-center">
          <div>
            <div className="font-display text-7xl font-extrabold text-flame-400">404</div>
            <h1 className="mt-3 font-display text-3xl font-extrabold">Page not found</h1>
            <p className="mt-2 text-navy-100/80">
              That page doesn't exist — but we're still here to help.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-flame-600 px-6 py-3 font-bold text-white hover:bg-flame-700"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
