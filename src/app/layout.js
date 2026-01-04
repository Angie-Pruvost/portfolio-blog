import "./globals.css";
import Navbar from "../components/Navbar";//acá uso el componente del navBar
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import { ThemeProvider } from "../context/ThemeContext";
import RevealProvider from "../components/RevealProvider";

export const metadata = {
  title: "Portfolio | Mariangel",
  description: "Portfolio y  blog de desarrollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme) {
                    document.documentElement.setAttribute("data-theme", theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <RevealProvider />
          <Navbar />
          <main>
             <PageTransition>{children}</PageTransition>
          </main>
         
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

