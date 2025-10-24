"use client";
import { logOutUser } from "@/services/AuthService";
import React from "react";

const logoutButton = () => {
  return (
    <div>
      <button
        onClick={() => {
          logOutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default logoutButton;
