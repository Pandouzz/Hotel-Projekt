export interface Room {
    //Grunddaten
    title: string;
    roomNumber: number;
    roomType: RoomType;
    size: number;
    view: ViewType;
    price: number;
    maxGuests: number;
    
    //Ausstattung
    wifi: boolean;
    airConditioning: boolean;
    tv: boolean;
    minibar: boolean;
    balcony: boolean;
}

export enum RoomType {
    SINGLE = 'single',
    DOUBLE = 'double',
    SUITE = 'suite'
}

export enum ViewType {
    SEA_VIEW = 'sea_view',
    CITY_VIEW = 'city_view',
    GARDEN_VIEW = 'garden_view'
}