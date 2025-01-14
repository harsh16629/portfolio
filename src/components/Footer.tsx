import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 px-6 bg-background border-t border-border/40">
      <div className="container max-w-8xl mx-auto flex justify-between items-center">
        <p className="flex items-center">
          Made with <Heart className="w-4 h-4 ml-2 mr-2 text-red-800" /> by Harsh.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/harsh16629" className="hover:text-primary transition-colors"><Github /></a>
          <a href="https://www.linkedin.com/in/harsh-singh-work/" className="hover:text-primary transition-colors"><Linkedin /></a>
          
        </div>
      </div>
    </footer>
  )
}

