// var stressScore = Infer({ method: 'enumerate' }, function () {
//     //   var hrv = flip(.5)
//     //   var br = flip(.5)
//     //   var exercise = flip(.5)
//     //   var sleep = flip(.5)
//     //   var cal = flip(.5)

//     for (var i = 0; i < 32; i++) { // bitwise
//         var hrv = (i & 1) > 0;
//         var br = (i & 2) > 0;
//         var exercise = (i & 4) > 0;
//         var sleep = (i & 8) > 0;
//         var cal = (i & 16) > 0;

//         switch (i) {
//             case 0:
//                 var stress = 0.01;
//                 break;
//             case 1:
//                 var stress = 0.08;
//                 break;
//             case 2:
//                 var stress = 0.25;
//                 break;
//             case 3:
//                 var stress = 0.33;
//                 break;
//             case 4:
//                 var stress = 0.17;
//                 break;
//             case 5:
//                 var stress = 0.25;
//                 break;
//             case 6:
//                 var stress = 0.25;
//                 break;
//             case 7:
//                 var stress = 0.42;
//                 break;
//             case 8:
//                 var stress = 0.17;
//                 break;
//             case 9:
//                 var stress = 0.33;
//                 break;
//             case 10:
//                 var stress = 0.50;
//                 break;
//             case 11:
//                 var stress = 0.58
//                 break;
//             case 12:
//                 var stress = 0.42;
//                 break;
//             case 13:
//                 var stress = 0.58;
//                 break;
//             case 14:
//                 var stress = 0.75;
//                 break;
//             case 15:
//                 var stress = 0.83;
//                 break;
//             case 16:
//                 var stress = 0.25;
//                 break;
//             case 17:
//                 var stress = 0.42;
//                 break;
//             case 18:
//                 var stress = 0.50;
//                 break;
//             case 19:
//                 var stress = 0.67;
//                 break;
//             case 20:
//                 var stress = 0.42;
//                 break;
//             case 21:
//                 var stress = 0.67;
//                 break;
//             case 22:
//                 var stress = 0.75;
//                 break;
//             case 23:
//                 var stress = 0.83;
//                 break;
//             case 24:
//                 var stress = 0.33;
//                 break;
//             case 25:
//                 var stress = 0.75;
//                 break;
//             case 26:
//                 var stress = 0.75;
//                 break;
//             case 27:
//                 var stress = 0.83;
//                 break;
//             case 28:
//                 var stress = 0.58;
//                 break;
//             case 29:
//                 var stress = 0.83;
//                 break;
//             case 30:
//                 var stress = 0.92;
//                 break;
//             case 31:
//                 var stress = 0.99;
//                 break;






//         }
//     }


//     return stress



// })
// viz.marginals(stressScore)


// var makeModel = function (f) {
//     return function () {
//         var h = flip(0.1)
//         var b = flip(0.1)
//         var e = mem(function (person) {
//             flip(0.3)
//         })
//         var s = mem(function (person) {
//             flip(0.5)
//         })
//         var c = mem(function (person) {
//             flip(0.3)
//         })

