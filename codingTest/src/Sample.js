export default class Sample {

    $target = null

    constructor($target) {
        this.$target = $target

        const $h1 = document.createElement('h1')
        const div = document.createElement('div')
        $h1.innerText = '샘플 프로젝트'
        div.innerText = "testttt"
        $target.appendChild($h1)
        $target.appendChild(div)
    }
}