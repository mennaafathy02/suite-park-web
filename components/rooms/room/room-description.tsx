"use client";

import { Button } from "@/components/ui/button";
import {
  Utensils,
  Dumbbell,
  Cigarette,
  Hotel,
  ShowerHead,
  Calendar,
  Waves,
  LucideIcon,
  CalendarCheck,
  CalendarX,
  FileText,
  Users,
  Baby,
  Moon,
  PawPrint,
  Wifi,
  Tv,
  AirVent,
  Coffee,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useState } from "react";

const amenities = [
  { icon: Utensils, label: "restaurant", key: "restaurant" },
  { icon: Waves, label: "pool", key: "pool" },
  { icon: Dumbbell, label: "gym", key: "gym" },
  { icon: ShowerHead, label: "spa", key: "spa" },
  { icon: Cigarette, label: "smoking_allowed", key: "smoking_allowed" },
  { icon: Wifi, label: "wifi", key: "wifi" },
  { icon: Tv, label: "tv", key: "tv" },
  { icon: AirVent, label: "air_conditioning", key: "air_conditioning" },
  { icon: Coffee, label: "coffee_maker", key: "coffee_maker" },
  { icon: Hotel, label: "room_service", key: "room_service" },
];

const AmenityItem = ({ Icon, label }: { Icon: LucideIcon; label: string }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-700">
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="text-base">{label}</span>
    </div>
  );
};
const PolicyRow = ({
  icon: Icon,
  title,
  details,
}: {
  icon: LucideIcon;
  title: string;
  details: string;
}) => (
  <div className="flex py-4 border-b last:border-b-0">
    <div className="flex items-start w-1/3 min-w-[180px] space-x-3 pr-4">
      <Icon className="w-5 h-5 text-gray-700 mt-0.5" />
      <span className="font-semibold text-gray-800 whitespace-nowrap">
        {title}
      </span>
    </div>

    <div className="flex-1 text-gray-600 leading-relaxed whitespace-pre-line">
      {details}
    </div>
  </div>
);
export default function RoomDescription() {
  const t = useTranslations();
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);

  // Booking widget data
  const checkInDate = "08/14/2025";
  const checkOutDate = "08/19/2025";
  const roomsGuests = "1 room, 2 adults";
  const policiesData = [
    {
      icon: CalendarCheck,
      title: t("room.policies_list.check_in_title"),
      details: t("room.policies_list.check_in_details"),
    },
    {
      icon: CalendarX,
      title: t("room.policies_list.check_out_title"),
      details: t("room.policies_list.check_out_details"),
    },
    {
      icon: FileText,
      title: t("room.policies_list.cancellation_title"),
      details: t("room.policies_list.cancellation_details"),
    },
    {
      icon: Users,
      title: t("room.policies_list.children_beds_title"),
      details: t("room.policies_list.children_beds_details"),
    },
    {
      icon: Baby,
      title: t("room.policies_list.age_restriction_title"),
      details: t("room.policies_list.age_restriction_details"),
    },
    {
      icon: Moon,
      title: t("room.policies_list.quiet_hours_title"),
      details: t("room.policies_list.quiet_hours_details"),
    },
    {
      icon: Cigarette,
      title: t("room.policies_list.smoking_title"),
      details: t("room.policies_list.smoking_details"),
    },
    {
      icon: PawPrint,
      title: t("room.policies_list.pets_title"),
      details: t("room.policies_list.pets_details"),
    },
  ];
  return (
    <section className="container mx-auto md:py-10 py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* DESCRIPTION SECTION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
              {t("room.description")}
            </h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">
                {t("room.hotel_size")}
              </span>
              <br />
              <span className="font-semibold text-gray-800">
                {t("room.elegance_title")}
              </span>
              <br />
              {t("room.description_short")}
            </p>
            {/* Show More Dialog */}
            <Dialog open={descriptionOpen} onOpenChange={setDescriptionOpen}>
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
                <div className="space-y-4 text-gray-700">
                  <p>
                    <span className="font-semibold text-gray-800">
                      {t("room.hotel_size")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      {t("room.elegance_title")}
                    </span>
                    <br />
                    {t("room.description_full")}
                  </p>
                  <p>{t("room.description_extra")}</p>
                </div>
              </DialogContent>
            </Dialog>
          </section>

          {/* AMENITIES SECTION */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {t("room.amenities")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
              {amenities.slice(0, 5).map((item, index) => (
                <AmenityItem
                  key={index}
                  Icon={item.icon}
                  label={t(`room.amenities_list.${item.key}`)}
                />
              ))}
            </div>

            {/* Show All Amenities Dialog */}
            <Dialog open={amenitiesOpen} onOpenChange={setAmenitiesOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="mt-6 text-primary border-primary hover:bg-green-50"
                >
                  {t("room.show_all_amenities", { count: amenities.length })}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {t("room.all_amenities")}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  {amenities.map((item, index) => (
                    <AmenityItem
                      key={index}
                      Icon={item.icon}
                      label={t(`room.amenities_list.${item.key}`)}
                    />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg sticky top-8">
            <div className="flex justify-between space-x-2 mb-4">
              <div className="flex-1 p-3 border rounded-lg">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {t("room.check_in")}
                </div>
                <p className="font-bold text-gray-900">{checkInDate}</p>
              </div>

              <div className="flex-1 p-3 border rounded-lg">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  {t("room.check_out")}
                </div>
                <p className="font-bold text-gray-900">{checkOutDate}</p>
              </div>
            </div>

            <div className="p-3 border rounded-lg mb-6">
              <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                <Hotel className="w-4 h-4 mr-1" />
                {t("room.rooms_guests")}
              </div>
              <p className="font-bold text-gray-900">{roomsGuests}</p>
            </div>

            <Button className="w-full text-white font-semibold py-2">
              {t("room.show_rooms")}
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mb-1">{t("room.policies")}</h2>
        <p className="text-sm mb-6">{t("room.policies_subtitle")}</p>

        <div className="p-4 border rounded-xl shadow-sm bg-white">
          {policiesData.map((policy, index) => (
            <PolicyRow
              key={index}
              icon={policy.icon}
              title={policy.title}
              details={policy.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
