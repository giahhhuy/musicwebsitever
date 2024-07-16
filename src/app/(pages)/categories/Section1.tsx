import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { getCategories } from "@/app/helpers/getCategories";




export default async function Section1() {
  const dataCategories: any[] = await getCategories(5);
    return (
        <>
            <div className="mt-[30px]">
              <Title text="Danh Sách Albums" />
              <CardList data={dataCategories} />
          </div>
        </>
    )
}