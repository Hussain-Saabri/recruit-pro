import { useAuthStore } from "../store/useAuthStore";
import { NAV_ITEMS } from "../config/navConfig";

export function useRoleNavigation() {
  const { user } = useAuthStore();
  
  if (!user || !user.role) {
    return [];
  }

  // Look up navigation configuration based on the user's role
  return NAV_ITEMS[user.role] || [];
}
