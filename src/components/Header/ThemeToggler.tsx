import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button aria-label='theme toggler'
      className=""
    >
    </button>
  );
};

export default ThemeToggler;
