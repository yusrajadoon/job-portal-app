"use client"

import { useEffect, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { OverviewStats } from "../../../components/overview-stats";
import { JobListingsTable } from "../../../components/job-listings-table";
import { PageLayout } from "@/components/layout/page-layout";
import type { User } from "@/types";
import { useRouter } from "next/navigation";

export default function RecruiterJobsPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const userRole = localStorage.getItem("userRole");

    if (!storedUser || userRole !== "recruiter") {
      router.push("/");
      return;
    }

    setUser(JSON.parse(storedUser));
  }, [router]);

  if (!user) {
    return null;
  }

  return (
    <PageLayout user={user}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" fontWeight={700}>Overview</Typography>
        </Box>
        <OverviewStats />
        <Typography variant="h5" fontWeight={700} mb={2}>Job Listings</Typography>
        <JobListingsTable />
      </Container>
    </PageLayout>
  );
}
