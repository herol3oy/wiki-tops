import { Article } from '@/types/article'
import { formatDateWithMonthInWords } from '@/utils/format-date-with-month-in-words'

import { ResourceType } from './HeroText'

interface ArticlesInfo {
  articles: Article[] | null
  selectedLanguageCode: string
  selectedDate: string
  currentPage: number
  resourceType: ResourceType
}

export default function ArticlesInfo({
  articles,
  selectedLanguageCode,
  selectedDate,
  currentPage,
  resourceType,
}: ArticlesInfo) {
  return (
    <div className="mx-auto my-4 flex w-full items-start justify-between md:w-2/3">
      <div className="flex gap-5">
        <small className="text-sm text-gray-600">
          Articles: {` `}
          <span className="font-bold">{articles?.length}</span>
        </small>
        <small className="text-sm text-gray-600">
          Language:{` `}
          <span className="font-semibold">{selectedLanguageCode}</span>
        </small>
        <small className="text-sm text-gray-600">
          Date:{' '}
          <span className="font-semibold">
            {formatDateWithMonthInWords(selectedDate)}
          </span>
          {` `}
        </small>
        <small className="text-sm text-gray-600">
          Type: <span className="font-semibold">{resourceType}</span>
          {` `}
        </small>
      </div>
      <span className="whitespace-nowrap rounded-full bg-zinc-100 px-2.5 py-0.5 text-sm text-zinc-700">
        Page {currentPage}
      </span>
    </div>
  )
}
