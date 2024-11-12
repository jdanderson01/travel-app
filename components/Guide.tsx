import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image 
        src="/planet.svg"
        alt="Planet"
        width={50}
        height={50}
        />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-50">Helping you explore</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-white">Charting the Cosmos Together</h2>
          <p className="regular-16 text-white xl:max-w-[520px]">Embark on the ultimate adventure with Celestial Routes, your gateway to the stars! 
            As the world’s most accessible space agency, we’re here to make space travel a reality
             for everyone—from curious dreamers to seasoned explorers. With expert-led routes, 
             real-time cosmic navigation, and immersive training, we guide you every step of the 
             way on a journey beyond Earth’s bounds. Let’s redefine what’s possible, 
             together—because your next destination is written in the stars!</p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <picture>
          {/* Large screen image */}
          <source srcSet="/space-cockpit-xl.webp" media="(min-width: 1024px)" />
          {/* Medium screen image */}
          <source srcSet="/space-cockpit-m.webp" media="(min-width: 640px)" />
          {/* Small screen image */}
          <source srcSet="/space-cockpit-s.webp" media="(max-width: 639px)" />
          {/* Default image fallback for browsers that don’t support <source> */}
          <Image 
            src="/space-cockpit-xl.webp" 
            alt="Family sitting next to a spaceship window" 
            layout="responsive" 
            width={1024} 
            height={800} 
            className="object-cover object-center w-full h-auto xl:rounded-5xl"
          />
        </picture>
      </div>
    </section>
  )
}

export default Guide