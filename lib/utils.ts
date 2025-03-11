import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  if (!date) return ''
  const parsedDate = new Date(date)
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0') // Ensure 2-digit month
  const year = parsedDate.getFullYear()
  return `${month}/${year}` // Format as MM/YYYY
}
