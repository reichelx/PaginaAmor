
//ALERTA

window.addEventListener('load',() =>{
    Swal.fire({
        title: 'Quieres poner musica de fondo?',
        text: "Ponla porfi",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          document.querySelector('.music').play();
        }
        animationTimeline();
      })
})


//GREENSOCK LIBRERIA

const animationTimeline = () => {

    const textbox = document.getElementsByClassName('chat')[0];
    textbox.innerHTML = `<span>${textbox.innerHTML.split('').join('</span><span>')}</span>`;
        
    const ideatrans = {
        opacity:0,
        y:-20,
        rotation: 5,
        skewX: '15deg'
    }

    const ideafinal = {
        opacity:0,
        y:20,
        rotation:5,
        skewX:'-15deg'
    }

    const fotosinicial = {
        opacity:0,
        y:-20,
    }

    const fotosfinal = {
        opacity:0,
        y:20,

    }

    const images = document.querySelectorAll('.profile');

    const tl = new TimelineMax();

    tl.to('.container', 0.6,{
        visibility: 'visible'
    })
        .from('.one',0.6,{
            opacity: 0,
            y: 10
        })
        .from('.two',0.4,{
            opacity:0,
            y:10
        })
        .to('.one',0.6,{
            opacity:0,
            y:10
        },'+=3')
        .to('.two',0.6,{
            opacity:0,
            y:10
        }, '-=1')

        .from('.three',0.6,{
            opacity:0,
            y:10
        },'+=2')
        .to('.three',0.6,{
            opacity:0,
            y:10
        })

        .from('.four',0.6,{
            opacity:0,
            scale:0.2
        })
        .from('.botonfalso',0.3,{
            opacity: 0,
            scale: 0.2
        })
        .staggerTo('.chat span',1.5,{
            visibility:'visible'
        },0.04)
        .to('.botonfalso',0.1,{
            backgroundColor: 'rgb(127,206,248)'
         }, '+=0.6')
        .to('.four',0.6,{
            opacity:0,
            scale:0.2,
            y: -150
        },'+=1')

        .from('.idea1',0.6,ideatrans)
        .to('.idea1',0.6,ideafinal,"+=2")

        .from('.idea2',0.6,ideatrans)
        .to('.idea2',0.6,ideafinal,"+=2")

        .from('.idea3',0.6,ideatrans)
        .to('.idea3',0.6,ideafinal,"+=2")

        .from('.idea4',0.6,ideatrans)
        .to('.idea4',0.6,ideafinal,"+=2")
            
        .from('.idea5',0.6,ideatrans)
        .to('.idea5',0.6,ideafinal,"+=2")

        .from('.six',0.6,fotosinicial)
        .to('.six',0.6,fotosfinal,"+=1.5")

        .from('.profile2',0.6,fotosinicial)
        .to('.profile2',0.6,fotosfinal,"+=0.5")

        .from('.profile3',0.6,fotosinicial)
        .to('.profile3',0.6,fotosfinal,"+=0.5")

        .from('.profile4',0.6,fotosinicial)
        .to('.profile4',0.6,fotosfinal,"+=0.5")

        .from('.profile5',0.6,fotosinicial)
        .to('.profile5',0.6,fotosfinal,"+=0.5")

        .from('.profile6',0.6,fotosinicial)
        .to('.profile6',0.6,fotosfinal,"+=0.5")

        .from('.profile7',0.6,fotosinicial)
        .to('.profile7',0.6,fotosfinal,"+=0.5")

        .from('.profile8',0.6,fotosinicial)
        .to('.profile8',0.6,fotosfinal,"+=0.5")

        .from('.profile9',0.6,fotosinicial)
        .to('.profile9',0.6,fotosfinal,"+=0.5")

        .from('.profile10',0.6,fotosinicial)
        .to('.profile10',0.6,fotosfinal,"+=0.5")

        .from('.profile11',0.6,fotosinicial)
        .to('.profile11',0.6,fotosfinal,"+=0.5")

        .from('.profile12',0.6,fotosinicial)
        .to('.profile12',0.6,fotosfinal,"+=0.5")

        .from('.profile13',0.6,fotosinicial)
        .to('.profile13',0.6,fotosfinal,"+=0.5")

        .staggerFrom('.eigth p',1,ideatrans,1.2)
        .to('.corasao',0.5,{
            rotation:90,
        },'+=1');
};



