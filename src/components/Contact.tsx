import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/footer.svg"
              alt="Contact section image"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

