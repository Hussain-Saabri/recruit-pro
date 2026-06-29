
import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon: Icon, title, onClick, mobile = false }) {
  
  console.log("Inside the Nav Item",{to, icon: Icon, title, onClick, mobile})
  const baseStyles = "font-semibold flex items-center gap-3 transition-all duration-200";

  const desktopStyles = ({ isActive }) =>
    `${baseStyles} px-4 py-2 rounded-[10px] text-sm ${
      isActive
        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20"
        : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
    }`;

  const mobileStyles = ({ isActive }) =>
    `${baseStyles} w-full h-11 px-4 rounded-[12px] text-sm ${
      isActive
        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/10 hover:bg-brand-600"
        : "text-slate-600 hover:bg-brand-50 hover:text-brand-500"
    }`;

  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={mobile ? mobileStyles : desktopStyles}
    >
      {Icon && <Icon size={mobile ? 18 : 16} strokeWidth={2} />}
      <span>{title}</span>
    </NavLink>
  );
}
