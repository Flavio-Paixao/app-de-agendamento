const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export default function CategorySection({ category }) {
  return (
    <section id={category.id} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 md:text-2xl">{category.title}</h2>
          <p className="text-sm text-neutral-700">{category.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {category.items.map((item) => (
          <article
            key={item.name}
            className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 transition hover:border-ifood-500/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-medium text-neutral-900">{item.name}</h3>
                <p className="mt-1 text-sm text-neutral-700">{item.description}</p>
              </div>
              <span className="whitespace-nowrap text-base font-semibold text-ifood-500">
                {currency.format(item.price)}
              </span>
            </div>

            {item.tag ? (
              <span className="mt-3 inline-flex rounded-full border border-ifood-500/20 bg-ifood-50 px-2.5 py-1 text-xs font-medium text-ifood-700">
                {item.tag}
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
