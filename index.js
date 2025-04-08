class Room{
    constructor(name, bookings, price, discount){
        this.name = name;
        this.bookings = bookings;
        this.price = price;
        this.discount = discount;
    }

    isOccupied(date){
        const occupied = this.bookings.map(booking => {
            return booking.checkIn <= date && date <= booking.checkOut;
        });
        return occupied.includes(true);
    }

    occupancyPercentage(startDate, endDate){
        const ammountOfDates = this.bookings.map(booking => {
            if(booking.checkIn <= startDate && startDate <= booking.checkOut){
                return (booking.checkOut - startDate)/1000/60/60/24;
            }
            if(booking.checkIn <= endDate && endDate <= booking.checkOut){
                return (endDate - booking.checkIn)/1000/60/60/24;
            }
            if(startDate <= booking.checkIn && booking.checkIn <= endDate && startDate <= booking.checkOut && booking.checkIn <= checkOut){
                return (booking.checkOut - booking.checkIn)/1000/60/60/24;
            }
            return 0;
        });
        const totalDates = ammountOfDates.reduce((ammount, toAdd) => ammount + toAdd, 0) / ((endDate - startDate)/1000/60/60/24) * 100;
        return totalDates >= 100 ? "100%" : totalDates + "%";
    }

    static totalOccupancyPercentage(rooms, startDate, endDate){
        const arrayOfAmmountOfDates = rooms.map(room => {
            return room.occupancyPercentage(startDate, endDate);
        });
        return arrayOfAmmountOfDates;
    }

    static availableRooms(rooms, startDate, endDate){
        const arrayOfRoomsAvailable = rooms.filter(room => {
            return room.occupancyPercentage(startDate, endDate) === "0%";
        });
        return arrayOfRoomsAvailable;
    }
}

class Booking{
    constructor(name, email, checkIn, checkOut, discount, room){
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee(){
        return this.room.price * ((100 - this.room.discount) / 100) * ((100 - this.discount) / 100);
    }
}

module.exports = { Room, Booking };