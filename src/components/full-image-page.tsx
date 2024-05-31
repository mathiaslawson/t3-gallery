import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id: number}) 
  {
    const image = await getImage(props.id)
  return (
      <div className="flex w-full h-full">
      <img src={image.url} alt="new" className="w-96 object-contain"></img>
      </div>
  )
  }