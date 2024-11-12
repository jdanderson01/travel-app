import { FEATURES } from "@/constants"
import Image from "next/image"

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg
    bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px] xl:mr-10 2xl:mr-20 ">
        <Image 
        src="/features.webp"
        alt="Man looking at a planet through a spaceship window"
        width={320}
        height={800} 
        className=" w-full md:w-[150px] lg:w-[350px] xl:w-[350px] 2xl:w-[350px] h-[800px] xl:rounded-5xl" />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image 
            src="/planet.svg"
            alt="Planet"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 text-white">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 text-white">
            {FEATURES.map((feature) =>(
            <FeatureItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            variant={feature.variant}
            description={feature.description}
            />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:-p7 bg-blue-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-white lg:mt-[30px]">
        {description}
      </p>
    </li>
  )
}

export default Features