export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: "Full-time" | "Part-time" | "Contract" | "Remote"
  salary: string
  postedDate: string
  description: string
  requirements: string[]
  benefits: string[]
}

export interface Applicant {
  id: string
  name: string
  email: string
  phone: string
  appliedDate: string
  status: "Applied" | "Under Review" | "Interview" | "Rejected"
}

export type UserRole = "recruiter" | "jobseeker"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}
