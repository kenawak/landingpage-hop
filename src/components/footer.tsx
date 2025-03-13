import { Link } from "react-router-dom"
import { Github, Send, Twitter, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
              Home of Projects
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A Telegram mini app that enables developers to showcase their projects to the world. Share your work,
              connect with other developers, and get the recognition you deserve.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Send className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Telegram Channel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Home of Projects. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by the Home of Projects team
          </p>
        </div>
      </div>
    </footer>
  )
}

