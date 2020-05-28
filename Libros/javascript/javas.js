
let indice = 1;
muestraSlides(indice);
function buscar()
{
 indice= Number(document.formulario.bus[document.formulario.bus.selectedIndex].value);
 muestraSlides(indice);
}

function avanzaSlide(n)
{
    muestraSlides(indice+=n);
}

function posicionSide(n){
    muestraSlides(indice=n);
}

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');
   
    if(n>slides.length)
    {
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for( i=0;i<slides.length;i++)
    {
        slides[i].style.display='none';
    }
    for(i=0;i<barras.length;i++)
    {
        barras[i].className=barras[i].className.replace("active","");
    }
    slides[indice-1].style.display = 'block';
    barras[indice-1].className+=' active'
}

function modale(){
    let modal1 = document.getElementById('modal1');
    let modal2 = document.getElementById('modal2');
    let modal3 = document.getElementById('modal3');
    let modal4 = document.getElementById('modal4');
    let modal5 = document.getElementById('modal5');
    let modal6 = document.getElementById('modal6');
    let cerrar1= document.getElementById('close1');
    let cerrar2= document.getElementById('close2');
    let cerrar3= document.getElementById('close3');
    let cerrar4= document.getElementById('close4');
    let cerrar5= document.getElementById('close5');
    let cerrar6= document.getElementById('close6');

        if(indice==1){
        modal1.style.display ='block';
        } else if(indice==2){
        modal2.style.display ='block';
        }else if(indice==3){
        modal3.style.display ='block';
        }else if(indice==4){
        modal4.style.display ='block';
        } else if(indice==5){
        modal5.style.display ='block';
        } else if(indice==6){
        modal6.style.display ='block';
        }

        cerrar1.addEventListener('click',function(){
            modal1.style.display ='none';
        });
        cerrar2.addEventListener('click',function(){
            modal2.style.display ='none';
        });
        cerrar3.addEventListener('click',function(){
            modal3.style.display ='none';
        });
        cerrar4.addEventListener('click',function(){
            modal4.style.display ='none';
        });
        cerrar5.addEventListener('click',function(){
            modal5.style.display ='none';
        });
        cerrar6.addEventListener('click',function(){
            modal6.style.display ='none';
        });
        
    }

   