//         var stress = function (person) {
//             if (!h && !b && !e(person) && !s(person) && !c(person)) {
//                 0.01
//             } else if (!h && !b && !e(person) && !s(person) && c(person)) {
//                 0.08
//             } else if (!h && !b && !e(person) && s(person) && !c(person)) {
//                 0.25
//             } else if (!h && !b && !e(person) && s(person) && c(person)) {
//                 0.33
//             } else if (!h && !b && e(person) && !s(person) && !c(person)) {
//                 0.17
//             } else if (!h && !b && e(person) && !s(person) && c(person)) {
//                 0.25
//             } else if (!h && !b && e(person) && s(person) && !c(person)) {
//                 0.25
//             } else if (!h && !b && e(person) && s(person) && c(person)) {
//                 0.42
//             } else if (!h && b && !e(person) && !s(person) && !c(person)) {
//                 0.17
//             } else if (!h && b && !e(person) && !s(person) && c(person)) {
//                 0.33
//             } else if (!h && b && !e(person) && s(person) && !c(person)) {
//                 0.50
//             } else if (!h && b && !e(person) && s(person) && c(person)) {
//                 0.58
//             } else if (!h && b && e(person) && !s(person) && !c(person)) {
//                 0.42
//             } else if (!h && b && e(person) && !s(person) && c(person)) {
//                 0.58
//             } else if (!h && b && e(person) && s(person) && !c(person)) {
//                 0.75
//             } else if (!h && b && e(person) && s(person) && c(person)) {
//                 0.83
//             } else if (h && !b && !e(person) && !s(person) && !c(person)) {
//                 0.25
//             } else if (h && !b && !e(person) && !s(person) && c(person)) {
//                 0.42
//             } else if (h && !b && !e(person) && s(person) && !c(person)) {
//                 0.50
//             } else if (h && !b && !e(person) && s(person) && c(person)) {
//                 0.67
//             } else if (h && !b && e(person) && !s(person) && !c(person)) {
//                 0.42
//             } else if (h && !b && e(person) && !s(person) && c(person)) {
//                 0.67
//             } else if (h && !b && e(person) && s(person) && !c(person)) {
//                 0.75
//             } else if (h && !b && e(person) && s(person) && c(person)) {
//                 0.83
//             } else if (h && b && !e(person) && !s(person) && !c(person)) {
//                 0.33
//             } else if (h && b && !e(person) && !s(person) && c(person)) {
//                 0.75
//             } else if (h && b && !e(person) && s(person) && !c(person)) {
//                 0.75
//             } else if (h && b && !e(person) && s(person) && c(person)) {
//                 0.83
//             } else if (h && b && e(person) && !s(person) && !c(person)) {
//                 0.58
//             } else if (h && b && e(person) && !s(person) && c(person)) {
//                 0.83
//             } else if (h && b && e(person) && s(person) && !c(person)) {
//                 0.92
//             } else {
//                 0.99
//             }
//         }
//         f(stress, h, b, e, s, c)
//     }
// }
// editor.put("makeModel", makeModel)

// var makeModel = editor.get("makeModel")
// var dist = Infer({ method: 'MCMC', samples: 5000 }, makeModel(function (stress, h, b, e, s, c) {
//     condition(e("bob") && b && s("bob"))
//     stress("bob")
// }))
// // viz.density(dist, { xLabel: 'Stress', yLabel: 'P(Stressed)' })
// viz.density(dist, {bounds:[0,1]})




var makeModel = function (f) {
    return function () {
        
        var e = mem(function (person) { //little exercise
            flip(0.3)
        })
        var s = mem(function (person) { //little sleep
            flip(0.3)
        })

        var stress = function (person) {
            if (e(person) && s(person)) {
                flip(0.83)
            } else if (e(person) && !s(person)) {
                flip(0.5)
            } else if(!e(person) && s(person)) {
                flip(0.67)
            } else {
                flip(0.17)
            }
        }
        
        var h = function(person){ //low hrv
            if(stress(person)){
                flip(0.85)
            }
            else{
                flip(0.2)
            }
        }
        var b = function(person){ //shalow breathing
            if(stress(person)){
                flip(0.75)
            }
            else{
                flip(0.25)
            }
        }
        f(stress, h, b, e, s)
//         return {stress: stress, h: h, b: b}
    }
}
editor.put("makeModel", makeModel)

var makeModel = editor.get("makeModel")
var dist = Infer({ method: 'MCMC', samples: 5000 }, makeModel(function (stress, h, b, e, s) {
    condition(e("bob"))
//     condition(h("bob"))
    stress("bob")
}))
viz.auto(dist, { xLabel: 'Stress', yLabel: 'P(Stressed)' })
Math.exp(dist.score(true))