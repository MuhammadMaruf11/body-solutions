import Banner from "./components/Banner/Banner"
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import Details from "./components/Details/Details"
import Service from "./components/Service/Service"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* Other components can be added here */}
      <Service />
      <Testimonial />
      <Details />
      <Footer />
    </>
  )
}

export default App
