const answers = ["red", "Violets", "myself", "with"]


const btn = document.querySelectorAll('button')
const container = document.querySelectorAll('.container')


let i = 0

btn.forEach((e) => {

    e.addEventListener('click', () => {
        if (i < answers.length) {

            let rep = document.getElementById(`${i}`)
            if (e.value === answers[i]) {

                rep.innerText = e.value;
                rep.classList.remove('false')
                rep.classList.add('true');

                setTimeout(() => {
                    container[i + 1].classList.remove('disable')
                    container[i].classList.add('disable');
                    i++
                }, 1000)

            } else {

                rep.innerText = e.value;
                rep.classList.add('false');
                setTimeout(() => {
                    rep.innerText = "____";
                }, 500)

            };

        };
    });

});


const target = document.getElementById('target');



document.getElementById('anim').addEventListener('click', () => {

    document.getElementById('anim').style.display = "none";

    const app = document.getElementById('target');
    let text = new Typewriter(app, {
        loop: false,
        delay: 75,
        deleteSpeed: 30,
    })
    text
        .typeString('Roses are red. ')
        .pauseFor(300)
        .typeString('Violets are blue. ')
        .pauseFor(300)
        .typeString('I love myself better. ')
        .pauseFor(300)
        .typeString('When I am, ')
        .pauseFor(300)
        .typeString('with you')
        .pauseFor(1000)
        .deleteAll()
        .pauseFor(300)
        .typeString('I want you forever, even when we are not together ')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Hope we finish this life together . ')
        .pauseFor(1000)
        .typeString('If you wont that, you ll never be here . ')
        .pauseFor(1000)
        .typeString('I know you love me more than everthing . ')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Dont be afraid anymore honey . ')
        .pauseFor(1000)
        .typeString('I am here')
        .pauseFor(1000)
        .typeString('We are perfect to each other  your soul are the same . ')
        .pauseFor(2000)
        .deleteAll()
        .typeString('My only one tatoo is your name on my heart . ')
        .pauseFor(300)
        .typeString('Always and Forever')
        .start();



});