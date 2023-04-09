import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "My Github",
  description: "My Github portfolio",
};

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="h-screen bg-gray-200">
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
