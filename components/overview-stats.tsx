// components/overview-stats.tsx
import { Card, CardContent, Typography, Box } from "@mui/material";
import { InsertDriveFile, Visibility, Mail, Cancel } from "@mui/icons-material";

const stats = [
  { label: "Applications", value: 1200, change: "+2.5%", icon: <InsertDriveFile />, color: "#FFE066" },
  { label: "Views", value: 200, change: "-1.2%", icon: <Visibility />, color: "#B2F0E6" },
  { label: "Hired", value: 300, change: "+11%", icon: <Mail />, color: "#D6E4FF" },
  { label: "Rejected", value: 450, change: "+5.2%", icon: <Cancel />, color: "#FFD6E0" },
];

export function OverviewStats() {
  return (
    <Box display="flex" gap={2} mb={4}>
      {stats.map((stat) => (
        <Card key={stat.label} sx={{ minWidth: 180, flex: 1 }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ bgcolor: stat.color, borderRadius: "50%", p: 1.5 }}>
              {stat.icon}
            </Box>
            <Box>
              <Typography variant="h6">{stat.value}</Typography>
              <Typography variant="body2" color="text.secondary">{stat.label} <span style={{ color: "#4CAF50" }}>{stat.change}</span></Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
