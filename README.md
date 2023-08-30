# Avito-frontend-trainee-assignment-2023   
[https://avito-frontend-trainee-assignment-2023.vercel.app/](https://avito-frontend-trainee-assignment-2023.vercel.app/ "Перейти на сайт")

![image](https://github.com/Maksim-Jk/avito-frontend-trainee-assignment-2023/assets/131034634/a5b89f91-a8b7-487a-a62c-1b4aacbb3b07)

## Описание

Проект "avito-frontend-trainee-assignment-2023" разработан в рамках отбора на стажировку в Avito Tech. Цель проекта - разработать интерфейс для сайта Free-To-Play Games, состоящий из двух страниц. Главная страница позволяет просматривать и фильтровать игры по платформе и жанру, а также сортировать их по различным параметрам. По клику на игру пользователь переходит на страницу с подробной информацией о ней.

## Основные особенности

- Просмотр списка игр с возможностью фильтрации по платформе и жанру.
- Сортировка игр по дате релиза, популярности и другим параметрам.
- Подробная информация о каждой игре: название, дата релиза, издатель, жанр, картинка.
- Обработка ошибок связанных с отсутствием данных на сервере, не корректных данных, ошибками при получении.
- Страница игры с дополнительными деталями: разработчик, карусель скриншотов, системные требования.
- Адаптивный интерфейс для удобной работы с мобильных устройств и десктопов.
- Использование [React 18.2](https://react.dev/ "https://react.dev/") и [Redux Toolkit](https://redux-toolkit.js.org/ "https://redux-toolkit.js.org/") для управления состоянием и выполнения запросов на сервер.
- Интеграция с Free-To-Play Games API посредством [Rapid Api](https://rapidapi.com/digiwalls/api/free-to-play-games-database "Free-to-Play Games Database") для получения данных о играх.
- Роутинг с использованием [React Router v6.4](https://reactrouter.com/ "https://reactrouter.com/").
- Использование фреймворка [Material UI](https://mui.com/ "https://mui.com/") и [styled-components(emotion)](https://emotion.sh/ "https://emotion.sh/") для создания современного дизайна.
- Использование [TypeScript](https://www.typescriptlang.org/ "https://www.typescriptlang.org/") (опциональное задание).
- Предусмотрена возможность работы с большим количеством игр при помощи пагинации и формировании параметров запроса в адресной строке при изменении фильтрации, сортировки или параметров пагинации (опциональное задание).
- Механизм повторных запросов(3 раза) при неудачной загрузке данных (опциональное задание).
- Сохранение параметров запроса в адресной строке при переходе на страницу игры и обратно.

## Установка и запуск

1. Склонируйте репозиторий: `git clone git@github.com:Maksim-Jk/avito-frontend-trainee-assignment-2023.git`
2. Перейдите в директорию проекта: `cd avito-frontend-trainee-assignment-2023`
3. Установите зависимости: `npm install`
4. Запустите проект: `npm start`
5. Откройте браузер и перейдите по адресу: `http://localhost:3001`

## Примеры использования

![Laptop-2-1280x800](https://github.com/Maksim-Jk/avito-frontend-trainee-assignment-2023/assets/131034634/71f872dc-b89b-4b66-9d71-238dead9e3ce)


## Лицензия

Проект распространяется под лицензией свободного распространения.
