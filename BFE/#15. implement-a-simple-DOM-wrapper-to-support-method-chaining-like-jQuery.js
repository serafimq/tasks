// $('#button')
//     .css('color', '#fff')
//     .css('backgroundColor', '#000')
//     .css('fontWeight', 'bold')


function $(el) {
    return {
        css: function (propertyName, value) {
            el.style[propertyName] = value;
            return this;
        }
    }
}

function $2(el) {
    return new Wrapper(el);
}

class Wrapper {
    constructor(el) {
        this.el = el;
    }

    css(propertyName, value) {
        this.el.style[propertyName] = value;
        return this
    }
}




const elem = $('#button')
    .css('color', '#fff')
    .css('backgroundColor', '#000')
    .css('fontWeight', 'bold')


console.log({elem})