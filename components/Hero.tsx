import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row xl:flex-nowrap">
        <div className="hero-map" />

        {/* left side */}

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image 
            src="/planet.svg"
            alt="A planet with 4 orbiting astral bodies"
            width={50}
            height={50}
            className="absolute left-[5px] top-[-30px] w-10 lg:w-[50px]"
            />
            <h1 className="bold-52 lg:bold-88 text-white">Celestial Routes</h1>
            <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
            Ready to leave Earth behind? With Celestial Routes, 
            we turn the dream of space travel into reality, 
            guiding you on a journey beyond the stars.
             Join us as we redefine the limits of exploration.
            </p>

            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_, index) =>
                    <Image
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                    />
                    )}
                </div>

                <p className="bold-16 lg:bold-20 text-white">
                    5.2B
                    <span className="regular-16 lg:regular-20 ml-1">Stellar Reviews</span>
                </p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
                <Button 
                type="button"
                title="Download App"
                variant="btn_blue"
                />
                
                <Button 
                type="button"
                title="How we work"
                icon="/play.svg"
                variant="btn_white_text"
                />
            </div>
        </div>

        <div className="relative flex flex-1 items-start">
        <picture className="w-full">
            <source srcSet="/hero-s.webp" media="(max-width: 640px)" />
            <source srcSet="/hero-m.webp" media="(max-width: 1024px)" />
            <Image 
            src="/hero-xl.webp"
            alt="Fantasy landscape"
            layout="responsive"
            width={500}
            height={300}
            className="object-cover w-full h-full xl:rounded-5xl"
            priority
  />
</picture>
        </div>
    </section>
  )
}

export default Hero