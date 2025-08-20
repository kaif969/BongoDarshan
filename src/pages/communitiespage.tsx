// import { Header } from "@/components/header"
import { UserProfile } from "@/components/user-profile"
import { CommunitiesList } from "@/components/communities-list"

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* User Profile Card */}
          <div className="w-80 flex-shrink-0">
            <UserProfile />
          </div>

          {/* Communities List */}
          <div className="flex-1">
            <CommunitiesList />
          </div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-amber-800 hover:bg-amber-900 text-white p-4 rounded-full shadow-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
