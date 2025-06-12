export interface Room {
    //Grunddaten
    title: string;
    roomNumber: number;
    roomType: RoomType;
    size: number;
    view: ViewType;
    price: number;
    numberOfBeds: number;
    description: string;
    photo: string;
    
    //Ausstattung
    wifi: boolean;
    airConditioning: boolean;
    tv: boolean;
    minibar: boolean;
    balcony: boolean;
}

export enum RoomType {
    SINGLE = 'Single',
    DOUBLE = 'Double',
    SUITE = 'Suite'
}

export enum ViewType {
    SEA_VIEW = 'Meerblick',
    CITY_VIEW = 'Stadtblick',
    GARDEN_VIEW = 'Gartenblick'
}