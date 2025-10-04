import Footer from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Footer />
      <SanityLive />
    </main>
  );
}
