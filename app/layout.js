import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website created with NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <link
          rel="icon"
          href="/assets/logo6.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </>
  );
}
