import { Playfair_Display, Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Configure your fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const apexPura = localFont({
  src: [
    {
      path: "../public/fonts/apex.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-apex-pura",
  display: "swap",
});

export const metadata = {
  title: 'Spice Garden - Authentic Sri Lankan Restaurant',
  description: 'Experience the authentic flavors of Sri Lanka at Spice Garden',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${poppins.variable} ${apexPura.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}