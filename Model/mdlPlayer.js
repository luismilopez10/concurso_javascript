export class mdlPlayer {
    static instance;
    name = '';
    score = 0;

    constructor(name = '', score = 0){
        if (!!mdlPlayer.instance) {
            return mdlPlayer.instance;
        }

        mdlPlayer.instance = this;
        this.name = name;
        this.score = score;
    }
}
