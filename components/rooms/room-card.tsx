import Image from "next/image";
import Link from "next/link";
import type { Room } from "./types";
import { getImageUrl } from "@/lib/image";

interface RoomCardProps {
  room: Room;
  locale: string;
}

export default function RoomCard({ room, locale }: RoomCardProps) {
  const name = locale === "ar" ? room.name_ar : room.name_en;
  const location = locale === "ar" ? room.location_ar : room.location_en;
  const typeName =
    locale === "ar" ? room.type_name_ar : room.type_name_en;
  const wehda = locale === "ar" ? room.wehda_name_ar : room.wehda_name_en;
  const imageSrc = room.thumbnails?.[0]?.path
    ? getImageUrl(room.thumbnails[0].path)
    : "/imgs/room.jpg";

  const tags = [typeName, wehda].filter(Boolean);
  const amenities = room.amenities?.slice(0, 3) ?? [];

  return (
    <Link
      href={`/rooms/${room.id}`}
      className="flex gap-4 p-4 bg-white border rounded-md shadow-sm hover:shadow-md transition-shadow"
    >
      {/* image */}
      <div className="w-40 shrink-0 rounded-md overflow-hidden relative">
        <Image
          width={1000}
          height={1000}
          src={imageSrc}
          alt={name || "Room"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-lg font-semibold text-gray-800">{name}</span>
            <div className="text-sm text-gray-500 mt-1">{location}</div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="text-sm text-gray-700 font-medium">
              {room.price?.toLocaleString()} SAR
            </div>
          </div>
        </div>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2 my-2">
          {tags.map((t, index) => (
            <span key={t} className="text-xs py-1 rounded-full text-gray-600">
              {t} {index + 1 !== tags.length ? "|" : ""}
            </span>
          ))}
        </div>

        {/* amenities & rating */}
        <div className="mt-auto flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex gap-2 items-center">
            {amenities.map((a) => (
              <span
                key={a.id}
                className="px-2 py-1 border rounded-full text-xs"
              >
                {locale === "ar" ? a.name_ar : a.name_en}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function RoomCardSkeleton() {
  return (
    <div className="flex gap-4 p-4 bg-white border rounded-md shadow-sm animate-pulse">
      <div className="w-40 h-28 shrink-0 rounded-md bg-gray-200" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-5 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="mt-auto flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
          <div className="h-6 w-16 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
