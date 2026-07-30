export const generateNonce = (): string => {
  const array = new Uint8Array(16)
  crypto.getRandomValues(array)
  return btoa(String.fromCharCode(...array))
}

export const setSecurityHeaders = (): void => {
  const meta = document.createElement('meta')
  meta.httpEquiv = 'X-Content-Type-Options'
  meta.content = 'nosniff'
  document.head.appendChild(meta)
}

export const preventClickjacking = (): void => {
  if (window.self !== window.top) {
    document.body.innerHTML = ''
    window.top!.location.href = window.self.location.href
  }
}

export const sanitizeURL = (url: string): string => {
  try {
    const parsed = new URL(url)
    if (!['http:', 'https:', 'mailto:'].includes(parsed.protocol)) {
      return '#'
    }
    return parsed.href
  } catch {
    return '#'
  }
}

export const sanitizeInput = (input: string, maxLength = 500): string => {
  return input
    .slice(0, maxLength)
    .replace(/[<>]/g, '')
    .trim()
}

export const logSecurityEvent = (event: string, details?: string): void => {
  if (import.meta.env.DEV) {
    console.warn(`[Security] ${event}`, details || '')
  }
}
