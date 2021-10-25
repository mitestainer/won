const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  /* istanbul ignore next */
  // no Next via Server/Static não tem window, por isso deve verificar
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: string[]) {
  /* istanbul ignore next */
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
