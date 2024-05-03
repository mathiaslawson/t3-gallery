import Link from "next/link";
import { db } from "~/server/db";



export const dynamic = "force-dynamic";


export default async function HomePage() {


const images = await db.query.images.findMany({
   orderBy: (model, {asc}) => asc(model.id)
})

  console.log(images, 'postst')

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
    
        {
          images.map((image, key)=>(
            <div key={image.id + "-" + key} className="w-48 flex flex-col">
              <img src={image.url} />
              <div>{image.name}</div>

            </div>
          ))
        }
      </div>
    </main>
  );
}
