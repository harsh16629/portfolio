import Image from 'next/image'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
  { name: 'Brain metastasis segmentation using Deep Learning', description: 'Comparing Deep Learning architectures for brain MRI metastasis segmentation.', image: '/images/brain.svg', link: "https://github.com/harsh16629/brain-MRI-metastasis-segmentation-using-deep-learning" },
  { name: 'Portfolio Website', description: 'A responsive portfolio for a lawyer', image: '/images/law2.svg', link: "#" },
  { name: 'Feed Optimizer', description: 'Automated script to reimagine your social media feed', image: '/images/social-media.svg', link:"https://github.com/harsh16629/Feed-Optimizer" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <Image src={project.image} alt={project.name} width={300} height={200} className="w-full" />
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={project.link}>
                <Button variant="outline">View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

