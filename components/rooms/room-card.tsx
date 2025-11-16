import Image from "next/image";
import { CardProps } from "./types";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";

export default function RoomCard({ place, onToggleFav, isFav }: CardProps) {
  return (
    <article className="flex gap-4 p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      {/* image */}
      <div className="w-40 shrink-0 rounded-lg overflow-hidden relative">
        <Image
          width={1000}
          height={1000}
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />

        {place.badges.map((b) => (
          <span
            key={b}
            className="text-xs absolute z-10 start-0 top-0 bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md"
          >
            {b}
          </span>
        ))}

        <Button
          onClick={() => onToggleFav(place.id)}
          aria-pressed={isFav}
          className="bg-transparent hover:bg-transparent rounded-md p-0  absolute z-10 end-0 top-0"
          title={isFav ? "Remove favorite" : "Add favorite"}
        >
          <Heart
            className={`size-5 ${
              isFav ? "fill-primary text-white" : "text-white"
            }`}
          />
        </Button>
      </div>

      {/* content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-lg font-semibold text-gray-800">
              {place.name}
            </span>
            <div className="text-sm text-gray-500 mt-1">{place.location}</div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="text-sm text-gray-700 font-medium">
              {place.price}
            </div>
          </div>
        </div>

        {/* tags */}
        <div className="mt-3 flex flex-wrap gap-2 my-2">
          {place.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* features & rating */}
        <div className="mt-auto flex flex-wrap items-center justify-between text-sm text-gray-500">
          <div className="flex gap-2 items-center">
            {place.features.map((f) => (
              <span key={f} className="px-2 py-1 border rounded-full text-xs">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
