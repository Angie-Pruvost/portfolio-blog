import "./globals.css";
import Navbar from "../components/Navbar";//acá uso el componente del navBar

export const metadata = {
  title: "Portfolio | Mariangel",
  description: "Portfolio y  blog de desarrollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
