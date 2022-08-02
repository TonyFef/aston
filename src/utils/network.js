export const getApiResourse = async (urlBefore, page, urlAfter, options) => {
    try {
        const res = await fetch(`${urlBefore}${page}${urlAfter}`, options)

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

export const getSpecificPlayer = async (url, options) => {
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
export const getAllTeams = async (url, options) => {
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
export const getSpecificTeam = async (url, options) => {
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