import "./globals.css";
import localFont from "next/font/local";

const GeneralSans = localFont({
  src:"./fonts/general_sans.otf",
  display:"swap"
});

export const metadata = {
  title:"W.SPACE",
  description:"A website to explore/upload your space researches."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeneralSans.className}>{children}</body>
    </html>
  );
}
