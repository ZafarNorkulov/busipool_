"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []); // Empty dependency array ensures this runs only once

  const role = user?.groups?.[0]?.name;

  if (role === "business") {
    return <div>{children}</div>;
  }

  router.push("/not-found"); // Render nothing if the role isn't "business"
};

export default CreateLayout;
