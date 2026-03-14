import CategorySection from './components/CategorySection';
import { categories, highlights } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ifood-500">Cardápio Digital</p>
            <h1 className="text-2xl font-bold md:text-3xl">Sabor da Casa</h1>
            <p className="text-sm text-neutral-700">Peça rápido, receba quentinho.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-ifood-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ifood-600">
            Fazer pedido
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[1fr_2fr]">
        <aside className="space-y-5 rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft">
          <p className="text-sm text-neutral-700">
            Um cardápio intuitivo com navegação rápida por categorias e foco em conversão de pedidos.
          </p>

          <ul className="space-y-2 text-sm text-neutral-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-ifood-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <nav>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-700">Navegação rápida</p>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="block rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 transition hover:border-ifood-500/40 hover:bg-ifood-50"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="space-y-6">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </section>
      </main>
    </div>
  );
}
