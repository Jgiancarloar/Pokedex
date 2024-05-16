import { PokemonDetail } from "./PokemonDetail"

const Aside = ({ pokemon,isLoading }) => {
  return (
    <section className="hidden lg:block sticky top-0 h-screen">
      <article className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-t-3xl text-center
      transition-all duration-200 ${pokemon && !isLoading ?"left-0":"left-[50vw]"}`}>
        <PokemonDetail pokemon={pokemon} />
      </article>
      <article className={`absolute bottom-0 bg-white w-full h-[85%] rounded-t-3xl text-center grid place-content-center
      transition-all duration-1000 ${pokemon ? "left-[50vw]" : "left-0"}`}>
        <header className="absolute z-20 left-1/2 -translate-x-1/2 top-0 -translate-y-[70%]">
          <img src="/no-pokemon-selected-image.png" alt="" />
        </header>
        <span className="text-lg text-slate-400 px-20">Select a Pokemon to display here.</span>
      </article>
      <div className="w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2
      -translate-y-1/2">
        <img 
        className="contrast-50 animate-spin-slow" 
        src="/pokeball-icon.png" alt="" />
      </div>
    </section>
  )
}

export default Aside