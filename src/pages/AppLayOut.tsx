import { Outlet } from "react-router-dom"
import Banner from "../Components/Banner"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Home/Footer"
import CartSidebar from "../Components/CartSidebar"
// import CartSidebar from "../Components/CartSidebar"



const AppLayOut = () => {
  return (
    <>
    <Banner/>
    <Navbar/>
    <main className="min-h-screen">
        <Outlet/>
    </main>
    <Footer/>
    {/* <CartSidebar/> */}
    <CartSidebar/>

    </>
  )
}

export default AppLayOut