export function CommunitiesList() {
  const communities = [
    {
      id: 1,
      name: "Durga Puja Community",
      members: 2456,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Durga Puja Community",
      members: 2456,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Durga Puja Community",
      members: 2456,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Durga Puja Community",
      members: 2456,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="space-y-4">
        {communities.map((community) => (
          <div key={community.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-15 h-15 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={community.image || "/placeholder.svg"}
                alt={community.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-amber-800 text-lg mb-1">{community.name}</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-600 text-sm">
                  <span className="font-medium">{community.members.toLocaleString()}</span> Members
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}