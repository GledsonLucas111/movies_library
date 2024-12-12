import { GoHome, GoPlus } from "react-icons/go";
import { MdMovie, MdSearch } from "react-icons/md";
import { LuMonitor } from "react-icons/lu";

export default function MenuBar() {
  return (
    <div className="bg-black h-full w-28 text-white flex justify-center items-center flex-col gap-14 text-3xl">
      <MdSearch />
      <GoHome />
      <LuMonitor />
      <MdMovie />
      <GoPlus />
    </div>
  );
}
