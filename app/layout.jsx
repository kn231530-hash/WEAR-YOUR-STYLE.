import "./globals.css";

export const metadata = {
  title: "NORTHORA — Wear Your Style",
  description: "Discover modern streetwear, sneakers and everyday essentials at NORTHORA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
