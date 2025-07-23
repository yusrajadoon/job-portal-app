"use client"

import { useEffect, useState } from "react"
import { Typography, Grid, Container, Box } from "@mui/material"
import { PageLayout } from "@/components/layout/page-layout"
import { JobCard } from "@/components/job-card"
import { dummyJobs } from "@/data/dummy-data"
import type { User } from "@/types"
import { useRouter } from "next/navigation"

export default function JobSeekerJobsPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const userRole = localStorage.getItem("userRole")

    if (!storedUser || userRole !== "jobseeker") {
      router.push("/")
      return
    }

    setUser(JSON.parse(storedUser))
  }, [router])

  if (!user) {
    return null
  }

  return (
    <PageLayout user={user}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Available Jobs
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find your next opportunity
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {dummyJobs.map((job) => (
            <Grid item xs={12} sm={6} lg={4} key={job.id}>
              <JobCard job={job} userRole="jobseeker" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageLayout>
  )
}
