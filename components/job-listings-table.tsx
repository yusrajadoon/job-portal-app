"use client"
// components/job-listings-table.tsx
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Menu, MenuItem, IconButton, TextField, Select, FormControl, InputLabel, Pagination, Chip
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { dummyJobs } from "@/data/dummy-data";
import Link from "next/link";

const jobTypes = ["All", "Freelance", "Extra Job", "Part time"];

export function JobListingsTable() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuJobId, setMenuJobId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [page, setPage] = useState(1);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, jobId: string) => {
    setAnchorEl(event.currentTarget);
    setMenuJobId(jobId);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuJobId(null);
  };

  // Filter and paginate jobs
  let jobs = dummyJobs.filter(job =>
    (jobType === "All" || job.type === jobType) &&
    job.title.toLowerCase().includes(search.toLowerCase())
  );
  const jobsPerPage = 3;
  const paginatedJobs = jobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  return (
    <Paper sx={{ p: 2 }}>
      <Box display="flex" gap={2} mb={2}>
        <FormControl size="small">
          <InputLabel>Job Type</InputLabel>
          <Select
            native
            value={jobType}
            onChange={e => setJobType(e.target.value)}
            label="Job Type"
          >
            {jobTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </Select>
        </FormControl>
        <TextField
          size="small"
          placeholder="Search candidates"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Job Title</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>Date Posted</TableCell>
              <TableCell>Applicants</TableCell>
              <TableCell>Views</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedJobs.map(job => (
              <TableRow key={job.id}>
                <TableCell>
                  <Link href={`/recruiter/jobs/${job.id}`} style={{ textDecoration: "none" }}>
                    <span style={{ color: '#1976d2', cursor: 'pointer', fontWeight: 500 }}>
                      {job.title}
                    </span>
                  </Link>
                </TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell>{(job as any).applicants ?? 0}</TableCell>
                <TableCell>{(job as any).views ?? 0}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={e => handleMenuOpen(e, job.id)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={menuJobId === job.id}
                    onClose={handleMenuClose}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Open</MenuItem>
                    <MenuItem>Duplicate</MenuItem>
                    <MenuItem>View Stats</MenuItem>
                    <MenuItem sx={{ color: "red" }}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Pagination
          count={Math.ceil(jobs.length / jobsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Paper>
  );
}
