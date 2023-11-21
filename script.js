document.addEventListener('DOMContentLoaded', function () {
    const sillaMarkerid = document.querySelectorAll('.silla-marker');

    //iga silla kohta 
    sillaMarkerid.forEach(sillaMarker => {
        sillaMarker.addEventListener('click', function () {
            const sillaNimi = this.getAttribute('silla-nimi');
            const link = this.getAttribute('silla-info');
            window.open(link, '_blank');
        });

        sillaMarker.addEventListener('mouseover', function () {
            const sillaNimi = this.getAttribute('silla-nimi');
            this.setAttribute('title', sillaNimi);
        });
    });
});