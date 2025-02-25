import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';

export async function getMyImages(){
    const user = auth();

    // if (!user.userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (model, {eq}) => eq(model.userId, user?.userId),
        orderBy: (model, {asc}) => asc(model.id)
     });

     return images;
     
}


export async function getImage(id: number){
   

    const image = await db.query.images.findFirst({
        where: (model, {eq}) => eq(model.id, id),
        orderBy: (model, {asc}) => asc(model.id)
     });

     if(!image) throw new Error("Image not found");

     return image;
     
}