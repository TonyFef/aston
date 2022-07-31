const API_ROOT = 'https://free-nba.p.rapidapi.com/';
const API_PLAYERS = 'players';
const API_PAGE = 0;
const API_PERPAGE = 10;



const API_KEY = '46175cb817msh2c8f97d10030325p1f4449jsnf2c43f4fef3e'
export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        // 'Content-Type': 'application/json'
    }
}
export const urlBase = `${API_ROOT}${API_PLAYERS}?page=`
export const urlPerPage = `&per_page=${API_PERPAGE}`
export const API_PERSON = `${API_ROOT}${API_PLAYERS}`

export const getTeamImg = (teamNickname) => (`@images/${teamNickname}.png`)