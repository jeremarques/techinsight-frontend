
export function formatTimeDifference(date) {
    const now = new Date()
    const timestamp = new Date(date)
    const dateDifference = now - timestamp

    const seconds = Math.floor(dateDifference / 1000)
    const minutes = Math.floor(dateDifference / (1000 * 60))
    const hours = Math.floor(dateDifference / (1000 * 60 * 60))
    const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 7))

    if (seconds < 60) {
        return `Há ${seconds} segundos`
    } else if (minutes < 60) {
        return `Há ${minutes} minutos`;
    } else if (hours < 24) {
        return `Há ${hours} horas`;
    } else if (days < 7) {
        return `Há ${days} dias`;
    } else if (weeks < 3) {
        return `Há ${weeks} semanas`;
    } else {
        const day = timestamp.getDate().toString().padStart(2,'0')
        const month = String(timestamp.getMonth() + 1).padStart(2,'0')
        const year = timestamp.getFullYear()
        const fullDate = `${day}/${month}/${year}`
        return fullDate
    }
}