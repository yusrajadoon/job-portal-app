"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface ApplicationDialogProps {
  open: boolean
  onClose: () => void
  jobTitle: string
}

export function ApplicationDialog({ open, onClose, jobTitle }: ApplicationDialogProps) {
  const [coverLetter, setCoverLetter] = useState("")
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, you would submit the form data to your API
    console.log({
      jobTitle,
      coverLetter,
      resume,
    })

    setIsSubmitting(false)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="resume">Resume/CV</Label>
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files?.[0] || null)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                placeholder="Tell us why you're a good fit for this position..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="min-h-[150px]"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
