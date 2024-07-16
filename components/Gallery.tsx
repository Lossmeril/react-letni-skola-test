import { GalleryItemType } from "@/datasets/GalleryItems";
import Image from "next/image";

export interface GalleryBoxProps {
  img: string;
  name: string;
}

const GalleryBox: React.FC<GalleryBoxProps> = ({ img, name }) => {
  return (
    <div className="w-80 aspect-square shadow-md rounded-md overflow-hidden relative">
      <Image
        src={img}
        alt=""
        fill
        className="object-cover hover:scale-[200%] transition-transform"
      />
      <div className="z-10 absolute top-0 left-0 w-full h-full gradient pointer-events-none"></div>
      <h3 className="absolute bottom-0 left-0 z-20 text-white text-lg p-4 font-extrabold pointer-events-none">
        {name}
      </h3>
    </div>
  );
};

export interface GalleryProps {
  items: Array<GalleryItemType>;
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className="flex flex-row my-6 gap-4">
      {items.map((item) => (
        <div key={item.img}>
          <GalleryBox img={item.img} name={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
