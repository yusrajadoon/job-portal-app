"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Typography, Container, Box, Paper, Chip, Divider, Grid, Card, CardContent, Avatar } from "@mui/material"
import { LocationOn, Business, Schedule, Email, Phone } from "@mui/icons-material"
import { PageLayout } from "@/components/layout/page-layout"
import { dummyJobs, dummyApplicants } from "@/data/dummy-data"
import type { User, Job, Applicant } from "@/types"

export default function RecruiterJobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [job, setJob] = useState<Job | null>(null)
  const [applicants, setApplicants] = useState<Applicant[]>([])

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const userRole = localStorage.getItem("userRole")

    if (!storedUser || userRole !== "recruiter") {
      router.push("/")
      return
    }

    setUser(JSON.parse(storedUser))

    const jobId = params.id as string
    const foundJob = dummyJobs.find((j) => j.id === jobId)
    if (foundJob) {
      setJob(foundJob)
      setApplicants(dummyApplicants[jobId] || [])
    }
  }, [params.id, router])

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

  const getStatusColor = (status: Applicant["status"]) => {
    switch (status) {
      case "Applied":
        return "default"
      case "Under Review":
        return "warning"
      case "Interview":
        return "info"
      case "Rejected":
        return "error"
      default:
        return "default"
    }
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

        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            Applicants ({applicants.length})
          </Typography>

          {applicants.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              No applications yet.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {applicants.map((applicant) => (
                <Grid item xs={12} md={6} key={applicant.id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: "primary.main" }}>{applicant.name.charAt(0)}</Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h4" component="h3">
                            {applicant.name}
                          </Typography>
                          <Chip
                            label={applicant.status}
                            size="small"
                            color={getStatusColor(applicant.status)}
                            sx={{ mt: 0.5 }}
                          />
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Email sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="body2" color="text.secondary">
                          {applicant.email}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
                        <Typography variant="body2" color="text.secondary">
                          {applicant.phone}
                        </Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary">
                        Applied on {formatDate(applicant.appliedDate)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Paper>
      </Container>
    </PageLayout>
  )
}
