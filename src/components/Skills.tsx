import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Database, BrainCog, PanelTop } from 'lucide-react'

const skills = [
  { name: 'AI Tools', icon: BrainCog, description: 'OpenAI APIs, TensorFlow, Python, PyTorch' },
  { name: 'Frontend Development', icon: Code, description: 'HTML, CSS, JavaScript, React, Next.js' },
  { name: 'UI/UX Design', icon: Palette, description: 'Figma, Adobe XD, Responsive Design' },
  { name: 'Backend Development', icon: Database, description: 'Node.js, MongoDB, SQL' },
  { name: 'Web Automation', icon: PanelTop, description: 'Selenium, Beautifulsoup4, Playwright' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/50">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <skill.icon className="mr-2 h-6 w-6" />
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

