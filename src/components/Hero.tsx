import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight, Link } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="container max-w-8xl mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src="/images/hero_img1.svg"
            alt="Left hero image"
            width={300}
            height={300}
            className="rounded-full"
          />
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">Harsh Singh</h1>
        <h2 className="text-2xl font-semibold mb-4">AI Engineer | Web Developer | Python Developer </h2>
        <p className="text-lg mb-8">Crafting gorgeous and practical web experiences</p>
        
        <div className="flex justify-center space-x-4">
          <Button size="lg" asChild>
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="https://github.com/harsh16629">
              View my Github
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      {/* <Image
            src="/images/hero_img2.svg"
            alt="Right hero image"
            width={300}
            height={300}
            className="rounded-full"
          /> */}
          </div>
          </div>
    </section>
  )
}

