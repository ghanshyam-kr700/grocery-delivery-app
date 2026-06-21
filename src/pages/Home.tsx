import AppPromoBanner from "../Components/Home/AppPromoBanner"
import Features from "../Components/Home/Features"
import Hero from "../Components/Home/Hero"
import HomeCateogries from "../Components/Home/HomeCateogries"
import NewsLetter from "../Components/Home/NewsLetter"
import PopularProducts from "../Components/Home/PopularProducts"


const Home = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <Features />
      <HomeCateogries />
      <PopularProducts />
      <AppPromoBanner />
      <NewsLetter />

    </div>
  )
}

export default Home