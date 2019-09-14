const initParalax = {
  init: function() {
    var parallax = [
      document.getElementById("gerigiAtas"),
      document.getElementById("gerigiBawah"),
      document.getElementById("wave1"),
      document.getElementById("wave1.1"),
      document.getElementById("wave2"),
      document.getElementById("wave2.2"),
      document.getElementById("crossFilled"),
      document.getElementById("crossOutline"),
      document.getElementById("triangleFilled"),
      document.getElementById("triangleOutline"),
      document.getElementById("kotakFilled"),
      document.getElementById("kotakOutline"),
      document.getElementById("pieFilled"),
      document.getElementById("pieOutline")
    ]
    var parallaxLength = parallax.length
    let element
    for (var i = 0; i < parallaxLength; i++) {
      element = parallax[i]
      new Parallax(element, {
        relativeInput: true
      })
    }
  }
}
