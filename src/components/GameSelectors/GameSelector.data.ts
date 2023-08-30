interface dataOptions {
  value: string;
  label: string;
}

export const categoryOptions: dataOptions[] = [
  { value: "", label: "Все категории" },
  { value: "mmorpg", label: "ММОРПГ" },
  { value: "shooter", label: "Шутер" },
  { value: "strategy", label: "Стратегия" },
  { value: "moba", label: "МОБА" },
  { value: "racing", label: "Гонки" },
  { value: "sports", label: "Спорт" },
  { value: "social", label: "Социальные" },
  { value: "sandbox", label: "Песочница" },
  { value: "open-world", label: "Открытый мир" },
  { value: "survival", label: "Выживание" },
  { value: "pvp", label: "PvP" },
  { value: "pve", label: "PvE" },
  { value: "pixel", label: "Пиксельная графика" },
  { value: "voxel", label: "Воксельная графика" },
  { value: "zombie", label: "Зомби" },
  { value: "turn-based", label: "Пошаговая стратегия" },
  { value: "first-person", label: "От первого лица" },
  { value: "third-person", label: "От третьего лица" },
  { value: "top-down", label: "Вид сверху" },
  { value: "tank", label: "Танковые сражения" },
  { value: "space", label: "Космические" },
  { value: "sailing", label: "Парусные" },
  { value: "side-scroller", label: "Side-Scroller" },
  { value: "superhero", label: "Супергерои" },
  { value: "permadeath", label: "Пермадэт" },
  { value: "card", label: "Карточные" },
  { value: "battle-royale", label: "Баттл-рояль" },
  { value: "mmo", label: "ММО" },
  { value: "mmofps", label: "ММОFPS" },
  { value: "mmotps", label: "ММОTPS" },
  { value: "3d", label: "3D" },
  { value: "2d", label: "2D" },
  { value: "anime", label: "Аниме" },
  { value: "fantasy", label: "Фэнтези" },
  { value: "sci-fi", label: "Научная фантастика" },
  { value: "fighting", label: "Файтинги" },
  { value: "action-rpg", label: "Action RPG" },
  { value: "action", label: "Экшен" },
  { value: "military", label: "Военные" },
  { value: "martial-arts", label: "Единоборства" },
  { value: "flight", label: "Симуляторы полетов" },
  { value: "low-spec", label: "Для слабых ПК" },
  { value: "tower-defense", label: "Tower Defense" },
  { value: "horror", label: "Хоррор" },
  { value: "mmorts", label: "MMORTS" },
];

export const sortByOptions: dataOptions[] = [
  { value: "", label: "По умолчанию" },
  { value: "release-date", label: "Дата выпуска" },
  { value: "popularity", label: "Популярность" },
  { value: "alphabetical", label: "По алфавиту" },
  { value: "relevance", label: "Актуальность" },
];

export const platformOptions: dataOptions[] = [
  { value: "", label: "Все платформы" },
  { value: "pc", label: "PC" },
  { value: "browser", label: "Браузер" },
];
