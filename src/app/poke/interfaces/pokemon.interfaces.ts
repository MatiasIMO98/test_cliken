export interface FetchAllPokemonResponse {
    count:      number;
    next:       null;
    previous:   null;
    results:    SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
}

export interface Pokemon {
    id: string;
    name: string;
    height: number;
    weight: number;
    sprites: Sprite[];
}

export interface Sprite {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
}