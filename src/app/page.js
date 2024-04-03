import Hero from "@/components/layout/Hero";
import AboutUs from "@/components/layout/aboutUs";
import BrandGallery from "@/components/layout/brandGallery";
import LinkList from "@/components/layout/link-list";
import ScrollNav from "@/components/items/scrollAnimation";

export default function Home() {
  return (
    <>
      <Hero/>
      <ScrollNav/>
      <BrandGallery/>
      <AboutUs/>
      <LinkList/>
    </>
  );
}
