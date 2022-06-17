import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
    await page.goto('/')
    const buttonText = (await page.textContent('#count-button')).trim()
    let count = (await page.textContent('#count-text')).trim()
    expect(buttonText).toBe('Click me!')
    expect(count).toBe('0')

    for (let i = 0; i < 5; i++) {
        await page.click('#count-button')
    }

    count = (await page.textContent('#count-text')).trim()
    expect(count).toBe('5')
})
