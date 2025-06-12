export interface BookingOrder {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    checkInDate: Date | null;
    checkOutDate: Date | null;
}