import { Carousel } from './Carousel'


const IMAGES = [
  "/landscape-xl-1.webp",
  "/landscape-xl-2.webp",
  "/landscape-xl-3.webp",
  "/landscape-xl-4.webp"
]

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10
     lg:m-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex w-full items-start justify-start gap-8 overflow-x-auto">
      <Carousel imageUrls={IMAGES} />
      </div>
     </section>
  )
}

export default Camp