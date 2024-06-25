import * as xlsx from "xlsx"

// Function to download an Excel file
function downloadExcel(sheetName: string, headers: string[], data: any[]) {
  // Create a new workbook
  const workbook = xlsx.utils.book_new()
  // Create a worksheet from the headers and data
  const worksheet = xlsx.utils.aoa_to_sheet([headers, ...data])
  // Append the worksheet to the workbook
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName)

  // Write the workbook to a binary string
  const binaryString = xlsx.write(workbook, {
    type: "binary",
    bookType: "xlsx"
  })
  // Convert the binary string to an ArrayBuffer
  const blob = new Blob([s2ab(binaryString)], {
    type: "application/octet-stream"
  })
  // Create a download link
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${sheetName}.xlsx`
  link.click()
  URL.revokeObjectURL(url)
}

// Helper function to convert a string to an ArrayBuffer
function s2ab(s: string) {
  const buffer = new ArrayBuffer(s.length)
  const view = new Uint8Array(buffer)
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff
  }
  return buffer
}

// Function to download a CSV file
function downloadCSV(sheetName: string, headers: string[], data: any[]) {
  // Create a new workbook
  const workbook = xlsx.utils.book_new()
  // Create a worksheet from the headers and data
  const worksheet = xlsx.utils.aoa_to_sheet([headers, ...data])
  // Append the worksheet to the workbook
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName)
  // Convert the worksheet to a CSV string
  const csvString = xlsx.utils.sheet_to_csv(worksheet)

  // Create a download link
  const blob = new Blob([csvString], { type: "text/csv" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${sheetName}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

// Function to convert a CSV string to a JSON object
function csvToJSON(csvString: string) {
  const lines = csvString.split("\n")
  const result = []
  const headers = lines[0].split(",")

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue
    const obj: any = {}
    const currentLine = lines[i].split(",")

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j]
    }
    result.push(obj)
  }
  return result
}

// Function to download listings data as a CSV file
const downloadListings = async (data: any[]) => {
  const fileName = "BlueFin"
  const headers = [
    "id",
    "Address",
    "City",
    "State",
    "Zip",
    "Price",
    "Zestimate",
    "Beds",
    "Baths",
    "SqFt",
    "Lot Size",
    "Year Built",
    "URL"
  ]

  // Map the data to match the headers
  const mappedData = data.map((item) => [
    item.id,
    item.address,
    item.city,
    item.state,
    item.zip,
    item.price,
    item.zestimate,
    item.beds,
    item.baths,
    item.sqft,
    item.lotSize,
    item.yearBuilt,
    item.url
  ])

  // Ensure all data is converted to strings
  const stringData = mappedData.map((row) => row.map((cell) => cell.toString()))

  // Download the data as a CSV file
  downloadCSV(fileName, headers, stringData)
}

// Export the functions
export { downloadExcel, downloadCSV, csvToJSON, downloadListings }
