var modelelement;
var codemodel_temp;
window.onload = function() {
    var barcards = document.querySelectorAll('.codecard');
    // console.log(barcode);
    barcards.forEach(barcard => {
        barcard.addEventListener('click', (e) => {
            var upi_id = barcard.dataset.upi_id;
            console.log(upi_id);
            console.log(barcard);
            var image = barcard.querySelector('img').cloneNode();
            console.log(image);
            codemodel_temp = document.querySelector('.barcode-model');
            modelelement = document.importNode(codemodel_temp.content, true);
            modelelement.querySelector('.model-code').appendChild(image)
            console.log(modelelement);
            document.querySelector('.container').appendChild(modelelement);
            document.querySelector('.close').addEventListener('click', e => {
                removeModel();
            });
            var cp_btn = document.querySelector('.cardcopy')
            cp_btn.addEventListener('click', e => {
                document.execCommand("copy");
            });
            cp_btn.addEventListener('copy', e => {
                e.clipboardData.setData('text/plain', upi_id);
                alert('upi id has been copied,you can paste it in your app');
                e.preventDefault();
            })
        })
    });

    document.querySelector('.teammates').addEventListener('click', e => {
        var entry_temp = document.querySelector('.teamentry');
        var entry_ele = document.importNode(entry_temp.content, true);
        document.querySelector('.container').appendChild(entry_ele);
        document.querySelector('.tsubmit').addEventListener('click', e => {
            teamData();
            removeModel();
        })
        document.querySelector('.cancel').addEventListener('click', e => {
            removeModel();
        })
    })
    document.querySelector('.submit').addEventListener('click', e => {
        //console.log("submitted");
        allDetails();
    })
}

function removeModel() {
    document.querySelector('.model-container').remove();
}

function addLoader() {
    var ld_tmp = document.querySelector('.load-template');
    var ld_ele = document.importNode(ld_tmp.content, true);
    document.querySelector('.container').appendChild(ld_ele);
}

function updateLoader(percent) {
    document.querySelector('.loader').innerHTML = percent + " loaded...";
}

function removeLoader() {
    document.querySelector('.model-container').remove();
}