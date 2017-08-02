import { baseFrequencies, getNote, getLevel } from './frequencies';

export default class Synth {

    /**
     * @param {AudioContext} context
     */
    constructor(context) {
        this.context = context;
        this.initialise();
    }

    initialise() {
        this.osc = this.context.createOscillator();
        this.osc.type = 'square';
        this.gain = this.context.createGain();
        this.gain.gain.value = 0.05;
        this.osc.connect(this.gain);
        this.gain.connect(this.context.destination);
        this.osc.start();
    }

    /**
     * @param {String} note
     * @param {Number} time
     */
    trigger(note) {
        // this.initialise();

        let frequency = getNote(note, 4);
        this.osc.frequency.value = frequency;
        
        // this.osc.start(time);
        // hmmm
        // this.osc.stop(time + 0.1);

    }
}