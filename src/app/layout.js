import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  title: "Quântica",
  description: "Computação Quântica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
