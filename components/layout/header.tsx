"use client"

import Image from "next/image"
import { AppBar, Toolbar, Button, Box, Avatar, InputBase, IconButton, Badge, Paper } from "@mui/material"
import { useRouter } from "next/navigation"
import { Search, Add, Settings, Notifications } from "@mui/icons-material"
import type { User } from "@/types"

interface HeaderProps {
  user?: User
}

export function Header({ user }: HeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("user")
    router.push("/")
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "#fff",
        color: "#222",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Toolbar sx={{ minHeight: 72, display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={60}
            height={32}
            style={{ objectFit: "contain", cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
        </Box>

        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 320,
            boxShadow: "none",
            border: "1px solid #e0e0e0",
            bgcolor: "#f7f7f9",
            borderRadius: 2,
          }}
        >
          <Search sx={{ color: "#bdbdbd", mr: 1 }} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for..."
            inputProps={{ "aria-label": "search" }}
          />
        </Paper>

        {/* Actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              bgcolor: "#2563eb",
              "&:hover": { bgcolor: "#1d4ed8" },
              boxShadow: "none",
            }}
            onClick={() => router.push("/recruiter/jobs/new")}
          >
            New Job
          </Button>
          <IconButton>
            <Settings sx={{ color: "#222" }} />
          </IconButton>
          <IconButton>
            <Badge color="error" variant="dot">
              <Notifications sx={{ color: "#222" }} />
            </Badge>
          </IconButton>
          {user && (
            <Avatar
              src={user.image || "/profile.jpg"}
              alt={user.name}
              sx={{ width: 40, height: 40, ml: 1, cursor: "pointer" }}
              onClick={handleLogout}
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
