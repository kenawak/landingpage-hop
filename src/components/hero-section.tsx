"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import { featuredProjects } from "@/lib/data"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface HeroSectionProps {
  onSubmitClick: () => void
}

export function HeroSection({ onSubmitClick }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Hero text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 leading-tight">
              Showcase Your Projects to the World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl lg:max-w-none">
              Share your work with the Telegram community and get the recognition you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onSubmitClick}
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white border-0 py-6 px-8 text-lg"
              >
                Submit Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="https://github.com/kenawak/homeofproject">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-gray-300 bg-gray-800 hover:bg-grey-700  py-6 px-8 text-lg"
                >
                  <Github className="mr-2 h-5 w-5" /> View on GitHub
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured projects carousel */}
          {mounted && (
            <div className="flex-1 w-full">
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl p-6 border border-gray-800">
                <h2 className="text-xl font-semibold mb-4 text-center">Featured Projects</h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {featuredProjects.map((project) => (
                      <CarouselItem key={project.id}>
                        <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 h-full">
                          <div className="relative h-48 w-full">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-medium mb-2 text-cyan-300">{project.title}</h3>
                            <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {project.tags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-700 text-xs rounded-md text-gray-300">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious className="relative static transform-none translate-y-0 data-[hidden=true]:hidden" />
                    <CarouselNext className="relative static transform-none translate-y-0 data-[hidden=true]:hidden" />
                  </div>
                </Carousel>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-center">
          {[
            { value: "20+", label: "Projects" },
            { value: "120+", label: "Developers" },
            { value: "1K+", label: "Views" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

