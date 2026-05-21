import { heroSectionData } from "../../assets/assets"

const Features = () => {
  return (
    
    <section className="bg-white py-5 border border-app-border/80 rounded-xl">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">

    {heroSectionData.hero_features.map((Feature, i) => (
      <div key={i} className="flex items-center gap-3 py-3">

        <div className="size-10 rounded-lg bg-app-cream flex-center shrink-0">
          <Feature.icon className="size-5" />
        </div>

        <div>
          <p className="text-sm font-semibold text-app-green">
            {Feature.title}
          </p>

          <p className="text-xs text-app-text-light">
            {Feature.desc}
          </p>
        </div>

      </div>
    ))}

  </div>
</section>
  )
}

export default Features