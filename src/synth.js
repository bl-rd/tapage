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
        this.osc.frequency.value = 0;
        this.gain = this.context.createGain();
        this.gain.gain.value = 0.1;
        this.osc.connect(this.gain);
        this.gain.connect(this.context.destination);
        this.osc.start();
    }

    /**
     * @param {String} note
     * @param {Number} time
     */
    trigger(note, pitch = 4) {
        let frequency = getNote(note, pitch);
        this.osc.frequency.value = frequency;
    }
}