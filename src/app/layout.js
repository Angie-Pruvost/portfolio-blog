import "./globals.css";
import Navbar from "../components/Navbar";//acá uso el componente del navBar
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "Portfolio | Mariangel",
  description: "Portfolio y  blog de desarrollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

