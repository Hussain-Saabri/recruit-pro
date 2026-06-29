import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Home,
  Folder,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  User,
} from "lucide-react";

export default function Navbar({
  activeTab = "dashboard",
  onTabChange = () => {},
  user = {
    name: "Mike Admin",
    role: "Administrator",
    initials: "MA",
  },
  onLogout = () => {},
}) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    onTabChange(tab);
    setDrawerOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 w-full h-[72px] flex items-center justify-between px-4 md:px-6 transition-all duration-300 font-sans ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
            : "bg-white border-b border-slate-100"
        }`}
      >
        {/* Left Section: Logo & Hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="flex md:hidden w-10 h-10 border border-slate-200 rounded-[10px] items-center justify-center text-slate-600 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 transition-all duration-200"
          >
            <Menu size={20} strokeWidth={2} />
          </button>

          {/* Logo & Branding */}
          <div className="flex items-center cursor-pointer" onClick={() => onTabChange("dashboard")}>
            <div className="w-10 h-10 bg-brand-500 rounded-[10px] flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
              <Rocket size={22} strokeWidth={2} />
            </div>
            <span className="ml-3 font-bold text-xl text-slate-800 tracking-tight leading-none">
              RecruitPro
            </span>
            <span className="ml-2 bg-emerald-500 text-white text-[10px] font-extrabold rounded-md px-1.5 py-0.5">
              v1.0
            </span>
          </div>
        </div>

        {/* Center Section: Navigation Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Dashboard Tab */}
          <button
            onClick={() => onTabChange("dashboard")}
            className={`px-4 py-2 rounded-[10px] text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
              activeTab === "dashboard"
                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
            }`}
          >
            <Home size={16} strokeWidth={2} />
            Dashboard
          </button>

          {/* Manage Tab */}
          <button
            onClick={() => onTabChange("manage")}
            className={`px-4 py-2 rounded-[10px] text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
              activeTab === "manage"
                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
            }`}
          >
            <Folder size={16} strokeWidth={2} />
            Manage
          </button>

          {/* Users Tab */}
          <button
            onClick={() => onTabChange("users")}
            className={`px-4 py-2 rounded-[10px] text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
              activeTab === "users"
                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
            }`}
          >
            <Users size={16} strokeWidth={2} />
            Users
          </button>
        </div>

        {/* Right Section: User Profile & Actions */}
        <div className="flex items-center gap-3">
          {/* Circular avatar badge */}
          <div className="w-9 h-9 bg-brand-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md shadow-brand-500/10 select-none">
            {user.initials}
          </div>

          {/* Profile Name & Role (Desktop Only) */}
          <div className="hidden md:flex flex-col text-left">
            <span className="font-semibold text-[13.5px] text-slate-800 leading-tight">
              {user.name}
            </span>
            <span className="font-medium text-[11px] text-slate-400">
              {user.role}
            </span>
          </div>

          {/* Logout Button (Desktop Only) */}
          <button
            onClick={onLogout}
            aria-label="Logout"
            className="hidden md:flex w-9 h-9 border border-slate-200 rounded-[10px] items-center justify-center text-slate-500 hover:border-brand-500 hover:text-brand-500 hover:bg-brand-50 transition-all duration-200"
          >
            <LogOut size={18} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* MOBILE DRAWER: Sliding Left Navigation Drawer                              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
              className="fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl flex flex-col p-6 border-r border-slate-100 box-border font-sans"
            >
              {/* Close Button Inside Drawer */}
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all"
              >
                <X size={16} strokeWidth={2} />
              </button>

              {/* Navigation Items (Top) */}
              <div className="flex flex-col gap-1.5 mt-8">
                {/* Dashboard Button */}
                <button
                  onClick={() => handleTabClick("dashboard")}
                  className={`w-full h-11 px-4 rounded-[12px] text-sm font-semibold flex items-center gap-3 transition-all duration-200 ${
                    activeTab === "dashboard"
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/10 hover:bg-brand-600"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
                  }`}
                >
                  <Home size={18} strokeWidth={2} />
                  Dashboard
                </button>

                {/* Manage Button */}
                <button
                  onClick={() => handleTabClick("manage")}
                  className={`w-full h-11 px-4 rounded-[12px] text-sm font-semibold flex items-center gap-3 transition-all duration-200 ${
                    activeTab === "manage"
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/10 hover:bg-brand-600"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
                  }`}
                >
                  <Folder size={18} strokeWidth={2} />
                  Manage
                </button>

                {/* Users Button */}
                <button
                  onClick={() => handleTabClick("users")}
                  className={`w-full h-11 px-4 rounded-[12px] text-sm font-semibold flex items-center gap-3 transition-all duration-200 ${
                    activeTab === "users"
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/10 hover:bg-brand-600"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
                  }`}
                >
                  <Users size={18} strokeWidth={2} />
                  Users
                </button>

                {/* Settings Button */}
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    // Add navigate handler here...
                  }}
                  className="w-full h-11 px-4 rounded-[12px] text-sm font-semibold flex items-center gap-3 text-slate-600 hover:bg-brand-50 hover:text-brand-500 transition-all duration-200"
                >
                  <Settings size={18} strokeWidth={2} />
                  Settings
                </button>

                {/* Logout Button */}
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    onLogout();
                  }}
                  className="w-full h-11 px-4 rounded-[12px] text-sm font-semibold flex items-center gap-3 text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all duration-200"
                >
                  <LogOut size={18} strokeWidth={2} />
                  Logout
                </button>
              </div>

              {/* User Profile Card (Bottom) */}
              <div className="mt-auto bg-slate-100 p-3.5 rounded-2xl flex items-center gap-3 w-full box-border">
                <div className="w-9 h-9 bg-white text-brand-500 font-bold rounded-full flex items-center justify-center shadow-sm select-none shrink-0 font-sans">
                  {user.initials}
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="font-bold text-sm text-slate-800 truncate leading-none">
                    {user.name}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold truncate mt-1">
                    {user.email || "mike@recruitpro.com"}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
