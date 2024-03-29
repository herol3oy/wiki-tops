import { NextResponse } from 'next/server'

const cheerio = require('cheerio')

const BASE_URL = 'https://en.wikipedia.org/wiki/ISO_639-1_codes'

export interface LanguageCode {
  id: string
  code: string
  language: string
}

export async function GET() {
  const languageCodes: LanguageCode[] = []

  try {
    const response = await fetch(BASE_URL)
    const HTMLContent = await response.text()
    const $ = cheerio.load(HTMLContent)

    $('tbody tr').each((_: number, element: HTMLElement) => {
      const td = $(element).find('td:first-child')

      const code = td.attr('id')
      const language = td.find('a').text()

      if (code && language) {
        const id = `${code}_${languageCodes.length + 1}`

        languageCodes.push({
          id,
          code,
          language,
        })
      }
    })
  } catch (error) {
    console.error('Error:', error)
  }

  return NextResponse.json({ languageCodes })
}
