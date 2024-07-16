import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { getSongList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interface/ISongItem";

export default async function Section3(props: { categoryId: string}) {
    const {
      categoryId
    } =  props;


  const data: any[] = await getSongList(undefined, categoryId);


    return (
        <>
            <div className="mt-[30px]">
                <Title text="Bài Hát Khác Trong Albums"/>
                <SongList2 data={data} />
            </div>
        </>
    )
}