function HtmlElement() {
    this.click = function() {
        console.log('Click');
    };
}

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectedElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    };
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    this.render = function() {
        return `
<select>${this.items.map(item => `
    <options>${item}</options>`).join('')}
</select>`;
   }
}

function HtmlImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src="${this.src}" />`
    }
}

HtmlSelectedElement.prototype = new HtmlElement();
HtmlSelectedElement.prototype.constructor = HtmlSelectedElement

HtmlImageElement.prototype = new HtmlImageElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const html1 = new HtmlSelectedElement([1,2,3,4,5]);
const html2 = new HtmlImageElement(`http://google.narutoimage`);

const htmlElements = [
    html1, 
    html2
]

for (let elements of htmlElements) {
    console.log(elements.render())
}