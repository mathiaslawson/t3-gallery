import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";



export const dynamic = "force-dynamic";



export default async function HomePage() {

const images = await getMyImages();

function Images(){
  return (
    <div className="flex flex-wrap gap-4 justify-center">
    
    {
      images.map((image, key)=>(
        <div key={image.id + "-" + key} className="w-48 h-48 flex flex-col ">
          <Link href={`/img/${image.id}`}>
          <Image src={image.url} alt="alt-image" 
          style={{objectFit: 'fill'}}
          width={192}
          height={192} />
          </Link>
          <div>{image.name}</div>     
        </div>
      ))
    }
  </div>
  )
}


  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center translate-y-1/2">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
     
    </main>
  );
}
