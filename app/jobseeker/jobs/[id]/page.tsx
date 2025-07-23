"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Typography, Container, Box, Paper, Chip, Divider, Button } from "@mui/material"
import { LocationOn, Business, Schedule } from "@mui/icons-material"
import { PageLayout } from "@/components/layout/page-layout"
import { ApplicationDialog } from "@/components/application-dialog"
import { dummyJobs } from "@/data/dummy-data"
import type { User, Job } from "@/types"

export default function JobSeekerJobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [job, setJob] = useState<Job | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const userRole = localStorage.getItem("userRole")

    if (!storedUser || userRole !== "jobseeker") {
      router.push("/")
      return
    }

    setUser(JSON.parse(storedUser))

    const jobId = params.id as string
    const foundJob = dummyJobs.find((j) => j.id === jobId)
    if (foundJob) {
      setJob(foundJob)
    }
  }, [params.id, router])

  const handleApply = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  if (!user || !job) {
    return null
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <PageLayout user={user}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 4, mb: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h1" component="h1" gutterBottom>
              {job.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Business sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="h4" color="text.secondary">
                  {job.company}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="body1" color="text.secondary">
                  {job.location}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Schedule sx={{ fontSize: 20, color: "text.secondary" }} />
                <Typography variant="body1" color="text.secondary">
                  Posted {formatDate(job.postedDate)}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
              <Chip label={job.type} color="primary" />
              <Chip label={job.salary} variant="outlined" />
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Button variant="contained" size="large" onClick={handleApply} sx={{ px: 4, py: 1.5 }}>
              Apply Now
            </Button>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Job Description
            </Typography>
            <Typography variant="body1" paragraph>
              {job.description}
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Requirements
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {job.requirements.map((req, index) => (
                <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                  {req}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h3" component="h2" gutterBottom>
              Benefits
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {job.benefits.map((benefit, index) => (
                <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                  {benefit}
                </Typography>
              ))}
            </Box>
          </Box>
        </Paper>
      </Container>

      <ApplicationDialog open={dialogOpen} onClose={handleCloseDialog} jobTitle={job.title} />
    </PageLayout>
  )
}
