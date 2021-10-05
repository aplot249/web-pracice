// 1、用回调函数来获取异步方法里面数据
// function myfunc(callback) {
//     setTimeout(() => {
//         let name = "丽水瑞"
//         callback(name)
//             // console.log(name)
//     }, 3000);
// }

// myfunc(function(aaa) {
//     console.log(aaa)
// })

// 2、用promise来获取异步方法里面数据
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let name = "李素日"
//         resolve(name)
//     }, 3000);
// })

// p.then(res =>
//     console.log(res)
// )

// 3、async、await的使用
// 特别注意：await要用在async异步函数定义里面
async function ceshi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let name = "王佳明"
            return resolve(name)
        }, 3000);
    })
}

async function main() {
    let data = await ceshi()
    console.log(data)
}

// main()
// 异步函数的执行可以放在同步函数里面
function outer() {
    main()
}
outer()