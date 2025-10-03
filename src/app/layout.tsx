import type { Metadata } from 'next';
import './globals.css';
import { Lora, Varela } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | H Clothing',
    default: 'H Clothing',
  },
  description:
    'H Clothing is US based e-commerce store that sells luxurious clothing & accessories.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Lora.variable} ${Varela.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
