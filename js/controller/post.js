import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    try {
        var bahan_baku = getValue("bahan_baku");

        let data = {
            nama: getValue("nama"),
            harga: parseFloat(getValue("harga")),
            deskripsi: getValue("deskripsi"),
            kategori: {
                kategori: getValue("kategori"),
            },
            bahan_baku: {
                bahan_baku: bahan_baku.split(","),
                jumlah: getValue("jumlah"),
            },
        };

        postData(urlPOST, data, AmbilResponse)
            .then(response => {
                if (response.ok) {
                    alert('Data successfully saved!');
                    document.getElementById('menu_form').reset();
                } else {
                    alert('Terjadi kesalahan saat mengirim data.');
                }
            })
            .catch(error => {
                alert('Terjadi kesalahan: ' + error.message);
            });
    } catch (error) {
        alert('Terjadi kesalahan: ' + error.message);
    }
}

onClick("button", pushData);
