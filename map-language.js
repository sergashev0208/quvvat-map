const languages = ["uz", "ru", "en"];
const requestedLanguage = new URLSearchParams(location.search).get("lang");
const pageLanguage = languages.includes(requestedLanguage) ? requestedLanguage :
  languages.includes(localStorage.getItem("quvvatLang")) ? localStorage.getItem("quvvatLang") : "uz";
localStorage.setItem("quvvatLang", pageLanguage);
document.documentElement.lang = pageLanguage;
const words = {
  "Yo‘lingizdagi quvvat": ["Зарядка в пути", "Charging on your way"],
  "📍 Mening joylashuvim": ["📍 Моё местоположение", "📍 My location"],
  "Qidiruv sozlamalari": ["Настройки поиска", "Search settings"],
  "Xaritadan markaz tanlash": ["Выбрать точку на карте", "Choose a point on the map"],
  "Joylashuvni tozalash": ["Сбросить местоположение", "Clear location"],
  "Radius": ["Радиус", "Radius"],
  "Faqat shu radiusda": ["Только в этом радиусе", "Within this radius only"],
  "Kompaniya logotiplari": ["Логотипы операторов", "Operator logos"],
  "Holat ranglari": ["Цвета статусов", "Status colours"],
  "Barcha operatorlar": ["Все операторы", "All operators"],
  "Barcha viloyatlar": ["Все регионы", "All regions"],
  "Stansiya yoki manzilni qidiring": ["Найти станцию или адрес", "Search stations or addresses"],
  "Yaqin stansiyalar": ["Станции рядом", "Nearby stations"],
  "Eng yaqin": ["Сначала ближайшие", "Nearest first"],
  "Eng arzon": ["Сначала дешёвые", "Cheapest first"],
  "Narx noma’lum": ["Цена неизвестна", "Price unknown"],
  "Kunduzgi narx": ["Дневной тариф", "Daytime price"],
  "Kechki narx": ["Ночной тариф", "Night-time price"],
  "Ulagich va quvvat": ["Разъём и мощность", "Connector and power"],
  "Noma’lum": ["Неизвестно", "Unknown"],
  "Google yo‘nalish": ["Маршрут в Google", "Google directions"],
  "Yandex yo‘nalish": ["Маршрут в Яндексе", "Yandex directions"],
  "so‘m/kWh": ["сум/кВт·ч", "UZS/kWh"],
  "(Taxminiy)": ["(Оценка)", "(Estimate)"],
  "Bu hududda stansiya topilmadi. Radius yoki filtrni o‘zgartiring.": ["Станций не найдено. Измените радиус или фильтр.", "No stations found. Change the radius or filter."],
  "Joylashuv tozalandi.": ["Местоположение сброшено.", "Location cleared."],
  "Joylashuv aniqlanmoqda… Brauzer ruxsatini tasdiqlang.": ["Определяем местоположение… Разрешите доступ.", "Finding your location… Allow location access."],
  "Tanlangan joy: ": ["Выбранная точка: ", "Selected location: "],
  "Siz turgan joy: ": ["Вы здесь: ", "Your location: "],
  " yaqinida": [" — рядом", " nearby"],
  "Xaritadan tanlangan joy": ["Точка на карте", "Selected map point"],
  "Joylashuvingiz xaritada belgilandi": ["Вы отмечены на карте", "Your position is marked on the map"],
  "Qidiruv markazi uchun xaritadagi kerakli joyni bosing.": ["Нажмите на карту, чтобы выбрать центр поиска.", "Tap the map to set the search centre."],
  "Brauzer joylashuvni qo‘llamaydi. Markazni xaritadan tanlang.": ["Выберите точку на карте.", "Choose a point on the map."],
  "Joylashuvga ruxsat berilmadi. Brauzer ruxsatini tekshiring yoki markazni xaritadan tanlang.": ["Нет доступа к геопозиции. Разрешите доступ или выберите точку на карте.", "Location permission denied. Allow access or choose a point on the map."],
  "Joylashuvni aniqlab bo‘lmadi. Markazni xaritadan tanlang.": ["Геопозиция недоступна. Выберите точку на карте.", "Location unavailable. Choose a point on the map."],
  "Joylashuvni aniqlash vaqti tugadi. Qayta urinib ko‘ring yoki markazni tanlang.": ["Время ожидания истекло. Повторите или выберите точку.", "Location timed out. Retry or choose a point."],
  "Joylashuv olinmadi.": ["Геопозиция недоступна.", "Location unavailable."],
  "Yandex xaritasi yuklanmoqda…": ["Загрузка Яндекс Карт…", "Loading Yandex Maps…"],
  "Qayta urinish": ["Повторить", "Retry"],
  "Avvalgi xaritani ochish": ["Открыть прежнюю карту", "Open previous map"],
};
function translate(text) {
  return words[text]?.[languages.indexOf(pageLanguage) - 1] ?? text;
}
