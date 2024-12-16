import CardMovie from "@/components/card_movie";
import MenuBar from "@/components/menu_bar";

export default function Home() {
  return (
    <div >
      <div className="">
        <MenuBar />
        <div>
          <img alt="" src="/images/CAPA-lupin.png" className="w-full" />
        </div>
      </div>
      <CardMovie />
    </div>
  );
}
