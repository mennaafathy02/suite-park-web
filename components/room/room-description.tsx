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
} from "lucide-react";

const amenities = [
  { icon: Utensils, label: "Restaurant" },
  { icon: Waves, label: "Pool" },
  { icon: Dumbbell, label: "Gym" },
  { icon: ShowerHead, label: "Spa" },
  { icon: Cigarette, label: "Smoking Allowed" },
];

const AmenityItem = ({ Icon, label }: { Icon: LucideIcon; label: string }) => (
  <div className="flex items-center space-x-2 text-gray-700">
    <Icon className="w-5 h-5 text-gray-500" />
    <span className="text-base">{label}</span>
  </div>
);
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
  // Booking widget data
  const checkInDate = "08/14/2025";
  const checkOutDate = "08/19/2025";
  const roomsGuests = "1 room, 2 adults";
  const policiesData = [
    {
      icon: CalendarCheck,
      title: "Check-in",
      details:
        "From 15:00 to 18:00\nYou'll need to let the property know in advance what time you'll arrive.",
    },
    {
      icon: CalendarX,
      title: "Check-out",
      details: "From 8:00 to 11:00",
    },
    {
      icon: FileText,
      title: "Cancellation/prepayment",
      details:
        "Cancellation and prepayment policies vary according to accommodation type. Please check what condition may apply to each option when making your selection.",
    },
    {
      icon: Users,
      title: "Children and beds",
      details:
        "Child policies: children of any age are welcome. To see correct prices and occupancy information, please add the number of children in your group and their ages to your search. Cot and extra bed policies: Cots and extra beds are not available at this property.",
    },
    {
      icon: Baby,
      title: "No age restriction",
      details: "Guests of all ages are welcome.",
    },
    {
      icon: Moon,
      title: "Quiet hours",
      details: "Guests must be quiet between 22:00 and 10:00.",
    },
    {
      icon: Cigarette,
      title: "Smoking",
      details: "Smoking not allowed.",
    },
    {
      icon: PawPrint,
      title: "Pets",
      details: "Pets are not allowed.",
    },
  ];
  return (
    <section className="container mx-auto md:py-10 py-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* DESCRIPTION SECTION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Description</h2>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-gray-800">
                Hotel size 200 rooms, Arranged over 6 floors
              </span>
              <br />
              <span className="font-semibold text-gray-800">
                Barcelona elegance with 6-star service:
              </span>
              <br />
              Simply elegant in all respects, this beautiful Parisian property
              offers a wonderful location that enhances your stay. Enjoy
              spacious rooms with great amenities and 6-star service from a
              superb team dedicated to making you feel like a VIP...
            </p>
            {/* Custom Button styled for 'Show More' */}
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-green-50"
            >
              Show More
            </Button>
          </section>

          {/* AMENITIES SECTION */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4">
              {amenities.map((item, index) => (
                <AmenityItem key={index} Icon={item.icon} label={item.label} />
              ))}
            </div>

            {/* 'Show All Amenities' Button */}
            <Button
              variant="outline"
              className="mt-6 text-primary border-primary hover:bg-green-50"
            >
              Show All 10 Amenities
            </Button>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg sticky top-8">
            <div className="flex justify-between space-x-2 mb-4">
              <div className="flex-1 p-3 border rounded-lg">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-in
                </div>
                <p className="font-bold text-gray-900">{checkInDate}</p>
              </div>

              <div className="flex-1 p-3 border rounded-lg">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Check-out
                </div>
                <p className="font-bold text-gray-900">{checkOutDate}</p>
              </div>
            </div>

            <div className="p-3 border rounded-lg mb-6">
              <div className="flex items-center text-sm font-medium text-gray-500 mb-1">
                <Hotel className="w-4 h-4 mr-1" />
                Rooms and Guests
              </div>
              <p className="font-bold text-gray-900">{roomsGuests}</p>
            </div>

            <Button className="w-full text-white font-semibold py-2">
              Show Rooms
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mb-1">Policies</h2>
        <p className="text-sm mb-6">
          Lazur Hotel Apartments takes special requests - add in the next step!
        </p>

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
