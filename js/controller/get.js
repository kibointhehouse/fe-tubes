import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function GetAllMenu(results) {
    results.forEach(isiRow);
}


function isiRow(value) {
    let content =
        isiTabel.replace("#MENU#", value.menu)
            .replace("#HARGA#", value.harga)
            .replace("#DESKRIPSI#", value.deskripsi)
            .replace("#KATEGORI#", value.kategori.kategori)
            .replace("#BAHANBAKU#", value.bahanbaku.bahan_baku)
            .replace("#JUMLAH#", value.bahanbaku.jumlah)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#IDDETAIL#", value._id)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}