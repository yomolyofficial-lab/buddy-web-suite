import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartProvider } from "@/lib/cart";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-aurora">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
