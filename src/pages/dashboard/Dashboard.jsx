
import { useAuthStore } from "../../store/useAuthStore";

export default function Dashboard() {
  const { user } = useAuthStore();
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left font-sans">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
      <p className="text-slate-500 text-sm mt-1">Welcome back, {user?.name}!</p>
      <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 text-sm">
        You are logged in with the role: <span className="font-bold text-brand-500 capitalize">{user?.role}</span>.
      </div>
    </div>
  );
}
