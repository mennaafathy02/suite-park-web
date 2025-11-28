import NewsletterFooter from "@/components/home/newsletter";
import PlacesList from "@/components/rooms/places-list";
// import { useTranslations } from "next-intl";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || "";

  return (
    <>
      <PlacesList searchQuery={query} />
      <NewsletterFooter />
    </>
  );
}
