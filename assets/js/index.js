const riskLevelRendah = 1; // Konservatif (tipe investor dengan profil risiko paling rendah)
const riskLevelSedang = 2; // Moderat (tipe investor dengan profil risiko sedang)
const riskLevelTinggi = 3; // Agresif (tipe investor dengan profil risiko yang tinggi)

const transactionSaldoDeposit = 1;
const transactionSaldoPembelian = 2;

const vendor = [
    {
        id: 1,
        name: "Dana Reksa Investment Management",
        description: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5_IlgUGsQL4Zqud7W4Bw1_2fVWl8HZnv-SJQBl3IhW4G6aeK083J8sz_mskSaIvS3IU&usqp=CAU",
        riskLevel: riskLevelRendah, // tingkat resiko (rendah, sedang, tinggi)
        growth: 0, // di definisikan 1 tahun trakhir
        allocationAssets: [ // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            {
                "Obligasi Pemerintah": 0,
                "Obligasi Korporasi": 0,
                "Pasar Uang": 0,
            }
        ],
    },
    {
        id: 2,
        name: "",
        description: "",
        riskLevel: riskLevelSedang, // tingkat resiko (rendah, sedang, tinggi)
        growth: 0, // di definisikan 1 tahun trakhir
        allocationAssets: [ // alokasi asset yang dilakukan vendor berapa persen (harus 100%)
            {
                "Obligasi Pemerintah": 0,
                "Obligasi Korporasi": 0,
                "Pasar Uang": 0,
            }
        ],
    }
];

const user = {
    name: "",
    saldo: 0,
    categoryType: riskLevelRendah,
    historySaldo: [
        {
            id: 1,
            transactionType: transactionSaldoDeposit,
            total: 5000,
            date: "2023-01-01"
        },
    ],
    historyTransaction: [
        {
            id: 1,
            total: 5000,
            vendorId: 1, // ini diambil dari database Vendor -> id
            date: "2023-01-01"
        }, {
            id: 1,
            total: 5000,
            vendorId: 1, // ini diambil dari database Vendor -> id
            date: "2023-01-01"
        }, {
            id: 1,
            total: 5000,
            vendorId: 1, // ini diambil dari database Vendor -> id
            date: "2023-01-01"
        }, {
            id: 1,
            total: 5000,
            vendorId: 1, // ini diambil dari database Vendor -> id
            date: "2023-01-01"
        }, {
            id: 1,
            total: 5000,
            vendorId: 1, // ini diambil dari database Vendor -> id
            date: "2023-01-01"
        },
    ],
};

// Menampilkan Semua List Vendor yang ada di database
function listVendor() {
    return vendor;
}

// Menampilkan Detail Vendor yang dipilih user
function detailVendor(vendorId) {

    let result;
    for (let data of vendor) {
        if (data.id === vendorId) {
            result = data;
        }
    }

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

    today = `${dd}/${mm}/${yyyy}`;

    return today
}

// menambahkan saldo user
function depositSaldo(newSaldo = 0) {
    user.saldo += Number(newSaldo);

    let id = getLastId(user.historySaldo);

    data = {
        id: id,
        transactionType: transactionSaldoDeposit,
        total: newSaldo,
        date: getDateNow()
    };

    return user.saldo;
}

// function ini untuk menampilkan semua history list saldo
function listHistorySaldo() {
    return user.historySaldo;
}


// mendapatkan Saldo user
function getSaldo() {
    return user.saldo;
}

// console.log(depositSaldo(5000));
// console.log(getSaldo());

//  function ini untuk melakukan transaksi
function transactionCheckout(vendorId, totalTransaction) {

    /*
       1. validasi saldonya apakah cukup atau tidak
       2. create transaction -> user.historyTransaction
       3. kurangin saldo -> user.saldo
       4.  create history saldo -> user.historySaldo
   */
}


// function ini untuk menampilkan semua history list transaksi yang pernah dibuat
function listTransaction() {
    let template = "";
    for (let data of user.historyTransaction) {
        template += `<div class="col-lg-3" style="margin-top:20px;">
            <div class="card card-custom">
                <div class="card-body" style="border-radius: 5px;">
                    <div class="card-title">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG5_IlgUGsQL4Zqud7W4Bw1_2fVWl8HZnv-SJQBl3IhW4G6aeK083J8sz_mskSaIvS3IU&usqp=CAU"
                             class="img-fluid" style="width:100%" alt="">
                    </div>
                    <h6 class="card-subtitle mb-2 text-muted">Dana Reksa Investment Management</h6>
                    <p class="card-text">Total Berinvestasi : <br><b>Rp 50.000.000</b></p>
                    <a href="#" class="card-link">Detail Portofolio</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("portofolio").innerHTML = template;
    return template;
}
listTransaction()






