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

export function DestinationsGrid() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Travel Destinations
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Travel Destinations in West Bengal</h2>
        </div>

        {/* Destinations Grid - 3 rows of 4 cards */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={`row1-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="object-cover p-4"
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

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={`row2-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover p-4"
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

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={`row3-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover p-4"
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
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-amber-800 hover:bg-amber-900 text-white shadow-lg flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z" />
          </svg>
        </button>
      </div>
    </section>
  )
}
