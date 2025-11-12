import {
  BedDouble,
  CalendarDaysIcon,
  Globe,
  Heart,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function RoomCard() {
  return (
    <div className="p-4 rounded-md space-y-4 border">
      <div className="relative">
        <Image
          src={"/imgs/room.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="rounded-md"
        />
        <div className="p-1 bg-white border rounded-full absolute top-2 start-2">
          <Heart />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-stone-400 flex gap-2 items-center">
          <Globe className="size-5" />
          <span>Jeddah, Saudi Arabia</span>
        </div>
        <div className="text-primary">Suite · Apt 5 · Level 2</div>
        <div className="text-stone-400 flex gap-4 justify-between items-center">
          <div className="flex items-center gap-2">
            <BedDouble className="size-5" />
            <span>5 bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize2 className="size-4" />
            <span>94m2</span>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-primary flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon />
            <span>4 days</span>
          </div>
          <div>From $189.36</div>
        </div>
      </div>
    </div>
  );
}
