"use client"


import { ISongItem } from "@/app/interface/ISongItem";
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: ISongItem) {
    const {
        id = "",
        image = "",
        title = "",
        singer = "",
        listen = 0,
        audio = "",
        className = ""

    } = props;

    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");    
            
        if(elementPlayAudio) {
            // Thêm id bài hát vào elementPlayAudio
            elementPlayAudio.setAttribute("song-id", id);

            //Phat Nhac
            const elementAudio = elementPlayAudio.querySelector(".inner-audio");
            const elementSource = elementAudio.querySelector(".inner-source");
            elementSource.src = audio
            elementAudio.load();
            elementAudio.play();

            // Lay ra tong thoi gian
            const boxPlayTime: any = document.querySelector(".box-play-time");
            const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");
            const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current");
      
            elementAudio.onloadedmetadata = () => {
              const totalTime = elementAudio.duration;
              boxPlayTimeTotal.max = totalTime;
      
              // Lay ra thoi gian hien tai
              elementAudio.ontimeupdate = () => {
                const currentTime = elementAudio.currentTime;
                boxPlayTimeTotal.value = currentTime;
                const percent = currentTime * 100 / totalTime;
                boxPlayTimeCurrent.style.width = `${percent}%`;
              }
            }
      


            // An hien khoi play
            elementPlayAudio.classList.remove("hidden");

            // Hien thi anh
            const elemetImage = elementPlayAudio.querySelector(".inner-image");
            elemetImage.src = image;
            elemetImage.alt = title;

            // Hien thi ten bai hat
            const elementTitle = elementPlayAudio.querySelector(".inner-title");
            elementTitle.innerHTML = title;

            // Hien thi ten ca si
            const elementSinger = elementPlayAudio.querySelector(".inner-singer");
            elementSinger.innerHTML = singer;
            // hien thi nut play
            const boxButtonPlay = document.querySelector(".box-button-play");
            boxButtonPlay?.classList.add("play");
        }
    }
    return (
        <>
                    <button className={className}
                        onClick={handlePlay}
                        button-play=""
                    >
                      <FaPlay />
                    </button>
        </>
    )
}