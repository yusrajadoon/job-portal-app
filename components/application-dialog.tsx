"use client"

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

interface ApplicationDialogProps {
  open: boolean
  onClose: () => void
  jobTitle: string
}

export function ApplicationDialog({ open, onClose, jobTitle }: ApplicationDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ textAlign: "center", py: 4 }}>
        <CheckCircle sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
        <DialogTitle sx={{ p: 0, mb: 2 }}>Application Submitted Successfully!</DialogTitle>
        <Typography variant="body1" color="text.secondary">
          You have successfully applied for the position of <strong>{jobTitle}</strong>. The recruiter will review your
          application and get back to you soon.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button variant="contained" onClick={onClose} size="large">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  )
}
