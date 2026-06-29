import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/layout/Navbar";

export default function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        user={user}
        onLogout={onLogout}
      />
    </Box>
  );
}
