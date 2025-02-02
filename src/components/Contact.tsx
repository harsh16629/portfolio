"use client";
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prevFormData: FormData) => ({ ...prevFormData, [id]: value }));
  }

  interface EmailJSResponse {
    text: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    emailjs.send('service_sk6etqc', 'Gmail', formData, 'AF1AGvRn3_JAmJC5X')
      .then((result: EmailJSResponse) => {
        console.log(result.text);
      }, (error: EmailJSResponse) => {
        console.log(error.text);
      });
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-12 mr-20 text-right">Get In Touch</h2>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <Input id="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <Input id="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} value={formData.message} onChange={handleChange} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
            <p className="text-center mt-8">
              Or get in touch via <span className="font-bold text-primary">harshsingh.work01@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

