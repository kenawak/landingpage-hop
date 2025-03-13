"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Github, Send, Twitter, Linkedin, Filter, ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/types"
import { projectsData } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ExploreProjectsProps {
  onProjectClick: (project: Project) => void
}

function ExploreProjects({ onProjectClick }: ExploreProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  // Extract all unique categories from project data
  const categories = ["all", ...Array.from(new Set(projectsData.flatMap((project) => project.tags)))]

  useEffect(() => {
    let results = projectsData

    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      results = results.filter((project) => project.tags.includes(selectedCategory))
    }

    setFilteredProjects(results)
  }, [searchTerm, selectedCategory])

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6)
  }

  return (
    <section className="py-20 bg-gray-950" id="explore">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
          Explore Projects
        </h2>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search projects by name, tags, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 focus:border-cyan-500 text-white"
              />
            </div>

            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-gray-200">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-gray-200">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="hover:bg-gray-700">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white p-2"
              >
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found matching your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="text-cyan-400 hover:text-cyan-300 mt-2"
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(0, visibleProjects).map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer group"
                  onClick={() => onProjectClick(project)}
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-800 text-xs rounded-md text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2 border-t border-gray-800">
                      {project.social.github && (
                        <a
                          href={project.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length > visibleProjects && (
              <div className="mt-10 text-center">
                <Button
                  onClick={loadMore}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-5"
                >
                  Load More Projects
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export { ExploreProjects }