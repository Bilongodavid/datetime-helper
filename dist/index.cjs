const { format, addDays, subDays, addMonths, subMonths, addYears, subYears, addHours, subHours, addMinutes, subMinutes, addSeconds, subSeconds } = require('date-fns');
const {  zonedTimeToUtc, format: formatTZ } = require('date-fns-tz');
const {  enUS, fr, es, ptBR, it, nl, ja, zhCN, arSA, ru, sv, 
  bg, ca, cs, da, el, he, hu, id, ko, lt, lv, mk, ms, 
  no, pl, ro, sk, sl, th, tr, uk, vi, zhTW  } = require('date-fns/locale'); 
/**
 * Formate une date et une heure selon le format spécifié.
 * @param {Date} date - La date à formater.
 * @param {string} formatString - Le format de la date et de l'heure (par exemple, 'yyyy-MM-dd HH:mm:ss').
 * @returns {string} - La date et l'heure formatées.
 */
function formatDateTime(date, formatString,locale) {
  try {
    if (locale) {
      return format(date, formatString,{ locale });
    }
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
/**
 * Formate une date en utilisant la locale spécifiée.
 * @param {Date} date - La date à formater.
 * @param {string} localeCode - Le code de la locale (par exemple, 'fr', 'en', 'es', etc.).
 * @returns {string} - La date formatée.
 */
function formatLocale(date, localeCode) {
  let locale;
  let formatString;
  switch (localeCode) {
    case 'fr':
      locale = fr;
      formatString = 'eeee dd MMMM yyyy'; // Exemple en français
      break;
    case 'es':
      locale = es;
      formatString = 'd MMMM yyyy'; // Exemple en espagnol
      break;
    case 'pt':
      locale = ptBR;
      formatString = 'd MMMM yyyy'; // Exemple en portugais
      break;
    case 'it':
      locale = it;
      formatString = 'd MMMM yyyy'; // Exemple en italien
      break;
    case 'nl':
      locale = nl;
      formatString = 'd MMMM yyyy'; // Exemple en néerlandais
      break;
    case 'ja':
      locale = ja;
      formatString = 'yyyy年M月d日'; // Exemple en japonais
      break;
    case 'zh':
      locale = zhCN;
      formatString = 'yyyy年M月d日'; // Exemple en chinois simplifié
      break;
    case 'ar':
      locale = arSA;
      formatString = 'd MMMM yyyy'; // Exemple en arabe
      break;
    case 'ru':
      locale = ru;
      formatString = 'd MMMM yyyy г.'; // Exemple en russe
      break;
    case 'sv':
      locale = sv;
      formatString = 'd MMMM yyyy'; // Exemple en suédois
      break;
    case 'bg':
      locale = bg;
      formatString = 'd MMMM yyyy г.'; // Exemple en bulgare
      break;
    case 'ca':
      locale = ca;
      formatString = 'd MMMM yyyy'; // Exemple en catalan
      break;
    case 'cs':
      locale = cs;
      formatString = 'd. MMMM yyyy'; // Exemple en tchèque
      break;
    case 'da':
      locale = da;
      formatString = 'd. MMMM yyyy'; // Exemple en danois
      break;
    case 'el':
      locale = el;
      formatString = 'd MMMM yyyy'; // Exemple en grec
      break;
    case 'he':
      locale = he;
      formatString = 'd בMMMM yyyy'; // Exemple en hébreu
      break;
    case 'hu':
      locale = hu;
      formatString = 'yyyy. MMMM d.'; // Exemple en hongrois
      break;
    case 'id':
      locale = id;
      formatString = 'd MMMM yyyy'; // Exemple en indonésien
      break;
    case 'ko':
      locale = ko;
      formatString = 'yyyy년 M월 d일'; // Exemple en coréen
      break;
    case 'lt':
      locale = lt;
      formatString = 'yyyy m. MMMM d d.'; // Exemple en lituanien
      break;
    case 'lv':
      locale = lv;
      formatString = 'yyyy m. MMMM d d.';  // Exemple en letton
      break;
    case 'mk':
      locale = mk;
      formatString = 'd MMMM yyyy'; // Exemple en macédonien
      break;
    case 'ms':
      locale = ms;
      formatString = 'd MMMM yyyy'; // Exemple en malais
      break;
    case 'no':
      locale = no;
      formatString = 'd. MMMM yyyy'; // Exemple en norvégien
      break;
    case 'pl':
      locale = pl;
      formatString = 'd MMMM yyyy'; // Exemple en polonais
      break;
    case 'ro':
      locale = ro;
      formatString = 'd MMMM yyyy'; // Exemple en roumain
      break;
    case 'sk':
      locale = sk;
      formatString = 'd. MMMM yyyy'; // Exemple en slovaque
      break;
    case 'sl':
      locale = sl;
      formatString = 'd. MMMM yyyy'; // Exemple en slovène
      break;
    case 'th':
      locale = th;
      formatString = 'd MMMM yyyy'; // Exemple en thaï
      break;
    case 'tr':
      locale = tr;
      formatString = 'd MMMM yyyy'; // Exemple en turc
      break;
    case 'uk':
      locale = uk;
      formatString = 'd MMMM yyyy'; // Exemple en ukrainien
      break;
    case 'vi':
      locale = vi;
      formatString = 'd MMMM yyyy'; // Exemple en vietnamien
      break;
    case 'zhTW':
      locale = zhTW;
      formatString = 'yyyy年M月d日'; // Exemple en chinois traditionnel
      break;
    default:
      locale = enUS;
      formatString = 'MMMM d, yyyy'; // Exemple en anglais
      break;
  }

  return format(date, formatString, { locale });
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
  formatLocale
};
