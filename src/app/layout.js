import "./globals.css";

export const metadata = {
  title: "Quântica",
  description: "Computação Quântica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
