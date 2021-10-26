# Приложение Task Tracker

Проект сделан с помощью React + Redux.

Функционал:
- трекер состоят из трех полей "Сделать", "В работе" и "Сделано". Пользователь может создать карточку в любом поле, а потом ее переместить в другое поле
- перемещение реализовано через Select внутри карточки
- карточка - объект, который включает в себя информацию: название
(обязательное поле), описание (необязательное поле) и ID картинки
(обязательное поле)
- название карточки не может состоять из одних пробелов
- при создании карточки в форму подтягивается картинка с внешнего API
https://jsonplaceholder.typicode.com/
- картинки можно выбирать
- при создании карточки создается рандомный ID от 1 до 5000 и
сохраняется в объекте с информацией о карточке, ID карточки всегда уникален
- при нажатии "Сохранить изменения" все данные сохраняются в Local Storage

## Запуск приложения

Чтобы запустить приложение на компьютере:

### `npm start`

Так же доступна веб-версия:

https://eldrssn.github.io/task-tracker-with-imgs/