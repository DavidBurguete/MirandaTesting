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
        expect(booking1.checkIn instanceof Date).toBe(false);
        expect(booking1.checkOut instanceof Date).toBe(false);
        expect(booking2.checkIn instanceof Date).toBe(false);
        expect(booking2.checkOut instanceof Date).toBe(false);
    });
    it("Invalid date (boolean) passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.isOccupied(true)).toThrow("Non array recived");
    });
    it("Invalid date (string) passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.isOccupied("Generic phrase")).toThrow("Non array recived");
    });
    it("Invalid date (integer) passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.isOccupied(1234)).toThrow("Non array recived");
    });
    it("Invalid date (undefined) passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.isOccupied(undefined)).toThrow("Non array recived");
    });
    it("Invalid dates (null) passed to isOccupied", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.isOccupied(null)).toThrow("Non array recived");
    });
    it("Invalid type (non-array) for bookings in Room object", () => {
        const room = new Room("First Room", true, 17000, 25);
        expect(typeof room.bookings).not.toBe("Array");
    });
    it("Check if room is occupied on determined date", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(room.occupancyPercentage(new Date("01-01-2024"), new Date("01-11-2024"))).toBe("50%");
        expect(room.occupancyPercentage(new Date("12-27-2023"), new Date("01-03-2024"))).toBe("100%");
    });
    it("Invalid type (boolean on checkIn) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(true, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (undefined on checkIn) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(undefined, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (null on checkIn) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(null, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (string on checkIn) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage("Hi!", new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (integer on checkIn) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(12345, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (boolean on checkOut) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(new Date("01-01-1900"), false)).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (undefined on checkOut) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(new Date("01-01-1900"), undefined)).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (null on checkOut) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(new Date("01-01-1900"), null)).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (string on checkOut) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(new Date("01-01-1900"), "Hi!")).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (integer on checkOut) for occupancyArray", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        room.bookings.push(booking1);
        room.bookings.push(booking2);
        expect(() => room.occupancyPercentage(new Date("01-01-1900"), 12345)).toThrow("It has to be a (valid) date");
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
        expect(Room.totalOccupancyPercentage([room, room2], new Date("01-01-2024"), new Date("01-11-2024"))).toEqual(["50%", "0%"]);
    });
    it("Invalid type (undefined) for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage([room, room2], undefined, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (null) for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage([room, room2], new Date("01-01-1900"), null)).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (integer) for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage([room, room2], 12345, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (string) for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage([room, room2], new Date("01-01-1900"), "OneTwoThreeFourFive")).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (boolean) for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage([room, room2], true, false)).toThrow("It has to be a (valid) date");
    });
    it("Invalid data (undefined) instead of arrays for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage(undefined, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (null) instead of arrays for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage(null, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (string) instead of arrays for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage("Thirteen", new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (integer) instead of arrays for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage(1234, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (boolean) instead of arrays for totalOccupancyPercentage", () => {
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
        expect(() => Room.totalOccupancyPercentage(true, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Check total available rooms", () => {
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
        expect(Room.availableRooms([room, room2], new Date("01-01-2024"), new Date("01-11-2024"))).toEqual([room2]);
    });
    it("Invalid type (undefined) for availableRooms", () => {
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
        expect(() => Room.availableRooms([room, room2], undefined, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (null) for availableRooms", () => {
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
        expect(() => Room.availableRooms([room, room2], new Date("01-01-1900"), null)).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (integer) for availableRooms", () => {
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
        expect(() => Room.availableRooms([room, room2], 12345, new Date("01-01-1900"))).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (string) for availableRooms", () => {
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
        expect(() => Room.availableRooms([room, room2], new Date("01-01-1900"), "OneTwoThreeFourFive")).toThrow("It has to be a (valid) date");
    });
    it("Invalid type (boolean) for availableRooms", () => {
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
        expect(() => Room.availableRooms([room, room2], true, false)).toThrow("It has to be a (valid) date");
    });
    it("Invalid data (undefined) instead of arrays in availableRooms", () => {
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
        expect(() => Room.availableRooms(undefined, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (null) instead of arrays in availableRooms", () => {
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
        expect(() => Room.availableRooms(null, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (string) instead of arrays in availableRooms", () => {
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
        expect(() => Room.availableRooms("Thirteen", new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (integer) instead of arrays in availableRooms", () => {
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
        expect(() => Room.availableRooms(1234, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Invalid data (boolean) instead of arrays in availableRooms", () => {
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
        expect(() => Room.availableRooms(true, new Date("01-01-2024"), new Date("01-11-2024"))).toThrow(TypeError);
    });
    it("Check total available rooms", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        const booking2 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), 10, room);
        const room2 = new Room("Second Room", [], 25000, 20);
        const booking3 = new Booking("David Burguete", "dburgueteg@gmail.com", new Date("03-13-2020"), new Date("09-01-2020"), 15, room2);
        const booking4 = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("04-08-2025"), new Date("04-15-2025"), 40, room2);
        expect(booking1.getFee()).toBe(11475);
        expect(booking2.getFee()).toBe(11475);
        expect(booking3.getFee()).toBe(17000);
        expect(booking4.getFee()).toBe(12000);
    });
    it("Using negative values", () => {
        const room = new Room("First Room", [], 17000, -25);
        const booking1 = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), -10, room);
        expect(() => booking1.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (undefined) for price", () => {
        const room = new Room("First Room", [], undefined, 25);
        const booking = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (null) for price", () => {
        const room = new Room("First Room", [], null, 25);
        const booking = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (string) for price", () => {
        const room = new Room("First Room", [], "Some text", 25);
        const booking = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (boolean) for price", () => {
        const room = new Room("First Room", [], true, 25);
        const booking = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), 10, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (undefined) for discounts", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking = new Booking("Peter Peterson", "peterpeter@gmail.com", new Date("12-25-2023"), new Date("01-06-2024"), undefined, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (null) for discounts", () => {
        const room = new Room("First Room", [], 17000, 25);
        const booking = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("02-07-1758"), new Date("04-13-1762"), null, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (string) for discounts", () => {
        const room = new Room("Second Room", [], 25000, 20);
        const booking = new Booking("David Burguete", "dburgueteg@gmail.com", new Date("03-13-2020"), new Date("09-01-2020"), "This is a discount", room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
    it("Invalid value (boolean) for discounts", () => {
        const room = new Room("Second Room", [], 25000, 20);
        const booking = new Booking("Thor Odinson", "godofthunder@asgard.nine.realms", new Date("04-08-2025"), new Date("04-15-2025"), false, room);
        expect(() => booking.getFee()).toThrow("Must be a number over 0");
    });
});