### react-hw-02-phonebook

### 2 - Книга контактів

Напиши застосунок зберігання контактів телефонної книги.

#### Крок 1

Застосунок повинен складатися з форми і списку контактів. На поточному кроці реалізуй додавання
імені контакту та відображення списку контактів. Застосунок не повинен зберігати контакти між
різними сесіями (оновлення сторінки).

Використовуйте цю розмітку інпуту з вбудованою валідацією для імені контакту.

```javascript
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
```

Стан, що зберігається в батьківському компоненті `<App>`, обов'язково повинен бути наступного
вигляду, додавати нові властивості не можна.

```javascript
state = {
  contacts: [],
  name: '',
};
```

Кожен контакт повинен бути об'єктом з властивостями `name` та `id`. Для генерації ідентифікаторів
використовуй будь-який відповідний пакет, наприклад [nanoid](https://www.npmjs.com/package/nanoid).
Після завершення цього кроку, застосунок повинен виглядати приблизно так.

![markup phonebook](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-02/phonebook/step-1.png)

#### Крок 2

Розшир функціонал застосунку, дозволивши користувачам додавати номери телефонів. Для цього додай
`<input type="tel">` у форму і властивість для зберігання його значення в стані.

```javascript
state = {
  contacts: [],
  name: '',
  number: '',
};
```

Використовуй цю розмітку інпуту з вбудованою валідацією для номеру контакту.

```javascript
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

Після завершення цього кроку, застосунок повинен виглядати приблизно так.

![markup phonebook](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-02/phonebook/step-2.png)

#### Крок 3

Додай поле пошуку, яке можна використовувати для фільтрації списку контактів за ім'ям.

- Поле пошуку – це інпут без форми, значення якого записується у стан (контрольований елемент).
- Логіка фільтрації повинна бути нечутливою до регістру.

```javascript
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};
```

![markup phonebook](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-02/phonebook/step-3.gif)

Коли ми працюємо над новим функціоналом, буває зручно жорстко закодувати деякі дані у стан. Це
позбавить необхідності вручну вводити дані в інтерфейсі для тестування роботи нового функціоналу.
Наприклад, можна використовувати такий початковий стан.

```javascript
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};
```