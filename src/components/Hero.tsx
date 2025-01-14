import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
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
        <h1 className="text-8xl font-bold mb-6">Harsh Singh</h1>
        <h2 className="text-4xl font-semibold mb-4">AI Engineer | Web Developer | Web Automation </h2>
        <p className="text-xl mb-8">Crafting gorgeous and practical web experiences</p>
        <Button size="lg">
          View My Work
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <Image
            src="/images/hero_img2.svg"
            alt="Right hero image"
            width={300}
            height={300}
            className="rounded-full"
          />
          </div>
          </div>
    </section>
  )
}

