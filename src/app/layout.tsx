import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Practice NextJs default title", // for children if they don't have their own title
    template: "%s | NextJs App", // %s will be replaces with any page configured title
    // to overrride in any page, add title with absolute property. This will ignore this template
    absolute: "NextJs App", // for root page
  },
  description: "Practice NextJs description",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
