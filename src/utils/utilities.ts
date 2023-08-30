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

export function clearData(
  keys: string[],
  stateSetters: Array<(value: string) => void>
) {
  keys.forEach((key) => {
    localStorage.setItem(key, '')
  })

  stateSetters.forEach((setter) => {
    setter('')
  })
  alert('Data cleared successfully!')
}
