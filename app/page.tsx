import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import { GalleryItems } from "@/datasets/GalleryItems";

const HomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-6xl font-bold mb-6">Nadpis</h1>
      <Button text={"Klikni"} link={"https://www.google.com"} newTab />
      <Gallery items={GalleryItems} />
    </main>
  );
};

export default HomePage;
