"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FolderKanban, Menu, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  onSubmitClick: () => void
}

function Header({ onSubmitClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    name: "Jane Doe",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
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
            <Link to="#explore" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Explore Projects
            </Link>
            <Link to="#profile" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              My Profile
            </Link>
          </nav>

          {/* User Avatar with Dropdown */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none">
                  <Avatar className="h-9 w-9 border border-gray-700 cursor-pointer hover:border-cyan-400 transition-colors duration-200">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="bg-gray-800 text-cyan-400">{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-gray-900 border border-gray-800 text-gray-200">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-gray-400">@janedoe</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Profile Settings</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">My Projects</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer">Dark Mode</DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-800" />
                <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer text-red-400">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  onSubmitClick()
                  setIsMenuOpen(false)
                }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                Submit Project
              </button>
              <Link
                to="#explore"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Projects
              </Link>
              <Link
                to="#profile"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
              <div className="pt-2 flex items-center space-x-3 border-t border-gray-800">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className="bg-gray-800 text-cyan-400">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-gray-400">@janedoe</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export { Header }