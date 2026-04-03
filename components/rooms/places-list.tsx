"use client";
import React, { useEffect, useMemo, useState } from "react";
import { SortType, Room } from "./types";
import RoomCard, { RoomCardSkeleton } from "./room-card";
import { Grid2X2, List } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRooms } from "./hooks/useRooms";
import { useFilterNazels } from "@/components/nazels/hooks/useFilterNazels";

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
  typeFilter?: string;
}

export default function PlacesList({
  searchQuery = "",
  typeFilter = "",
}: PlacesListProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [sort, setSort] = useState<SortType>("recommended");
  const [page, setPage] = useState<number>(1);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const perPage = 4;

  const hasTypeFilter = !!typeFilter;

  // Build filter params based on locale
  const filterParams = useMemo(
    () =>
      hasTypeFilter
        ? locale === "ar"
          ? { name_ar: typeFilter }
          : { name_en: typeFilter }
        : {},
    [hasTypeFilter, typeFilter, locale],
  );

  // Regular rooms query - only enabled when no type filter
  const {
    data: roomsResponse,
    isLoading: isLoadingRooms,
    isError: isErrorRooms,
  } = useRooms({ page, per_page: perPage }, { enabled: !hasTypeFilter });

  // Nazel filter query - only enabled when type filter is present
  const {
    data: nazelFilterResponse,
    isLoading: isLoadingFilter,
    isError: isErrorFilter,
  } = useFilterNazels(filterParams);

  const isLoading = hasTypeFilter ? isLoadingFilter : isLoadingRooms;
  const isError = hasTypeFilter ? isErrorFilter : isErrorRooms;

  const rooms = useMemo(() => {
    if (hasTypeFilter) {
      return nazelFilterResponse?.data?.flatMap((nazel) => nazel.rooms) ?? [];
    }
    return roomsResponse?.data ?? [];
  }, [hasTypeFilter, nazelFilterResponse, roomsResponse]);

  const totalPages = hasTypeFilter ? 1 : (roomsResponse?.last_page ?? 1);
  const totalResults = hasTypeFilter
    ? rooms.length
    : (roomsResponse?.total ?? 0);

  // Reset page when search or filter changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [searchQuery, typeFilter]);

  // Filter by search query (client-side on current page)
  const filtered = useMemo(() => {
    if (!searchQuery || !rooms.length) return rooms;

    const query = searchQuery.toLowerCase();
    return rooms.filter((room: Room) => {
      const name = locale === "ar" ? room.name_ar : room.name_en;
      const location = locale === "ar" ? room.location_ar : room.location_en;
      return (
        name?.toLowerCase().includes(query) ||
        location?.toLowerCase().includes(query)
      );
    });
  }, [rooms, searchQuery, locale]);

  // Sorting logic (client-side on current page)
  const sorted = useMemo(() => {
    const copy = [...filtered];

    if (sort === "price-asc") {
      return copy.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      return copy.sort((a, b) => b.price - a.price);
    }
    if (sort === "rating") {
      return copy.sort((a, b) => b.stars - a.stars);
    }
    return copy;
  }, [sort, filtered]);

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      {/* Header */}

      <div className="w-full space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          {searchQuery
            ? `${t("search.results_for")} "${searchQuery}" (${totalResults} ${t("search.found")})`
            : typeFilter
              ? `${typeFilter} (${totalResults})`
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

      {/* Grid */}
      {isLoading ? (
        <section
          className={`grid gap-6 ${layout !== "list" ? "grid-cols-1 md:grid-cols-2" : ""}`}
        >
          {Array.from({ length: perPage }).map((_, i) => (
            <RoomCardSkeleton key={i} />
          ))}
        </section>
      ) : isError ? (
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">
            Failed to load rooms. Please try again.
          </p>
        </div>
      ) : sorted.length === 0 ? (
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
          {sorted.map((room: Room) => (
            <RoomCard key={room.id} room={room} locale={locale} />
          ))}
        </section>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8">
          <nav
            className="inline-flex items-center gap-2"
            aria-label="Pagination"
          >
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
      )}
    </section>
  );
}
