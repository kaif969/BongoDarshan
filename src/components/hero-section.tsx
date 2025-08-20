import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Homebg from "@/assets/home_page_bg.png"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 lg:px-24 lg:py-16 rounded-3xl overflow-hidden">
        <img 
          src={Homebg} 
          alt="Bengali Cultural Background" 
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Your Desire Place."
                className="w-full h-14 pl-6 pr-14 text-lg bg-white rounded-full border-0 shadow-lg focus:ring-2 focus:ring-amber-500"
              />
              <Button
                size="sm"
                className="absolute right-2 top-2 h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                variant="ghost"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
