"use client";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateLayout = ({ children }) => {
  const [role, setRole] = useState(null); // Set initial state to null to indicate loading
  const [loading, setLoading] = useState(true); // Loading holati
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser?.groups?.[0]?.name) {
            setRole(parsedUser.groups[0].name);
          }
        } catch (error) {
          console.error("Error parsing user from localStorage:", error);
        }
      }
      setLoading(false);
    }
  }, []); // Empty dependency array ensures this runs only once
  if (loading) {
    return <Spinner loading={true} />;
  }
  if (role?.toLowerCase() === "Компания") {
    return <div>{children}</div>;
  } else {
    router.push("/profil"); // Redirect if the role isn't "business"
    return null; // Return nothing during the redirect
  }
};

export default CreateLayout;
