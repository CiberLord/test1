(function () {
    let i = 1; //состояние анимации
    let item = document.querySelectorAll(".page"); //квадратики
    let duration = 0.5;
    let countTime = 0;
    let animator = {};



    animator.enable=function(){
        Anima.animate(render);
    }




    function render(delta) {
        delta = delta / 1000;
        countTime += delta;
        if (countTime >= duration) {
            countTime = 0;
            switch (i) {
                case 1: {
                    enable(duration - 0.2, item[0], item[1], item[2], item[3]);
                    transform("rotateY(180deg)", item[1], item[2], item[3]);
                    i++;
                    break;
                }
                case 2: {
                    transform("rotateZ(180deg)", item[2], item[3]);
                    i++;
                    break;
                }
                case 3: {
                    transform("rotateX(-180deg)", item[3]);
                    i++;
                    break;
                }
                case 4: {
                    restart("none", item[0], item[1], item[2], item[3]);
                    i = 1;
                    break;
                }
            }
        }

    }
    function transform(t_func) {
        for (let i = 1; i < arguments.length; i++) {
            arguments[i].style.transform = t_func;
        }
    }
    function restart(t_func) {
        for (let i = 1; i < arguments.length; i++) {
            arguments[i].style.transition = "none";
        }
        for (let i = 1; i < arguments.length; i++) {
            arguments[i].style.transform = t_func;
        }
    }
    function enable(dur) {
        for (let i = 1; i < arguments.length; i++) {
            arguments[i].style.transition = "transform " + dur + "s"
        }
    }

    animator.enable();

})();
