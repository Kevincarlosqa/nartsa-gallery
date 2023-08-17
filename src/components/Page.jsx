import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
export default function Page({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="mt-[85px] xl:min-h-full xl:w-full sm:w-[100vw] overflow-hidden">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
