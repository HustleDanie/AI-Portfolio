// app/layout.js (or app/layout.tsx for TypeScript)

import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';  // Ensure the path is correct

export const metadata = {
  title: 'NLP Portfolio',
  description: 'Showcasing projects and expertise in Natural Language Processing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="text-gray-800 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
