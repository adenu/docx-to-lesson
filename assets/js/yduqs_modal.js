
document.querySelectorAll(".modal").forEach(element => {   
        
    var ultima = element.id.substring(element.id.lastIndexOf("-"));
    
    element.addEventListener('click', function () {
        var modal = document.getElementById('modal'+ultima);
        modal.isopen = true;
    });        
});
