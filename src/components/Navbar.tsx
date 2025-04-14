import { Menu, X, Bus, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-card shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bus className="h-8 w-8 text-foreground" />
              <span className="text-xl font-bold">PrimeVIP</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className=" hover:text-primary">
              Servicios
            </Link>
            <Link to="/fleet" className=" hover:text-primary">
              Flota
            </Link>
            <Link to="/contact" className=" hover:text-primary">
              Contacto
            </Link>
            <button onClick={toggleTheme} className="p-2 rounded-lg">
              {theme === "dark" ? (
                <Sun className="h-5 w-5 " />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg">
              {theme === "dark" ? (
                <Sun className="h-5 w-5 " />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/services"
              className="block px-3 py-2  hover:text-primary"
            >
              Servicios
            </Link>
            <Link to="/fleet" className="block px-3 py-2  hover:text-primary">
              Flota
            </Link>
            <Link to="/contact" className="block px-3 py-2  hover:text-primary">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
