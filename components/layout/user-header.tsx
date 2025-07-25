"use client"
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function UserHeader() {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 0,
            fontWeight: "bold",
            textDecoration: "none",
            color: "inherit",
            mr: 4,
          }}
        >
          Logo
        </Typography>

        {/* Navigation */}
        <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
          <Button
            component={Link}
            href="/"
            color="primary"
            sx={{
              fontWeight: "bold",
              borderBottom: 2,
              borderColor: "primary.main",
              borderRadius: 0,
            }}
          >
            Home
          </Button>
          <Button component={Link} href="/jobseeker/jobs" color="inherit">
            Jobs
          </Button>
          <Button component={Link} href="/jobseeker/extra-jobs" color="inherit">
            Extra Jobs
          </Button>
          <Button component={Link} href="/jobseeker/career-help" color="inherit">
            Get Career Help
          </Button>
        </Stack>

        {/* Auth Buttons */}
        <Box>
          <Button
            component={Link}
            href="/login"
            color="inherit"
            sx={{ mr: 1 }}
          >
            Login
          </Button>
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            color="primary"
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
