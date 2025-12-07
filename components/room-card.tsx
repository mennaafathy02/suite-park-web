import {
  BedDouble,
  CalendarDaysIcon,
  Globe,
  // Heart,
  Maximize2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RoomCard() {
  return (
    <div className="md:p-4 p-2 rounded-md space-y-4 border">
      <div className="relative overflow-hidden rounded-md">
        <Link href={"/rooms/room-1"}>
          <Image
            src={"/imgs/room.jpg"}
            alt=""
            width={1000}
            height={1000}
            className="rounded-md h-full object-cover hover:scale-105 scale-100 transition-all duration-500"
          />
        </Link>

        {/* <div className="p-1 bg-white border rounded-full absolute top-2 start-2">
          <Heart className="md:size-6 size-4" />
        </div> */}
      </div>
      <div className="space-y-2">
        <Link
          href={"/rooms/room-1"}
          className="text-stone-400 flex gap-2 items-center  "
        >
          <Globe className="size-5" />
          <span>Jeddah, Saudi Arabia</span>
        </Link>
        <div className="text-primary">Suite · Apt 5 · Level 2</div>
        <div className="text-stone-400 flex flex-wrap gap-4 justify-between items-center">
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
        <Link
          href={"/rooms/room-1"}
          className="text-primary flex flex-wrap gap-4 items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <CalendarDaysIcon />
            <span>4 days</span>
          </div>
          <div>Min Price $189.36</div>
        </Link>
      </div>
    </div>
  );
}
