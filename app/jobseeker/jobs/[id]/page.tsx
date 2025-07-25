"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MoreHorizontal, Calendar, Building2 } from "lucide-react";
import { Button } from "@mui/material"
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { dummyJobs } from "@/data/dummy-data";
import { ApplicationDialog } from "@/components/application-dialog";
import type { User, Job } from "@/types";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [job, setJob] = useState<Job | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const storedUser = localStorage.getItem("user");
    const userRole = localStorage.getItem("userRole");

    if (!storedUser || userRole !== "jobseeker") {
      router.push("/");
      return;
    }

    setUser(JSON.parse(storedUser));

    const jobId = params.id as string;
    const foundJob = dummyJobs.find((j) => j.id === jobId);

    if (foundJob) {
      setJob(foundJob);
    }
  }, [params.id, router]);

  const handleApply = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  if (!job || !user) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-semibold">
              Logo
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/home"
                className="text-blue-600 border-b-2 border-blue-600 pb-3"
              >
                Home
              </Link>
              <Link href="/jobs" className="text-gray-600 hover:text-blue-600">
                Jobs
              </Link>
              <Link
                href="/extra-jobs"
                className="text-gray-600 hover:text-blue-600"
              >
                Extra Jobs
              </Link>
              <Link
                href="/career-help"
                className="text-gray-600 hover:text-blue-600"
              >
                Get Career Help
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
            </button>
            <button className="p-2 bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <img
                  src="/placeholder.?height=32&width=32"
                  alt="User avatar"
                />
              </Avatar>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left sidebar - User profile */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col items-center mb-4">
              <Avatar className="h-20 w-20 mb-3">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="User avatar"
                />
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.title}</p>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Teamwork</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="bg-gray-100">
                  Jira
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Collaboration
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="bg-gray-100">
                  Facilitation
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Figma
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="bg-gray-100">
                  Management
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Canva
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-gray-100">
                  Adobe XD
                </Badge>
                <Badge variant="outline" className="bg-gray-100">
                  Public Speaking
                </Badge>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-transparent"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              </svg>
              Edit Profile
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold mb-4">General Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-gray-500"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <p className="text-sm">{user.email}</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-gray-500"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <p className="text-sm">{user.phone}</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-gray-500"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p className="text-sm">{user.location}</p>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-0.5 text-gray-500"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <p className="text-sm">{user.id}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold mb-4">My Job Coach</h3>
            <div className="flex items-center mb-3">
              <Avatar className="h-10 w-10 mr-3">
                <img src="coach.jpg?height=40&width=40" alt="Coach avatar" />
              </Avatar>
              <div>
                <p className="font-medium">Anna Brown</p>
                <p className="text-sm text-gray-600">Job Coach</p>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Recruiter avatar"
                />
              </Avatar>
              <div>
                <p className="font-medium">HR</p>
                <p className="text-sm text-gray-600">IT Recruiter</p>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            View Saved Jobs
          </Button>
        </div>

        {/* Main content - Job details */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <Link
                href="/jobseeker/jobs"
                className="inline-flex items-center text-blue-600 mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Link>

              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-gray-100 uppercase font-semibold"
                    >
                      Full-time
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-gray-100 uppercase font-semibold"
                    >
                      Hybrid
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    onClick={handleApply}
                    variant="contained"
                    color="primary" // Blue background, white text
                    className="mr-2"
                  >
                    Apply Now
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Posted on March 22, 2023
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Apply before April 30, 2023
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Building2 className="h-4 w-4 mr-2" />
                  Intelligent Apps
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  100,000 EUR/yr
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Data</Badge>
                <Badge>Product</Badge>
                <Badge>UX</Badge>
                <Badge>Design</Badge>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Company Overview</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Job Overview</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">
                  Key Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </li>
                  <li>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3">
                  Candidate Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Great troubleshooting and analytical skills combined with
                    the desire to tackle challenging function
                  </li>
                  <li>
                    Experience in front-end development working either with
                    multiple smaller projects simultaneously or large-scale
                    applications
                  </li>
                  <li>
                    Experience with HTML, JavaScript, CSS, PHP, TypeScript,
                    jQuery, Laravel
                  </li>
                  <li>
                    Experience with React, Vue.js, Angular, Node.js, SASS, LESS,
                    SOAP, REST
                  </li>
                  <li>
                    Have experience/awareness in Agile application development,
                    commercial off-the-shelf software, middleware, servers and
                    storage, and database concepts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ApplicationDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        jobTitle={job.title}
      />
    </div>
  );
}
