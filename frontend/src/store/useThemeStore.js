// import { create } from "zustand";

// export const useThemeStore = create((set) => ({
//   theme: localStorage.getItem("streamify-theme") || "coffee",
//   setTheme: (theme) => {
//     localStorage.setItem("streamify-theme", theme);
//     set({ theme });
//   },
// }));
import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("streamify-theme") || "coffee";

  // Apply immediately on startup
  document.documentElement.setAttribute("data-theme", savedTheme);

  return {
    theme: savedTheme,
    setTheme: (theme) => {
      localStorage.setItem("streamify-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // 👈 apply to <html>
      set({ theme });
    },
  };
});
