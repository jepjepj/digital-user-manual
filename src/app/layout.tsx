import type { Metadata } from "next";
import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../../public/assets/vendor/aos/aos.css'
import '../../public/assets/vendor/glightbox/css/glightbox.min.css'
import '../../public/assets/vendor/swiper/swiper-bundle.min.css'
import '../../public/assets/css/main.css'
import Header from "./components/header";
import Script from "next/script";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Digital User Manual",
  description: "Digital User Manual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="index-page">
        <Header />
        <main className="main">
          {children}
        </main>

        <Footer />

        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
