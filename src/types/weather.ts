    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Weather {
        id: number;
        main: Main;
        name: string;
        description: string;
        icon: string;
    }

    export interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
        gust: number;
    }

    export interface Rain {
        '1h': number;
    }

    export interface Clouds {
        all: number;
    }

    export interface Sys {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }

