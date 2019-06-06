function showPage(id){
    if(activePage!=id) {
        document.getElementById(activePage).style.display = 'none';
        document.getElementById(id).style.display = "block";
        activePage = id;

    }
}
