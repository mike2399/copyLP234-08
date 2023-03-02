const dbFile = require("../models/db");
const Obcina = dbFile.conn2.model("Obcina");
const PrijavljeniObcan = dbFile.conn1.model("PrijavljeniObcan");
const Novica = dbFile.conn2.model("Novica");
const Opozorilo = dbFile.conn2.model("Opozorilo");
const Predlog = dbFile.conn2.model("Predlog");
const Upravnik = dbFile.conn1.model("Upravnik");
const Izvajalec = dbFile.conn1.model("Izvajalec");
const Administrator = dbFile.conn1.model("Administrator");
//work
let listObcine = [];
let listPredlogi = [];
let listNovice = [];
let listOpozorila = [];
let listPrijavljeniObcani = [];
let listUpravnik = [];
let listIzvajalec = [];
let listAdministrator = [];

const brisi = async (req, res) => {
    listObcine = [];
    listPredlogi = [];
    listNovice = [];
    listOpozorila = [];
    listPrijavljeniObcani = [];
    listUpravnik = [];
    listIzvajalec = [];
    listAdministrator = [];
    try {
        let druga = await dbFile.conn2.db.collections();
        druga.forEach((c) => {
            dbFile.conn2.db.collection(c.s.namespace.collection).deleteMany();
        })

        let prva = await dbFile.conn1.db.collections();
        prva.forEach((c) => {
            dbFile.conn1.db.collection(c.s.namespace.collection).deleteMany();
        })
    } catch (err) {
        return res.status(500).json(err);
    }

    return res.status(200).json(null);
}
const dodajObcine = async (req, res) => {
    const obcina0 = new Obcina({
        datObcine: "ajdovscina",
        imeObcine: "Ajdovščina"
    });

    const obcina1 = new Obcina({
        datObcine: "ankaran",
        imeObcine: "Ankaran"
    });

    const obcina2 = new Obcina({
        datObcine: "apace",
        imeObcine: "Apače"
    });
    
    const obcina3 = new Obcina({
        datObcine: "beltinci",
        imeObcine: "Beltinci"
    });

    const obcina4 = new Obcina({
        datObcine: "benedikt",
        imeObcine: "Benedikt"
    });

    const obcina5 = new Obcina({
        datObcine: "bistricaObSotli",
        imeObcine: "Bistrica ob Sotli"
    });

    const obcina6 = new Obcina({
        datObcine: "bled",
        imeObcine: "Bled"
    });

    const obcina7 = new Obcina({
        datObcine: "bloke",
        imeObcine: "Bloke"
    });

    const obcina8 = new Obcina({
        datObcine: "bohinj",
        imeObcine: "Bohinj"
    });

    const obcina9 = new Obcina({
        datObcine: "borovnica",
        imeObcine: "Borovnica"
    });

    const obcina10 = new Obcina({
        datObcine: "bovec",
        imeObcine: "Bovec"
    });

    const obcina11 = new Obcina({
        datObcine: "braslovce",
        imeObcine: "Braslovče"
    });

    const obcina12 = new Obcina({
        datObcine: "brda",
        imeObcine: "Brda"
    });

    const obcina13 = new Obcina({
        datObcine: "brezovica",
        imeObcine: "Brezovica"
    });

    const obcina14 = new Obcina({
        datObcine: "brezice",
        imeObcine: "Brežice"
    });

    const obcina15 = new Obcina({
        datObcine: "cankova",
        imeObcine: "Cankova"
    });

    const obcina16 = new Obcina({
        datObcine: "celje",
        imeObcine: "Celje"
    });

    const obcina17 = new Obcina({
        datObcine: "cerkljeNaGorenjskem",
        imeObcine: "Cerklje na Gorenjskem"
    });

    const obcina18 = new Obcina({
        datObcine: "cerknica",
        imeObcine: "Cerknica"
    });

    const obcina19 = new Obcina({
        datObcine: "cerkno",
        imeObcine: "Cerkno"
    });

    const obcina20 = new Obcina({
        datObcine: "cerkvenjak",
        imeObcine: "Cerkvenjak"
    });

    const obcina21 = new Obcina({
        datObcine: "cirkulane",
        imeObcine: "Cirkulane"
    });

    const obcina22 = new Obcina({
        datObcine: "crensovci",
        imeObcine: "Črenšovci"
    });

    const obcina23 = new Obcina({
        datObcine: "crnaNaKoroskem",
        imeObcine: "Črna na Koroškem"
    });

    const obcina24 = new Obcina({
        datObcine: "crnomelj",
        imeObcine: "Črnomelj"
    });

    const obcina25 = new Obcina({
        datObcine: "destrnik",
        imeObcine: "Destrnik"
    });

    const obcina26 = new Obcina({
        datObcine: "divaca",
        imeObcine: "Divača"
    });

    const obcina27 = new Obcina({
        datObcine: "dobje",
        imeObcine: "Dobje"
    });

    const obcina28 = new Obcina({
        datObcine: "dobrepolje",
        imeObcine: "Dobrepolje"
    });

    const obcina29 = new Obcina({
        datObcine: "dobrna",
        imeObcine: "Dobrna"
    });

    const obcina30 = new Obcina({
        datObcine: "dobrovaPolhovGradec",
        imeObcine: "Dobrova - Polhov Gradec"
    });

    const obcina31 = new Obcina({
        datObcine: "dobrovnik",
        imeObcine: "Dobrovnik"
    });

    const obcina32 = new Obcina({
        datObcine: "dolPriLjubljani",
        imeObcine: "Dol pri Ljubljani"
    });

    const obcina33 = new Obcina({
        datObcine: "dolenjskeToplice",
        imeObcine: "Dolenjske Toplice"
    });

    const obcina34 = new Obcina({
        datObcine: "domzale",
        imeObcine: "Domžale"
    });

    const obcina35 = new Obcina({
        datObcine: "dornava",
        imeObcine: "Dornava"
    });

    const obcina36 = new Obcina({
        datObcine: "dravograd",
        imeObcine: "Dravograd"
    });

    const obcina37 = new Obcina({
        datObcine: "duplek",
        imeObcine: "Duplek"
    });

    const obcina38 = new Obcina({
        datObcine: "gorenjaVasPoljane",
        imeObcine: "Gorenja vas - Poljane"
    });

    const obcina39 = new Obcina({
        datObcine: "gorisnica",
        imeObcine: "Gorišnica"
    });

    const obcina40 = new Obcina({
        datObcine: "gorje",
        imeObcine: "Gorje"
    });

    const obcina41 = new Obcina({
        datObcine: "gornjaRadgona",
        imeObcine: "Gornja Radgona"
    });

    const obcina42 = new Obcina({
        datObcine: "gorjniGrad",
        imeObcine: "Gornji Grad"
    });

    const obcina43 = new Obcina({
        datObcine: "gornjiPetrovci",
        imeObcine: "Gornji Petrovci"
    });

    const obcina44 = new Obcina({
        datObcine: "grad",
        imeObcine: "Grad"
    });

    const obcina45 = new Obcina({
        datObcine: "grosuplje",
        imeObcine: "Grosuplje"
    });

    const obcina46 = new Obcina({
        datObcine: "hajdina",
        imeObcine: "Hajdina"
    });

    const obcina47 = new Obcina({
        datObcine: "hoceSlivnica",
        imeObcine: "Hoče - Slivnica"
    });

    const obcina48 = new Obcina({
        datObcine: "hodos",
        imeObcine: "Hodoš"
    });

    const obcina49 = new Obcina({
        datObcine: "horjul",
        imeObcine: "Horjul"
    });

    const obcina50 = new Obcina({
        datObcine: "hrastnik",
        imeObcine: "Hrastnik"
    });

    const obcina51 = new Obcina({
        datObcine: "hrpeljeKozina",
        imeObcine: "Hrpelje - Kozina"
    });

    const obcina52 = new Obcina({
        datObcine: "idrija",
        imeObcine: "Idrija"
    });

    const obcina53 = new Obcina({
        datObcine: "ig",
        imeObcine: "Ig"
    });

    const obcina54 = new Obcina({
        datObcine: "ilirskaBistrica",
        imeObcine: "Ilirska Bistrica"
    });

    const obcina55 = new Obcina({
        datObcine: "ivancnaGorica",
        imeObcine: "Ivančna Gorica"
    });

    const obcina56 = new Obcina({
        datObcine: "izola",
        imeObcine: "Izola"
    });

    const obcina57 = new Obcina({
        datObcine: "jesenice",
        imeObcine: "Jesenice"
    });

    const obcina58 = new Obcina({
        datObcine: "jezersko",
        imeObcine: "Jezersko"
    });

    const obcina59 = new Obcina({
        datObcine: "jursinci",
        imeObcine: "Juršinci"
    });

    const obcina60 = new Obcina({
        datObcine: "kamnik",
        imeObcine: "Kamnik"
    });

    const obcina61 = new Obcina({
        datObcine: "kanalObSoci",
        imeObcine: "Kanal ob Soči"
    });

    const obcina62 = new Obcina({
        datObcine: "kidricevo",
        imeObcine: "Kidričevo"
    });

    const obcina63 = new Obcina({
        datObcine: "kobarid",
        imeObcine: "Kobarid"
    });

    const obcina64 = new Obcina({
        datObcine: "kobilje",
        imeObcine: "Kobilje"
    });

    const obcina65 = new Obcina({
        datObcine: "kocevje",
        imeObcine: "Kočevje"
    });

    const obcina66 = new Obcina({
        datObcine: "komen",
        imeObcine: "Komen"
    });

    const obcina67 = new Obcina({
        datObcine: "komenda",
        imeObcine: "Komenda"
    });

    const obcina68 = new Obcina({
        datObcine: "koper",
        imeObcine: "Koper"
    });

    const obcina69 = new Obcina({
        datObcine: "kostanjevicaNaKrki",
        imeObcine: "Kostanjevica na Krki"
    });

    const obcina70 = new Obcina({
        datObcine: "kostel",
        imeObcine: "Kostel"
    });

    const obcina71 = new Obcina({
        datObcine: "kozje",
        imeObcine: "Kozje"
    });

    const obcina72 = new Obcina({
        datObcine: "kranj",
        imeObcine: "Kranj"
    });

    const obcina73 = new Obcina({
        datObcine: "kranjskaGora",
        imeObcine: "Kranjska GOra"
    });

    const obcina74 = new Obcina({
        datObcine: "krizevci",
        imeObcine: "Križevci"
    });

    const obcina75 = new Obcina({
        datObcine: "krsko",
        imeObcine: "Krško"
    });

    const obcina76 = new Obcina({
        datObcine: "kungota",
        imeObcine: "Kungota"
    });

    const obcina77 = new Obcina({
        datObcine: "kuzma",
        imeObcine: "Kuzma"
    });

    const obcina78 = new Obcina({
        datObcine: "lasko",
        imeObcine: "Laško"
    });

    const obcina79 = new Obcina({
        datObcine: "lenart",
        imeObcine: "Lenart"
    });

    const obcina80 = new Obcina({
        datObcine: "lendava",
        imeObcine: "Lendava"
    });

    const obcina81 = new Obcina({
        datObcine: "litija",
        imeObcine: "Litija"
    });

    const obcina82 = new Obcina({
        datObcine: "ljubljana",
        imeObcine: "Ljubljana"
    });

    const obcina83 = new Obcina({
        datObcine: "ljubno",
        imeObcine: "Ljubno"
    });

    const obcina84 = new Obcina({
        datObcine: "ljutomer",
        imeObcine: "Ljutomer"
    });

    const obcina85 = new Obcina({
        datObcine: "logDragomer",
        imeObcine: "Log - Dragomer"
    });

    const obcina86 = new Obcina({
        datObcine: "logatec",
        imeObcine: "Logatec"
    });

    const obcina87 = new Obcina({
        datObcine: "loskaDolina",
        imeObcine: "Loška Dolina"
    });

    const obcina88 = new Obcina({
        datObcine: "loskiPotok",
        imeObcine: "Loški Potok"
    });

    const obcina89 = new Obcina({
        datObcine: "lovrencNaPohorju",
        imeObcine: "Lovrenc na Pohorju"
    });

    const obcina90 = new Obcina({
        datObcine: "luce",
        imeObcine: "Luče"
    });

    const obcina91 = new Obcina({
        datObcine: "lukovica",
        imeObcine: "Lukovica"
    });

    const obcina92 = new Obcina({
        datObcine: "majsperk",
        imeObcine: "Majšperk"
    });

    const obcina93 = new Obcina({
        datObcine: "makole",
        imeObcine: "Makole"
    });

    const obcina94 = new Obcina({
        datObcine: "maribor",
        imeObcine: "Maribor"
    });

    const obcina95 = new Obcina({
        datObcine: "markovci",
        imeObcine: "Markovci"
    });

    const obcina96 = new Obcina({
        datObcine: "medvode",
        imeObcine: "Medvode"
    });

    const obcina97 = new Obcina({
        datObcine: "menges",
        imeObcine: "Mengeš"
    });

    const obcina98 = new Obcina({
        datObcine: "metlika",
        imeObcine: "Metlika"
    });

    const obcina99 = new Obcina({
        datObcine: "mezica",
        imeObcine: "Mežica"
    });

    const obcina100 = new Obcina({
        datObcine: "miklavzNaDravskemPolju",
        imeObcine: "Miklavž na Dravskem Polju"
    });

    const obcina101 = new Obcina({
        datObcine: "mirenKostanjevica",
        imeObcine: "Miren - Kostanjevica"
    });

    const obcina102 = new Obcina({
        datObcine: "mirna",
        imeObcine: "Mirna"
    });

    const obcina103 = new Obcina({
        datObcine: "mirnaPec",
        imeObcine: "Mirna Peč"
    });

    const obcina104 = new Obcina({
        datObcine: "mislinja",
        imeObcine: "Mislinja"
    });

    const obcina105 = new Obcina({
        datObcine: "mokronogTrebelno",
        imeObcine: "Mokronog - Trebelno"
    });

    const obcina106 = new Obcina({
        datObcine: "moravce",
        imeObcine: "Moravče"
    });

    const obcina107 = new Obcina({
        datObcine: "moravskeToplice",
        imeObcine: "Moravske Toplice"
    });

    const obcina108 = new Obcina({
        datObcine: "mozirje",
        imeObcine: "Mozirje"
    });

    const obcina109 = new Obcina({
        datObcine: "murskaSobota",
        imeObcine: "Murska Sobota"
    });

    const obcina110 = new Obcina({
        datObcine: "muta",
        imeObcine: "Muta"
    });

    const obcina111 = new Obcina({
        datObcine: "naklo",
        imeObcine: "Naklo"
    });

    const obcina112 = new Obcina({
        datObcine: "nazarje",
        imeObcine: "Nazarje"
    });

    const obcina113 = new Obcina({
        datObcine: "novaGorica",
        imeObcine: "Nova Gorica"
    });

    const obcina114 = new Obcina({
        datObcine: "novoMesto",
        imeObcine: "Novo mesto"
    });

    const obcina115 = new Obcina({
        datObcine: "odranci",
        imeObcine: "Odranci"
    });

    const obcina116 = new Obcina({
        datObcine: "oplotnica",
        imeObcine: "Oplotnica"
    });

    const obcina117 = new Obcina({
        datObcine: "ormoz",
        imeObcine: "Ormož"
    });

    const obcina118 = new Obcina({
        datObcine: "osilnica",
        imeObcine: "Osilnica"
    });

    const obcina119 = new Obcina({
        datObcine: "pesnica",
        imeObcine: "Pesnica"
    });

    const obcina120 = new Obcina({
        datObcine: "piran",
        imeObcine: "Piran"
    });

    const obcina121 = new Obcina({
        datObcine: "pivka",
        imeObcine: "Pivka"
    });

    const obcina122 = new Obcina({
        datObcine: "podcetrtek",
        imeObcine: "Podčetrtek"
    });

    const obcina123 = new Obcina({
        datObcine: "podlehnik",
        imeObcine: "Podlehnik"
    });

    const obcina124 = new Obcina({
        datObcine: "podvelka",
        imeObcine: "Podvelka"
    });

    const obcina125 = new Obcina({
        datObcine: "poljcane",
        imeObcine: "Poljčane"
    });

    const obcina126 = new Obcina({
        datObcine: "polzela",
        imeObcine: "Polzela"
    });

    const obcina127 = new Obcina({
        datObcine: "postojna",
        imeObcine: "Postojna"
    });

    const obcina128 = new Obcina({
        datObcine: "prebold",
        imeObcine: "Prebold"
    });

    const obcina129 = new Obcina({
        datObcine: "preddvor",
        imeObcine: "Preddvor"
    });

    const obcina130 = new Obcina({
        datObcine: "prevalje",
        imeObcine: "Prevalje"
    });

    const obcina131 = new Obcina({
        datObcine: "ptuj",
        imeObcine: "Ptuj"
    });

    const obcina132 = new Obcina({
        datObcine: "puconci",
        imeObcine: "Puconci"
    });

    const obcina133 = new Obcina({
        datObcine: "raceFram",
        imeObcine: "Rače - Fram"
    });

    const obcina134 = new Obcina({
        datObcine: "radece",
        imeObcine: "Radeče"
    });

    const obcina135 = new Obcina({
        datObcine: "radenci",
        imeObcine: "Radenci"
    });

    const obcina136 = new Obcina({
        datObcine: "radljeObDravi",
        imeObcine: "Radlje ob Dravi"
    });

    const obcina137 = new Obcina({
        datObcine: "radovljica",
        imeObcine: "Radovljica"
    });

    const obcina138 = new Obcina({
        datObcine: "ravneNaKoroskem",
        imeObcine: "Ravne na Koroškem"
    });

    const obcina139 = new Obcina({
        datObcine: "razkrizje",
        imeObcine: "Razkrižje"
    });

    const obcina140 = new Obcina({
        datObcine: "recicaObSavinji",
        imeObcine: "Rečica ob Savinji"
    });

    const obcina141 = new Obcina({
        datObcine: "renceVogrsko",
        imeObcine: "Renče - Vogrsko"
    });

    const obcina142 = new Obcina({
        datObcine: "ribnica",
        imeObcine: "Ribnica"
    });

    const obcina143 = new Obcina({
        datObcine: "ribnicaNaPohorju",
        imeObcine: "Ribnica na Pohorju"
    });

    const obcina144 = new Obcina({
        datObcine: "rogaskaSlatina",
        imeObcine: "Rogaška Slatina"
    });

    const obcina145 = new Obcina({
        datObcine: "rogasovci",
        imeObcine: "Rogašovci"
    });

    const obcina146 = new Obcina({
        datObcine: "rogatec",
        imeObcine: "Rogatec"
    });

    const obcina147 = new Obcina({
        datObcine: "ruse",
        imeObcine: "Ruše"
    });

    const obcina148 = new Obcina({
        datObcine: "selnicaObDravi",
        imeObcine: "Selnica ob Dravi"
    });

    const obcina149 = new Obcina({
        datObcine: "semic",
        imeObcine: "Semič"
    });

    const obcina150 = new Obcina({
        datObcine: "sevnica",
        imeObcine: "Sevnica"
    });

    const obcina151 = new Obcina({
        datObcine: "sezana",
        imeObcine: "Sežana"
    });

    const obcina152 = new Obcina({
        datObcine: "slovenjGradec",
        imeObcine: "Slovenj Gradec"
    });

    const obcina153 = new Obcina({
        datObcine: "slovenskaBistrica",
        imeObcine: "Slovenska Bistrica"
    });

    const obcina154 = new Obcina({
        datObcine: "slovenskeKonjice",
        imeObcine: "Slovenske Konjice"
    });

    const obcina155 = new Obcina({
        datObcine: "sodrazica",
        imeObcine: "Sodražica"
    });

    const obcina156 = new Obcina({
        datObcine: "solcava",
        imeObcine: "Solčava"
    });

    const obcina157 = new Obcina({
        datObcine: "sredisceObDravi",
        imeObcine: "Središče ob Dravi"
    });

    const obcina158 = new Obcina({
        datObcine: "starse",
        imeObcine: "Starše"
    });

    const obcina159 = new Obcina({
        datObcine: "straza",
        imeObcine: "Straža"
    });

    const obcina160 = new Obcina({
        datObcine: "svetaAna",
        imeObcine: "Sveta Ana"
    });

    const obcina161 = new Obcina({
        datObcine: "svetaTrojicaVSlovenskihGoricah",
        imeObcine: "Sveta Trojica v Slovenskih Goricah"
    });

    const obcina162 = new Obcina({
        datObcine: "svetiAndrazVSlovenskihGoricah",
        imeObcine: "Sveti Andraž v Slovenskih Goricah"
    });

    const obcina163 = new Obcina({
        datObcine: "svetiJurijObScavnici",
        imeObcine: "Sveti Jurij ob Ščavnici"
    });

    const obcina164 = new Obcina({
        datObcine: "svetiJurijVSlovenskihGoricah",
        imeObcine: "Sveti Jurij v Slovenskih Goricah"
    });

    const obcina165 = new Obcina({
        datObcine: "svetiTomaz",
        imeObcine: "Sveti Tomaž"
    });

    const obcina166 = new Obcina({
        datObcine: "salovci",
        imeObcine: "Šalovci"
    });

    const obcina167 = new Obcina({
        datObcine: "sempeterVrtojba",
        imeObcine: "Šempeter - Vrtojba"
    });

    const obcina168 = new Obcina({
        datObcine: "sencur",
        imeObcine: "Šenčur"
    });

    const obcina169 = new Obcina({
        datObcine: "sentilj",
        imeObcine: "Šentilj"
    });

    const obcina170 = new Obcina({
        datObcine: "sentjernej",
        imeObcine: "Šentjernej"
    });

    const obcina171 = new Obcina({
        datObcine: "sentjur",
        imeObcine: "Šentjur"
    });

    const obcina172 = new Obcina({
        datObcine: "sentrupert",
        imeObcine: "Šentrupert"
    });

    const obcina173 = new Obcina({
        datObcine: "skocjan",
        imeObcine: "Škocjan"
    });

    const obcina174 = new Obcina({
        datObcine: "skofjaLoka",
        imeObcine: "Škofja Loka"
    });

    const obcina175 = new Obcina({
        datObcine: "skofljica",
        imeObcine: "Škofljica"
    });

    
    const obcina176 = new Obcina({
        datObcine: "smarjePriJelsah",
        imeObcine: "Šmarje pri Jelšah"
    });

    const obcina177 = new Obcina({
        datObcine: "smarjeskeToplice",
        imeObcine: "Šmarješke Toplice"
    });

    const obcina178 = new Obcina({
        datObcine: "smartnoPriLitiji",
        imeObcine: "Šmartno pri Litiji"
    });

    const obcina179 = new Obcina({
        datObcine: "smartnoObPaki",
        imeObcine: "Šmartno ob Paki"
    });

    const obcina180 = new Obcina({
        datObcine: "sostanj",
        imeObcine: "Šoštanj"
    });

    const obcina181 = new Obcina({
        datObcine: "store",
        imeObcine: "Štore"
    });

    const obcina182 = new Obcina({
        datObcine: "tabor",
        imeObcine: "Tabor"
    });

    const obcina183 = new Obcina({
        datObcine: "tisina",
        imeObcine: "Tišina"
    });

    const obcina184 = new Obcina({
        datObcine: "tolmin",
        imeObcine: "Tolmin"
    });

    const obcina185 = new Obcina({
        datObcine: "trbovlje",
        imeObcine: "Trbovlje"
    });

    const obcina186 = new Obcina({
        datObcine: "trebnje",
        imeObcine: "Trebnje"
    });

    const obcina187 = new Obcina({
        datObcine: "trnovksaVas",
        imeObcine: "Trnovska vas"
    });

    const obcina188 = new Obcina({
        datObcine: "trzin",
        imeObcine: "Trzin"
    });

    const obcina189 = new Obcina({
        datObcine: "trzic",
        imeObcine: "Tržič"
    });

    const obcina190 = new Obcina({
        datObcine: "turnisce",
        imeObcine: "Turnišče"
    });

    const obcina191 = new Obcina({
        datObcine: "velenje",
        imeObcine: "Velenje"
    });

    const obcina192 = new Obcina({
        datObcine: "velikaPolana",
        imeObcine: "Velika Polana"
    });

    const obcina193 = new Obcina({
        datObcine: "velikeLasce",
        imeObcine: "Velike Lašče"
    });

    const obcina194 = new Obcina({
        datObcine: "verzej",
        imeObcine: "Veržej"
    });

    const obcina195 = new Obcina({
        datObcine: "videm",
        imeObcine: "Videm"
    });

    const obcina196 = new Obcina({
        datObcine: "vipava",
        imeObcine: "Vipava"
    });

    const obcina197 = new Obcina({
        datObcine: "vitanje",
        imeObcine: "Vitanje"
    });

    const obcina198 = new Obcina({
        datObcine: "vodice",
        imeObcine: "Vodice"
    });

    const obcina199 = new Obcina({
        datObcine: "vojnik",
        imeObcine: "Vojnik"
    });

    const obcina200 = new Obcina({
        datObcine: "vransko",
        imeObcine: "Vransko"
    });

    const obcina201 = new Obcina({
        datObcine: "vrhnika",
        imeObcine: "Vrhnika"
    });

    const obcina202 = new Obcina({
        datObcine: "vuzenica",
        imeObcine: "Vuzenica"
    });

    const obcina203 = new Obcina({
        datObcine: "zagorjeObSavi",
        imeObcine: "Zagorje ob Savi"
    });

    const obcina204 = new Obcina({
        datObcine: "zavrc",
        imeObcine: "Zavrč"
    });

    const obcina205 = new Obcina({
        datObcine: "zrece",
        imeObcine: "Zreče"
    });

    const obcina206 = new Obcina({
        datObcine: "zalec",
        imeObcine: "Žalec"
    });

    const obcina207 = new Obcina({
        datObcine: "zelezniki",
        imeObcine: "Železniki"
    });

    const obcina208 = new Obcina({
        datObcine: "zetale",
        imeObcine: "Žetale"
    });

    const obcina209 = new Obcina({
        datObcine: "ziri",
        imeObcine: "Žiri"
    });

    const obcina210 = new Obcina({
        datObcine: "zirovnica",
        imeObcine: "Žirovnica"
    });

    const obcina211 = new Obcina({
        datObcine: "zuzemberk",
        imeObcine: "Žužemberk"
    });

    //Podatki za prijavljene obcane
    const prijavljeniObcan0 = new PrijavljeniObcan({
        ime: "Janez",
        priimek: "Novak",
        uporabniskoIme: "JNovak",
        rojstvo: "1989-08-08",
        email: "janez.novak@gmail.com",
        obcine: [obcina34._id],
        predlogi: [],
        komentarji:[],
        blokiran: false

    });

    prijavljeniObcan0.nastaviGeslo("Test_1234");

    //Podatki za predloge
    const predlog0 = new Predlog({
        avtor: prijavljeniObcan0._id,
        naslov: "Drevo na cesti",
        vsebina: "Na Tavčarjevi ulici je drevo padlo na cesto in ovira promet.",
        lat: 46.149037,
        lng: 14.627527,
        opravljeno: false
    });
    const predlog1 = new Predlog({
        avtor: prijavljeniObcan0._id,
        naslov: "Prevrnjen prometni znak",
        vsebina: "Na koncu Stritarjeve ulice je prevrjen prometni znak zaradi česar je na cesti prava zmeda.",
        lat: 46.149996,
        lng: 14.630514,
        opravljeno: false
    });
    const predlog2 = new Predlog({
        avtor: prijavljeniObcan0._id,
        naslov: "Prenovitev ceste",
        vsebina: "Potrebno bi bilo prenoviti Miklošičevo cesto, saj je cesta polna jam in se po njej ni možno več normalno peljati.",
        lat: 46.139929,
        lng: 14.602601,
        opravljeno: false
    });
    const predlog3 = new Predlog({
        avtor: prijavljeniObcan0._id,
        naslov: "Pobuda za gradnjo športnega centra",
        vsebina: "Vse zunanje površine namenjene športnim aktivnostim so popoldan zasedene in je zelo težko pridobiti prostor za igro. Menim, da primanjkuje predvsem teniških igrišč in prav tako tudi igrišč za mali nogomet. Prosim, da temeljito premislite o danem predlogu.",
        lat: 46.133405,
        lng: 14.598741,
        opravljeno: false
    });
    const predlog4 = new Predlog({
        avtor: prijavljeniObcan0._id,
        naslov: "Ureditev pločnikov",
        vsebina: "Celotni skupnosti bi veliko pomenilo, če bi uredili pločnik na Levstikovi cesti, kjer je vselej ogromno prometa in bi se peščci tako počutili bolj varno.",
        lat: 46.145609,
        lng: 14.599955,
        opravljeno: false
    });

    //Podatki za novice
    const novica0 = new Novica({
        naslov: "Splošno požarno izobraževanje",
        vsebina: "Izobraževanje o požarni varnosti in o ravnanju v primeru požara.",
        komentarji:[]
    });

    const novica1 = new Novica({
        naslov: "Koncert 2CELLOS",
        vsebina: "Koncert slavnih čelistov bo potekal 15.5.2069",
        komentarji:[]
    });

    const novica2 = new Novica({
        naslov: "Nakupovalna SOBOTA",
        vsebina: "Cela sobota prazničnih popustov, vsak teden v petek od 8.00 - 9.31 le v Tuš supermarket Domžale.",
        komentarji:[]
    });

    const novica3 = new Novica({
        naslov: "Zaprta Ulica",
        vsebina: "V petek, 27.5.2022, bo Župančičeva ulica zaradi prenove in popravljanja plinovoda zaprta za javno uporabo.",
        komentarji:[]
    });

    const novica4 = new Novica({
        naslov: "Žrebanje PITA",
        vsebina: "Tuš supermarket Domžale ponosno sponzorira 1. žreb PITA v Sloveniji.",
        komentarji:[]
    });

    const opozorilo0 = new Opozorilo({
        naslov: "Padajoče prekle",
        vsebina: "V petek, 27.5.2022, je sprožen rdeči alarm za padajoče prekle.",
        komentarji:[]
    });

    const opozorilo1 = new Opozorilo({
        naslov: "Poškodovano vozišče",
        vsebina: "Poškodovano vozišče na ljubljanski cesti.",
        komentarji:[]
    });

    const opozorilo2 = new Opozorilo({
        naslov: "Izbruh vulkana",
        vsebina: "Zaradi izbruha vulkana Etna, je za osebne varnosti zaprt zračni prostor v občini Domžale.",
        komentarji:[]
    });

    const opozorilo3 = new Opozorilo({
        naslov: "Vinjen voznik",
        vsebina: "Opažen je bil vinjen voznik kolesa, ki je oviral promet v parku. Prosimo za previdnost.",
        komentarji:[]
    });

    const opozorilo4 = new Opozorilo({
        naslov: "Politični shod",
        vsebina: "Napovedan je politični shod in vse udeležence prosimo, da ponovno pomislite, če se ga je smiselno udeležiti.",
        komentarji:[]
    });

    //Podatki za upravnike
    const upravnik0 = new Upravnik({
        imeObcine: "Domžale",
        uporabniskoIme: "upravnikDomzale",
        email: "upravnik.domzale@gmail.com",
        obcina: obcina34._id
    });

    upravnik0.nastaviGeslo("Geslo_123456");

    //Podatki za izvajalce
    const izvajalec0 = new Izvajalec({
        nazivPodjetja: "Gozdar",
        uporabniskoIme: "GozdarDomzale",
        email: "gozdar.domzale@gmail.com",
        //geslo: "Test_1234",
        obcineDelovanja: [obcina34._id]

    });
    const izvajalec1 = new Izvajalec({
        nazivPodjetja: "Komunalno podjetje",
        uporabniskoIme: "KomunalaDomzale",
        email: "komunala.domzale@gmail.com",
        //geslo: "Sonce_123456",
        obcineDelovanja: [obcina34._id]

    });
    const izvajalec2 = new Izvajalec({
        nazivPodjetja: "Cestno podjetje Domzale",
        uporabniskoIme: "CestnoPodjetjeDomzale",
        email: "cestnopodjetje.domzale@gmail.com",
        //geslo: "fri_1234",
        obcineDelovanja: [obcina34._id]

    });

    //Podatki za administratorje
    const admin0 = new Administrator({
        ime: "Matej",
        priimek: "Košir",
        uporabniskoIme: "MKosir",
        rojstvo: "1979-09-09",
        email: "matej.kosir@gmail.com",
        obcine: obcina34._id,
        predlogi: []
    });

    izvajalec0.nastaviGeslo("Test_1234");
    izvajalec1.nastaviGeslo("Sonce_123456");
    izvajalec2.nastaviGeslo("fri_1234");
    admin0.nastaviGeslo("Admin_1234");

    obcina34.predlogi.push(predlog0._id);
    obcina34.predlogi.push(predlog1._id);
    obcina34.novice.push(novica0._id);
    obcina34.novice.push(novica1._id);
    obcina34.novice.push(novica2._id);
    obcina34.novice.push(novica3._id);
    obcina34.novice.push(novica4._id);
    obcina34.opozorila.push(opozorilo0._id);
    obcina34.opozorila.push(opozorilo1._id);
    obcina34.opozorila.push(opozorilo2._id);
    obcina34.opozorila.push(opozorilo3._id);
    obcina34.opozorila.push(opozorilo4._id);
    obcina34.predlogi.push(predlog2._id);
    obcina34.predlogi.push(predlog3._id);
    obcina34.predlogi.push(predlog4._id);
    obcina34.izvajalci.push(izvajalec0._id);
    obcina34.izvajalci.push(izvajalec1._id);
    obcina34.izvajalci.push(izvajalec2._id);
    prijavljeniObcan0.predlogi.push(predlog0._id);
    prijavljeniObcan0.predlogi.push(predlog1._id);
    prijavljeniObcan0.predlogi.push(predlog2._id);
    prijavljeniObcan0.predlogi.push(predlog3._id);
    prijavljeniObcan0.predlogi.push(predlog4._id);


    //Nad tem delom morajo bit dodane vse obcine
    for (let i = 0; i < 212; i++) {
        listObcine.push(eval("obcina" + i));
    }
    for (let i = 0; i < 5; i++) {
        listNovice.push(eval("novica" + i));
    }
    for (let i = 0; i < 5; i++) {
        listOpozorila.push(eval("opozorilo" + i));
    }
    for (let i = 0; i < 5; i++) {
        listPredlogi.push(eval("predlog" + i));
    }
    for (let i = 0; i < 1; i++) {
        listPrijavljeniObcani.push(eval("prijavljeniObcan" + i));
    }
    for (let i = 0; i < 1; i++) {
        listUpravnik.push(eval("upravnik" + i));
    }
    for (let i = 0; i < 3; i++) {
        listIzvajalec.push(eval("izvajalec" + i));
    }
    for (let i = 0; i < 1; i++) {
        listAdministrator.push(eval("admin" + i));
    }

   try {
        await Obcina.insertMany(listObcine);
        await Novica.insertMany(listNovice);
        await Opozorilo.insertMany(listOpozorila);
        await Predlog.insertMany(listPredlogi);
        await PrijavljeniObcan.insertMany(listPrijavljeniObcani);
        await Upravnik.insertMany(listUpravnik);
        await Izvajalec.insertMany(listIzvajalec);
        await Administrator.insertMany(listAdministrator);
   } catch (err) {
       return res.status(500).json(err);
   }
   return res.status(200).json(listObcine);
}

module.exports = {
    dodajObcine,
    brisi
}