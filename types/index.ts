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
export interface User {
  id: string
  name: string
  email: string
  role: "recruiter" | "candidate"
  avatar?: string
}

export interface Candidate {
  id: string
  name: string
  email: string
  role: string
  location: string
  skills: string[]
  status: "Hired" | "In review" | "Interview" | "Applied" | "Rejected"
  matchLevel: number
  avatar?: string
  appliedDate: string
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  postedDate: string
  salary: string
  description: string
  applicants: Candidate[]
}

export interface JobStats {
  applications: number
  averageMatch: number
  hired: number
  rejected: number
  applicationsChange: string
  averageMatchChange: string
  hiredChange: string
  rejectedChange: string
}
