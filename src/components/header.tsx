"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleButton } from "@/components/ui/particle-button";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
          Home of Projects
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            <ParticleButton
              variant="outline"
              className="border-gray-700 bg-gray-800 hover:border-amber-50"
              successDuration={1000}
              onClick={() => {}}
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </ParticleButton>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button
            variant="outline"
            className="border-gray-700 bg-gray-800 hover:border-amber-50"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 p-4">
              <Link
                to="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2"
              >
                <ParticleButton
                  variant="outline"
                  className="w-full border-gray-700 bg-gray-800 hover:border-amber-50"
                  successDuration={1000}
                  onClick={() => {}}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </ParticleButton>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export { Header };
