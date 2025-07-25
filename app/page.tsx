"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Container, Paper, Typography, Button, Box, Card, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Work, Person } from "@mui/icons-material"
import type { UserRole } from "@/types"

export default function LoginPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  const handleLogin = () => {
    if (selectedRole) {
      // Store user role in localStorage for demo purposes
      localStorage.setItem("userRole", selectedRole)
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "1",
          name: selectedRole === "recruiter" ? "John Recruiter" : "Jane Jobseeker",
          email: selectedRole === "recruiter" ? "john@company.com" : "jane@email.com",
          role: selectedRole,
        }),
      )

      router.push(`/${selectedRole}/jobs`)
    }
  }

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Paper elevation={3} sx={{ width: "100%", p: 4, borderRadius: 3 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h1" component="h1" gutterBottom color="primary">
            Job Portal
          </Typography>
          <Typography variant="h4" component="h2" color="text.secondary" mb={4}>
            Choose your role to continue
          </Typography>
        </Box>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                cursor: "pointer",
                border: selectedRole === "recruiter" ? 2 : 1,
                borderColor: selectedRole === "recruiter" ? "primary.main" : "divider",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
              onClick={() => setSelectedRole("recruiter")}
            >
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Work sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
                <Typography variant="h3" component="h3" gutterBottom>
                  Recruiter
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Post jobs and manage applications
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                cursor: "pointer",
                border: selectedRole === "jobseeker" ? 2 : 1,
                borderColor: selectedRole === "jobseeker" ? "primary.main" : "divider",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
              onClick={() => setSelectedRole("jobseeker")}
            >
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Person sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
                <Typography variant="h3" component="h3" gutterBottom>
                  User
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Find and apply for jobs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box textAlign="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            disabled={!selectedRole}
            sx={{ px: 6, py: 1.5, fontSize: "1.1rem" }}
          >
            Continue as{" "}
            {selectedRole === "recruiter" ? "Recruiter" : selectedRole === "jobseeker" ? "Job Seeker" : "..."}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
