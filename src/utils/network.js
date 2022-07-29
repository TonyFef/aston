export const getApiResourse = async (url, options) => {
    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            console.error('Could not fetch:', res.status)
            return false
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch:', error.message)
        return false
    }
}