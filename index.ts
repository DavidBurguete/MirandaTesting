export class Room{
    name: string;
    bookings: Booking[];
    price: number;
    discount: number;

    constructor(name: string, bookings: Booking[], price: number, discount: number){
        this.name = name;
        this.bookings = bookings;
        this.price = price;
        this.discount = discount;
    }

    isOccupied(date: Date){
        if(!(date instanceof Date)){
            throw new Error("Non array recived");
        }
        const occupied = this.bookings.map(booking => {
            return booking.checkIn <= date && date <= booking.checkOut;
        });
        return occupied.includes(true);
    }

    occupancyPercentage(startDate: Date, endDate: Date){
        if(!(startDate instanceof Date) || !(endDate instanceof Date)){
            throw new Error("It has to be a (valid) date");
        }
        const ammountOfDates = this.bookings.map(booking => {
            if(booking.checkIn <= startDate && startDate <= booking.checkOut){
                return (booking.checkOut.getDate() - startDate.getDate())/1000/60/60/24;
            }
            if(booking.checkIn <= endDate && endDate <= booking.checkOut){
                return (endDate.getDate() - booking.checkIn.getDate())/1000/60/60/24;
            }
            if(startDate <= booking.checkIn && booking.checkIn <= endDate && startDate <= booking.checkOut && booking.checkOut <= endDate){
                return (booking.checkOut.getDate() - booking.checkIn.getDate())/1000/60/60/24;
            }
            return 0;
        });
        const totalDates = ammountOfDates.reduce((ammount, toAdd) => ammount + toAdd, 0) / ((endDate.getDate() - startDate.getDate())/1000/60/60/24) * 100;
        return totalDates >= 100 ? "100%" : totalDates + "%";
    }

    static totalOccupancyPercentage(rooms: Room[], startDate: Date, endDate: Date){
        const arrayOfAmmountOfDates = rooms.map(room => {
            return room.occupancyPercentage(startDate, endDate);
        });
        return arrayOfAmmountOfDates;
    }

    static availableRooms(rooms: Room[], startDate: Date, endDate: Date){
        const arrayOfRoomsAvailable = rooms.filter(room => {
            return room.occupancyPercentage(startDate, endDate) === "0%";
        });
        return arrayOfRoomsAvailable;
    }
}

export class Booking{
    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room: Room;

    constructor(name: string, email: string, checkIn: Date, checkOut: Date, discount: number, room: Room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee(){
        if(!this.isValid(this.room.price) || !this.isValid(this.room.discount) || !this.isValid(this.discount)){
            throw new Error("Something happened in the process: A value is not a number");
        }
        else if(this.room.price < 0 || this.room.discount < 0 || this.discount < 0){
            throw new Error("Something happened in the process: Values must be positive number");
        }
        return parseFloat((this.room.price * ((100 - this.room.discount) / 100) * ((100 - this.discount) / 100)).toFixed(2));
    }

    isValid(valueToCheck: any){
        if(typeof valueToCheck !== "number"){
            return false;
        }
        else{
            return true;
        }
    }
}