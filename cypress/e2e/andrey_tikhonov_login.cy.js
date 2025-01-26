describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что после успешной авторицации появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
   it('Проверка восстановления пароля', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#forgotEmailButton').click(); // Нажали восстановить пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели верный пароль
         cy.get('#restoreEmailButton').click(); // Нажали восстановить
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')// проверяем, что после успешной отправки ввостановления на email появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
   it('Верный логин и не верный пароль', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio45'); // Ввели не верный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем, что после неуспешной авторицации появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
   it('Не верный логин и верный пароль', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('german@dolnienko.ru'); // Ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем, что после неуспешной авторицации появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
   it('Логин без @ и верный пароль', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('germandolnienko.ru'); // Ввели  логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем, что после неуспешной валидации логина появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
    })
   it('Верный логин с заглавными буквами и верный пароль', function () {
         cy.visit('login.qa.studio'); // Зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин с заглавными буквами
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажали войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что после успешной авторицации появляется текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие крестика
      })
})