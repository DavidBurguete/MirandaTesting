const { Room, Booking } = require("./index");

describe("Testing for Rooms and Bookings", () => {
    it("Check if room is occupied on determined date", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.isOccupied(new Date("12-31-2023"))).toBe(true);
        expect(room.isOccupied(new Date("12-31-2022"))).toBe(false);
        expect(room.isOccupied(new Date("10-10-1759"))).toBe(true);
        expect(room.isOccupied(new Date("01-01-1999"))).toBe(false);
    });
    it("Invalid dates for bookings", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", true, "new Date()", 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", 31415926, undefined, 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.isOccupied(new Date("12-31-2023"))).toThrow();
        expect(room.isOccupied(new Date("12-31-2022"))).toThrow();
        expect(room.isOccupied(new Date("10-10-1759"))).toThrow();
        expect(room.isOccupied(new Date("01-01-1999"))).toThrow();
    });
    it("Invalid dates passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.isOccupied(true)).toThrow();
        expect(room.isOccupied("Generic phrase")).toThrow();
        expect(room.isOccupied(1234)).toThrow();
        expect(room.isOccupied(undefined)).toThrow();
    });
    // it("Invalid type (non-array) for bookings in Room object", () => {
    //     const room = new Room("First Room", true, 17000, 25);
    //     const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
    //     const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
    //     room.bookings.push(booking1);
    //     room.bookings.push(booking2);
    //     expect(room.isOccupied(new Date("12-31-2023"))).toBe(true);
    //     expect(room.isOccupied(new Date("12-31-2022"))).toBe(false);
    //     expect(room.isOccupied(new Date("10-10-1759"))).toBe(true);
    //     expect(room.isOccupied(new Date("01-01-1999"))).toBe(false);
    // });
    it("Check if room is occupied on determined date", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.occupancyPercentage(new Date("01-01-2024"), new Date("01-11-2024"))).toBe("50%");
        expect(room.occupancyPercentage(new Date("12-25-2023"), new Date("01-18-2024"))).toBe("50%");
        expect(room.occupancyPercentage(new Date("12-27-2023"), new Date("01-03-2024"))).toBe("100%");
    });
    it("Invalid type for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.occupancyPercentage(true, false)).toBe("NaN%");
        expect(room.occupancyPercentage(undefined, null)).toBe("NaN%");
        expect(room.occupancyPercentage("Hi!", 12345)).toBe("NaN%");
    });
    it("Check total occupancy in list of rooms", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        const room2 = new Room("Second Room", [], 25000, 20);
        const booking3 = new Booking("David Burguete", "dburgueteg@gmail.com", new Date("03-13-2020"), new Date("09-01-2020"), 15, room2);
        const booking4 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("04-08-2025"), new Date("04-15-2025"), 40, room2);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        room2.bookings.push(booking3);
        room2.bookings.push(booking4);
        expect(Room.totalOccupancyPercentage([room, room2], new Date("01-01-2024"), new Date("01-11-2024"))).toBe(["50%", "0%"]);
    });
});