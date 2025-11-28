"use client";
import React, { useMemo, useState } from "react";
import { Place, SortType } from "./types";
import RoomCard from "./room-card";
import { Grid2X2, List } from "lucide-react";
import { useTranslations } from "next-intl";

// -------------------- Mock Data --------------------
const placesMock: Place[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: "Melia Barcelona Sky",
  location: "Poblenou",
  price: "$1,000 - $1,500",
  image: "/imgs/room.jpg",
  badges: ["Best Value"],
  tags: ["Sp Hotel", "Premium Room", "King Bed"],
  features: ["Free cancellation", "Sp access", "Beach view"],
  rating: 4.8,
}));

// -------------------- Components --------------------
interface SortDropdownProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm text-gray-600">Sort by:</span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortType)}
        className="ml-2 px-3 py-1 text-sm border rounded-md bg-white"
        aria-label="Sort places"
      >
        <option value="recommended">Recommended</option>
        <option value="price-asc">Price low → high</option>
        <option value="price-desc">Price high → low</option>
        <option value="rating">Top rated</option>
      </select>
    </label>
  );
}

// -------------------- Main Component --------------------
interface PlacesListProps {
  searchQuery?: string;
}

export default function PlacesList({ searchQuery = "" }: PlacesListProps) {
  const t = useTranslations();
  const [sort, setSort] = useState<SortType>("recommended");
  const [page, setPage] = useState<number>(1);
  // const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const perPage = 4; // 2 columns * 2 rows

  // Filter by search query
  const filtered = useMemo(() => {
    if (!searchQuery) return placesMock;

    const query = searchQuery.toLowerCase();
    return placesMock.filter((place) => {
      return (
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        place.features.some((feature) => feature.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // sorting logic
  const sorted = useMemo(() => {
    const copy = [...filtered];

    const getPrice = (str: string) => parseInt(str.replace(/[^0-9]/g, ""), 10);

    if (sort === "price-asc") {
      return copy.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    }
    if (sort === "price-desc") {
      return copy.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    }
    if (sort === "rating") {
      return copy.sort((a, b) => b.rating - a.rating);
    }
    return copy;
  }, [sort, filtered]);

  const totalPages = Math.ceil(sorted.length / perPage);
  const pageData = sorted.slice((page - 1) * perPage, page * perPage);

  // function toggleFav(id: number) {
  //   setFavorites((prev) => {
  //     const next = new Set(prev);
  //     if (next.has(id)) {
  //       next.delete(id);
  //     } else {
  //       next.add(id);
  //     }
  //     return next;
  //   });
  // }

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      {/* Header */}

      <div className="w-full space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          {searchQuery
            ? `${t("search.results_for")} "${searchQuery}" (${
                filtered.length
              } ${t("search.found")})`
            : t("index.explore_rooms_title")}
        </h2>

        <div className="flex items-center gap-4 w-full justify-between">
          <SortDropdown value={sort} onChange={setSort} />
          <div className="flex items-center border justify-between p-2 py-1 rounded-full">
            <div
              onClick={() => setLayout("list")}
              className={`p-1 rounded-full 
                ${layout == "list" ? "text-primary border-primary border" : ""}
                `}
            >
              <List className="size-4 " />
            </div>
            <div
              onClick={() => setLayout("grid")}
              className={`p-1 rounded-full 
                ${layout != "list" ? "text-primary border-primary border" : ""}
                `}
            >
              <Grid2X2 className="size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid 2 columns */}
      {pageData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">{t("search.no_results")}</p>
          {searchQuery && (
            <p className="text-gray-400 text-sm mt-2">
              {t("search.try_different")}
            </p>
          )}
        </div>
      ) : (
        <section
          className={`grid gap-6
        ${layout != "list" ? "grid-cols-1 md:grid-cols-2" : ""}
        `}
        >
          {pageData.map((place) => (
            <RoomCard
              key={place.id}
              place={place}
              // isFav={favorites.has(place.id)}
              // onToggleFav={toggleFav}
            />
          ))}
        </section>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center mt-8">
        <nav className="inline-flex items-center gap-2" aria-label="Pagination">
          <button
            onClick={() => setPage((v) => Math.max(1, v - 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded-md ${
                page === i + 1 ? "bg-emerald-50 border-emerald-400" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((v) => Math.min(totalPages, v + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-50"
          >
            ›
          </button>
        </nav>
      </div>
    </section>
  );
}
