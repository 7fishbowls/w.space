import "./globals.css";
import localFont from "next/font/local";

const GeneralSans = localFont({
  src:"./general_sans.otf",
  display:"swap"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeneralSans.className}>{children}</body>
    </html>
  );
}
