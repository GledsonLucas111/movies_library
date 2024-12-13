import MenuBar from "@/components/menu_bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[5rem_minmax(5rem,_1fr)] h-full">
      <MenuBar />
      <div>
        <img
          alt=""
          src="/images/CAPA-lupin.png"
          className="w-full"
        />
      </div>
    </div>
  );
}
