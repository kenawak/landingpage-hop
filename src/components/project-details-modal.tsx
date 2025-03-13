"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { Project } from "@/lib/types"
import { Github, Star, GitFork, Bug, Send, Twitter, Linkedin, X, ExternalLink } from "lucide-react"

interface ProjectDetailsModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock GitHub stats - in a real app, this would come from GitHub API
  const githubStats = {
    stars: 128,
    forks: 35,
    issues: 12,
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={project.gallery && project.gallery.length > 0 ? project.gallery[currentImageIndex] : project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full text-gray-300 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-800/80 text-xs rounded-md text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* GitHub Stats */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-white">{githubStats.stars}</span>
              <span className="text-gray-400 text-sm">stars</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="h-5 w-5 text-green-400" />
              <span className="text-white">{githubStats.forks}</span>
              <span className="text-gray-400 text-sm">forks</span>
            </div>
            <div className="flex items-center gap-2">
              <Bug className="h-5 w-5 text-red-400" />
              <span className="text-white">{githubStats.issues}</span>
              <span className="text-gray-400 text-sm">issues</span>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About the Project</h3>
            <p className="text-gray-300 whitespace-pre-line">{project.description}</p>
          </div>

          {/* Media Gallery */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Project Gallery</h3>
              <div className="grid grid-cols-4 gap-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index ? "border-cyan-500" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-16 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-sm rounded-md text-cyan-300 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.social.github && (
              <a
                href={project.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#171515] hover:bg-[#2b2b2b] text-white px-4 py-2 rounded-md flex items-center transition-colors"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </a>
            )}

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Demo
            </a>

            {project.social.telegram && (
              <a
                href={project.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0088cc] hover:bg-[#0099ee] text-white px-4 py-2 rounded-md flex items-center transition-colors"
              >
                <Send className="mr-2 h-5 w-5" /> Contact Developer
              </a>
            )}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 pt-4 border-t border-gray-800">
            {project.social.github && (
              <a
                href={project.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.social.telegram && (
              <a
                href={project.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            )}
            {project.social.twitter && (
              <a
                href={project.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {project.social.linkedin && (
              <a
                href={project.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

