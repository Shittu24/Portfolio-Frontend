import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "zb4l0zpb",
    dataset: "production",
    apiVersion:"2022-02-01",
    token: "skeXs3xa0g2gqshLt2Udr2m1OLpRyNa7qyiyqs62S1D53rmVkJ1rPOfRC7xJMszINZSS5PjldtzTMfyBxqKWPHb9OvQxR2tdmZsKoUsvUgFMyTlxoe8bq3uOEdxy7RWi43WJLsHoa4IzykqGlOrb6hd3rnefSxwHEfYNckaLR4WjoKCBWyQC",
    useCdn: true
})

const builder=imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)