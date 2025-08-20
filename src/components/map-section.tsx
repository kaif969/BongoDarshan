import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import map from "../assets/map.png"
import kolkata from "../assets/kolkata.png"

export function MapSection() {
  return (
    <section className="relative h-[600px] bg-green-100">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src={map}
          alt="West Bengal Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Search Bar Overlay */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative w-96">
          <Input
            type="text"
            placeholder="Search Your Desire Place."
            className="w-full h-12 pl-6 pr-12 text-base bg-white rounded-full border-0 shadow-lg focus:ring-2 focus:ring-amber-500"
          />
          <Button
            size="sm"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            variant="ghost"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Location Markers */}
      <div className="absolute top-20 right-32">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>
      <div className="absolute top-32 right-24">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>
      <div className="absolute top-40 right-16">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>
      <div className="absolute bottom-32 left-1/3">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>
      <div className="absolute bottom-24 right-1/4">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>
      <div className="absolute bottom-40 left-1/2">
        <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
      </div>

      {/* Destination Card Overlay */}
      <div className="absolute bottom-8 right-8">
        <Card className="w-48 shadow-lg">
          <div className="aspect-[4/3] relative">
            <img
              src={kolkata}
              alt="Kolkata"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <CardContent className="p-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Kolkata</h3>
            <p className="text-amber-600 text-sm flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              18 Tours
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-8 right-64 flex flex-col space-y-2">
        <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
          +
        </Button>
        <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
          -
        </Button>
      </div>
    </section>
  )
}
