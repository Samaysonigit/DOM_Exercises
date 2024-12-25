var box = document.querySelectorAll('.box')

box.forEach(function (elem) {
    elem.addEventListener('mousemove', function (dets) {
        elem.childNodes[3].style.left = dets.x + 'px'
    })
    elem.addEventListener('mouseenter', function (dets) {
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].style.scale = 1.1
    })
    elem.addEventListener('mouseleave', function (dets) {
        elem.childNodes[3].style.opacity = 0
    })
})