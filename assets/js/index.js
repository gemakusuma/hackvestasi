const riskLevelRendah = 1; // Konservatif (tipe investor dengan profil risiko paling rendah)
const riskLevelSedang = 2; // Moderat (tipe investor dengan profil risiko sedang)
const riskLevelTinggi = 3; // Agresif (tipe investor dengan profil risiko yang tinggi)

const transactionSaldoDeposit = 1;
const transactionSaldoPembelian = 2;

const currencyFormat = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
});

const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "October", "November", "Desember"];

const vendor = [
    {
        id: 1,
        name: "Dana Reksa Investment Management",
        description: `Dana Reksa Investment Management adalah Reksa Dana berbentuk Kontrak Investasi
                            Kolektif
                            berdasarkan Undang-Undang tentang Pasar Modal beserta peraturan pelaksanaannya.
                            <br><br>
                            Dana Reksa Investment Management tidak termasuk instrumen investasi yang dijamin oleh
                            Pemerintah ataupun Bank Indonesia. Sebelum membeli Unit Penyertaan, calon investor
                            harus terlebih dahulu mempelajari dan memahami Prospektus dan dokumen penawaran
                            lainnya. Isi dari Prospektus dan dokumen penawaran lainnya bukanlah suatu saran baik
                            dari sisi bisnis, hukum, maupun pajak. Oleh karena itu, calon Pemegang Unit Penyertaan
                            disarankan untuk meminta pertimbangan atau nasehat dari pihak-pihak yang berkompeten
                            sehubungan dengan investasi dalam Dana Reksa Investment Management. Calon Pemegang Unit
                            Penyertaan harus menyadari bahwa terdapat kemungkinan pemegang Unit Penyertaan
                            akan menanggung risiko sehubungan dengan Unit Penyertaan yang dipegangnya.
                            Sehubungan dengan kemungkinan adanya risiko tersebut, apabila dianggap perlu calon
                            Pemegang Unit Penyertaan dapat meminta pendapat dari pihak-pihak yang berkompeten
                            atas aspek bisnis, hukum, keuangan, pajak, maupun aspek lain yang relevan.
                            <br><br>
                            Perkiraan yang terdapat dalam prospektus yang menunjukan indikasi hasil investasi dari
                            Dana Reksa Investment Management hanyalah perkiraan dan tidak ada kepastian atau jaminan
                            bahwa Pemegang Unit Penyertaan akan memperoleh hasil investasi yang sama dimasa
                            yang akan datang, dan indikasi ini bukan merupakan janji atau jaminan dari Manajer
                            Investasi atas Target Hasil Investasi maupun potensi hasil investasi yang akan diperoleh
                            oleh calon Pemegang Unit Penyertaan. Perkiraan tersebut akan dapat berubah sebagai
                            akibat dari berbagai faktor, termasuk antara lain faktor-faktor yang telah diungkapkan
                            dalam Bab VIII mengenai Faktor-Faktor Risiko Investasi.`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5_IlgUGsQL4Zqud7W4Bw1_2fVWl8HZnv-SJQBl3IhW4G6aeK083J8sz_mskSaIvS3IU&usqp=CAU",
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 15, // di definisikan 1 tahun trakhir
        allocationAssets: {
            "Obligasi Pemerintah": 100,
            "Obligasi Korporasi": 0,
            "Pasar Uang": 0,
        },
    },
    {
        id: 2,
        name: "Mirae Assets Management",
        image: "https://rec-data.kalibrr.com/www.kalibrr.com/logos/GF54H9ZS6QN3T5BEAW28D7ZW7RAHGN4FA7U8QK8K-5fdb0fee.png",
        description: `Reksa Dana Mirae Assets Management adalah Reksa Dana berbentuk Kontrak Investasi Kolektif berdasarkan
Undang-Undang No.8 tahun 1995 tentang Pasar Modal dan peraturan pelaksanaannya.
<br><br>
Mirae Assets Management bertujuan untuk mempertahankan nilai investasi awal dan menghasilkan tingkat pengembalian yang stabil dan
optimal melalui investasi pada Instrumen Pasar Uang dan atau Efek Bersifat Utang yang diterbitkan oleh pemerintah Republik
Indonesia dan korporasi yang berdomisili di Indonesia yang jatuh temponya kurang dari 1 (satu) tahun.`,
        riskLevel: riskLevelTinggi, // tingkat resiko (rendah, sedang, tinggi)
        growth: -3, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 0,
            "Obligasi Korporasi": 30,
            "Pasar Uang": 70,
        },
    },
    {
        id: 3,
        name: "Kresna Assets Management",
        image: "https://media.bareksa.com/cms/media/assets/image/2020/08/15976_76607c007abb80d3a891dfa3622ea0b6.jpg",
        description: `
        Reksa Dana Kresna Assets Management adalah Reksa Dana berbentuk Kontrak Investasi Kolektif
berdasarkan Undang-Undang tentang Pasar Modal beserta peraturan pelaksanaannya.
<br><br>
Kresna Assets Management akan menginvestasikan dananya dengan komposisi investasi sebesar
100% (seratus persen) pada instrumen pasar uang dan/atau setara kas dan/atau efek bersifat hutang
dengan jatuh tempo tidak lebih dari 1 (satu) tahun dan/atau sisa jatuh temponya tidak lebih dari 1 (satu)
tahun meliputi obligasi dan surat hutang lainnya yang mempunyai jatuh tempo tidak lebih dari 1 (satu) tahun
dan/atau sisa jatuh temponya tidak lebih dari 1 (satu) tahun, yang diterbitkan berdasarkan peraturan
perundang-undangan yang berlaku di Indonesia. 
`,
        riskLevel: riskLevelSedang, // tingkat resiko (rendah, sedang, tinggi)
        growth: 7, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 40,
            "Obligasi Korporasi": 30,
            "Pasar Uang": 30,
        },
    },
    {
        id: 4,
        name: "Capital Assets Management",
        image: "https://amii.s3.amazonaws.com/uploads/member/image2/602/capital.png",
        description: `
        Capital Assets Management bertujuan untuk mendapatkan peningkatan investasi yang tinggi dalam jangka panjang.
        <br><br>
Capital Assets Management akan berinvestasi dengan komposisi portofolio investasi minimum 80% (delapan puluh persen) dan maksimum 100%
(seratus persen) pada Efek bersifat ekuitas yang diterbitkan melalui Penawaran Umum dan/atau dicatatkan di Bursa Efek baik di dalam maupun di
luar negeri.
<br><br>
serta minimum 0% (nol persen) dan maksimum 20% (dua puluh persen) pada Efek bersifat utang yang diterbitkan melalui Penawaran
Umum dan/atau dicatatkan di Bursa Efek baik di dalam maupun di luar negeri (Efek bersifat utang tersebut termasuk dalam 20% (dua puluh persen)
instrumen pasar uang yang mempunyai jatuh tempo kurang dari 1 (satu) tahun dan diterbitkan berdasarkan peraturan perundang-undangan yang
berlaku di Indonesia.`,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 4, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 50,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 10,
        },
    },
    {
        id: 5,
        name: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM03X4DquFHUCok7SD4RzyVT9qGKiKmW6srw&usqp=CAU",
        description: `Reksa Dana Panin Assets Management (selanjutnya disebut "Panin Assets Management") adalah Reksa Dana berbentuk Kontrak Investasi
Kolektif (“KIK”) berdasarkan Undang-Undang No.8 tahun 1995 tentang Pasar Modal (“Undang-Undang Pasar Modal”) beserta peraturan
pelaksanaannya.
<br><br>
Panin Assets Management mempunyai tujuan untuk menghasilkan peningkatan modal dengan berinvestasi pada saham-saham dari
perusahaan-perusahaan yang bergerak dalam sektor-sektor yang memiliki posisi yang baik di bursa dengan memanfaatkan peluang-peluang yang
ada pada perekonomian Indonesia dan global, serta memberikan kinerja investasi jangka panjang yang optimal.`,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 4, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 50,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 10,
        },
    },

    {
        id: 6,
        name: "BNI Asset Management",
        image: "https://www.bni-am.co.id/uploads/topics/16802816627765.jpg",
        description: `
        BNI Asset Management adalah Reksa Dana berbentuk Kontrak Investasi Kolektif (“KIK”) berdasarkan Undang-Undang No.8 tahun 1995 tentang Pasar Modal
(“Undang-Undang Pasar Modal”) beserta peraturan pelaksanaannya.
<br><br>
Tujuan investasi BNI Asset Management adalah untuk menghasilkan peningkatan modal dengan berinvestasi
pada saham-saham sesuai prinsip-prinsip Syariah di Pasar Modal dari perusahaan-perusahaan yang bergerak dalam sektor-sektor
yang memiliki posisi yang baik di bursa dengan memanfaatkan peluang-peluang yang ada pada perekonomian Indonesia dan global,
serta memberikan kinerja investasi jangka panjang yang optimal`,
        riskLevel: riskLevelSedang, // tingkat resiko (rendah, sedang, tinggi)
        growth: 9, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 40,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 20,
        },
    },
    {
        id: 7,
        name: "Trimegah Asset Management",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYmZ0H_smAJP4Y4PM_ossij3mXGdMlt4IWg&usqp=CAU",
        description: `
        Trimegah Asset Management adalah Reksa Dana
berbentuk Kontrak Investasi Kolektif berdasarkan Undang-Undang No. 8 tahun 1995 tentang Pasar Modal.
SUCORINVEST MAXI FUND bertujuan untuk memberikan apresiasi modal dan tingkat keuntungan yang optimal dalam
jangka panjang dengan cara mengkapitalisasi pasar modal Indonesia.
<br><br>
Trimegah Asset Management akan melakukan investasi dengan komposisi portofolio investasi minimum 80% (delapan puluh
persen) dan maksimum 100% (seratus persen) dari Nilai Aktiva Bersih pada Efek bersifat ekuitas yang diterbitkan oleh
korporasi yang dijual dalam Penawaran Umum dan/atau diperdagangkan di Bursa Efek Indonesia; minimum 0% (nol persen)
dan maksimum 20% (dua puluh persen) dari Nilai Aktiva Bersih pada instrumen pasar uang dalam negeri yang mempunyai
jatuh tempo kurang dari 1(satu) tahun dan/atau deposito; sesuai dengan peraturan perundang-undangan yang berlaku di
Indonesia. 
<br><br>
Manajer Investasi akan selalu menyesuaikan kebijakan investasi tersebut diatas dengan Peraturan OJK yang
berlaku dan kebijakan-kebijakan yang dikeluarkan oleh OJK
`,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 6, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 50,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 10,
        },
    },
    {
        id: 8,
        name: "Majoris Asset Management",
        image: "https://images.bisnis.com/posts/2018/01/29/731633/majorisam.jpg",
        description: `
        REKSA DANA Majoris Asset Management adalah Reksa Dana Berbentuk Kontrak Investasi
Kolektif berdasarkan Undang-Undang Nomor 8 tahun 1995 tentang Pasar Modal beserta peraturan
pelaksanaannya.
<br><br>
REKSA DANA Majoris Asset Management bertujuan untuk memberikan hasil investasi yang
setara dengan kinerja Indeks FTSE Indonesia ESG yang diterbitkan oleh FTSE Russell.
`,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 2, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 50,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 10,
        },
    },
    {
        id: 9,
        name: "Aberdeen",
        image: "https://storage.googleapis.com/finansialku_media/wordpress_media/2021/01/5d5d0256-aberdeen-standard-bakal-tutup-produk-reksa-dana-dibubarkan-01.jpg",
        description: ``,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 2, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 40,
            "Obligasi Korporasi": 50,
            "Pasar Uang": 10,
        },
    },
    {
        id: 10,
        name: "EMCO Asset Management",
        image: "https://financial.sinarmassekuritas.co.id/download/daily_news/KONTAN13650.jpg",
        description: `
        Reksa Dana EMCO Asset Management adalah Reksa Dana berbentuk Kontrak Investasi Kolektif berdasarkan
Undang-Undang tentang Pasar Modal beserta peraturan pelaksanaannya.
<br><br>
Reksa Dana EMCO Asset Management (selanjutnya disebut “EMCO Asset Management“) bertujuan mendapatkan
kenaikan modal dalam jangka panjang dengan berinvestasi pada saham perusahaan berkapitalisasi pasar besar
yang terdaftar di Bursa Efek Indonesia. 
`,
        riskLevel: riskLevelTinggi, // tingkat resiko (rendah, sedang, tinggi)
        growth: 17, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 5,
            "Obligasi Korporasi": 5,
            "Pasar Uang": 90,
        },
    },
    {
        id: 11,
        name: "Maybank Asset",
        image: "https://bernama.com/storage/photos/342992ba806463439758c256ade3d6cd5e9d32748d133",
        description: `REKSA DANA Maybank Asset Management adalah Reksa
Dana berbentuk Kontrak Investasi Kolektif berdasarkan Undang-Undang No. 8 tahun 1995 tentang Pasar Modal
beserta peraturan pelaksanaannya.
<br><br>
Maybank Asset Management bertujuan untuk memperoleh peningkatan nilai investasi yang maksimal berupa
capital gain dan dividen melalui investasi pada Efek bersifat ekuitas.`,
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 7, // di definisikan 1 tahun trakhir
        allocationAssets: { // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            "Obligasi Pemerintah": 50,
            "Obligasi Korporasi": 40,
            "Pasar Uang": 10,
        },
    },

];

