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
