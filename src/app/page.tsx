import Link from "next/link";


const mockURLs = [
  "https://utfs.io/f/7fa16f84-65e7-48b7-8a3a-6991dc0a2a69-vnwnwp.jpg", 
  "https://utfs.io/f/1236591a-868c-4cd8-81a2-0fff23da844b-cu4xig.jpg", 
  "https://utfs.io/f/d298e4d5-7f62-466e-85e4-1680578d0cc7-rz9wig.jpg",
  "https://utfs.io/f/15e51510-7cff-4481-9193-3f9cd8287f73-h1r3d6.jpg"
]


const mockImages = mockURLs.map((url, index)=> ({
  id: index + 1, 
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages , ...mockImages , ...mockImages].map((image, key)=>(
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} />

            </div>
          ))
        }
      </div>
    </main>
  );
}