const user = {
    name: "",
    saldo: 0,
    categoryType: riskLevelRendah,
    historySaldo: [
        // {
        //     id: 1,
        //     transactionType: transactionSaldoDeposit,
        //     total: 10_000_000,
        //     date: "25-01-2023"
        // },
        // {
        //     id: 2,
        //     transactionType: transactionSaldoPembelian,
        //     total: 7_000_000,
        //     date: "17-08-2023"
        // },
    ],
    historyTransaction: [
        // {
        //     id: 90,
        //     total: 5000,
        //     vendorId: 1, // ini diambil dari database Vendor -> id
        //     date: "10-10-2023"
        // },
        // {
        //     id: 91,
        //     total: 5000,
        //     vendorId: 2, // ini diambil dari database Vendor -> id
        //     date: "10-10-2023"
        // },
        // {
        //     id: 92,
        //     total: 20000,
        //     vendorId: 3, // ini diambil dari database Vendor -> id
        //     date: "10-10-2023"
        // },
    ],
};

// Menampilkan Semua List Vendor yang ada di database
function listVendor() {
    let template = `
        <div class="col-lg-12">
            <h3>List Vendor</h3>
        </div>`;


    for (let data of vendor) {
        let riskLevel = "";
        if (data.riskLevel === riskLevelRendah) {
            riskLevel = "Rendah";
        } else if (data.riskLevel === riskLevelSedang) {
            riskLevel = "Sedang";
        } else if (data.riskLevel === riskLevelTinggi) {
            riskLevel = "Tinggi";
        }
        let styleGrowth = "green"
        if (data.growth < 0) {
            styleGrowth = "red";
        }
        template += `<div class="col-lg-3" style="margin-top:5px;">
            <div class="card card-custom">
                <div class="card-body" style="border-radius: 5px;">
                    <div class="card-title">
                        <img src="${data.image}"
                             class="img-fluid" style="width:100%" alt="">
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">${data.name}</h6>
                    <p class="card-text">Kategori Resiko : ${riskLevel}</p class="card-text">
                    <p class="card-text">Return Investasi : <br><b class="growth-text-${styleGrowth}">${data.growth}%</b></p>
<!--                    <span style="font-size:11px;">(Eqv. 18.00% p.a)</span>-->
                    <button class="btn btn-secondary col-lg-12" onclick="redirectToDetailVendor(${data.id})">Detail Reksadana</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("listVendor").innerHTML = template;
}

listVendor();

// Menampilkan Detail Vendor yang dipilih user
function detailVendor(vendorId) {
    let result;

    for (let data of vendor) {
        if (data.id === vendorId) {
            result = data;
        }
    }

    let styleGrowth = "green"
    if (result.growth < 0) {
        styleGrowth = "red";
    }

    let detailPercentageAllocationAsset = ""
    let detailKiriAllocationAsset = ""
    let detailKananAllocationAsset = ""
    let classCSS = "";

    let allocationAssets = result.allocationAssets;
    for (let data in allocationAssets) {
        if (allocationAssets[data] > 0) {
            let progressBar = ""
            classCSS = "obligasi-pemerintah";
            if (data === "Obligasi Korporasi") {
                progressBar = "bg-success"
                classCSS = "obligasi-korporasi";
            } else if (data === "Pasar Uang") {
                progressBar = "bg-info"
                classCSS = "pasar-uang";
            }
            detailKiriAllocationAsset += `<div class="${classCSS}">${data}</div>`;
            detailKananAllocationAsset += `<div class="${classCSS}">${allocationAssets[data]}%</div>`;

            detailPercentageAllocationAsset += `
        <div class="progress-bar ${progressBar}" role="progressbar" style="width: ${allocationAssets[data]}%" aria-valuenow="15"
                                 aria-valuemin="0" aria-valuemax="100"></div>`;
        }
    }
    let riskLevel = "";
    if (result.riskLevel === riskLevelRendah) {
        riskLevel = "Rendah";
    } else if (result.riskLevel === riskLevelSedang) {
        riskLevel = "Sedang";
    } else if (result.riskLevel === riskLevelTinggi) {
        riskLevel = "Tinggi";
    }

    document.getElementById("detail-vendor").innerHTML = `
    
                        <div class="card-title center">
                            <img src="${result.image}"
                                 class="img-fluid" style="width:50%" alt="">
                        </div>
                        <h5 class="card-subtitle mb-2 text-muted">${result.name}</h5>
                        <p class="">
                            ${result.description}
                        </p>
                        <p class="card-text">Tingkat Resiko: <b>${riskLevel}</b></p>
                        <p class="card-text">Return Investasi: <br><b class="growth-text-${styleGrowth}">${result.growth}%</b></p>
                        
                        <div class="progress" id="progressBar">
<!--                            <div class="progress-bar" role="progressbar" style="width: 8.52%" aria-valuenow="15"-->
<!--                                 aria-valuemin="0" aria-valuemax="100"></div>-->
<!--                            <div class="progress-bar bg-success" role="progressbar" style="width: 58.62%"-->
<!--                                 aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>-->
<!--                            <div class="progress-bar bg-info" role="progressbar" style="width: 32.86%"-->
<!--                                 aria-valuenow="20"-->
<!--                                 aria-valuemin="0" aria-valuemax="100"></div>-->
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-3 col-sm-3" id="detailKiriAllocationAsset">
<!--                                <div class="obligasi-pemerintah" style="">Obligasi Pemerintah</div>-->
<!--                                <div class="obligasi-korporasi" style="">Obligasi Korporasi</div>-->
<!--                                <div class="pasar-uang" style="">Pasar Uang</div>-->
                            </div>
                            <div class="col-lg-6 col-md-3 col-sm-3" style="text-align:right;" id="detailKananAllocationAsset">
<!--                                <div class="obligasi-pemerintah">8.52%</div>-->
<!--                                <div class="obligasi-korporasi">58.62%</div>-->
<!--                                <div class="pasar-uang">32.86%</div>-->
                            </div>
                        </div>
                        
                        <div class="form-group" style="margin-top: 20px;">
                            <label for="input-transaction">Nilai Investasi</label>
                            <input type="text" class="form-control" id="input-transaction" placeholder="">
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <button type="submit" class="btn btn-primary floatRight"
                                        onclick="transactionCheckout(${vendorId})">
                                    Pembayaran
                                </button>
                            </div>
                        </div>
                  `;


    let inputTransaction = document.getElementById('input-transaction');
    inputTransaction.addEventListener('keyup', function (e) {
        inputTransaction.value = formatRupiah(this.value, 'Rp. ');
    });

    document.getElementById("progressBar").innerHTML = detailPercentageAllocationAsset;
    document.getElementById("detailKiriAllocationAsset").innerHTML = detailKiriAllocationAsset;
    document.getElementById("detailKananAllocationAsset").innerHTML = detailKananAllocationAsset;

    return result;
}

// console.log(detailVendor(1))


// Menampilkan Semua List Vendor yang direkomendasikan untuk user
function recommendationListVendor(riskLevelId) {
    let result = [];

    for (let data of vendor) {
        if (data.riskLevel === riskLevelId) {
            result.push(data);
        }
    }

    return result;
}

// console.log(recommendationListVendor(riskLevelRendah))


// registrasi user dan juga mengisi survey type investasi sesuai kriteria user
function registerUser() {

}

function getLastId(data) {
    let id = 1;

    if (data.length >= 1) {
        id = data[data.length - 1].id + 1;
    }

    return id;
}

function getDateNow() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = `${dd}-${mm}-${yyyy}`;

    return today
}

function formatDate(date) {
    date = date.split("-")
    let day = date[0];
    let month = monthNames[date[1] - 1];
    let year = date[2];

    return `${day} ${month} ${year}`;
}

// menambahkan saldo user
function depositSaldo() {
    let saldo = document.getElementById("input-saldo").value;
    saldo = saldo.replace('Rp.', '');
    saldo = saldo.split('.');
    let newSaldo = "";
    for (let i in saldo) {
        newSaldo += saldo[i];
    }

    user.saldo += Number(newSaldo);
    let id = getLastId(user.historySaldo);


    let data = {
        id: id,
        transactionType: transactionSaldoDeposit,
        total: newSaldo,
        date: getDateNow()
    };

    user.historySaldo.push(data);

    newSaldo = currencyFormat.format(user.saldo);
    document.getElementById("saldo").innerText = `Saldo: ${newSaldo}`;
    document.getElementById("input-saldo").value = "";

    listHistorySaldo();

    return user.saldo;
}

// function ini untuk menampilkan semua history list saldo
function listHistorySaldo() {
    let template = "";

    for (let data of user.historySaldo) {
        let flag = {
            lineClass: "danger",
            symbol: "-",
            type: "Pembelian Reksadana"
        }

        if (data.transactionType === transactionSaldoDeposit) {
            flag['lineClass'] = "success";
            flag['symbol'] = "+";
            flag['type'] = "Deposit Saldo";
        }

        template += `
        <tr class="table-${flag['lineClass']}">
            <td>${data.id}</td>
            <td>${flag['symbol']} ${currencyFormat.format(data.total)}</td>
            <td>${flag['type']}</td>
            <td>${formatDate(data.date)}</td>
        </tr>`;
    }


    document.getElementById("historySaldo").innerHTML = template;

    return user.historySaldo;
}

listHistorySaldo();


// mendapatkan Saldo user
function getSaldo() {
    let saldo = currencyFormat.format(user.saldo)

    document.getElementById("saldo").innerText = `Saldo: ${saldo}`;
    return user.saldo;
}

getSaldo();


// console.log(depositSaldo(5000));
// console.log(getSaldo());

//  function ini untuk melakukan transaksi
function transactionCheckout(vendorId) {
    /*
          1. validasi saldonya apakah cukup atau tidak
          2. create transaction -> user.historyTransaction
          3. kurangin saldo -> user.saldo
          4.  create history saldo -> user.historySaldo
      */

    let total = document.getElementById("input-transaction").value;
    total = total.replace('Rp.', '');
    total = total.split('.');
    let newTotal = "";
    for (let i in total) {
        newTotal += total[i];
    }
    newTotal = Number(newTotal);

    if (newTotal > user.saldo) {
        alert('Saldo tidak mencukupi');
    } else if (newTotal === 0) {
        alert('Nilai Investasi harus diisi');
    } else {
        let idTransaction = getLastId(user.historyTransaction);
        let idSaldo = getLastId(user.historySaldo);
        let tempObj = {
            id: idTransaction,
            total: newTotal,
            vendorId: vendorId,
            date: getDateNow(),
        }

        user.historyTransaction.push(tempObj);


        user.saldo -= newTotal;

        let newSaldo = currencyFormat.format(user.saldo);
        document.getElementById("saldo").innerText = `Saldo: ${newSaldo}`;
        document.getElementById("input-transaction").value = "";

        tempObj = {
            id: idSaldo,
            transactionType: transactionSaldoPembelian,
            total: newTotal,
            date: getDateNow()
        };

        user.historySaldo.push(tempObj);

        listHistorySaldo();
        listTransaction();


        // console.log(user.historyTransaction);
        // historyTransaction: [
        //     {
        //         id: 1,
        //         total: 5000,
        //         vendorId: 1, // ini diambil dari database Vendor -> id
        //         date: "10-10-2023"
        //     },
        // ],

    }

}


// function ini untuk menampilkan semua history list transaksi yang pernah dibuat
function listTransaction() {
    // let template = "";
    // let dataVendor = {};

    // for (let data of user.historyTransaction) {
    //     for (let perVendor of vendor) {
    //         if (perVendor['id'] === data.vendorId) {
    //             dataVendor = perVendor;
    //             break;
    //         }
    //     }
    //
    //     template += `
    //     <tr class="table table-bordered">
    //         <td>${data.id}</td>
    //         <td> ${currencyFormat.format(data.total)}</td>
    //         <td>${dataVendor.name}</td>
    //         <td>${formatDate(data.date)}</td>
    //     </tr>`;
    // }


    let template = "";
    for (data of user.historyTransaction) {
        let vendorTransation;
        for (let perVendor of vendor) {
            if (data.vendorId === perVendor.id) {
                vendorTransation = perVendor;
            }
        }

        let riskLevel = "";
        if (vendorTransation.riskLevel === riskLevelRendah) {
            riskLevel = "Rendah";
        } else if (vendorTransation.riskLevel === riskLevelSedang) {
            riskLevel = "Sedang";
        } else if (vendorTransation.riskLevel === riskLevelTinggi) {
            riskLevel = "Tinggi";
        }

        let styleGrowth = "green"
        if (vendorTransation.growth < 0) {
            styleGrowth = "red";
        }

        template += `<div class="riwayat">
        <div class="side-bar-history row">
          <div class="col-lg-7 col-md-12 col-sm-12">
                  <img src="${vendorTransation.image}" style="margin-left: 15px;">
              <div class="side-bar-history-text">
                  <p style="font-size: 15px;"> <b>${vendorTransation.name}</b></p>
                  <p style="color:${styleGrowth}">Return Investasi : ${vendorTransation.growth}%</p>
                  <p>Jumlah Investasi : ${currencyFormat.format(data.total)}</p>
                  <p>Tanggal Pembelian : ${formatDate(data.date)}</p>
              </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12" >
              <p class="side-right">Risk Level : ${riskLevel}</p>
              <p class="side-right-bottom" style="font-size: 13px;">Status : Pembelian Berhasil</p>
          </div>
          </div>
        </div>`;
    }

    document.getElementById("historyPembelian").innerHTML = template;

    return user.historySaldo;
}

listTransaction();


let inputRupiah = document.getElementById('input-saldo');

inputRupiah.addEventListener('keyup', function (e) {
    inputRupiah.value = formatRupiah(this.value, 'Rp. ');
});

/* Fungsi */
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}


function redirectToDeposit() {
    document.getElementById("container-history-pembelian").style = "display:none;";
    document.getElementById("container-detail-vendor").style = "display:none;";
    document.getElementById("container-home").style = "display:none;";

    document.getElementById("container-deposit").style = "display:show;";
}

function redirectToHistoryTransaction() {
    document.getElementById("container-detail-vendor").style = "display:none;";
    document.getElementById("container-deposit").style = "display:none;";
    document.getElementById("container-home").style = "display:none;";

    document.getElementById("container-history-pembelian").style = "display:show;";
}

function redirectToDetailVendor(vendorId) {
    detailVendor(vendorId);
    document.getElementById("container-deposit").style = "display:none;";
    document.getElementById("container-history-pembelian").style = "display:none;";
    document.getElementById("container-home").style = "display:none;";

    document.getElementById("container-detail-vendor").style = "display:show;";
}

function redirectToHome() {
    document.getElementById("container-history-pembelian").style = "display:none;";
    document.getElementById("container-detail-vendor").style = "display:none;";
    document.getElementById("container-deposit").style = "display:none;";

    document.getElementById("container-home").style = "display:show;";
}



