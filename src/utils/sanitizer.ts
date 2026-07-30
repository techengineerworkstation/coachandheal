import DOMPurify from 'dompurify'

export const sanitizeHTML = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
}

export const sanitizeText = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email) && email.length <= 254
}

export const rateLimit = (() => {
  const attempts = new Map<string, number[]>()
  const MAX_ATTEMPTS = 5
  const WINDOW_MS = 60_000

  return {
    check: (key: string): boolean => {
      const now = Date.now()
      const timestamps = attempts.get(key) || []
      const recent = timestamps.filter((t) => now - t < WINDOW_MS)
      if (recent.length >= MAX_ATTEMPTS) return false
      recent.push(now)
      attempts.set(key, recent)
      return true
    },
    reset: (key: string): void => {
      attempts.delete(key)
    },
  }
})()
