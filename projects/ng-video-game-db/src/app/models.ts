export interface Game {
    background_image: string;
    description: string;
    genre: Array<Genre>;
    id: string;
    metacritic: number;
    metacritic_url: string;
    name: string;
    parent_platforms: Array<ParentPlantform>;
    publishers: Array<Publishers>;
    released: string;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    website: string;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface ParentPlantform {
    platform: {
        slug: string;
    };
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    };
}
