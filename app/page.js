import Image from "next/image";
import Header from "./components/header";
import Filter from "./components/filter";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100 w-full min-h-screen">
        <Header />
        <Filter />
      </div>
    </>
  );
}
