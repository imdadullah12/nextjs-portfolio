import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  weight: ['300', '500'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
