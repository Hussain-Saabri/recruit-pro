
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAuthStore } from "./store/useAuthStore";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Manage from "./pages/dashboard/Manage";
import Users from "./pages/dashboard/Users";
import Jds from "./pages/dashboard/Jds";
import AddJd from "./pages/dashboard/AddJd";
import Navbar from "./components/layout/Navbar";
import { Toaster } from "sonner";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
  },
});

// Layout wrapper for authenticated users
function AppLayout() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
    
      <main className="flex-1 p-4 md:p-6 max-w-[1200px] w-full mx-auto box-border">
      <Outlet />
      </main>
    </div>
  );
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster richColors position="top-right" closeButton />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Authenticated Layout Routes */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/jds" element={<Jds />} />
            <Route path="/add" element={<AddJd />} />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
