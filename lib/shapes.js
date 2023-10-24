//adding my shape classes
class Shape{

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}
//class for "circle" and what it will render.
//using keyword "extends" to create a child class(circle) of anohter class parent(shpae).
class Circle extends Shape{
    render(){
        return `< circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render(){
        return `<rect x="60" y="10" rx="10" ry="10" fill="${this.color}"/>`
    }
}
//for trianlge I will be using the demensions for a polygon
class Triangle extends Shape{
    render(){
        return `<polygon height="250" width="450" points="225.10 100,210 350,210" fill="${this.color}"/>`
    }
};
//How to export my shape classes
module.export ={ Circle, Square, Triangle}