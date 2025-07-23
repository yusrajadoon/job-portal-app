"use client"

import { Box, Toolbar } from "@mui/material"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import type { User } from "@/types"
import type { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
  user: User
}

export function PageLayout({ children, user }: PageLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header user={user} />
      <Sidebar userRole={user.role} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
