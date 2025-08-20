export function ToursGrid() {
  const tours = [
    {
      id: 1,
      title: "Experience the Ecstasy: 6 Days of Durga Puja in Kolkata",
      location: "Kolkata",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Sunrise Over Kanchenjunga: A Darjeeling Escape",
      location: "Darjeeling",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Experience the Ecstasy: 6 Days of Durga Puja in Kolkata",
      location: "Kolkata",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Sunrise Over Kanchenjunga: A Darjeeling Escape",
      location: "Darjeeling",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative">
              <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-amber-700 font-medium text-sm">{tour.location}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight">{tour.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-medium transition-colors">
          View More
        </button>
      </div>
    </div>
  )
}