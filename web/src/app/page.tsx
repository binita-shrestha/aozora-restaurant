import Image from "next/image";
import HeroBanner from "@/components/homepage/HeroBanner";
import AboutUs from "@/components/homepage/AboutUs";
import FoodPictures from "@/components/homepage/FoodPictures";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner/>
      <AboutUs/>
      <FoodPictures/>
    </main>    
  );
}
