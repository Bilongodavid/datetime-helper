import { format, addDays, subDays, addMonths, subMonths, addYears, subYears, addHours, subHours, addMinutes, subMinutes, addSeconds, subSeconds } from 'date-fns';
import {  enUS, fr, es, ptBR, it, nl, ja, zhCN, arSA, ru, sv, 
  bg, ca, cs, da, el, he, hu, id, ko, lt, lv, mk, ms, 
   pl, ro, sk, sl, th, tr, uk, vi, zhTW  }  from 'date-fns/locale'; 
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

export function formatLocale(date, localeCode) {
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
