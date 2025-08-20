import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const tours = [
  {
    location: "Kolkata",
    title: "Experience the Ecstasy: 6 Days of Durga Puja in Kolkata",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    location: "Darjeeling",
    title: "Sunrise Over Kanchenjunga: A Darjeeling Escape",
    image: "/placeholder.svg?height=240&width=320",
  },
  {
    location: "Dooars",
    title: "3-Day Hill & River Retreat in Dooars: Samsing, Suntalekhola, Bindu",
    image: "/placeholder.svg?height=240&width=320",
  },
]

export function TopTours() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Top Tours
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Favorite Tours in West Bengal</h2>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {tours.map((tour, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative">
                <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-amber-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {tour.location}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">{tour.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full">View All</Button>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="w-14 h-14 rounded-full bg-amber-800 hover:bg-amber-900 text-white shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04.97 4.43L1 23l6.57-1.97C9.96 21.64 11.46 22 13 22h7c1.1 0 2-.9 2-2V12c0-5.52-4.48-10-10-10z" />
          </svg>
        </Button>
      </div>
    </section>
  )
}
