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
          {/* ADDED: dark:opacity-90 for dark mode images */}
          <img src={image || "/placeholder.svg"} alt={title} className="h-32 w-full object-cover dark:opacity-90" />
        </div>
      )}
      <h2
        className={`mb-6 pb-3 font-serif font-bold tracking-tight ${
          isMainSection
            ? "text-center text-3xl text-primary border-b-2 border-primary sm:text-4xl dark:text-primary dark:border-primary"
            : "text-center text-xl text-foreground border-b border-border sm:text-2xl dark:text-foreground dark:border-border"
        }`}
      >
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 border-b border-border/50 pb-3 last:border-0 dark:border-border/30"
          >
            <div className="flex-1">
              {/* FIXED: Changed from text-card-foreground to text-foreground and added dark:text-foreground */}
              <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg dark:text-foreground">
                {item.name}
              </h3>
              {item.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed dark:text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
            <div className="shrink-0 text-right">
              {item.bottlePrice && (
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">Bottle </span>
                  <span className="font-mono text-base font-bold text-primary sm:text-lg dark:text-primary">
                    {item.bottlePrice}
                  </span>
                </div>
              )}
              {showGlass && item.glassPrice && (
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">Glass </span>
                  <span className="font-mono text-base font-bold text-primary sm:text-lg dark:text-primary">
                    {item.glassPrice}
                  </span>
                </div>
              )}
              {item.totPrice && (
                <div>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">Tot </span>
                  <span className="font-mono text-sm font-semibold text-primary/80 sm:text-base dark:text-primary/80">
                    {item.totPrice}
                  </span>
                </div>
              )}
              {item.price && (
                <span className="font-mono text-base font-bold text-primary sm:text-lg dark:text-primary">
                  {item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}