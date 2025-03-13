"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectSubmissionForm } from "@/components/project-submission-form"
import { ExploreProjects } from "@/components/explore-projects"
import { Footer } from "@/components/footer"
import { ProjectDetailsModal } from "@/components/project-details-modal"
import type { Project } from "@/lib/types"

export function HomePage() {
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header onSubmitClick={() => setIsSubmitFormOpen(true)} />

      <HeroSection onSubmitClick={() => setIsSubmitFormOpen(true)} />

      <ExploreProjects onProjectClick={(project) => setSelectedProject(project)} />

      <Footer />

      <ProjectSubmissionForm isOpen={isSubmitFormOpen} onClose={() => setIsSubmitFormOpen(false)} />

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

