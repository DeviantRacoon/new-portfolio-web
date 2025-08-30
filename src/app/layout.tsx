import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "./fonts";
import { personalData } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Héctor Zavala – Arquitectura & Desarrollo de Software',
    template: '%s – Héctor Zavala',
  },
  description: 'Portafolio de Héctor Zavala: arquitectura, optimización y desarrollo de software centrado en impacto de negocio.',
  applicationName: 'Portfolio Héctor Zavala',
  keywords: ['Desarrollador', 'Arquitectura de Software', 'Next.js', 'React', 'DevOps', 'CI/CD', 'Portfolio'],
  authors: [{ name: 'Héctor Zavala' }],
  creator: 'Héctor Zavala',
  publisher: 'Héctor Zavala',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Héctor Zavala – Arquitectura & Optimización',
    description: 'Proyectos reales, métricas y experiencia en software escalable.',
    siteName: 'Portfolio Héctor Zavala',
    images: [
      { url: '/profile.webp', width: 800, height: 800, alt: 'Héctor Zavala' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Héctor Zavala – Arquitectura & Optimización',
    description: 'Proyectos, experiencia y contacto.',
    images: ['/profile.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": 'large', "max-video-preview": 'large' },
  },
  icons: { icon: '/favicon.ico' },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0c' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hectorzavala.netlify.app";

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    url: siteUrl,
    image: `${siteUrl}${personalData.profilePicture}`,
    sameAs: personalData.contact.social.map((s) => s.url).filter(Boolean),
    email: personalData.contact.email,
    telephone: personalData.contact.tel,
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Portfolio Héctor Zavala",
    url: siteUrl,
    inLanguage: "es",
  };
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className={`${inter.className} font-body antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
