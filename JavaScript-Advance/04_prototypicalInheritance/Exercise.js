function HtmlElement() {
    this.click = function() {
        console.log('click');
    }
}


HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectedElement(items = []) {
    this.items = items;
    this.addItems = function(value) {
        this.items.push(value);
    }
    this.removeItems = function(value) {
        this.items.splice(this.items.indexof(value, 1));
    }
}

HtmlSelectedElement.prototype = new HtmlElement();
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement  

const htmlNew = new HtmlSelectedElement();

