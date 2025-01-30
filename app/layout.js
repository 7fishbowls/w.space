import localFont from "next/font/local";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

const Aeonik = localFont({
  src: "./fonts/aeonik.otf",
  display: "swap",
});

export const metadata = {
  title: "W.SPACE",
  description: "A website to explore/upload your space researches.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={Aeonik.className}>{children}</body>
    </html>
  );
}
