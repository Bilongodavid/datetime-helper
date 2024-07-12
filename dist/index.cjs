const { format, addDays, subDays, addMonths, subMonths, addYears, subYears, addHours, subHours, addMinutes, subMinutes, addSeconds, subSeconds } = require('date-fns');
const { utcToZonedTime, zonedTimeToUtc, format: formatTZ } = require('date-fns-tz');
/**
 * Formate une date et une heure selon le format spécifié.
 * @param {Date} date - La date à formater.
 * @param {string} formatString - Le format de la date et de l'heure (par exemple, 'yyyy-MM-dd HH:mm:ss').
 * @returns {string} - La date et l'heure formatées.
 */
function formatDateTime(date, formatString) {
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
function formatToYearMonthDay(date) {
  return formatDateTime(date, 'yyyy-MM-dd');
}

/**
 * Formate une date au format 'dd/MM/yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
function formatToDayMonthYear(date) {
  return formatDateTime(date, 'dd/MM/yyyy');
}

/**
 * Formate une date au format 'MMMM do, yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
function formatToLongDate(date) {
  return formatDateTime(date, 'MMMM do, yyyy');
}

/**
 * Formate une date au format 'EEEE, MMMM do, yyyy'.
 * @param {Date} date - La date à formater.
 * @returns {string} - La date formatée.
 */
function formatToFullDate(date) {
  return formatDateTime(date, 'EEEE, MMMM do, yyyy');
}

/**
 * Formate une heure au format 'HH:mm:ss'.
 * @param {Date} date - La date à formater.
 * @returns {string} - L'heure formatée.
 */
function formatToTime(date) {
  return formatDateTime(date, 'HH:mm:ss');
}

/**
 * Convertit une date en UTC à partir d'un fuseau horaire spécifique.
 * @param {Date} date - La date à convertir.
 * @param {string} timeZone - Le fuseau horaire (par exemple, 'America/New_York').
 * @returns {Date} - La date en UTC.
 */
function convertToUTC(date, timeZone) {
  return zonedTimeToUtc(date, timeZone);
}

/**
 * Ajoute des jours à une date.
 * @param {Date} date - La date initiale.
 * @param {number} days - Le nombre de jours à ajouter.
 * @returns {Date} - La nouvelle date.
 */
function addDaysToDate(date, days) {
  return addDays(date, days);
}

/**
 * Soustrait des jours à une date.
 * @param {Date} date - La date initiale.
 * @param {number} days - Le nombre de jours à soustraire.
 * @returns {Date} - La nouvelle date.
 */
function subDaysFromDate(date, days) {
  return subDays(date, days);
}

// Fonctions similaires pour les mois, années, heures, minutes et secondes

function addMonthsToDate(date, months) {
  return addMonths(date, months);
}

function subMonthsFromDate(date, months) {
  return subMonths(date, months);
}

function addYearsToDate(date, years) {
  return addYears(date, years);
}

function subYearsFromDate(date, years) {
  return subYears(date, years);
}

function addHoursToDate(date, hours) {
  return addHours(date, hours);
}

function subHoursFromDate(date, hours) {
  return subHours(date, hours);
}

function addMinutesToDate(date, minutes) {
  return addMinutes(date, minutes);
}

function subMinutesFromDate(date, minutes) {
  return subMinutes(date, minutes);
}

function addSecondsToDate(date, seconds) {
  return addSeconds(date, seconds);
}

function subSecondsFromDate(date, seconds) {
  return subSeconds(date, seconds);
}

module.exports = {
  formatDateTime,
  formatToYearMonthDay,
  formatToDayMonthYear,
  formatToLongDate,
  formatToFullDate,
  formatToTime,
  convertToUTC,
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
};
