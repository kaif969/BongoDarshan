// import { Header } from "@/components/header"
import { MapSection } from "@/components/map-section"
import { DestinationsGrid } from "@/components/destinations-grid"

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <MapSection />
      <DestinationsGrid />
    </div>
  )
}
