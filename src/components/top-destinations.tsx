import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import kolkata from "../assets/kolkata.png"
import sundarbans from "../assets/sundarbans.png"
import dooars from "../assets/dooars.png"
import darjeeling from "../assets/darjeeling.png"

const destinations = [
  {
    name: "Kolkata",
    tours: "18 Tours",
    image: kolkata,
  },
  {
    name: "Sundarbans",
    tours: "26 Tours",
    image: sundarbans,
  },
  {
    name: "Dooars",
    tours: "22 Tours",
    image: dooars,
  },
  {
    name: "Darjeeling",
    tours: "32 Tours",
    image: darjeeling,
  },
]

export function TopDestinations() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Top Destinations
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Travel Destinations in West Bengal</h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative p-4">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{destination.name}</h3>
                <p className="text-amber-600 text-sm flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  {destination.tours}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full">View All</Button>
        </div>
      </div>
    </section>
  )
}
