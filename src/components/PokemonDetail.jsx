import { colorByStat, colorByType } from "../constants/pokemon"
import Evolutions from "./Evolutions"

export const PokemonDetail = ({ pokemon }) => {
    return (
        <>
            <header className="absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%]">
                <img className="pixelated" src={pokemon?.image} alt="" />
            </header>
            <div className="overflow-y-auto px-4 pt-14 grid gap-2 content-start h-full hidden-scroll">
                <span className="text-slate-400 text-sm font-semibold">N° {pokemon?.id}</span>
                <h2 className="font-bold text-lg capitalize">{pokemon?.name}</h2>
                <ul className="flex gap-2 justify-center">
                    {
                        pokemon?.types.map(type =>
                            <li
                                className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type]}`}
                                key={type}
                            >
                                {type}
                            </li>)
                    }
                </ul>
                <div>
                    <h4 className="font-bold capitalize">Podex Entry</h4>
                    <p className="text-slate-400">
                        {pokemon?.description}
                    </p>
                </div>
                <section className="grid grid-cols-2 gap-4">
                    <div className="grip gap-2">
                        <h4 className="font-bold capitalize">Height</h4>
                        <span className="bg-slate-100 block rounded-full p-1">{pokemon?.height/10} m</span>
                    </div>
                    <div className="grip gap-2">
                        <h4 className="font-bold capitalize">Weight</h4>
                        <span className="bg-slate-100 block rounded-full p-1">{pokemon?.weight/10} kg</span>
                    </div>
                </section>
                <section className="grip pag-2">
                    <h4 className="font-bold capitalize">Abilities</h4>
                    <ul className="grid grid-cols-2 gap-4">
                        {
                            pokemon?.abilities.map((ability) => (
                                <li
                                    key={ability}
                                    className="bg-slate-100 block rounded-full p-1 capitalize"
                                >
                                    <span>{ability}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section className="grid gap-2">
                    <h4 className="font-bold capitalize">Stats</h4>
                    <ul className="flex justify-center gap-3 flex-wrap">
                        {
                            pokemon?.stats.map((stat) => (
                                <li className={`p-1 rounded-full
                                ${colorByStat[stat.name]}`} key={stat.name}>
                                    <div className="rounded-full w-[26px] aspect-square grid place-content-center">
                                        <span className="text-[10px] text-white font-semibold">{stat.name}</span>
                                    </div>
                                    <span className="font-semibold text-xs">{stat.base_stat}</span>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section className="grid gap-2">
                    <h4 className="font-bold capitalize">Evolutions</h4>
                    <Evolutions evolutions={pokemon?.evolutions ?? []} />
                </section>
            </div>
        </>
    )
}
