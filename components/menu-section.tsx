interface MenuItem {
  name: string
  description?: string
  bottlePrice?: string
  totPrice?: string
  glassPrice?: string
  price?: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  isMainSection?: boolean
  image?: string
  showGlass?: boolean
}

export function MenuSection({ title, items, isMainSection = false, image, showGlass = false }: MenuSectionProps) {
  return (
    <section className="mb-12">
      {image && !isMainSection && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img src={image || "/placeholder.svg"} alt={title} className="h-32 w-full object-cover" />
        </div>
      )}
      <h2
        className={`mb-6 pb-3 font-serif font-bold tracking-tight ${
          isMainSection
            ? "text-center text-3xl text-primary border-b-2 border-primary sm:text-4xl"
            : "text-center text-xl text-foreground border-b border-border sm:text-2xl"
        }`}
      >
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 border-b border-border/50 pb-3 last:border-0"
          >
            <div className="flex-1">
              <h3 className="text-base font-semibold leading-tight text-card-foreground sm:text-lg">{item.name}</h3>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              )}
            </div>
            <div className="shrink-0 text-right">
              {item.bottlePrice && (
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground">Bottle </span>
                  <span className="font-mono text-base font-bold text-primary sm:text-lg">{item.bottlePrice}</span>
                </div>
              )}
              {showGlass && item.glassPrice && (
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground">Glass </span>
                  <span className="font-mono text-base font-bold text-primary sm:text-lg">{item.glassPrice}</span>
                </div>
              )}
              {item.totPrice && (
                <div>
                  <span className="text-xs text-muted-foreground">Tot </span>
                  <span className="font-mono text-sm font-semibold text-primary/80">{item.totPrice}</span>
                </div>
              )}
              {item.price && (
                <span className="font-mono text-base font-bold text-primary sm:text-lg">{item.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
