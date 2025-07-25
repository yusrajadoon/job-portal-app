import React from "react";
import { Header } from "@/components/layout/header"; // adjust path as needed

export default function RecruiterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}
