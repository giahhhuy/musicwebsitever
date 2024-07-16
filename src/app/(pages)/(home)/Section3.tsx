import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { dbDatabase } from "@/app/firebaseConfig";
import { ICardItem } from "@/app/interface/ICardItem";
import { onValue, ref } from "firebase/database";

const getDataSingers = async () => {
  const songRef = ref(dbDatabase, "singers");


  const result: any = await new Promise((resolve) => {
      onValue(songRef, (snapshot) => {
        const data: any[] = [];

      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        data.push({
           id: childKey,
           link: `/singers/${childKey}`,
           ...childData
           
        });
        console.log(childKey);
        console.log(childData);
      });
      resolve(data.slice(0,5));
      
    });
  }) 

  return result;
}

export default async function Section3() {
    const dataSingers: any[] = await getDataSingers();
    return (
        <>
            <div className="mt-[30px]">
              <Title text="Ca Sĩ Nổi Bật" />
              <CardList data={dataSingers} />
          </div>
        </>
    )
}