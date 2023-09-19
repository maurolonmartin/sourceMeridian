export interface Breed {
    message: [],
    status: string
}

export interface SubBreed {
    subBreed: []
}


export interface DogBreedsResult {
    message: Record<string, string[]>;
}

export interface DogBreed {
    breed: string;
    subTypes: string[];
}