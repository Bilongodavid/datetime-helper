import { formatLocale } from './dist/index.mjs'; // Assurez-vous de fournir le bon chemin
// Test du formatage
const date = new Date(2024, 7, 4); // 4 août 2024
console.log("French:", formatLocale(date, 'fr'));
console.log("Spanish:", formatLocale(date, 'es'));
console.log("Portuguese:", formatLocale(date, 'pt'));
console.log("Italian:", formatLocale(date, 'it'));
console.log("Dutch:", formatLocale(date, 'nl'));
console.log("Japanese:", formatLocale(date, 'ja'));
console.log("Chinese:", formatLocale(date, 'zh'));
console.log("Arabic:", formatLocale(date, 'ar'));
console.log("Russian:", formatLocale(date, 'ru'));
console.log("Swedish:", formatLocale(date, 'sv'));
console.log("Bulgarian:", formatLocale(date, 'bg'));
console.log("Catalan:", formatLocale(date, 'ca'));
console.log("Czech:", formatLocale(date, 'cs'));
console.log("Danish:", formatLocale(date, 'da'));
console.log("Greek:", formatLocale(date, 'el'));
console.log("Hebrew:", formatLocale(date, 'he'));
console.log("Hungarian:", formatLocale(date, 'hu'));
console.log("Indonesian:", formatLocale(date, 'id'));
console.log("Korean:", formatLocale(date, 'ko'));
console.log("Lithuanian:", formatLocale(date, 'lt'));
console.log("Latvian:", formatLocale(date, 'lv'));
console.log("Macedonian:", formatLocale(date, 'mk'));
console.log("Malay:", formatLocale(date, 'ms'));
console.log("Norwegian:", formatLocale(date, 'no'));
console.log("Polish:", formatLocale(date, 'pl'));
console.log("Romanian:", formatLocale(date, 'ro'));
console.log("Slovak:", formatLocale(date, 'sk'));
console.log("Slovenian:", formatLocale(date, 'sl'));
console.log("Thai:", formatLocale(date, 'th'));
console.log("Turkish:", formatLocale(date, 'tr'));
console.log("Ukrainian:", formatLocale(date, 'uk'));
console.log("Vietnamese:", formatLocale(date, 'vi'));
console.log("Traditional Chinese:", formatLocale(date, 'zhTW'));