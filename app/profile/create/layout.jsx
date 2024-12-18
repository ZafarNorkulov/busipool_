"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateLayout = ({ children }) => {
  const [role, setRole] = useState(null); // Set initial state to null to indicate loading
  const [loading, setLoading] = useState(true); // Loading holati
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.groups && storedUser.groups[0]) {
        const myRole = storedUser.groups[0].name;
        setRole(myRole);
      }
      setLoading(false);
    }
  }, []); // Empty dependency array ensures this runs only once
  if (loading) {
    return <div></div>;
  }
  if (role?.toLowerCase() === "business") {
    return <div>{children}</div>;
  } else {
    router.push("/not-found"); // Redirect if the role isn't "business"
    return null; // Return nothing during the redirect
  }
};

export default CreateLayout;
