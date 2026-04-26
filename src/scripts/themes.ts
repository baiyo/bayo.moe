function applyTheme(): void {
  const saved: string | null = localStorage.getItem('theme')
  const sun = document.getElementById('icon-sun') as HTMLElement | null
  const moon = document.getElementById('icon-moon') as HTMLElement | null

  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
    if (sun) sun.style.display = 'none'
    if (moon) moon.style.display = 'block'
  } else {
    document.documentElement.removeAttribute('data-theme')
    if (sun) sun.style.display = 'block'
    if (moon) moon.style.display = 'none'
  }
}

function initToggle(): void {
  const toggle = document.getElementById('theme-toggle') as HTMLButtonElement | null
  if (!toggle) return

  toggle.addEventListener('click', () => {
    const isLight: boolean = document.documentElement.getAttribute('data-theme') === 'light'
    if (isLight) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
    applyTheme()
  })
}

applyTheme()
document.addEventListener('astro:page-load', applyTheme)
document.addEventListener('astro:page-load', initToggle)