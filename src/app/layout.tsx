
import type {Metadata} from 'next';
import './globals.css';
import { CursorGlow } from "@/components/ui/cursor-glow";

export const metadata: Metadata = {
  title: 'Global Career Pathways | Trusted Overseas Job Platform',
  description: 'Connect with verified job opportunities in Canada, Germany, UAE, and the UK. Your trusted partner for international careers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30 overflow-x-hidden">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
