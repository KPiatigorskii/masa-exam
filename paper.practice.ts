class DateClass {
    public padLeft(input: number, places: number): string {
        const zeroes: number = places - input.toString().length + 1;
        return Array(+(zeroes > 0 && zeroes)).join("0") + input.toString();
    }

    public addMonths(date: Date, value: number): Date {
        let expectedMonth: number = date.getMonth() + value;
        if (expectedMonth > 11) {
            expectedMonth = expectedMonth % 12;
        }

        if (expectedMonth < 0) {
            expectedMonth += 12;
        }

        date.setMonth(date.getMonth() + value);
        const daysToAdd: number = date.getMonth() >  expectedMonth ? -1 : 1;
        while (date.getMonth() !== expectedMonth) {
            date.setDate(date.getDate() + daysToAdd);
        }

        return  date;
    }
}


let d: DateClass = new DateClass()
// let date: Date = new Date()
// let newDate: Date = d.addMonths(date, 1)
let s: string = d.padLeft(23,6)
console.log(s)
