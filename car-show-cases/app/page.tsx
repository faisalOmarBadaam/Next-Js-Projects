import { CustomFilter, Hero, SearchBar } from "@/Components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 max-w-[1440px] mx-auto sm:px-16 px-6 py-4"
        id="discover"
      >
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-gray-600">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className=" flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
