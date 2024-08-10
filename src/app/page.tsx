import Carrousel from './components/Carrousel'
import AboutUs from './components/AboutUs'
import OurProducts from './components/OurProducts'
import GradientSections from './components/GradientSections'
import Footer from './components/Footer'
import Segments from './components/Segments'
import Customers from './components/Customer'

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full ">
      {/* <Header /> */}

      {/* <Carrousel /> */}
      <Carrousel />

      {/* <About us /> */}
      <AboutUs />

      {/* Our products /> */}
      <OurProducts />

      {/* Gradient Sections /> */}
      <GradientSections />

      {/* Segments Section /> */}
      <Segments />

      {/* Customers Section /> */}
      <Customers />

      {/* Footer Sections /> */}
    </main>
  )
}
