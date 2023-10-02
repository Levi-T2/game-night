import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js";



// function _test() {
//     console.log('test');
// }

function _drawGamers() {
    const Gamers = AppState.gamers
    let content = ''

    Gamers.forEach(gamer => content += gamer.GamerCard)
    setHTML('GamerHTML', content)
}

export class GamersController {
    constructor() {
        console.log('The controller has been loaded')
        console.log('Looking in the AppState', AppState.gamers)
        _drawGamers()
    }

    increaseGamerScore(Gamername) {
        console.log('You increased the score', Gamername)
        GamersService.increasePlayerScore(Gamername)
    }

}





