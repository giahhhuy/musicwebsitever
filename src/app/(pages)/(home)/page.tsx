/* eslint-disable @next/next/no-img-element */
import BannerHome from "@/app/components/banner/BannerHome";
import CardList from "@/app/components/card/CardList";
import SongItem from "@/app/components/song/SongItem";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { ICardItem } from "@/app/interface/ICardItem";
import { ISongItem } from "@/app/interface/ISongItem";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default function HomePage() {

  
  return (
    <>
      {/* Section 1: Banner Home + Nge Nhiều */}
          <Section1 />
      {/* Section 2: Danh mục nổi bật  */}
          <Section2 />
      {/* Section 3: Ca sĩ nổi bật */}
          <Section3 />
    </>
  );
}
