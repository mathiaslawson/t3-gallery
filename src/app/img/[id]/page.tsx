import { getImage } from "~/server/queries";

export default async function PhotoModal({
    params: { id: photoId },
  }: {
    params: { id: string };
  }) {


    const imageIdAsNumber = Number(photoId)
    if(Number.isNaN(imageIdAsNumber)) throw new Error("Invalid photo id")

    const image = await getImage(imageIdAsNumber)


  return (
    <div className="flex justify-center items-center">
      <img src={image.url} alt="new alt"></img>

    </div>
  )
  }