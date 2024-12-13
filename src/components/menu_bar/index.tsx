import { GoHome, GoPlus } from "react-icons/go";
import { MdMovie, MdSearch } from "react-icons/md";
import { LuMonitor } from "react-icons/lu";

export default function MenuBar() {
  const icons = [
    {
      id: 1,
      icon: <MdSearch />,
    },
    {
      id: 2,
      icon: <GoHome />,
    },
    {
      id: 3,
      icon: <LuMonitor />,
    },
    {
      id: 4,
      icon: <MdMovie />,
    },
    {
      id: 5,
      icon: <GoPlus />,
    },
  ];

  return (
    <div className="bg-zinc-950 h-full w-20 text-white flex justify-center items-center flex-col gap-14">
      {icons.map((icon) => {
        return (
          <button key={icon.id} className="text-3xl">
            {icon.icon}
          </button>
        );
      })}
    </div>
  );
}
