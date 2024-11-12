"use client";

import { useState } from "react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import Image from 'next/image'

type CarouselProps = {
    imageUrls: string[]
}

export function Carousel ({ imageUrls}: CarouselProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage () {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage () {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    return <div className="relative w-full h-full flex items-center justify-center rounded-xl">
         <Image 
          src={imageUrls[imageIndex]} 
          alt="Carousel image" 
          title="Carousel image" 
          layout="responsive" 
          width={500} 
          height={300} 
          className="rounded-xl"
        />
        <button title="Left arrow" onClick={showPrevImage} className="absolute inset-y-0 left-4 text-white flex items-center"><ArrowBigLeft /></button>
        <button title="Right arrow" onClick={showNextImage} className="absolute inset-y-0 right-4 text-white flex items-center"><ArrowBigRight /></button>
    </div>
}