import { env } from "env"

describe('template spec', () => {
  it('passes', () => {
    cy.visit(env.MIRRORBOARDS_WEB_APP_URL + "/shell/mirrorboard/123")
  })
})
