document.addEventListener('DOMContentLoaded', function () {
    //leian koik sillad
    const sillaMarkerid = document.querySelectorAll('.silla-marker');

    //iga silla kohta 
    sillaMarkerid.forEach(sillaMarker => {
        sillaMarker.addEventListener('mouseover', function () {
            //leitakse silla nimi ja naidatakse seda kui hiirega punktist yle minnakse
            const sillaNimi = this.getAttribute('id');
            this.setAttribute('title', sillaNimi);
        });
    });
});

//koik kood on loodud rio truija poolt, pole kasutatud valiseid materjale