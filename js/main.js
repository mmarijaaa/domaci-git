function ispisi() {

    var naziv = document.getElementsByClassName("nazivi");
    for(var i=0; i<naziv.length; i++) {
        var el = naziv[i];
        var ime = el.innerHTML;
        console.log(ime);
    }

}
ispisi();
