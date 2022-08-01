import PropTypes from 'prop-types';

import GSW from '@images/Warriors.png'
import PHI from '@images/76ers.png'
import UTA from '@images/Jazz.png'
import DET from '@images/Pistons.png'
import SAC from '@images/Kings.png'
import CLE from '@images/Cavaliers.png'
import HOU from '@images/Rockets.png'
import MEM from '@images/Grizzlies.png'
import LAC from '@images/Clippers.png'
import POR from '@images/Blazers.png'
import BOS from '@images/Celtics.png'
import ATL from '@images/Hawks.png'
import ORL from '@images/Magic.png'
import MIL from '@images/Bucks.png'
import PHX from '@images/Suns.png'
import MIN from '@images/Timberwolves.png'
import DAL from '@images/Mavericks.png'
import DEN from '@images/Nuggets.png'
import MIA from '@images/Heat.png'
import WAS from '@images/Wizards.png'
import BKN from '@images/Nets.png'
import LAL from '@images/Lakers.png'
import CHA from '@images/Hornets.png'
import SAS from '@images/Spurs.png'
import NYK from '@images/Knicks.png'
import CHI from '@images/Bulls.png'
import IND from '@images/Pacers.png'
import OKC from '@images/Thunder.png'
import TOR from '@images/Raptors.png'

import styles from './PlayersList.module.css'

const SwitchTeam = (teamNickname) => {
    switch (teamNickname) {
        case 'Warriors':
            return (<img className={styles.team__img} src={GSW} alt={teamNickname} />)
        case '76ers':
            return (<img className={styles.team__img} src={PHI} alt={teamNickname} />)
        case 'Jazz':
            return (<img className={styles.team__img} src={UTA} alt={teamNickname} />)
        case 'Pistons':
            return (<img className={styles.team__img} src={DET} alt={teamNickname} />)
        case 'Kings':
            return (<img className={styles.team__img} src={SAC} alt={teamNickname} />)
        case 'Cavaliers':
            return (<img className={styles.team__img} src={CLE} alt={teamNickname} />)
        case 'Rockets':
            return (<img className={styles.team__img} src={HOU} alt={teamNickname} />)
        case 'Grizzlies':
            return (<img className={styles.team__img} src={MEM} alt={teamNickname} />)
        case 'Clippers':
            return (<img className={styles.team__img} src={LAC} alt={teamNickname} />)
        case 'Blazers':
            return (<img className={styles.team__img} src={POR} alt={teamNickname} />)
        case 'Celtics':
            return (<img className={styles.team__img} src={BOS} alt={teamNickname} />)
        case 'Hawks':
            return (<img className={styles.team__img} src={ATL} alt={teamNickname} />)
        case 'Magic':
            return (<img className={styles.team__img} src={ORL} alt={teamNickname} />)
        case 'Bucks':
            return (<img className={styles.team__img} src={MIL} alt={teamNickname} />)
        case 'Suns':
            return (<img className={styles.team__img} src={PHX} alt={teamNickname} />)
        case 'Timberwolves':
            return (<img className={styles.team__img} src={MIN} alt={teamNickname} />)
        case 'Mavericks':
            return (<img className={styles.team__img} src={DAL} alt={teamNickname} />)
        case 'Nuggets':
            return (<img className={styles.team__img} src={DEN} alt={teamNickname} />)
        case 'Heat':
            return (<img className={styles.team__img} src={MIA} alt={teamNickname} />)
        case 'Wizards':
            return (<img className={styles.team__img} src={WAS} alt={teamNickname} />)
        case 'Nets':
            return (<img className={styles.team__img} src={BKN} alt={teamNickname} />)
        case 'Lakers':
            return (<img className={styles.team__img} src={LAL} alt={teamNickname} />)
        case 'Hornets':
            return (<img className={styles.team__img} src={CHA} alt={teamNickname} />)
        case 'Spurs':
            return (<img className={styles.team__img} src={SAS} alt={teamNickname} />)
        case 'Knicks':
            return (<img className={styles.team__img} src={NYK} alt={teamNickname} />)
        case 'Bulls':
            return (<img className={styles.team__img} src={CHI} alt={teamNickname} />)
        case 'Pacers':
            return (<img className={styles.team__img} src={IND} alt={teamNickname} />)
        case 'Thunder':
            return (<img className={styles.team__img} src={OKC} alt={teamNickname} />)
        case 'Raptors':
            return (<img className={styles.team__img} src={TOR} alt={teamNickname} />)
        default:
            break;
    }

}

SwitchTeam.propTypes = {
    teamNickname: PropTypes.string
}

export default SwitchTeam;