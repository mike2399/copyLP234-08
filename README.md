# Lastni projekt pri predmetu TPO

Vsaka skupina, ki je sestavljena iz 5 članov, mora razviti lastni projekt (LP) na izbrani problemski domeni, in sicer od **predloga projekta** do **implementacije**, kjer je podrobna razdelitev naslednja:

* :yellow_square: **1. LP** - [Predlog projekta](docs/predlog-projekta),
* :orange_square: **2. LP** - [Zajem zahtev](docs/zajem-zahtev),
* :green_square: **3. LP** - [Načrt rešitve](docs/nacrt) in
* :blue_square: **4. LP** - [Implementacija](src).

## Zagon aplikacije Občinski Obveščevalnik

Najprej je potrebno v mapi [src](src/obcinskiObvescevalnik) pognati spodnje ukaze, za namestitev baze, namestitev knjižnic.

> docker-compose up --build \
> npm install

Pred zagonom naslednjega ukaza, pa je potrebno preveriti v okolju Docker, da  container obcinski-obvescevalnik-app ne teče, saj ga z naslednjim ukazom zaženemo.

> npm start

Potem je potrebno pa v mapi [app_public](src/obcinskiObvescevalnik/app_public/) z ukazoma, ki namestita potrebne knjižnice, ter poženeta angular strežnik.

> npm install \
> ng serve --open

Za nalaganje testnih podatkov v podatkovni bazi, pa se uporabljata naslova POST localhost:3000/api/testni, za praznjenje pa DELETE localhost:3000/api/testni/brisi

Aplikacija pa je prav tako dostopna 
na https://obcinskiobvescevalnik.herokuapp.com/.

Testni podatki se nanašajo na občino Domžale.

Podatki za prijavo so sledeči:

uporabniško ime | geslo | vloga
---|---|---
JNovak | Test_1234 | prijavljeni občan
upravnikDomzale | Geslo_123456 | upravnik
GozdarDomzale | Test_1234 |  izvajalec
KomunalaDomzale | Sonce_123456 | izvajalec
CestnoPodjetjeDomzale | fri_1234 | izvajalec
MKosir | Admin_1234 | administrator
