"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";
import { LeftSidebar } from "@/components/layout/left-sidebar";
import { useRouter } from "next/navigation";

const user = {
  name: "Steve Smith",
  role: "Graphic Designer",
  avatar: "/profile.jpg",
  skills: [
    "Communication",
    "Teamwork",
    "Collaboration",
    "Facilitation",
    "Figma",
    "Management",
    "Canva",
    "Adobe XD",
    "Public Speaking",
  ],
  email: "stevesmith@gmail.com",
  phone: "+4678000000",
  location: "Stockholm, Sweden",
  id: "19000050050",
  coach: {
    name: "Anna Brown",
    role: "Job Coach",
    avatar: "/coach.jpg",
    type: "IT Recruiter",
  },
};

const jobs = [
  {
    id: 1,
    title: "Graphic Designer",
    company: "SNEX AB",
    location: "Sweden, AB",
    postedDate: "March 22, 2025",
    salary: "100,000 EUR/yr",
    type: ["FULL TIME", "HYBRID"],
    match: "95%",
    skills: ["Social", "Recruiting", "HR"],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/coach.jpg",
  },
  // ...repeat or map more jobs as needed
];

export default function JobseekerJobsPage() {
  const companyOptions = Array.from(new Set(jobs.map((job) => job.company)));
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar user={user} />

      {/* Center Content */}
      <main className="flex-1 px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Trending Job Postings
        </h1>
        <p className="text-gray-500 mb-6">Check out recent and trending jobs</p>
        <div className="flex flex-col gap-6">
          {[...Array(4)].map((_, idx) => {
            const job = jobs[0];
            return (
              <Card key={idx} className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={job.avatar}
                    alt="company"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-lg">{job.title}</span>
                      <Badge className="bg-blue-100 text-blue-700">
                        {job.match} match
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {job.company} &bull; {job.location}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    {job.type.map((t) => (
                      <Badge key={t} className="bg-gray-100 text-gray-700">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{job.postedDate}</span>
                  <span className="font-semibold text-gray-700">
                    {job.salary}
                  </span>
                </div>
                <div className="flex gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} className="bg-gray-100 text-gray-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">
                    Job Overview
                  </h4>
                  <p className="text-gray-600 text-sm">{job.overview}</p>
                </div>
                <div className="flex justify-end mt-2">
                  <div className="flex gap-2 text-blue-500">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 font-semibold"
                    >
                      Save
                    </Button>
                    <Button
                      variant="default"
                      className="bg-blue-600 text-white font-semibold hover:bg-blue-700"
                      onClick={() => router.push(`/jobseeker/jobs/${job.id}`)}
                    >
                      Quick Apply
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-white border-l px-6 py-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Search jobs</h2>
        <div className="mb-4 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Title or Keywords"
            className="pl-10 mb-4 text-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <Select>
            <SelectTrigger className="border border-gray-300 rounded-md">
              <SelectValue placeholder="Select company" />
            </SelectTrigger>
            <SelectContent>
              {companyOptions.map((company) => (
                <SelectItem key={company} value={company}>
                  {company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sort by</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sort" defaultChecked />
              Highest Match
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sort" />
              Remote
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sort" />
              Full Time
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sort" />
              Internship
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="sort" />
              Recently Posted
            </label>
          </div>
        </div>
        <Button variant="link" className="p-0 h-auto text-blue-600">
          Show more options
        </Button>
      </aside>
    </div>
  );
}
