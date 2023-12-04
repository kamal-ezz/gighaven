export function isLoggedIn(): boolean {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("userData");
    if (data) return true;
  }

  return false;
}
