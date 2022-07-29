const API_ROOT = 'https://free-nba.p.rapidapi.com/';
const API_PLAYERS = 'players';

const API_KEY = '46175cb817msh2c8f97d10030325p1f4449jsnf2c43f4fef3e'
export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        // 'Content-Type': 'application/json'
    }
}
export const url = API_ROOT + API_PLAYERS