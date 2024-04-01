import Hero from "@/components/layout/Hero";
import Content1 from "@/components/layout/Content1";
import BrandGallery from "@/components/layout/brandGallery";
import Content2 from "@/components/layout/Content2";
import ScrollNav from "@/components/items/scrollAnimation";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollNav/>
      <BrandGallery />
      <Content1 />
      <Content2/>
    </>
  );
}
