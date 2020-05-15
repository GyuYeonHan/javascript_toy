import Sample from './Sample.js'

export default class App {

    $target = null
    dashboard = null
    
    constructor($target) {
        this.$target = $target

        this.dashboard = new Sample($target)
        console.log(this.$target)
        console.log(this.dashboard)
        const $h1 = document.createElement('h1');
        $h1.innerText = 'this is for testtt';
        $target.appendChild($h1);
    }
}