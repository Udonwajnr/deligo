import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId:'6ju1uqzn',
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-08-09"
})
const builder = imageUrlBuilder(client)

export const urlFor = source=>builder.image(source);

export default client
