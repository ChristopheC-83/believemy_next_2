
import { Toaster } from "sonner";
import "./globals.css";
import Header from "@/components/Header/Header";



export const metadata = {
  title: "App_Routing",
  description: "Comment fonctionne le routage dans Next.js ?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="text-amber-100 bg-slate-800">
        <Header />
        <Toaster position="top-center" richColors expand={true}/>
        {children}
      </body>
    </html>
  );
}
