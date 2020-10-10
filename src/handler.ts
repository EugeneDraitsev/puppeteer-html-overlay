import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

export default async (event: any) => {
  puppeteer.use(StealthPlugin())
  try {
    const { url = '', width = 1500, height = 900 } = event.queryStringParameters || {}

    if (!url || !url.startsWith('http')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ massage: 'you should specify page URL' }),
      }
    }

    const browser = await puppeteer.launch({})

    const page = await browser.newPage()
    page.setViewport({ width: Number(width), height: Number(height) })
    await page.goto(url)

    await page.waitFor(3000)

    const [body, styleSheets] = await page.evaluate(() => {
      const scripts = document.getElementsByTagName('script')
      Array.from(scripts).forEach((script) => {
        script?.parentNode?.removeChild(script)
      })

      const css: string[] = []

      Array.from(document.styleSheets).forEach((sheet) => {
        // @ts-ignore
        const rules = 'cssRules' in sheet ? sheet.cssRules : sheet.rules
        Array.from(rules).forEach((rule: CSSRule) => {
          if ('cssText' in rule) {
            css.push(rule.cssText)
          } else {
            // @ts-ignore
            css.push(rule?.selectorText + ' {\n' + rule?.style?.cssText + '\n}\n')
          }
        })
      })

      return [document.body.innerHTML, css.join('\n')]
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        body,
        styleSheets,
      }),
    }
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ massage: 'Something going wrong on backend side' }),
    }
  }
}
