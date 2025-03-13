"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { X, Upload, Github, Linkedin, Twitter, Send, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ProjectSubmissionFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSubmissionForm({ isOpen, onClose }: ProjectSubmissionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const formik = useFormik({
    initialValues: {
      projectName: "",
      description: "",
      githubUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
      telegramUrl: "",
    },
    validationSchema: Yup.object({
      projectName: Yup.string().required("Project name is required"),
      description: Yup.string().required("Description is required"),
      githubUrl: Yup.string()
        .url("Must be a valid URL")
        .required("GitHub repository URL is required")
        .matches(/^https?:\/\/(www\.)?github\.com\/[\w-]+\/[\w-]+\/?$/, "Must be a valid GitHub repository URL"),
      linkedinUrl: Yup.string().url("Must be a valid URL"),
      twitterUrl: Yup.string().url("Must be a valid URL"),
      telegramUrl: Yup.string().url("Must be a valid URL"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", { ...values, images: uploadedImages })

      // Reset form
      formik.resetForm()
      setUploadedImages([])
      setIsSubmitting(false)
      onClose()
    },
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newImages: string[] = []

      Array.from(files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string)
            if (newImages.length === files.length) {
              setUploadedImages([...uploadedImages, ...newImages])
            }
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-gray-900 border-gray-800 text-white sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
            Submit Your Project
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Share your project with the Telegram community.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={formik.handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="projectName">Project Name *</Label>
            <Input
              id="projectName"
              name="projectName"
              placeholder="My Awesome Project"
              className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.projectName}
            />
            {formik.touched.projectName && formik.errors.projectName ? (
              <div className="text-red-500 text-sm">{formik.errors.projectName}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your project in detail..."
              className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white h-32"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="githubUrl">GitHub Repository URL *</Label>
            <div className="flex">
              <div className="bg-gray-800 border border-gray-700 rounded-l-md flex items-center px-3">
                <Github className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                id="githubUrl"
                name="githubUrl"
                placeholder="https://github.com/username/repo"
                className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white rounded-l-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.githubUrl}
              />
            </div>
            {formik.touched.githubUrl && formik.errors.githubUrl ? (
              <div className="text-red-500 text-sm">{formik.errors.githubUrl}</div>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label>Project Media</Label>
            <div
              className="border-2 border-dashed border-gray-700 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-500 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-gray-400 text-center">Upload screenshots or images (drag & drop or click)</p>
              <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 10MB</p>
            </div>

            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-video rounded-md overflow-hidden bg-gray-800 relative">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Upload ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeImage(index)
                        }}
                        className="absolute top-1 right-1 bg-gray-900/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4 text-gray-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Social Links</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn</Label>
                <div className="flex">
                  <div className="bg-gray-800 border border-gray-700 rounded-l-md flex items-center px-3">
                    <Linkedin className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="linkedinUrl"
                    name="linkedinUrl"
                    placeholder="https://linkedin.com/in/username"
                    className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white rounded-l-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.linkedinUrl}
                  />
                </div>
                {formik.touched.linkedinUrl && formik.errors.linkedinUrl ? (
                  <div className="text-red-500 text-sm">{formik.errors.linkedinUrl}</div>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitterUrl">Twitter</Label>
                <div className="flex">
                  <div className="bg-gray-800 border border-gray-700 rounded-l-md flex items-center px-3">
                    <Twitter className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="twitterUrl"
                    name="twitterUrl"
                    placeholder="https://twitter.com/username"
                    className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white rounded-l-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.twitterUrl}
                  />
                </div>
                {formik.touched.twitterUrl && formik.errors.twitterUrl ? (
                  <div className="text-red-500 text-sm">{formik.errors.twitterUrl}</div>
                ) : null}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="telegramUrl">Telegram</Label>
                <div className="flex">
                  <div className="bg-gray-800 border border-gray-700 rounded-l-md flex items-center px-3">
                    <Send className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="telegramUrl"
                    name="telegramUrl"
                    placeholder="https://t.me/username"
                    className="bg-gray-800 border-gray-700 focus:border-cyan-500 text-white rounded-l-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telegramUrl}
                  />
                </div>
                {formik.touched.telegramUrl && formik.errors.telegramUrl ? (
                  <div className="text-red-500 text-sm">{formik.errors.telegramUrl}</div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !formik.isValid}
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Project"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

