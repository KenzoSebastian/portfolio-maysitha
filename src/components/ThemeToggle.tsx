import { useTheme } from "../../components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-sm border border-border cursor-pointer justify-self-end-safe"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 rotate-0 scale-100" />
      )}
    </button>
  );
};
