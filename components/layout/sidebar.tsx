"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Collapse,
  Badge,
  Divider,
} from "@mui/material";
import {
  Work,
  Dashboard,
  Group,
  Business,
  ShoppingCart,
  Assignment,
  BarChart,
  CalendarMonth,
  Payment,
  Message,
  Notifications,
  ContactMail,
  ExpandLess,
  ExpandMore,
  Explore,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import type { UserRole } from "@/types";

const drawerWidth = 240;

// Helper for active styling
const activeStyles = {
  color: "#2563eb",
  "& .MuiListItemIcon-root": { color: "#2563eb" },
};

export function Sidebar({ userRole }: { userRole: UserRole }) {
  const router = useRouter();
  const pathname = usePathname();
  const [openJobs, setOpenJobs] = useState(true);

  // Simulate unread messages/notifications
  const unreadMessages = true;
  const unreadNotifications = true;

  // Helper to check if a path is active
  const isActive = (path: string) => pathname === path;
  const isJobListingsActive =
    pathname.startsWith(`/${userRole}/jobs`);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#fff",
          borderRight: "1px solid #f0f0f0",
        },
      }}
    >
      {/* Logo */}
      <Toolbar sx={{ minHeight: 72, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="/Logo.png"
          alt="Logo"
          width={60}
          height={32}
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </Toolbar>
      <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", height: "100%" }}>
        <List>
          {/* Dashboard */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/dashboard`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/dashboard`)}
            >
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          {/* Explore */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/explore`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/explore`)}
            >
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          {/* Job Listings */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isJobListingsActive ? activeStyles : undefined}
              onClick={() => setOpenJobs((prev) => !prev)}
            >
              <ListItemIcon>
                <Work />
              </ListItemIcon>
              <ListItemText primary="Job Listings" />
              {openJobs ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={openJobs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    ...(isActive(`/${userRole}/jobs`) ? activeStyles : undefined),
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#2563eb",
                      "& .MuiListItemIcon-root": { color: "#2563eb" },
                    },
                  }}
                  onClick={() => router.push(`/${userRole}/jobs`)}
                >
                  <ListItemText primary="Job" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    ...(isActive(`/${userRole}/jobs?type=extra`) ? activeStyles : undefined),
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#2563eb",
                      "& .MuiListItemIcon-root": { color: "#2563eb" },
                    },
                  }}
                  onClick={() => router.push(`/${userRole}/jobs?type=extra`)}
                >
                  <ListItemText primary="Extra Job" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    ...(isActive(`/${userRole}/jobs?type=freelance`) ? activeStyles : undefined),
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#2563eb",
                      "& .MuiListItemIcon-root": { color: "#2563eb" },
                    },
                  }}
                  onClick={() => router.push(`/${userRole}/jobs?type=freelance`)}
                >
                  <ListItemText primary="Freelance" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
          <Divider sx={{ my: 1 }} />
          {/* Participants */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/participants`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/participants`)}
            >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Participants" />
            </ListItemButton>
          </ListItem>
          {/* Companies */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/companies`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/companies`)}
            >
              <ListItemIcon>
                <Business />
              </ListItemIcon>
              <ListItemText primary="Companies" />
            </ListItemButton>
          </ListItem>
          {/* Orders */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/orders`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/orders`)}
            >
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          {/* WorkMatch Tasks */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/tasks`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/tasks`)}
            >
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="WorkMatch Tasks" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ my: 1 }} />
          {/* Analytics */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/analytics`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/analytics`)}
            >
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Analytics" />
            </ListItemButton>
          </ListItem>
          {/* Calendar */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/calendar`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/calendar`)}
            >
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
          {/* Payments */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/payments`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/payments`)}
            >
              <ListItemIcon>
                <Payment />
              </ListItemIcon>
              <ListItemText primary="Payments" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ my: 1 }} />
          {/* Messages */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/messages`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/messages`)}
            >
              <ListItemIcon>
                <Badge color="error" variant="dot" invisible={!unreadMessages}>
                  <Message />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>
          {/* Notifications */}
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/notifications`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/notifications`)}
            >
              <ListItemIcon>
                <Badge color="error" variant="dot" invisible={!unreadNotifications}>
                  <Notifications />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box flexGrow={1} />
        <Divider sx={{ my: 1 }} />
        {/* Contact Us at the bottom */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={isActive(`/${userRole}/contact`) ? activeStyles : undefined}
              onClick={() => router.push(`/${userRole}/contact`)}
            >
              <ListItemIcon>
                <ContactMail />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
