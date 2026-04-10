// import Banner from "@/components/home/banner";
import ChooseRoom from "@/components/home/choose-room";
import CustomerReviews from "@/components/home/customer-reviews";
import Hero from "@/components/home/hero";
import NewsletterFooter from "@/components/home/newsletter";
import SuiteParkIntro from "@/components/home/suite-park-info";
import TopRooms from "@/components/home/top-rooms";
import TourCategoryGallery from "@/components/home/tour-category-gallery";
import WhyUs from "@/components/home/why-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ChooseRoom />
      <SuiteParkIntro />
      <TourCategoryGallery />
      {/* <Banner /> */}
      <TopRooms />
      <CustomerReviews />
      <NewsletterFooter />
    </>
  );
}
