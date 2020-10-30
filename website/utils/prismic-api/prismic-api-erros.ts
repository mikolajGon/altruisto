import ApiSearchResponse from "prismic-javascript/types/ApiSearchResponse"
import getNestePropertyFromObject from "lodash.get"

type PrismicApiError = {
  statusCode?: number
  isPrismicApiError?: boolean
}

const createPrismicApiError = (statusCode: number, message?: string) => {
  const err: PrismicApiError & Error = new Error(message || "Prismic Api error")
  err.isPrismicApiError = true
  err.statusCode = statusCode
  return err
}

export const checkMissingResults = (apiSearchResponse: ApiSearchResponse) => {
  const resultsCount = apiSearchResponse.results.length
  const isResultsMissing = resultsCount === 0
  if (isResultsMissing) {
    throw createPrismicApiError(404, "Missing results from Prismic Api")
  }
}

export const handlePrismicApiError = (error : PrismicApiError) => {
  const statusCode = error.isPrismicApiError ? error.statusCode : 500
  return {
    props: {
      error: {
        statusCode
      }
    }
  }
}
