/* global Feature Scenario */

var assert = require('assert')

Feature('Cookie Consent')

Scenario('should work correctly in namespace "popup"', async function (I) {
  I.amOnPage('cookie-consent.html')
  I.dontSeeCookie('cookie_consent_status')
  I.dontSeeCookie('_ga')
  I.dontSeeCookie('_gat')
  I.dontSeeCookie('_gid')
  I.waitForElement('.cookie-consent-popup')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.checkOption('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.checkOption('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.click('.cookie-consent-save[data-cc-namespace="popup"]')
  I.wait(3)
  I.amOnPage('cookie-consent.html')
  I.seeCookie('cookie_consent_status')
  I.seeCookie('_ga')
  I.seeCookie('_gat')
  I.seeCookie('_gid')
  let cookie = await I.grabCookie('cookie_consent_status')
  assert.deepStrictEqual(cookie.value, '["statistics","extern-media"]')
  I.click('.cookie-consent-open')
  I.seeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.seeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.seeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.seeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.uncheckOption('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.uncheckOption('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.click('.cookie-consent-save[data-cc-namespace="popup"]')
  I.wait(3)
  I.amOnPage('cookie-consent.html')
  I.seeCookie('cookie_consent_status')
  I.dontSeeCookie('_ga')
  I.dontSeeCookie('_gat')
  I.dontSeeCookie('_gid')
  cookie = await I.grabCookie('cookie_consent_status')
  assert.deepStrictEqual(cookie.value, '[]')
  I.click('.cookie-consent-open')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
})

Scenario('should work correctly in namespace "body"', async function (I) {
  I.amOnPage('cookie-consent.html')
  I.dontSeeCookie('cookie_consent_status')
  I.dontSeeCookie('_ga')
  I.dontSeeCookie('_gat')
  I.dontSeeCookie('_gid')
  I.waitForElement('.cookie-consent-popup')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.checkOption('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.checkOption('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.click('.cookie-consent-save[data-cc-namespace="body"]')
  I.wait(3)
  I.amOnPage('cookie-consent.html')
  I.seeCookie('cookie_consent_status')
  I.seeCookie('_ga')
  I.seeCookie('_gat')
  I.seeCookie('_gid')
  let cookie = await I.grabCookie('cookie_consent_status')
  assert.deepStrictEqual(cookie.value, '["statistics","extern-media"]')
  I.click('.cookie-consent-open')
  I.seeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.seeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.seeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.seeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.uncheckOption('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.uncheckOption('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
  I.click('.cookie-consent-save[data-cc-namespace="body"]')
  I.wait(3)
  I.amOnPage('cookie-consent.html')
  I.seeCookie('cookie_consent_status')
  I.dontSeeCookie('_ga')
  I.dontSeeCookie('_gat')
  I.dontSeeCookie('_gid')
  cookie = await I.grabCookie('cookie_consent_status')
  assert.deepStrictEqual(cookie.value, '[]')
  I.click('.cookie-consent-open')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="popup"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="statistics"][data-cc-namespace="body"]')
  I.dontSeeCheckboxIsChecked('[data-cc-consent="extern-media"][data-cc-namespace="body"]')
})
