import StarterDropdown from "./StarterDropdown";
import Link from "next/link";
import Container from "./Container";
import Tooltip from "./Tooltip";

type Theme = {
  primary: string;
  secondary: string;
  background: string;
};

interface HeaderProps {
  onHomeClick?: () => void;
  onThemeChange: (theme: Theme) => void;
  currentTheme: Theme;
}

export default function Header({ onHomeClick, onThemeChange, currentTheme }: HeaderProps) {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-colors duration-500"
      style={{ backgroundColor: `${currentTheme.background}CC` }}
    >
      <Container className="py-3">
        <div className="flex justify-between items-center">
          <Link 
            href="/"
            className="text-white text-xl font-medium hover:opacity-80 transition-opacity duration-200"
          >
            Home
          </Link>
          
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              <Tooltip content="Coming Soon..." position="bottom">
                <button className="text-white text-lg font-medium hover:opacity-80 transition-opacity duration-200 cursor-not-allowed">
                  Books
                </button>
              </Tooltip>
              <Tooltip content="Coming Soon..." position="bottom">
                <button className="text-white text-lg font-medium hover:opacity-80 transition-opacity duration-200 cursor-not-allowed">
                  Blog
                </button>
              </Tooltip>
            </nav>
            
            <div className="relative">
              <StarterDropdown onThemeChange={onThemeChange} currentTheme={currentTheme} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}