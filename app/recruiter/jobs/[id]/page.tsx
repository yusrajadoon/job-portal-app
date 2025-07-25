"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
  Avatar,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Select,
  InputLabel,
  MenuItem as MuiMenuItem,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { OverviewStats } from "@/components/overview-stats";
import { InsertDriveFile, Visibility, Mail, Cancel } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const mockJob = {
  title: "Frontend Developer",
  type: "Full-Time",
  location: "Remote",
  datePosted: "2025-07-20",
  description:
    "We're looking for a skilled Frontend Developer with experience in React and TypeScript. Join our team to build amazing UI experiences.",
};

const mockCandidates = [
  {
    id: 1,
    name: "Ali Raza",
    email: "ali@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    progress: 80,
    status: "Shortlisted",
  },
  {
    id: 2,
    name: "Sara Khan",
    email: "sara@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    progress: 60,
    status: "Pending",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    progress: 90,
    status: "Interviewed",
  },
  {
    id: 4,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    progress: 70,
    status: "Shortlisted",
  },
  {
    id: 5,
    name: "Carlos Mendez",
    email: "carlos.mendez@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    progress: 50,
    status: "Pending",
  },
  {
    id: 6,
    name: "Emily Chen",
    email: "emily.chen@example.com",
    avatar: "https://i.pravatar.cc/150?img=6",
    progress: 85,
    status: "Interviewed",
  },
  {
    id: 7,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@example.com",
    avatar: "https://i.pravatar.cc/150?img=7",
    progress: 40,
    status: "Rejected",
  },
  {
    id: 8,
    name: "Julia Roberts",
    email: "julia.roberts@example.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    progress: 75,
    status: "Shortlisted",
  },
  {
    id: 9,
    name: "Mohammed Ali",
    email: "mohammed.ali@example.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    progress: 30,
    status: "Pending",
  },
  {
    id: 10,
    name: "Sophia Loren",
    email: "sophia.loren@example.com",
    avatar: "https://i.pravatar.cc/150?img=10",
    progress: 95,
    status: "Hired",
  },
];

// Custom overview stats for job detail page
const jobDetailStats = [
  {
    label: "Applications",
    value: 1200,
    change: "+2.5%",
    icon: <InsertDriveFile />,
    color: "#FFE066",
  },
  {
    label: "Average match",
    value: "90%",
    change: "+1.1%",
    icon: <Visibility />,
    color: "#B2F0E6",
  },
  {
    label: "Hired",
    value: 300,
    change: "+11%",
    icon: <Mail />,
    color: "#D6E4FF",
  },
  {
    label: "Rejected",
    value: 450,
    change: "+5.2%",
    icon: <Cancel />,
    color: "#FFD6E0",
  },
];

export default function JobDetailPage() {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) =>
    setTab(newValue);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <PageLayout user={{ name: "Recruiter" } as any}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Overview Stats */}
        <Box mb={3}>
          <Box display="flex" gap={2} mb={2}>
            {jobDetailStats.map((stat) => (
              <Card key={stat.label} sx={{ minWidth: 180, flex: 1 }}>
                <CardContent
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{ bgcolor: stat.color, borderRadius: "50%", p: 1.5 }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6">{stat.value}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}{" "}
                      <span style={{ color: "#4CAF50" }}>{stat.change}</span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2 }}
          onClick={() => window.history.back()}
        >
          Back
        </Button>

        {/* Search and Sort Controls - MOVE OUTSIDE CARD */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <TextField
            placeholder="Search For"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
          <Select label="Sort by" defaultValue="Matching Level">
            <MuiMenuItem value="Matching Level">Matching Level</MuiMenuItem>
          </Select>
        </Box>

        {/* Job Detail Card */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={3}
              mb={2}
            >
              <Box display="flex" alignItems="center" gap={3}>
                <Avatar src="/Logo.png" sx={{ width: 56, height: 56 }} />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    {mockJob.title}
                  </Typography>
                  <Typography color="text.secondary">
                    Stockholm, Sweden
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={1}>
                <Button
                  startIcon={<VisibilityIcon sx={{ color: 'black' }} />}
                  variant="text"
                  size="small"
                  sx={{ color: 'black', background: 'none', '&:hover': { background: '#f5f5f5', color: 'black' } }}
                >
                  View
                </Button>
                <Button
                  startIcon={<ShareIcon sx={{ color: 'black' }} />}
                  variant="text"
                  size="small"
                  sx={{ color: 'black', background: 'none', '&:hover': { background: '#f5f5f5', color: 'black' } }}
                >
                  Share
                </Button>
                <Button
                  startIcon={<PersonAddIcon sx={{ color: 'black' }} />}
                  variant="text"
                  size="small"
                  sx={{ color: 'black', background: 'none', '&:hover': { background: '#f5f5f5', color: 'black' } }}
                >
                  Invite
                </Button>
                <Button
                  startIcon={<EditIcon sx={{ color: 'black' }} />}
                  variant="text"
                  size="small"
                  sx={{ color: 'black', background: 'none', '&:hover': { background: '#f5f5f5', color: 'black' } }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Box display="flex" gap={4} mb={2}>
              <Typography variant="body2">
                <b>Type:</b> {mockJob.type}
              </Typography>
              <Typography variant="body2">
                <b>Date Posted:</b> {mockJob.datePosted}
              </Typography>
              <Typography variant="body2">
                <b>Salary:</b> 800 SEK
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Defining the vision for a product, setting goals, prioritizing
              features, and coordinating between design, engineering, and
              business teams to deliver valuable products that meet user and
              market needs.
            </Typography>
            <Typography variant="body2" mb={2}>{mockJob.description}</Typography>
        {/* Status Tabs Bar */}
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>
            Matches <Box component="span" sx={{ ml: 0.5, color: 'gray', fontWeight: 400 }}>(300)</Box>
          </Button>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>
            Applied <Box component="span" sx={{ ml: 0.5, color: 'gray', fontWeight: 400 }}>(150)</Box>
          </Button>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>
            In Review <Box component="span" sx={{ ml: 0.5, color: 'gray', fontWeight: 400 }}>(75)</Box>
          </Button>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>
            Interview <Box component="span" sx={{ ml: 0.5, color: 'gray', fontWeight: 400 }}>(5)</Box>
          </Button>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>Offered</Button>
          <Button variant="text" sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1 }}>Rejected</Button>
          <Button variant="text" endIcon={<ArrowDropDownIcon />} sx={{ color: 'black', fontWeight: 600, minWidth: 0, px: 1, ml: 2 }}>
            Add Tab
          </Button>
        </Box>

        {/* Candidate Listing Section */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Candidate</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Matching Skills</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Match Level</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockCandidates.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={c.avatar} />
                      <Box>
                        <Typography fontWeight={600}>{c.name}</Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          Product Manager
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>Stockholm</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      <Chip label="IT" size="small" />
                      <Chip label="Social" size="small" />
                      <Chip label="Recruiting" size="small" />
                      <Chip label="HR" size="small" />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={c.status}
                      color={
                        c.status === "Hired"
                          ? "success"
                          : c.status === "In review"
                          ? "warning"
                          : c.status === "Interviewed"
                          ? "info"
                          : c.status === "Rejected"
                          ? "error"
                          : "default"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600}>{c.progress}%</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={handleMenuOpen}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>View Resume</MenuItem>
            <MenuItem onClick={handleMenuClose}>Shortlist</MenuItem>
            <MenuItem onClick={handleMenuClose}>Reject</MenuItem>
          </Menu>
        </Paper>
           </CardContent>
        </Card>

      </Container>
    </PageLayout>
  );
}
