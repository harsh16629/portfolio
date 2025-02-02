import Image from 'next/image'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const projects = [
  { name: 'Hybrid Recommendation System', description: 'Hybrid recommendation system that combines collaborative filtering, content-based filtering, and real-time processing to deliver personalized product recommendations.', image: '/images/shopping.svg', link:"https://github.com/harsh16629/Hybrid-Recommendation-System-with-Machine-Learning" },
  { name: 'Brain Metastasis Segmentation With Deep Learning', description: 'Comparing Deep Learning architectures to enhance the accuracy of identifying and segmenting brain metastases.', image: '/images/brain.svg', link: "https://github.com/harsh16629/brain-MRI-metastasis-segmentation-using-deep-learning" },
  { name: 'Virtual Android Simulator', description: 'A Python script that simulates a virtual Android system capable of running basic tasks such as installing, retrieving and logging information about an app.', image: '/images/android.svg', link:"https://github.com/harsh16629/Virtual-android-system-simulation-using-python" },
  { name: 'Portfolio Website', description: 'A responsive portfolio for a lawyer', image: '/images/law2.svg', link: "https://lawport.vercel.app/" },
  { name: 'Feed Optimizer', description: 'Automated script to reimagine your social media feed', image: '/images/social-media.svg', link:"https://github.com/harsh16629/Feed-Optimizer" },
  { name: 'Django App Manager', description: 'A simple backend app created using Django and Postgresql for basic app management.', image: '/images/backend.svg', link:"https://github.com/harsh16629/django-app-manager" }
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

