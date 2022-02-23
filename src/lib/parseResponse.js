export const parseResponseToArray = (response) => {
  if (Array.isArray(response)) return response

  if (
    typeof response === "object" &&
    response !== null &&
    response.hasOwnProperty("data") &&
    response.data
  )
    return response.data
}
