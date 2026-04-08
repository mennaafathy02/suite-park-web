"use client";

import { Heart, Images, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRoomById } from "../hooks/useRoomById";
import { getImageUrl } from "@/lib/image";

export default function RoomInfo() {
  const t = useTranslations();
  const locale = useLocale();
  const { id } = useParams<{ id: string }>();
  const { data: room, isLoading } = useRoomById(id);

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const roomName = locale === "ar" ? room?.name_ar : room?.name_en;
  const roomLocation = locale === "ar" ? room?.location_ar : room?.location_en;

  // Use images from API or empty array
  const images = room?.images || [];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            {isLoading ? (
              <div className="h-8 w-48 bg-gray-200 animate-pulse rounded" />
            ) : (
              roomName
            )}
            {!isLoading && room?.stars && (
              <span className="ml-3 flex gap-1">
                {[...Array(room.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </span>
            )}
          </h1>
          <p className="text-base text-gray-500">
            {isLoading ? (
              <div className="h-4 w-32 bg-gray-200 animate-pulse rounded mt-2" />
            ) : (
              roomLocation
            )}
          </p>
        </div>

        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Heart className="h-5 w-5 text-gray-700" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Share2 className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </div>

      {/* IMAGE GRID OR SKELETON */}
      {isLoading || images.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-[400px]">
          <div className="bg-gray-300 animate-pulse rounded-lg w-full h-full" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-full" />
            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-full" />
            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-full" />
            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-full" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Main Large Image */}
          <div
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity min-h-[300px]"
            onClick={() => handleImageClick(0)}
          >
            <Image
              src={getImageUrl(images[0].path)}
              alt={images[0].name}
              fill
              className="object-cover"
            />
          </div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleImageClick(index + 1)}
              >
                <Image
                  src={getImageUrl(image.path)}
                  alt={image.name}
                  fill
                  className="object-cover"
                />
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-lg font-bold flex items-center">
                      <Images className="me-2" />
                      {images.length}+
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Gallery Dialog */}
      {images.length > 0 && (
        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent dir={dir} className="max-w-5xl max-h-[90vh]  pb-4">
            <DialogHeader className="p-8 pb-0 hidden">
              <DialogTitle className="rtl:text-start">
                {t("room.image_gallery")}
              </DialogTitle>
            </DialogHeader>
            <div className="p-6 pt-4 w-full h-full">
              <Carousel
                opts={{ startIndex: currentImageIndex, loop: true }}
                className="w-full"
                dir={dir}
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={image.id} className="">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          src={getImageUrl(image.path)}
                          alt={image.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-center text-sm text-gray-500 mt-2">
                        {index + 1} / {images.length}
                      </p>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ltr:end-4 rtl:start-4 rtl:rotate-180" />
                <CarouselNext className="ltr:start-4 rtl:end-4 rtl:rotate-180" />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
