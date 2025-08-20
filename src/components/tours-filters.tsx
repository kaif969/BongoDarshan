import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function ToursFilters() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        </div>
      </div>

      {/* Expand All / Reset All */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-amber-600 text-sm font-medium">Expand All</span>
          <div className="w-8 h-4 bg-amber-600 rounded-full relative">
            <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
          </div>
        </div>
        <button className="text-red-500 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">Reset all</button>
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {/* Destination */}
        <div className="border-b pb-4">
          <button className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-gray-900">Destination</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="mt-3">
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-500">
              <option>Choose Destination</option>
              <option>Kolkata</option>
              <option>Darjeeling</option>
              <option>Sundarbans</option>
              <option>Dooars</option>
            </select>
          </div>
        </div>

        {/* City */}
        <div className="border-b pb-4">
          <button className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-gray-900">City</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="mt-3">
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-500">
              <option>Choose City</option>
            </select>
          </div>
        </div>

        {/* Tour Duration */}
        <div className="border-b pb-4">
          <button className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-gray-900">Tour Duration</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="mt-3">
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-500">
              <option>Choose Tour Duration</option>
            </select>
          </div>
        </div>

        {/* Tour Price Range */}
        <div className="border-b pb-4">
          <button className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-gray-900">Tour Price Range</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="mt-3">
            <select className="w-full p-2 border border-gray-300 rounded-md text-gray-500">
              <option>Choose Tour Price Range</option>
            </select>
          </div>
        </div>

        {/* Search Within */}
        <div>
          <button className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-gray-900">Search Within</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <div className="mt-3 space-y-3">
            <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-md" />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="exact-search" className="rounded" />
              <label htmlFor="exact-search" className="text-sm text-gray-700">
                Exact Search
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6">
        <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">Search</Button>
      </div>
    </div>
  )
}