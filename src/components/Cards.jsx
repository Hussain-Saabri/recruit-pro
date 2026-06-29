import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function Cards({
  Icon,
  value,
  label,
  trend,
  colorTheme = "purple"
}) {
  // Theme-specific styles mapping
  const themeStyles = {
    purple: {
      iconBg: "bg-brand-500",
      iconShadow: "shadow-brand-500/10",
      valueColor: "text-brand-500",
      hover: "hover:shadow-[0_8px_30px_rgba(109,93,246,0.05)] hover:border-brand-200/50 active:border-brand-200/50 active:shadow-[0_8px_30px_rgba(109,93,246,0.05)]",
      hoverTopBar: "group-hover:bg-brand-500 group-active:bg-brand-500"
    },
    green: {
      iconBg: "bg-emerald-500",
      iconShadow: "shadow-emerald-500/10",
      valueColor: "text-emerald-500",
      hover: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)] hover:border-emerald-200/50 active:border-emerald-200/50 active:shadow-[0_8px_30px_rgba(16,185,129,0.05)]",
      hoverTopBar: "group-hover:bg-emerald-500 group-active:bg-emerald-500"
    },
    orange: {
      iconBg: "bg-amber-500",
      iconShadow: "shadow-amber-500/10",
      valueColor: "text-amber-500",
      hover: "hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)] hover:border-amber-200/50 active:border-amber-200/50 active:shadow-[0_8px_30px_rgba(245,158,11,0.05)]",
      hoverTopBar: "group-hover:bg-amber-500 group-active:bg-amber-500"
    },
    blue: {
      iconBg: "bg-blue-500",
      iconShadow: "shadow-blue-500/10",
      valueColor: "text-blue-500",
      hover: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.05)] hover:border-blue-200/50 active:border-blue-200/50 active:shadow-[0_8px_30px_rgba(59,130,246,0.05)]",
      hoverTopBar: "group-hover:bg-blue-500 group-active:bg-blue-500"
    }
  };

  const style = themeStyles[colorTheme] || themeStyles.purple;

  return (

    <div className={` group relative overflow-hidden bg-gradient-to-r from-sky-50/70 via-white to-white p-4 rounded-lg border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[1.02] cursor-pointer ${style.hover}`}>
      {/* Top Border Line Hover Highlight */}
      <div className={`absolute top-0 left-0 right-0 h-[4px] bg-transparent transition-colors duration-300 ${style.hoverTopBar}`} />
      
      {/* Icon size changed to w-12 h-12 and rounded-lg to match target project sizes */}
      <div className={`w-12 h-12 ${style.iconBg} ${style.iconShadow} rounded-lg flex items-center justify-center text-white shrink-0`}>
        {Icon && <Icon size={20} strokeWidth={2} />}
      </div>
      <div className="flex flex-col text-left">
        <span className={`text-2xl font-bold leading-tight ${style.valueColor}`}>
          {value}
        </span>
        <span className="text-slate-500 text-xs font-semibold mt-0.5">
          {label}
        </span>
        {trend && (
          <span className={`text-[11px] font-bold mt-1 flex items-center gap-0.5 ${trend.isUp ? "text-emerald-500" : "text-rose-500"}`}>
            {trend.isUp ? (
              <ArrowUp size={12} strokeWidth={3} className="shrink-0" />
            ) : (
              <ArrowDown size={12} strokeWidth={3} className="shrink-0" />
            )}
            <span>{trend.value}</span>
          </span>
        )}
      </div>
    </div>
  );
}
