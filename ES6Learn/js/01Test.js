//function makeIterator(array) {
//    var nextIndex = 0;
//    return {
//        next: function () {
//            return nextIndex < array.length ?
//                { value: array[nextIndex++], done: false } :
//                { value: undefined, done: true };
//        }
//    };
//}

//let it = makeIterator(['a', 'b']);
//console.info(it.next());
//console.info(it.next());
//console.info(it.next());
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

let p = new Point('Hello', 'World');
console.info(p.toString());