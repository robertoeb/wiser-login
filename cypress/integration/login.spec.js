/* eslint-disable no-undef */
/// <reference types="cypress"/>

context('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should find a main in Login Page', () => {
    cy.get('main')
  })

  it('Should find a Title with greetings message', () => {
    cy.get('main>div>h1').contains('Olá, seja bem-vindo!')
  })

  it('Should find a SubTitle with instructions to access the platform.', () => {
    cy.get('main>div>p').contains('Para acessar a plataforma, faça seu login.')
  })

  it('Should find a form in Login Page', () => {
    cy.get('form')
  })
  it('Should find a label to input username.', () => {
    cy.get('form>label').contains('e-mail')
  })
  it('Should find a input to username.', () => {
    cy.get('input[name=username]')
  })
  it('Should find a label to input password.', () => {
    cy.get('form>label').contains('senha')
  })
  it('Should find a input to password.', () => {
    cy.get('input[name=password]')
  })
  it('Should find a button to submit the form', () => {
    cy.get('button[type=submit]')
  })
  it('Should find a paragraph with message to recover password', () => {
    cy.get('div>p').contains('Esqueceu seu login ou senha? Clique')
  })
  it('Should find a link to recover password inside paragraph', () => {
    cy.get('div>p>a')
  })
  it('Should find disabled button when the form is not filled', () => {
    cy.get('button[type=submit]').should('be.disabled')
  })
  it('Should find disabled button when have empty password input', () => {
    cy.get('input[name=username]').type('roberto@teste.com')
    cy.get('button[type=submit]').should('be.disabled')
  })
  it('Should show email error message when on blur the input with invalid email value', () => {
    cy.get('input[name=username]').type('roberto@teste').blur()
    cy.get('p').contains('Digite um e-mail válido')
  })
  it('Should enale to clear the username input with click in a icon', () => {
    cy.get('input[name=username]').type('roberto@teste.com')
    cy.get('span[data-name=username]').click()
    cy.get('input[name=username]').should('not.contain.value')
  })
  it('Should enale to clear the password input with click in a icon', () => {
    cy.get('input[name=password]').type('123456')
    cy.get('span[data-name=password]').click()
    cy.get('input[name=password]').should('not.contain.value')
  })
  it('Should find a loading componente when submit form', () => {
    cy.get('input[name=username]').type('roberto@teste.com')
    cy.get('input[name=password]').type('123456')
    cy.get('button[type=submit]').click()
    cy.get('#loading')
  })
  it('Should find a profile page with avatar, name, email and logout button', () => {
    cy.get('input[name=username]').type('roberto@teste.com')
    cy.get('input[name=password]').type('123456')
    cy.get('button[type=submit]').click()
    cy.get('#profile')
    cy.get('#profile>img')
    cy.get('#profile>h1')
    cy.get('#profile>p')
    cy.get('#profile>button').contains('sair')
  })
  it('Should able to logout and find the initial form', () => {
    cy.get('input[name=username]').type('roberto@teste.com')
    cy.get('input[name=password]').type('123456')
    cy.get('button[type=submit]').click()
    cy.get('#profile>button').click()
    cy.get('main>div>form')
  })
})
