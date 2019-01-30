window.onload = function() {
    //   alert("booting up");
    var active_card = 0;
    var holder = document.querySelector('.slider-holder');
    var num_cards = holder.childElementCount;
    var holdr_width = holder.clientWidth;
    var card_width = holdr_width /num_cards;
    var cards=holder.children;
    console.log(card_width);
    console.log(cards);
    
    // var current_trans_value= 50;
   cards[active_card].classList.add('active');
    var prev = document.querySelector('.prev')
    prev.addEventListener('click', (e) => {
         {
            active_card--;
            next.style.display = "flex";
            console.log(active_card);
            var trans=active_card*(100/num_cards);
        }
        if (active_card == 0) {
          prev.style.display = "none";
        } 
        cards[active_card + 1].classList.remove('active');
        cards[active_card].classList.toggle('active');
        holder.style.transform = `translateX(-${trans}%)`;
    })
    var next = document.querySelector('.next')
    next.addEventListener('click', (e) => {
        {
            active_card++;
            console.log('happned',active_card);            
            prev.style.display = "flex";
            var trans = active_card * (100 / num_cards);
        }   
        if (active_card == num_cards - 1) {
            next.style.display = "none";
        }      
        cards[active_card - 1].classList.remove('active');
        cards[active_card].classList.toggle('active');
        holder.style.transform = `translateX(-${trans}%)`;

    });
    // var prev = document.querySelector('.prev')
    // prev.addEventListener('click', (e) => {
    //     if (active_card == 0) {
    //         prev.style.display = "none";
    //     } else {
    //         active_card--;
    //         next.style.display = "flex";
    //         console.log(active_card);
    //         var trans=active_card*(100/num_cards);
    //     }
    //     cards[active_card + 1].classList.remove('active');
    //     cards[active_card].classList.toggle('active');
    //     holder.style.transform = `translateX(-${trans}%)`;
    // })
    // var next = document.querySelector('.next')
    // next.addEventListener('click', (e) => {
    //     if (active_card == num_cards-1 ) {
    //         next.style.display = "none";
    //     } else {
    //         active_card++;
    //         console.log('happned',active_card);            
    //         prev.style.display = "flex";
    //         var trans = active_card * (100 / num_cards);
    //     }        
    //     cards[active_card - 1].classList.remove('active');
    //     cards[active_card].classList.toggle('active');
    //     holder.style.transform = `translateX(-${trans}%)`;

    // });
}