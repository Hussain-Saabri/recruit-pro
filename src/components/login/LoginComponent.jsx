import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  OutlinedInput,
  Button,
  IconButton,
  InputAdornment,
  Fade,
} from "@mui/material";
import {
  RocketIcon,
  EmailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  SignInIcon,
  InfoIcon,
  UserIcon,
  UsersIcon,
} from "../../lib/icons";
import { toast } from 'sonner'
export default function LoginComponent({ onLoginSuccess = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleDemoAccess = (role) => {
    setIsLoading(true);
    let demoEmail = "";
    let demoPass = "password123";
    switch (role) {
      case "Admin":
        demoEmail = "admin@company.com";
        break;
      case "Recruiter":
        demoEmail = "recruiter@recruitpro.com";
        break;
      case "Team Leader":
        demoEmail = "leader@recruitpro.com";
        break;
      case "Account Manager":
        demoEmail = "manager@recruitpro.com";
        break;
      default:
        demoEmail = "admin@company.com";
    }

    // Simulate standard autofill animation delay
    setTimeout(() => {
      setEmail(demoEmail);
      setPassword(demoPass);
      setIsLoading(false);
      
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("Please enter both email and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast("Sign in successful! Welcome to RecruitPro.");
      
      const emailPrefix = email.split('@')[0];
      const displayName = emailPrefix.split('.').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ');
      const initials = emailPrefix.split('.').map(n => n.charAt(0).toUpperCase()).join('').substring(0, 2) || "US";
      const userRole = email.includes("admin") ? "Admin" : email.includes("leader") ? "Team Leader" : email.includes("recruiter") ? "Recruiter" : "Account Manager";

      setTimeout(() => {
        onLoginSuccess({
          name: displayName,
          role: userRole,
          initials: initials,
        });
      }, 800);
    }, 1500);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8FAFC",
        background: "radial-gradient(circle at 50% 50%, #FAF5FF 0%, #F1F5F9 100%)",
        padding: "24px",
        width: "100%",
      }}
    >
      <Fade in={true} timeout={600}>
        <Card
          sx={{
            width: "100%",
            maxWidth: "460px",
            borderRadius: "24px",
            boxShadow:
              "0px 20px 40px rgba(124, 77, 255, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.02)",
            padding: { xs: "20px 24px 32px", sm: "28px 40px 48px" },
            backgroundColor: "#FFFFFF",
            border: "1px solid #F1F5F9",
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              width: "64px",
              height: "64px",
              backgroundColor: "#7C4DFF",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              boxShadow: "0 8px 16px rgba(124, 77, 255, 0.2)",
              color: "#FFFFFF",
            }}
          >
            <RocketIcon size={32} strokeWidth={2} />
          </Box>

          {/* Heading */}
          <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#1E293B",
                marginBottom: "8px",
                letterSpacing: "-0.5px",
              }}
            >
              Welcome Back To RecruitPro!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#64748B",
                lineHeight: 1.5,
              }}
            >
              Sign in to access detailed insights into your operational workflow.
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <Box sx={{ marginBottom: "24px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#475569",
                  marginBottom: "8px",
                }}
              >
                <Box sx={{ color: "#2563EB", display: "flex" }}>
                  <EmailIcon size={18} strokeWidth={2} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Email
                </Typography>
              </Box>
              <OutlinedInput
                fullWidth
                type="email"
                placeholder="admin@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E2E8F0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CBD5E1",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7C4DFF",
                    borderWidth: "1.5px",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
              />
            </Box>

            {/* Password Field */}
            <Box sx={{ marginBottom: "24px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#475569",
                  marginBottom: "8px",
                }}
              >
                <Box sx={{ color: "#2563EB", display: "flex" }}>
                  <LockIcon size={18} strokeWidth={2} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Password
                </Typography>
              </Box>
              <OutlinedInput
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                      sx={{ color: "#64748B" }}
                    >
                      {showPassword ? (
                        <EyeOffIcon size={20} strokeWidth={2} />
                      ) : (
                        <EyeIcon size={20} strokeWidth={2} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFA",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E2E8F0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CBD5E1",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#7C4DFF",
                    borderWidth: "1.5px",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#FFFFFF",
                  },
                }}
              />
            </Box>

            {/* Sign In Button */}
            <Button
              fullWidth
              type="submit"
              disabled={isLoading}
              sx={{
                backgroundColor: "#7C4DFF",
                color: "#FFFFFF",
                height: "52px",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                boxShadow: "0 4px 14px rgba(124, 77, 255, 0.2)",
                transition: "all 0.2s ease-in-out",
                marginBottom: "32px",
                "&:hover": {
                  backgroundColor: "#6C3BEB",
                  boxShadow: "0 6px 20px rgba(124, 77, 255, 0.3)",
                  transform: "translateY(-1px)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#E2E8F0",
                  color: "#94A3B8",
                },
              }}
            >
              <SignInIcon size={18} strokeWidth={2} />
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </Box>

          {/* Demo Access Panel */}
          <Box
            sx={{
              backgroundColor: "#FAF9FF",
              border: "1px solid #ECE9FF",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#7C4DFF",
                marginBottom: "16px",
              }}
            >
              <InfoIcon size={18} strokeWidth={2} />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Demo Access
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Admin */}
              <Box
                component="button"
                type="button"
                onClick={() => handleDemoAccess("Admin")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#7C4DFF",
                    backgroundColor: "#FAF5FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box sx={{ color: "#7C4DFF", display: "flex" }}>
                  <UserIcon size={18} strokeWidth={2} />
                </Box>
                Admin
              </Box>

              {/* Recruiter */}
              <Box
                component="button"
                type="button"
                onClick={() => handleDemoAccess("Recruiter")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#7C4DFF",
                    backgroundColor: "#FAF5FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box sx={{ color: "#7C4DFF", display: "flex" }}>
                  <UserIcon size={18} strokeWidth={2} />
                </Box>
                Recruiter
              </Box>

              {/* Team Leader */}
              <Box
                component="button"
                type="button"
                onClick={() => handleDemoAccess("Team Leader")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#7C4DFF",
                    backgroundColor: "#FAF5FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box sx={{ color: "#7C4DFF", display: "flex" }}>
                  <UsersIcon size={18} strokeWidth={2} />
                </Box>
                Team Leader
              </Box>

              {/* Account Manager */}
              <Box
                component="button"
                type="button"
                onClick={() => handleDemoAccess("Account Manager")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease-in-out",
                  color: "#334155",
                  fontSize: "14px",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "#7C4DFF",
                    backgroundColor: "#FAF5FF",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <Box sx={{ color: "#7C4DFF", display: "flex" }}>
                  <UserIcon size={18} strokeWidth={2} />
                </Box>
                Account Manager
              </Box>
            </Box>
          </Box>
        </Card>
      </Fade>

    </Box>
  );
}
