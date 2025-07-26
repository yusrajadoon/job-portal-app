"use client"
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeIcon from "@mui/icons-material/Badge";

interface Coach {
  name: string;
  role: string;
  avatar: string;
  type: string;
}

interface User {
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  email: string;
  phone: string;
  location: string;
  id: string;
  coach: Coach;
}

interface LeftSidebarProps {
  user: User;
  children?: React.ReactNode;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ user, children }) => (
  <aside className="w-80 bg-white border-r px-6 py-8 flex flex-col gap-6">
    <div className="flex flex-col items-center">
      <img
        src={user.avatar}
        alt="avatar"
        className="w-20 h-20 rounded-full mb-2"
      />
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.role}</p>
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {user.skills.map((skill) => (
          <Badge key={skill} className="bg-blue-100 text-gray-700">
            {skill}
          </Badge>
        ))}
      </div>
      <Button
        variant="outline"
        className="mt-4 w-full text-blue-500 flex items-center gap-2 justify-center"
      >
        <EditIcon fontSize="small" />
        Edit Profile
      </Button>
    </div>
    <div>
      <h3 className="font-semibold text-gray-700 text-base mb-2">General Information</h3>
      <ul className="text-sm text-gray-600 space-y-2">
        <li className="flex items-center gap-2">
          <EmailIcon fontSize="small" className="text-blue-500" />
          {user.email}
        </li>
        <li className="flex items-center gap-2">
          <PhoneIcon fontSize="small" className="text-blue-500" />
          {user.phone}
        </li>
        <li className="flex items-center gap-2">
          <LocationOnIcon fontSize="small" className="text-blue-500" />
          {user.location}
        </li>
        <li className="flex items-center gap-2">
          <BadgeIcon fontSize="small" className="text-blue-500" />
          {user.id}
        </li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold mb-2 text-gray-700">My Job Coach</h3>
      <div className="flex items-center gap-3">
        <img
          src={user.coach.avatar}
          alt="coach"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-medium">{user.coach.name}</div>
          <div className="text-xs text-gray-500">{user.coach.role}</div>
          <div className="text-xs text-gray-400">{user.coach.type}</div>
        </div>
      </div>
    </div>
    <Button className="mt-4 w-full text-blue-500" variant="outline">
      View Saved Jobs
    </Button>
    {children}
  </aside>
); 