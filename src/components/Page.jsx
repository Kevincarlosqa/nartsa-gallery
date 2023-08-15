import { useRouter } from "next/router";
import Header from "./Header";
export default function Page({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="mt-[50px] mx-[100px]">{children}</main>
    </>
  );
}
