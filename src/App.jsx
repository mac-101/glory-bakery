import Navbar from "./component/navbar"
import Hero from "./component/hero"
import CarouselSection from "./component/carousel"
import WhatWeOffer from "./component/whatweoffer"
import MeetTheTeam from "./component/team"
import LocationAndBooking from "./component/locationBooking"
import Footer from "./component/footer"
import AcademySection from "./component/academy"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./page/gallery"
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarouselSection />
      <WhatWeOffer />
      <AcademySection />
      <MeetTheTeam />
      <LocationAndBooking />
      <Footer />
    </>
  )
}
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
