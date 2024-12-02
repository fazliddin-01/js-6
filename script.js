let son1 = +prompt('3ta son kiriting va men orta qiymatni topb beraman')
let son2 = +prompt('2son kiriting')
let son3 = +prompt('3son kiriting')

// while (son1 == "" || son2 == "" || son3 == "" || isNaN(son1) || isNaN(son2) || isNaN(son3)) {
//     +prompt('iltimos son kiritng')
// }

if (son1 < son2 && son3 < son1 || son1 > son2 && son3 > son1) {
    alert(`orta qiymat ${son1}`)
}
else if (son2 < son1 && son3 < son2 || son2 > son1 && son3 > son2) {
    alert(`orta qiymat ${son2}`)
}
else if (son3 < son1 && son2 < son3 || son3 > son1 && son2 > son3) {
    alert(`orta qiymat ${son3}`)
}
else {
    alert(`iwlamadi`)
}