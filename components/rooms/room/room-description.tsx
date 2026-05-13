/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { FileText, CircleCheckBig } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRoomById } from "../hooks/useRoomById";
import { getImageUrl } from "@/lib/image";
import { usePolicy } from "@/components/content/hooks";
import type { LocalizedText } from "@/components/content/types";

const AmenityItem = ({
  label,
  iconSrc,
}: {
  label: string;
  iconSrc?: string | null;
}) => {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      {iconSrc ? (
        <img
          src={getImageUrl(iconSrc)}
          alt={label}
          className="w-5 h-5 object-contain"
        />
      ) : (
        <CircleCheckBig className="w-5 h-5 text-gray-500" />
      )}
      <span className="text-base">{label}</span>
    </div>
  );
};

const PolicyRow = ({
  icon,
  title,
  description,
}: {
  icon?: string | null;
  title: string;
  description: string;
}) => (
  <div className="flex py-4 border-b last:border-b-0">
    <div className="flex items-start w-1/3 min-w-[180px] gap-3 pr-4">
      {icon ? (
        <img
          src={getImageUrl(icon)}
          alt={title}
          className="w-5 h-5 object-contain"
        />
      ) : (
        <FileText className="w-5 h-5 text-gray-500" />
      )}
      <span className="font-semibold text-gray-800 whitespace-nowrap">
        {title}
      </span>
    </div>

    <div className="flex-1 text-gray-600 leading-relaxed whitespace-pre-line">
      {description}
    </div>
  </div>
);

function getLocalizedText(entry: LocalizedText, locale: string) {
  const primary = locale === "ar" ? entry.ar : entry.en;
  const fallback = locale === "ar" ? entry.en : entry.ar;
  return primary?.trim() || fallback?.trim() || "";
}

export default function RoomDescription() {
  const t = useTranslations();
  const locale = useLocale();
  const { id } = useParams<{ id: string }>();
  const { data: room, isLoading } = useRoomById(id);
  const { data: policyResponse } = usePolicy();
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  const description =
    locale === "ar" ? room?.description_ar : room?.description_en;
  const roomAmenities = room?.amenities ?? [];
  const policyContent = policyResponse?.data?.content?.policies ?? [];
  const policiesData = policyContent
    .map((entry) => ({
      icon: entry.icon,
      title: getLocalizedText(entry.title, locale),
      description: getLocalizedText(entry.description, locale),
    }))
    .filter(
      (policy) => policy.title.length > 0 || policy.description.length > 0
    );
 

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* DESCRIPTION SECTION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{t("room.description")}</h2>
            {isLoading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-10 w-32 bg-gray-200 rounded mt-4" />
              </div>
            ) : (
              <>
                {room?.area && (
                  <p className="font-semibold text-gray-800 mb-2">
                    {t("room.area_label")}: {room.area}{" "}
                    {locale === "ar" ? "م²" : "m²"}
                  </p>
                )}
                <p className="text-gray-700 mb-4 line-clamp-4">{description}</p>
                {description && description.length > 200 && (
                  <Dialog
                    open={descriptionOpen}
                    onOpenChange={setDescriptionOpen}
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-primary border-primary hover:bg-green-50"
                      >
                        {t("room.show_more")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {t("room.full_description")}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 text-gray-700 whitespace-pre-line">
                        {description}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </>
            )}
          </section>

          {/* AMENITIES SECTION */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t("room.amenities")}</h2>
            {isLoading ? (
              <div className="animate-pulse grid grid-cols-2 sm:grid-cols-3 gap-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-200 rounded" />
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            ) : roomAmenities.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
                  {roomAmenities.slice(0, 5).map((item) => (
                    <AmenityItem
                      key={item.id}
                      label={locale === "ar" ? item.name_ar : item.name_en}
                      iconSrc={item.image?.path}
                    />
                  ))}
                </div>

                {roomAmenities.length > 5 && (
                  <Dialog open={amenitiesOpen} onOpenChange={setAmenitiesOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mt-6 text-primary border-primary hover:bg-green-50"
                      >
                        {t("room.show_all_amenities", {
                          count: roomAmenities.length,
                        })}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {t("room.all_amenities")}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 gap-4 py-4">
                        {roomAmenities.map((item) => (
                          <AmenityItem
                            key={item.id}
                            label={
                              locale === "ar" ? item.name_ar : item.name_en
                            }
                            iconSrc={item.image?.path}
                          />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </>
            ) : null}
          </section>
        </div>
      </div>

      {policiesData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-1">{t("room.policies")}</h2>
          <p className="text-sm mb-6">{t("room.policies_subtitle")}</p>

          <div className="p-4 border rounded-xl shadow-sm bg-white">
            {policiesData.map((policy, index) => (
              <PolicyRow
                key={`${policy.title}-${index}`}
                icon={policy.icon}
                title={policy.title}
                description={policy.description}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
