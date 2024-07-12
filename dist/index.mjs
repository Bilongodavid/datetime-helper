import { format, addDays, subDays, addMonths, subMonths, addYears, subYears, addHours, subHours, addMinutes, subMinutes, addSeconds, subSeconds } from 'date-fns';
/**
 * Formate une date et une heure selon le format spécifié.
 * @param {Date} date - La date à formater.
 * @param {string} formatString - Le format de la date et de l'heure (par exemple, 'yyyy-MM-dd HH:mm:ss').
 * @returns {string} - La date et l'heure formatées.
 */
export function formatDateTime(date, formatString) {
  try {
    return format(date, formatString);
  } catch (error) {
    throw new Error('Invalid date or format');
  }
}

/**
 * Formate une date au format 'yyyy-MM-dd'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
export function formatToYearMonthDay(date) {
  return formatDateTime(date, 'yyyy-MM-dd');
}

/**
 * Formate une date au format 'dd/MM/yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
export function formatToDayMonthYear(date) {
  return formatDateTime(date, 'dd/MM/yyyy');
}

/**
 * Formate une date au format 'MMMM do, yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
export function formatToLongDate(date) {
  return formatDateTime(date, 'MMMM do, yyyy');
}

/**
 * Formate une date au format 'EEEE, MMMM do, yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
export function formatToFullDate(date) {
  return formatDateTime(date, 'EEEE, MMMM do, yyyy');
}

/**
 * Formate une heure au format 'HH:mm:ss'.
 * @param {Date} date - La date à formater.
 * @returns {string} - L'heure formatée.
 */
export function formatToTime(date) {
  return formatDateTime(date, 'HH:mm:ss');
}



/**
 * Ajoute des jours à une date.
 * @param {Date} date - La date initiale.
 * @param {number} days - Le nombre de jours à ajouter.
 * @returns {Date} - La nouvelle date.
 */
export function addDaysToDate(date, days) {
  return addDays(date, days);
}

/**
 * Soustrait des jours à une date.
 * @param {Date} date - La date initiale.
 * @param {number} days - Le nombre de jours à soustraire.
 * @returns {Date} - La nouvelle date.
 */
export function subDaysFromDate(date, days) {
  return subDays(date, days);
}

export function addMonthsToDate(date, months) {
  return addMonths(date, months);
}

export function subMonthsFromDate(date, months) {
  return subMonths(date, months);
}

export function addYearsToDate(date, years) {
  return addYears(date, years);
}

export function subYearsFromDate(date, years) {
  return subYears(date, years);
}

export function addHoursToDate(date, hours) {
  return addHours(date, hours);
}

export function subHoursFromDate(date, hours) {
  return subHours(date, hours);
}

export function addMinutesToDate(date, minutes) {
  return addMinutes(date, minutes);
}

export function subMinutesFromDate(date, minutes) {
  return subMinutes(date, minutes);
}

export function addSecondsToDate(date, seconds) {
  return addSeconds(date, seconds);
}

export function subSecondsFromDate(date, seconds) {
  return subSeconds(date, seconds);
}
