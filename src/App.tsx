import { Header } from "@/components/header"
import  Home  from "@/pages/Home"
import { Route, Routes } from "react-router-dom"
import DestinationsPage from "./pages/destinationspage"
import ToursPage from "./pages/tourspage"
import CommunitiesPage from "./pages/communitiespage"

export default function HomePage() {
  return (
    
    <div className="min-h-screen bg-orange-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
      </Routes>
    </div>
  )
}
