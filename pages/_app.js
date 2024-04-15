import Header from "@/components/Header";
import { CartContextProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";


const inter = Poppins({ subsets: ["latin"], weight: "400" });


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <>
    <SessionProvider session={session}>
      <CartContextProvider>
        <main className={`${inter.className} min-h-screen`} >
          <Header />
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} />
        </main >
      </CartContextProvider>
    </SessionProvider>
  </>
}
