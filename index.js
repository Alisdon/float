/**
 * Created by Alisdon on 2018/1/11.
 */
window.onload = function () {
    (function () {
        var demo = document.getElementById('demo')
        var speed = 2          //配置漂移速度，数字越大越慢
        var topAdd = false     //配置上下漂移方向， false为向上
        var leftAdd = false    //配置左右漂移方向， false为向左

        function Marquee() {
            var offsetTop = demo.offsetTop
            var clientHeight = document.body.clientHeight
            var offsetHeight = demo.offsetHeight
            var top = demo.style.top  == '' ? getDefaultStyle (demo, 'top').replace('px', '') : demo.style.top.replace('px', '')

            var offsetLeft = demo.offsetLeft
            var clientWidth = document.body.clientWidth
            var offsetWidth = demo.offsetWidth
            var left = demo.style.left == '' ? getDefaultStyle (demo, 'left').replace('px', '') : demo.style.left.replace('px', '')

            if (offsetTop == 0) {
                topAdd = true
            } else if (offsetHeight + offsetTop >= clientHeight) {
                topAdd = false
            }

            if (offsetLeft == 0) {
                leftAdd = true
            } else if (offsetWidth + offsetLeft >= clientWidth) {
                leftAdd = false
            }

            top = topAdd ? JSON.parse(top) + 1 : JSON.parse(top) - 1
            left = leftAdd ? JSON.parse(left) + 1 : JSON.parse(left) - 1

            demo.style.top = top + 'px'
            demo.style.left = left + 'px'
        }

        function getDefaultStyle(obj, attribute) {
            return obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute]
        }

        var MyMar = setInterval(Marquee, speed * 10)
        demo.onmouseover = function () {
            clearInterval(MyMar)
        }
        demo.onmouseout = function () {
            MyMar = setInterval(Marquee, speed * 10)
        }
    })()
}