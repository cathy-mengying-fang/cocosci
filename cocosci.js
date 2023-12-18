
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
//   condition(e("bob"))
  condition(!s("bob"))
  condition(h("bob"))
  condition(!b("bob"))

  condition(stress("bob"))
  e("bob")
//   s("bob")
  
  
}))
viz.auto(dist, { xLabel: 'Stress', yLabel: 'P(Stressed)' })
// viz.auto(dist, { xLabel: 'Exercise', yLabel: 'P(Lack of Exercise)' })
// viz.auto(dist, { xLabel: 'Sleep', yLabel: 'P(Lack of Sleep)' })
Math.exp(dist.score(true))