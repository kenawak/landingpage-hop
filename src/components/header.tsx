"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FolderKanban, Menu, X } from "lucide-react";
import { ParticleButton } from "@/components/ui/particle-button";
interface HeaderProps {
  onSubmitClick: () => void;
}

function Header({ onSubmitClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: "Jane Doe",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  };

  return (
    <header className="fixed top-10 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FolderKanban className="h-6 w-6 text-cyan-400" />
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400">
              Home of Projects
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={onSubmitClick}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              Submit Project
            </button>
            <ParticleButton 
              successDuration={1000} 
              variant="default"
              onClick={() => {
                setTimeout(() => {
                  window.open('https://github.com/kenawak/homeofproject', '_blank', 'noopener,noreferrer');
                }, 1000);
              }}
            >
              Github
            </ParticleButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onSubmitClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                Submit Project
              </button>
              <ParticleButton 
                successDuration={1000} 
                variant="default"
                onClick={() => {
                  setTimeout(() => {
                    window.open('https://t.me/hsnjk_bot', '_blank', 'noopener,noreferrer');
                    setIsMenuOpen(false);
                  }, 1000);
                }}
              >
                Click me!
              </ParticleButton>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
