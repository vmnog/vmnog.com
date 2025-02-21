'use client'

import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full px-3 py-2 transition hover:opacity-70"
      onClick={() => setTheme(otherTheme)}
    >
      <Sun className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:stroke-zinc-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-600" />
      <MoonStar className="hidden h-6 w-6 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:stroke-zinc-500" />
    </button>
  )
}

export default ThemeSwitch
