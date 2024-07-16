import { onValue, ref } from "firebase/database";
import { dbDatabase } from "../firebaseConfig";


export const getSingers = async (max?:number) => {
    const songRef = ref(dbDatabase, "singers");
  
  
    const result: any = await new Promise((resolve) => {
        onValue(songRef, (snapshot) => {
          let data: any[] = [];
  
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
        if(max) {
            data = data.slice(0,max);
        }
        resolve((data));
        
      });
    }) 
  
    return result;
  }

  export const getSingerDetail= async (id: string) => {
    const singerRef = ref(dbDatabase, "singers/" + id);
  
  
    const result: any[] = await new Promise((resolve: any) => {
        onValue(singerRef, (snapshot) => {
  
          const childKey = snapshot.key;
          const childData = snapshot.val();
          const data: any = {
              id: childKey,
              ...childData
            };
            resolve(data);
          
        
      });
    }) 
  
    return result;
  }