import Cookies from "js-cookie"

function $PerformanceTest(testFunction, iterations) {
  "use strict"
  var start = performance.now()
  for (var i = 0; i < iterations; i++) {
    testFunction()
  }
  var time = performance.now() - start
  return time
}

function median(values) {
  if (values.length === 0) return 0

  values.sort(function(a, b) {
    return a - b
  })

  var half = Math.floor(values.length / 2)

  if (values.length % 2) return values[half]

  return (values[half - 1] + values[half]) / 2.0
}

const PerformanceTest = () => {
  const highCutoff = 175
  const medCutoff = 400

  const numOfRuns = 5

  let runs = []

  for (let i = 0; i <= numOfRuns; i++) {
    runs.push(
      $PerformanceTest(() => {
        ;(Math.random() * Math.random()) ^
          (Math.random() * Math.random()) ^
          (Math.random() * 1000000)
      }, 1000000)
    )
  }

  let runAvg = median(runs)

  if (runAvg < highCutoff) return "high"
  else if (runAvg < medCutoff) return "medium"
  else return "low"
}

const IsHighPerformance = ["high"].includes(Cookies.get("performance"))
const IsMediumPerformanceOrBetter = ["medium", "high"].includes(
  Cookies.get("performance")
)
const IsMediumPerformanceOrWorse = ["medium", "low"].includes(
  Cookies.get("performance")
)
const IsLowPerformance = ["low"].includes(Cookies.get("performance"))

export {
  PerformanceTest,
  IsHighPerformance,
  IsLowPerformance,
  IsMediumPerformanceOrBetter,
  IsMediumPerformanceOrWorse,
}
