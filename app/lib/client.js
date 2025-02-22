import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client'; 


 export const client = sanityClient({
    projectId: '0vk11b4d',
    dataset: 'production',
    apiVersion: '2025-01-29',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source).url();