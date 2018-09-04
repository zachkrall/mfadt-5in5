s0.initCam()

osc(20, 0.08, 11)
.modulate(
  src(s0)
  .thresh()
  .modulate(
    src(o0)
  )
)
.modulate(
  src(o0)
)
.mult(
  src(s0)
  .thresh(0.5)
)
.modulate(
  src(o0)
)
// .kaleid(3)
// .add(
//   shape(3)
//   .modulate(
//     osc(10)
//   )
//   .repeatX(10)
//   .repeatY(10)
//   .rotate(10)
// )
.modulate(
  osc(9)
)
.mult(
  src(s0)
  .thresh(0.1)
)
.out()
