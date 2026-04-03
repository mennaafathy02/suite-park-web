import PlacesList from "@/components/rooms/places-list";

interface RoomsPageProps {
  searchParams: Promise<{
    type?: string;
  }>;
}

export default async function Rooms({ searchParams }: RoomsPageProps) {
  const params = await searchParams;
  const typeFilter = params.type || "";

  return (
    <>
      <PlacesList typeFilter={typeFilter} />
    </>
  );
}
