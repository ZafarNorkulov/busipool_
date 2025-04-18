"use client";
import React, { useEffect, useState } from "react";
import SignUpLink from "./SignUpLink";
import SignInLink from "./SignInLink";

const Buttons = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("access_token");
      setToken(storedToken);
    }
  }, []);

  return token ? (
    ""
  ) : (
    <div className="my-[30px] hidden flex-1 flex-wrap justify-center gap-[30px] sm:flex md:flex-nowrap">
      <SignUpLink />
      <SignInLink />
    </div>
  );
};

export default Buttons;
