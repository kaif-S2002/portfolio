import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Kaif Siddiqui",
  description: "Portfolio website build with NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/logo6.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
