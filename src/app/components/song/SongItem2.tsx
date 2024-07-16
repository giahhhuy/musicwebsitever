/* eslint-disable @next/next/no-img-element */
import { ISongItem } from "@/app/interface/ISongItem";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";

export default function SongItem2(props: ISongItem) {
    const { 
        id = "",
        image = "",
        title = "",
        singer = "",
        time = ""
    } = props;


    return (
        <>
      <div className="bg-[#212121] flex items-center justify-between py-[10px] px-[18px] rounded-[15px]">
        <div className="w-[40%] flex items-center">
          <ButtonPlay {...props} className="w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px]"/>
          <div className="mx-[12px] w-[42px] aspect-square rounded-[8px] truncate">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white">
            <Link href={`/song/${id}`}>
                {title}
            </Link>
          </div>
        </div>

        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">
            {singer}
          </div>
        </div>

        <div className="w-[30%] flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {time}
          </div>
          <button className="text-[20px] text-white">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
    )
}