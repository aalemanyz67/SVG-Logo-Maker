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
    constructor(){
        super()
        //this.color=''
    }
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class Square extends Shape {
    constructor(){
        super()
        //this.color=''
    }
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
//for trianlge I will be using the demensions for a polygon
class Triangle extends Shape{
    constructor(){
        super()
        //color=''
    }
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};
//How to export my shape classes
module.exports ={ Circle, Square, Triangle}