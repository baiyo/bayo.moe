function applyTheme(): void {
  let saved: string | null = null
  try { saved = localStorage.getItem('theme') } catch {}
  const isLight = saved === 'light'
  document.documentElement.toggleAttribute('data-theme', isLight)
  if (isLight) document.documentElement.setAttribute('data-theme', 'light')
  const sun = document.getElementById('icon-sun')
  const moon = document.getElementById('icon-moon')
  if (sun) sun.style.display = isLight ? 'none' : 'block'
  if (moon) moon.style.display = isLight ? 'block' : 'none'
  document.getElementById('theme-toggle')?.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`)
}
function initToggle(): void {
  applyTheme()
  const toggle = document.getElementById('theme-toggle')
  if (!toggle || toggle.dataset.initialized) return
  toggle.dataset.initialized = 'true'
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    try { localStorage.setItem('theme', isLight ? 'dark' : 'light') } catch {}
    document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light')
    const sun = document.getElementById('icon-sun')
    const moon = document.getElementById('icon-moon')
    if (sun) sun.style.display = isLight ? 'block' : 'none'
    if (moon) moon.style.display = isLight ? 'none' : 'block'
    toggle.setAttribute('aria-label', `Switch to ${isLight ? 'light' : 'dark'} theme`)
  })
}
initToggle()
document.addEventListener('astro:page-load', initToggle)
