export function handleThemePage() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export function getThemePage() {
    const theme = window.localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage)) ? 'dark' : 'light'
    return theme
}

export function setThemePage(value) {
    return window.localStorage.setItem('theme', value)
}