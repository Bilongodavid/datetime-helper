# Date-Time Formatter

`date-time-formatter` is a versatile Node.js package for formatting dates and times in various formats. It supports both CommonJS and ES Modules, making it easy to integrate into any Node.js project.

## Usage

### CommonJS

For CommonJS, require the module and use the provided functions:

```js
const {
  formatDateTime,
  formatToYearMonthDay,
  formatToDayMonthYear,
  formatToLongDate,
  formatToFullDate,
  formatToTime,
  addDaysToDate,
  subDaysFromDate,
  addMonthsToDate,
  subMonthsFromDate,
  addYearsToDate,
  subYearsFromDate,
  addHoursToDate,
  subHoursFromDate,
  addMinutesToDate,
  subMinutesFromDate,
  addSecondsToDate,
  subSecondsFromDate,
} = require("@codedav/date-time-formatter");

const date = new Date();

console.log("Original Date:", date);
console.log("Formatted Date (yyyy-MM-dd):", formatToYearMonthDay(date));
console.log("Formatted Date (yyyy-MM-dd):", formatDateTime(date, "yyyy-MM-dd"));
console.log("Formatted Date (dd/MM/yyyy):", formatToDayMonthYear(date));
console.log("Formatted Date (dd/MM/yyyy):", formatDateTime(date, "dd/MM/yyyy"));
console.log("Formatted Date (MMMM do, yyyy):", formatToLongDate(date));
console.log("Formatted Date (EEEE, MMMM do, yyyy):", formatToFullDate(date));
console.log("Formatted Time (HH:mm:ss):", formatToTime(date));
console.log("Date plus 5 days:", addDaysToDate(date, 5));
console.log("Date minus 5 days:", subDaysFromDate(date, 5));
console.log("Date plus 2 months:", addMonthsToDate(date, 2));
console.log("Date minus 2 months:", subMonthsFromDate(date, 2));
console.log("Date plus 1 year:", addYearsToDate(date, 1));
console.log("Date minus 1 year:", subYearsFromDate(date, 1));
console.log("Date plus 3 hours:", addHoursToDate(date, 3));
console.log("Date minus 3 hours:", subHoursFromDate(date, 3));
console.log("Date plus 30 minutes:", addMinutesToDate(date, 30));
console.log("Date minus 30 minutes:", subMinutesFromDate(date, 30));
console.log("Date plus 45 seconds:", addSecondsToDate(date, 45));
console.log("Date minus 45 seconds:", subSecondsFromDate(date, 45));
```

### ES Module

For ES Modules, import the module and use the provided functions:

```js
import {
  formatToYearMonthDay,
  formatToDayMonthYear,
  formatToLongDate,
  formatToFullDate,
  formatToTime,
  addDaysToDate,
  subDaysFromDate,
  addMonthsToDate,
  subMonthsFromDate,
  addYearsToDate,
  subYearsFromDate,
  addHoursToDate,
  subHoursFromDate,
  addMinutesToDate,
  subMinutesFromDate,
  addSecondsToDate,
  subSecondsFromDate,
  formatDateTime,
} from "@codedav/date-time-formatter";

const date = new Date();

console.log("Original Date:", date);
console.log("Formatted Date (yyyy-MM-dd):", formatToYearMonthDay(date));
console.log("Formatted Date (yyyy-MM-dd):", formatDateTime(date, "yyyy-MM-dd"));
console.log("Formatted Date (dd/MM/yyyy):", formatToDayMonthYear(date));
console.log("Formatted Date (dd/MM/yyyy):", formatDateTime(date, "dd/MM/yyyy"));
console.log("Formatted Date (MMMM do, yyyy):", formatToLongDate(date));
console.log("Formatted Date (EEEE, MMMM do, yyyy):", formatToFullDate(date));
console.log("Formatted Time (HH:mm:ss):", formatToTime(date));
console.log("Date plus 5 days:", addDaysToDate(date, 5));
console.log("Date minus 5 days:", subDaysFromDate(date, 5));
console.log("Date plus 2 months:", addMonthsToDate(date, 2));
console.log("Date minus 2 months:", subMonthsFromDate(date, 2));
console.log("Date plus 1 year:", addYearsToDate(date, 1));
console.log("Date minus 1 year:", subYearsFromDate(date, 1));
console.log("Date plus 3 hours:", addHoursToDate(date, 3));
console.log("Date minus 3 hours:", subHoursFromDate(date, 3));
console.log("Date plus 30 minutes:", addMinutesToDate(date, 30));
console.log("Date minus 30 minutes:", subMinutesFromDate(date, 30));
console.log("Date plus 45 seconds:", addSecondsToDate(date, 45));
console.log("Date minus 45 seconds:", subSecondsFromDate(date, 45));
```

## Functions

### Formatting Functions

- `formatDateTime(date, formatString)`: Formats a date and time according to the specified format string.
- `formatToYearMonthDay(date)`: Formats a date to `yyyy-MM-dd`.
- `formatToDayMonthYear(date)`: Formats a date to `dd/MM/yyyy`.
- `formatToLongDate(date)`: Formats a date to a long date format (e.g., `MMMM do, yyyy`).
- `formatToFullDate(date)`: Formats a date to a full date format (e.g., `EEEE, MMMM do, yyyy`).
- `formatToTime(date)`: Formats a time to `HH:mm:ss`.

### Date Manipulation Functions

- `addDaysToDate(date, days)`: Adds days to a date.
- `subDaysFromDate(date, days)`: Subtracts days from a date.
- `addMonthsToDate(date, months)`: Adds months to a date.
- `subMonthsFromDate(date, months)`: Subtracts months from a date.
- `addYearsToDate(date, years)`: Adds years to a date.
- `subYearsFromDate(date, years)`: Subtracts years from a date.
- `addHoursToDate(date, hours)`: Adds hours to a date.
- `subHoursFromDate(date, hours)`: Subtracts hours from a date.
- `addMinutesToDate(date, minutes)`: Adds minutes to a date.
- `subMinutesFromDate(date, minutes)`: Subtracts minutes from a date.
- `addSecondsToDate(date, seconds)`: Adds seconds to a date.
- `subSecondsFromDate(date, seconds)`: Subtracts seconds from a date.

## License

This project is licensed under the ISC License.
