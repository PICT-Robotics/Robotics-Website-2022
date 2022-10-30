function slideLeft(entries, observer){
    console.log("Element Found")

    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideLeft');
            entry.target.classList.remove('hidden')
            observer.unobserve(entry.target);
        }
        
    });
}

function slideRight(entries, observer){
    console.log("Element Found")
    
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideRight');
            entry.target.classList.remove('hidden')
            observer.unobserve(entry.target);
        }
        
    });
}

observer1 = new IntersectionObserver(slideRight)
observer2 = new IntersectionObserver(slideLeft)


entries = document.querySelectorAll('.entry')
for(i=0; i<entries.length; i++){
    if(i%2==0) observer1.observe(entries[i])
    else observer2.observe(entries[i])
    entries[i].classList.add('hidden')
}
