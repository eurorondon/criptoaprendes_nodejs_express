let form = document.querySelector('#formSubir');
form.addEventListener('submit', function(){
    let inputfile = document.querySelector('#inputFile').files[0];
    let progressbar = document.querySelector('#progressBar');

    let formdata = new FormData();
    formdata.append("inputfile", inputfile);
    let ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", function(e){
        let porcentaje = (e.loaded/ e.total) * 100;
        progressbar.value = Math.round(porcentaje);
    });

    ajax.open("POST", "/upload");
    ajax.send(formdata);
});