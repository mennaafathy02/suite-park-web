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

export default function RoomInfo() {
  const t = useTranslations();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hotelName = "Hotel Arts Barcelona";
  const hotelLocation = "Barcelona, Spain";
  const rating = 5; // number of stars

  // Placeholder images (replace with your actual image paths/URLs)
  const images = [
    { src: "/imgs/room.jpg", alt: "Hotel main room view" },
    { src: "/imgs/room-1.jpg", alt: "Hotel lounge area" },
    { src: "/imgs/room-2.jpg", alt: "Hotel bedroom" },
    { src: "/imgs/room-3.jpg", alt: "Hotel kitchenette" },
    { src: "/imgs/room-4.jpg", alt: "Another hotel room view" },
    { src: "/imgs/room-5.jpg", alt: "Hotel bathroom" },
    { src: "/imgs/room-6.jpg", alt: "Hotel balcony view" },
    { src: "/imgs/room-7.jpg", alt: "Hotel amenities" },
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section className="container mx-auto md:py-10 py-6 space-y-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            {hotelName}
            <span className="ml-3 flex gap-2">
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </span>
          </h1>
          <p className="text-base text-gray-500">{hotelLocation}</p>
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

      {/* NAVIGATION TABS (Using shadcn Tabs) */}
      {/* <div className="border-b mb-6">
        <Tabs defaultValue="overview">
          <TabsList className="bg-transparent h-auto p-0 justify-start space-x-4">
            {["Overview", "Amenities", "Location", "Policies", "Rooms", "Reviews"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className={`py-3 px-1 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 font-medium text-gray-700 hover:text-green-600 transition-colors ${
                  tab === "Overview" ? "text-green-600 border-b-2 border-green-600" : ""
                }`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(index + 1)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              {index === 3 && (
                <div
                  className="absolute inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(0);
                  }}
                >
                  <span className="text-white text-lg font-bold flex items-center">
                    <span className="me-1">
                      <Images />
                    </span>
                    {images.length}+
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery Dialog with Carousel */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent dir={dir} className="max-w-5xl max-h-[90vh] p-0">
          <DialogHeader className="p-8 pb-0">
            <DialogTitle className="rtl:text-start">
              {t("room.image_gallery")}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-4">
            <Carousel
              opts={{
                startIndex: currentImageIndex,
                loop: true,
              }}
              className="w-full"
              dir={dir}
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={800}
                        className="w-full h-full object-cover"
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
    </section>
  );
}
