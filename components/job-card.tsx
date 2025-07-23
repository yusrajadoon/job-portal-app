"use client"

import { Card, CardContent, Typography, Chip, Box, Button } from "@mui/material"
import { LocationOn, Business, Schedule } from "@mui/icons-material"
import type { Job } from "@/types"
import { useRouter } from "next/navigation"

interface JobCardProps {
  job: Job
  userRole: "recruiter" | "jobseeker"
}

export function JobCard({ job, userRole }: JobCardProps) {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push(`/${userRole}/jobs/${job.id}`)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            {job.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Business sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {job.company}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {job.location}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Schedule sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              Posted {formatDate(job.postedDate)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Chip label={job.type} size="small" color="primary" variant="outlined" sx={{ mr: 1 }} />
          <Typography variant="body2" color="primary" fontWeight={600}>
            {job.salary}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {job.description.substring(0, 120)}...
        </Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button variant="contained" fullWidth onClick={handleViewDetails}>
          View Details
        </Button>
      </Box>
    </Card>
  )
}
