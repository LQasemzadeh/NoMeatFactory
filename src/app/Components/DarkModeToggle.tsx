import { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
    // Manage the theme state
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as "light" | "dark") || "light";
        }
        return "light";
    });

    useEffect(() => {
        // Apply the theme to the <html> tag
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Save the theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded border dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
        >
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default DarkModeToggle;
