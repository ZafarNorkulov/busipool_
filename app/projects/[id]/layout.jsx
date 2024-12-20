"use client";
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import React from "react";

const ProjectLayout = ({ children }) => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();
  if (!auth.isAuthenticated) {
    router.push("/sign-in");
  }
  return <>{children}</>;
};

export default ProjectLayout;
