import React from "react";
import UserHeader from "@/components/layout/user-header"; // adjust path as needed

export default function JobseekerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
    </>
  );
}
