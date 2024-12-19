import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "./_components/modules/Header";
import { Toaster } from "./_components/ui/toaster";
import Footer from "./_components/modules/Footer";

const poppins = Inter({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Exclusive",
  description: "Exclusive app with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
