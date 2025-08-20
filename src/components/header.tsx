import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
             <div>
              <img src="/BD_logo_removebg.png" alt="Bongo Darshan Logo" className="h-12" />
            </div>
            <h1 className=" text-xl lg:text-2xl font-bold">
              <span className="text-amber-800">Bongo</span><span className="text-amber-500">Darshan</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-amber-700 font-medium">
              Home
            </a>
            <a href="/destinations" className="text-gray-700 hover:text-amber-700 font-medium">
              Destinations
            </a>
            <a href="/tours" className="text-gray-700 hover:text-amber-700 font-medium">
              Tours
            </a>
            <a href="/communities" className="text-gray-700 hover:text-amber-700 font-medium">
              Communities
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent">
              Login
            </Button>
            <Button className="bg-amber-800 hover:bg-amber-900 text-white">Create Account</Button>
          </div>
        </div>
      </div>
    </header>
  )
}