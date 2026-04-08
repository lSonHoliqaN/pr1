let projeler = [
    { ad: "Blog Sitesi", kategori: "web", aciklama: "HTML CSS ile blog sitesi",},
    { ad: "E-Ticaret", kategori: "web", aciklama: "Alışveriş sitesi tasarımı",},
    { ad: "Mobil Not App", kategori: "mobil", aciklama: "Not tutma uygulaması",},
    { ad: "Oyun Projesi", kategori: "mobil", aciklama: "Basit mobil oyun"},
    { ad: "Portfolyo Sitesi", kategori: "web", aciklama: "Kişisel web sitesi"}
];

function listele(liste) {
    let alan = document.getElementById("projeAlani");
    alan.innerHTML = "";

    liste.forEach(function(proje) {
        alan.innerHTML += `
        <div class="kart" onclick="modalAc(\`${proje.ad}\`, \`${proje.resim}\`, \`${proje.aciklama}\`)">
            <h3><i class="fa-solid fa-folder"></i> ${proje.ad}</h3>
            <p>${proje.kategori}</p>
            <p>${proje.aciklama}</p>
        </div>`;
    });
}

function filtrele(kategori) {
    if (kategori === "hepsi") {
        listele(projeler);
    } else {
        let filtrelenmisProjeler = projeler.filter(p => p.kategori === kategori);
        listele(filtrelenmisProjeler);
    }
}

function temaDegistir() {
    document.body.classList.toggle("dark");
}

let yazi = "Muhammed Çilenk";
let index = 0;

function yaz() {
    if (index < yazi.length) {
        document.getElementById("daktilo").innerHTML += yazi.charAt(index);
        index++;
        setTimeout(yaz, 100);
    }
}

yaz();
listele(projeler);

function modalAc(ad, resim, aciklama) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalBaslik").innerText = ad;
    document.getElementById("modalResim").src = resim;
    document.getElementById("modalAciklama").innerText = aciklama;
}

function modalKapat() {
    document.getElementById("modal").style.display = "none";
}

let cursor = document.getElementById("cursor");

if (cursor) {
    document.addEventListener("mousemove", function(e) {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });
}