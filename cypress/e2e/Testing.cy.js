/* eslint-disable no-undef */
describe('Beginning Spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('.head').contains('Note Apps Submission')
    cy.get('input.form-control-lg')
    cy.get('form').within(() => {
      cy.get('input').type('catatan hari libur')
      cy.get('textarea').type('lupa')
      cy.get('button').click()
    })

  })
  it('passes', () => {
    cy.visit('/')
    cy.get('h2').contains('Daftar Note')
    cy.get('.container')
    cy.get('button').contains('DELETE').click()
    cy.get('button').contains('DELETE').click()
    cy.get('button').contains('DELETE').click()
    cy.get('button').contains('DELETE').click()
    cy.get('button').contains('DELETE').click()
    cy.get('button').contains('DELETE').click()
    cy.get('p').contains('Tidak ada Catatan')



  })
  it('passes', () => {
    cy.visit('/')
    cy.get('h2').contains('Archived')
    cy.get('.header').contains('Coming Soon :)')
  })

  it('passes', () => {
    cy.visit('/')
    cy.get('form').within(() => {
      cy.get('input').type('catatan hari Pribadi ku')
      cy.get('textarea').type('Tidak ada yang penting')
      cy.get('button').click()
      cy.get('input').clear()
      cy.get('textarea').clear()
    })
  })
})