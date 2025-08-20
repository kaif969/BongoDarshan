export function UserProfile() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="text-center">
        {/* Profile Avatar */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-amber-200 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-amber-300 flex items-center justify-center">
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        {/* User Info */}
        <h2 className="text-xl font-semibold text-amber-800 mb-1">Sk Kaif Uddin</h2>
        <p className="text-gray-600">
          <span className="text-amber-600 font-medium">2</span> Travels
        </p>
      </div>
    </div>
  )
}