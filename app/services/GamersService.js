import { AppState } from "../AppState.js";
import { Gamer } from "../models/Gamers.js";


class GamersService {
    increaseGamerScore(Gamername) {
        const foundGamer = AppState.gamers.find(gamer => gamer.name == Gamername)
        foundGamer.score++
        console.log(foundGamer)
    }
}

