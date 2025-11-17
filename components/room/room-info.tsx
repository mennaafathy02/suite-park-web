import { Heart, Images, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function RoomInfo() {
  const hotelName = "Hotel Arts Barcelona";
  const hotelLocation = "Barcelona, Spain";
  const rating = 5; // number of stars

  // Placeholder images (replace with your actual image paths/URLs)
  const images = {
    main: "/imgs/room.jpg",
    img2: "/imgs/room.jpg",
    img3: "/imgs/room.jpg",
    img4: "/imgs/room.jpg",
    img5: "/imgs/room.jpg",
  };

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
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <Image
            src={images.main}
            alt="Hotel main room view"
            width={800} // Set appropriate dimensions
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={images.img2} // Replace with actual image source
              alt="Hotel lounge area"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={images.img4}
              alt="Hotel kitchenette"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={images.img4} // Replace with actual image source
              alt="Hotel kitchenette"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3">
            <Image
              src={images.img5}
              alt="Another hotel room view"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center">
              <span className="text-white text-lg font-bold flex items-center">
                <span className="me-1">
                  <Images />
                </span>{" "}
                10+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
