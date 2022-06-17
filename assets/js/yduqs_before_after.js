

    document.querySelectorAll('yduqs-before-after').forEach((element, index) => {
        element.setAttribute('id', 'before-after-'+index);

        setTimeout(function(){ 
            var sliderBeforeAfter = element.querySelector('.slider input');
            var widthBeforeAfter = element.querySelector('.images .img2');   
            var dragLineBeforeAfter = element.querySelector('.slider .drag-line');

            var sliderval = sliderBeforeAfter.value;
            dragLineBeforeAfter.style.left = sliderval + '%';
            calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                    
            widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)'; 

            sliderBeforeAfter.addEventListener('input', () => {         
                sliderval = sliderBeforeAfter.value;
                dragLineBeforeAfter.style.left = sliderval + '%';
                calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                        
                widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)';
            })

        }, 1000);
    })    
    
    window.onresize = function() {
        document.querySelectorAll('yduqs-before-after').forEach((element, index) => {
            element.setAttribute('id', 'before-after-'+index);

                var sliderBeforeAfter = element.querySelector('.slider input');
                var widthBeforeAfter = element.querySelector('.images .img2');   
                var dragLineBeforeAfter = element.querySelector('.slider .drag-line');

                var sliderval = sliderBeforeAfter.value;
                dragLineBeforeAfter.style.left = sliderval + '%';
                calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                    
                widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)'; 

                sliderBeforeAfter.addEventListener('input', () => {         
                    sliderval = sliderBeforeAfter.value;
                    dragLineBeforeAfter.style.left = sliderval + '%';
                    calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                        
                    widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)';
                })
        })        
    }   
