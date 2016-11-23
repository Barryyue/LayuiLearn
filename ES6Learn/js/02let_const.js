{
    let a = 10;
    var b = 1;
}
//console.info(a + '  ' + b);  a不可用
//1.let命令
//不存在变量提升
//暂时性死区
//不允许重复声明

/*
    2. 块级作用域
        es6的块级作用域
        块级作用域于函数声明

    3.const命令
        

*/
const foo = Object.freeze({});//冻结对象
//对对象彻底冻结的函数
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key]==='object') {
            constantize(obj[key]);
        }
    })
}

/*
    4. 顶级对象的属性
        //全局变量逐步与顶级对象的属性脱钩
    5.顶级对象
        各种环境都通用的顶级对象 global
*/