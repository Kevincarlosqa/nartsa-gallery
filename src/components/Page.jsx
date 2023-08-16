import { useRouter } from "next/router";
import Header from "./Header";
export default function Page({ children }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <main className="mt-[50px] min-h-[100vh]">{children}</main>
    </>
  );
}
