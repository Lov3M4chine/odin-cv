import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

interface StorageData {
  [key: string]: string
}

export function saveToLocalStorage(data: StorageData) {
  Object.keys(data).forEach((key) => {
    localStorage.setItem(key, data[key])
  })
  alert('Data saved successfully!')
}

export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  }
  return defaultValue
}

export function clearData(
  keys: string[],
  setters: Array<((value: string) => void) | ((value: Date | null) => void)>
) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const setter = setters[i]

    // Use local storage as an example, adapt as necessary
    localStorage.removeItem(key)

    if (key === 'startDate' || key === 'endDate') {
      ;(setter as (value: Date | null) => void)(null)
    } else {
      ;(setter as (value: string) => void)('')
    }
  }
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString)
  return `${date.getMonth() + 1}/${date.getFullYear()}`
}

export const downloadResumeAsPDF = (elementId: string): void => {
  const input = document.getElementById(elementId)

  if (!input) {
    console.error(`Element with ID ${elementId} not found.`)
    return
  }

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()

    const imgWidth = 210 // Width of the PDF page, usually A4 size
    const imgHeight = (canvas.height * imgWidth) / canvas.width // Adjusted height

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
    pdf.save('resume.pdf')
  })
}
