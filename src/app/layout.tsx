import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phynix Courier | Matryxx LLC",
  description: "Lime green autonomous courier: Cybercab Austin + Waymo LA/Austin. Closest vehicle wins. Documents & small parcels ≤10 lb. Phoenix Desktop assistant.",
  keywords: "Phynix, Matryxx, courier, Cybercab, Waymo, robotaxi, Austin, Los Angeles",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
