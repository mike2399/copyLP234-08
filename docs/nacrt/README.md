# Načrt sistema

|                             |                                                                                   |
| :-------------------------- |:----------------------------------------------------------------------------------|
| **Naziv projekta**          | Občinski obveščevalnik                                                            |
| **Člani projektne skupine** | Karmen Schwarzbartl, Matej Kranjec, Timotej Zupančič, Miha Šircelj, Timotej Bavec |
| **Kraj in datum**           | Ljubljana, 26. 4. 2022                                                            |

## Povzetek

Dokument vsebuje podroben načrt sistema, ki je orgariziran v tri razdelke. 
V prvem je *načrt arhitekture*, ki je prikazan z tremi diagrami in sicer z logičnim, razvojnim in fizičnim pogledom na arhitekturo. 
Drugi razdelek vsebuje *načrt strukture*, ki se začne z opisom uporabljenih načrtovalskih vzorcev in razrednim diagramom. 
Nato sledi opis posameznih razredov, ki smo jih razdelili v štiri podpoglavja: entitetni, mejni, kontrolni in zunanji. 
V vsakem od teh podpoglavjih so razredi natančno opisani z njihovimi atributi ter nesamoumevnimi metodami. 
V zadnjem razdelku je prikazan *načrt obnašanja*, za katerega smo kot osnovo uporabili diagrame primerov uporabe iz dokumenta zajem zahtev. 
Za vsak primer uporabe smo izdelali diagram zaporedja, ki prikazuje osnovne, alternativne in izjemne tokove dogodkov.

## 1. Načrt arhitekture

Za arhitekturo je uporabljen vzorec model-pogled-krmilnik (MVC).

### 1.1 Logični pogled

Spodnji diagram prikazuje logični pogled projekta.

![logicnidiagram](https://teaching.lavbic.net/plantuml/png/ZLBHIiCm57tFLmHyxi31OCWepAdWWqnKVBzfRxkuBAb9kYgoJzX7-2_plqosDkksodmf9EVSSyuzZPbpMO261MMGp7EjIfacIYXDhGPf78JI4XDOAMPG2lk27tOiU2uN3gQ9-w1kiSPQgsgobM72wP8MLhWpv4Y_23tnlC1XDiZIKsGqCYKpdyRY8evfDUCMFKdf57KzEhYx7jvEo8eGWPcbLb7DyvcbATUOMAua8QJndhBDcakNQSgM-FEzMUCIXEHpUkZZ8z8GUAAarKfqSjeynTvW2JLRk5uyk3gGUkLOdTNn9DCn_A1IF9-YB9G6vdOw2jBct8051WOl_qJwjR-lDVG00cKAUlnu7-u4GYRG-YlIz1Ibgf9HlCjxHP_mlKHZjz9ajqElB7fnqwjdc499itCdP5jIL1PHrE8yE-j6AZZrl9DJyXDUHhfNOGZfg2242giV1VlFJFze9cY581qgTVI3WNxTm1dwlb4NejLqkFOFtfUq_p6_)


**Paketni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/logicnidiagram.puml))
  
### 1.2 Razvojni pogled

Spodnji diagram prikazuje razvojni pogled projekta.

![razvojnipogled](https://teaching.lavbic.net/plantuml/png/bPJFYjim4CRlUWhXddDSs8CnP4CBfHJsqFQqbx4qJXJBKXZBJfjb7wOFq_Ug_0TRjiMcpI44Vz_lcnafuxfKvW845Sz1b4UoZP72QalS4PZQIsWSgoUNn08QxRxXJxVNwcWgBtFXlv02rvx8NWzzJAvzRY09MrsiwQXNnZT5F-1ZyL38hPAcTPFNlsg7LPRnwqavx4oM9DA8FdnwUlnuO6z1CTNrLO30UyMYEKnZuRYpdDJnvBXKXC8fQvZ_pCcDub3p94sdHrdsOhvVB45kr9_VfNenROMrKMKIOgEX7BLOoBDjyGOjS6bzypSCUPkVlV9VC9lFlbLu7Q7WN3leg56gf3-lsJuK-p50dfcKWE6tqLPvV45FezuDc9mgMIH0uqvZkmjotph_IvKWr1cIxifcHbZZo6gD51lqow0YdVjX8yqUrloYyiJFW6qJjZwoVmtftQi1fc2PnoPuWXiiYaUd-6ebwbZjNb3Bxjys_RzJUcZvTOFSgnWRLO168u7spvz7qhzVa0pe3WpKy8GrGg7HnPbPzFzxjhcCTBVBbYl4OXVVszQRofQhbqv9_O1iizXfc35unAf4CE56coTX_bMpyu-wvMNz1dVHi_yl)

**Komponentni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/razvojnipogled.puml))

### 1.3 Fizični pogled

Spodnji diagram prikazuje fizični pogled projekta.

![fizicnipogled](https://teaching.lavbic.net/plantuml/png/bLJRJkCm47t6Ns6nhs6rt2IqGfM0lI71jbekBuM7IJmDJbmxSjo0kkedy4lxnFxNJXodJKEHs4XjnZFddB5dd2bpgGkmCEKn97bgpKoBn2XZ-UE3TCZAPLpW16RANUEJEr4orLFKZYVqXvPrO2VMciSphn0hako4m3evWSJntuo_IlS1ZoQ74r57Z1LeW_Vms-dHrpEswCXe8x2Hs0Xa2YUEEyEjJ1yS5z9YugJHZ7dYzb1aE0L5UdVQmilpJ8FICj_cKF8GmuGV7mkiP8A3WK_LKAyAXKuJBxPblcATjgi-QsjhUUJj7zUN5uSUNbWK5MGjeuKC1iGWJfFgp6XdZL9eFITPBZivFBv-6ieb_IkFdjRMsy1RYOyULv6n3blGhwvX0_nkJAgGvqQXW6OZmIOMtGEqL3iEXIHke5mWJAX87giQUmEM2N0GGqc4NqYtH6PKmJjT6FBdfj9anp07lkjrHgUxwvLDm0fkuWJqc8sipA1I6UfXxM0xz30f8Ywd656j9RtpY5cJbQuo4QV-IXLnDYkCXLZBCZVdDJB5Kfc8aQhKEBwFV9kKIUNudjqt6MU5XOgQDcOtmLhBDlJKw2tbaDWdW5PIplrDm6JCpbjp9QfXBgkHeKlfCdYNC7v1PIhG6T0H65NSfBWw08Yff9ATr2zPEWlEs7SMx3_hjNXlX_T2X_SsTvXADMR3-EMvhjccOXScfcEW3exwr2Qc2-6t13f7vtslcnayzGNoHgj-4ywPmvBr4-YerN9vMs9CsucO0XTnfTDMqYVs-wtVhM3OQOZUsj91s2C4uJQqGNV1UfE7keP__xIJ9xYlo3dVC7zMqqTgWKyV7-BIqyxhrVheeM--cHexE_vx-ymhgYjzWGVx-zt8NZTomFeR8CngXhR8eq-CTGOOOReZi1VokNg-UaxrN64EzRnXulm3)

**Postavitveni diagram** ([deployment](https://plantuml.com/deployment-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/fizicniPogled.puml))


## 2. Načrt strukture

### 2.1 Razredni diagram

- Za vmesnik do podatkovne baze bo uporabljen načrtovalski vzorec **singleton**
- Za upravljanje z pogledi bomo uporabili načrtovalski vzorec **fasada**
- Za prikaz obvestil bo uporabljen načrtovalski vzorec **iterator**
- Za posodabljanje obvestil bo uporabljen načrtovalski vzorec **opazovalec**

Naslednji diagram prikazuje razrede in njihove medsebojne povezave:

![RD](https://teaching.lavbic.net/plantuml/png/ZPJ1RgGm38RlF0Mtdle6rKZLgeUgwcwbgditmJCrX0I53AlEqw-1QM70dicH_9yTuzZ_9vMOOzF6hxp1fi3GPHRtCOy-3tJuZ7b90KqaxxBixib5YXWTvG5E0KlAZ8MkonssWIheRONkJs70vGyFEB1VkzqPURi5F9zwgC2YsKgFPKEEkXWW-h2LEI4vaCxvHf1AmTBwWt2Fgp4A0R-1SU7yemtGEwgNIdRtYjMcGNGgAC1OAFub_CSHXJ-w4iAShVGD67ZdltG9oBbT1ZGsu65icU6-QypqQgeCOpyqjVOM-K2ljUG2NOKlYTpOVRKxTK3k86FdrrFBSj15w2dsJFezMHZdBHt_VjJqY9jFuOjhNMvznx_a--7djWmFLErT3DvkXkhO-W05b_fh0YmEos6cZzNb2iBPJqV7Dwzp6zx4eOJ7jsSEW9P-ybc4lSMu53YBK4icrNU_Mpk1XltuWGPyFvIcNxY61atU8Qiih_TM1LVBcy9TZ8qQi5vZ5LpiiifSsOtqcBIwh-zLDipCUZAppQYE3pISYTBP2KHjid9HcjnSa5YR7K_M5vud0vBhtI1dtrFkb9nFHbkU5hxsDZWxaf9evKaInTZi1Ggmi17veciJcHPmEOvfCHUp-1y0)

**Razredni diagram** (izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/RD.puml))

### 2.2 Opis razredov

### 2.2.1 Entitetni razredi

#### Ime razreda: NeprijavljeniUporabnik

Z razredom *NeprijavljeniUporabnik* predstavimo uporabnika, ki ni registriran oziroma prijavljen v aplikaciji.

#### Atributi

Razred nima atributov.

#### Nesamoumevne metode

Razred nima nesamoumevnih metod.

---

#### Ime razreda: PrijavljenObcan

Z razredom *PrijavljenObcan* predstavimo uporabnika, ki je v aplikacijo prijavljen kot navaden uporabnik in lahko pošilja predloge, 
komentira objave ter glasuje na anketah.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *PrijavljenObcan*.

| Ime atributa   | Podatkovni tip      | Zaloga vrednosti                                 | Pomen                                                            |
|----------------|---------------------|--------------------------------------------------|------------------------------------------------------------------|
| id             | Integer             | -                                                | Identifikacija                                                   |
| ime            | String              | -                                                | -                                                                |
| priimek        | String              | -                                                | -                                                                |
| rojstvo        | Date                | -                                                | -                                                                |
| uporabniskoIme | String              | -                                                | -                                                                |
| geslo          | String              | ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$   | -                                                                |
| email          | String              | ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$ | -                                                                |
| obcine         | ArrayList\<Integer> | -                                                | Identifikatorji občin, katerim prijavljen občan sledi            |
| predlogi       | ArrayList\<Integer> | -                                                | Identifikatorji predlogov, ki jih je prijavljen občan poslal     |
| blokiran       | Boolean             | -                                                | Pove nam ali je bil uporabnik blokiran s strani administratorja. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *PrijavljenObcan*.

| Ime metode                     | Imena in tipi parametrov                | Tip rezultata               | Pomen                                                                                                                              |
|--------------------------------|-----------------------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| ustvariObcana()                | prijavljenObcan obcan                   | void                        | Ustvari uporabniški račun z vlogo prijavljenega občana                                                                             |
| pridobiObcana()                | Integer idObcana                        | prijavljenObcan             | Pridobi občana z podanim identifikatorjem                                                                                          |
| urediObcana()                  | Integer idObcana, prijavljenObcan obcan | prijavljenObcan             | Pridobi prijavljenega občana z podanim identifikatorjem in njegove vrednosti posodobi z vrednostmi, ki jih vsebuje parameter obcan |
| izbrisiObcana()                | Integer idObcana                        | void                        | Izbriše prijavljenega občana z podanim identifikatorjem                                                                            |
| pridobiVsePrijavljeneObcane()  | -                                       | ArrayList\<prijavljenObcan> | Pridobi seznam vseh uporabnikov z vlogo prijavljenega občana                                                                       |
| pridobiSeznamPredlogovObcana() | Integer idObcana                        | ArrayList\<Predlog>         | Pridobi vse predloge prijavljenega občana z podanim identifikatorjem                                                               |
| pridobiObcineObcana()          | Integer idObcana                        | ArrayList\<Obcina>          | Pridobi vse občine, katerim prijavljeni občan sledi                                                                                |
| jeBlokiran()                   | Integer idObcana                        | Boolean                     | Vrne nam Boolean vrednost glede na to ali je prijavnljen občan z blokiran ali ne.                                                  |

---

#### Ime razreda: Upravnik

Z razredom *Upravnik* predstavimo uporabnika, ki v aplikaciji zastopa občino, objavlja novice, ustvarja ankete in posreduje predloge
nadaljnim prejemnikom.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Upravnik*.

| Ime atributa   | Podatkovni tip | Zaloga vrednosti                                 | Pomen                              |
|----------------|----------------|--------------------------------------------------|------------------------------------|
| id             | Integer        | -                                                | Identifikacija                     |
| imeObcine      | String         | -                                                | Ime občine, ki jo zastopa upravnik |
| uporabniskoIme | String         | -                                                | -                                  |
| geslo          | String         | ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$   | -                                  |
| email          | String         | ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$ | -                                  |
| obcina         | Integer        | -                                                | Id obcine, ki jo zastopa upravnik  |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Upravnik*.

| Ime metode            | Imena in tipi parametrov               | Tip rezultata        | Pomen                                                                                                                      |
|-----------------------|----------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------|
| ustvariUpravnika()    | Upravnik upravnik                      | void                 | Ustvari uporabniški račun z vlogo upravnika                                                                                |
| pridobiUpravnika()    | Integer idUpravnika                    | Upravnik             | Pridobi upravnika z podanim identifikatorjem                                                                               |
| izbrisiUpravnika()    | Integer idUpravnika                    | void                 | Izbriše upravnika z podanim identifikatorjem                                                                               |
| urediUpravnika()      | Integer idUpravnika, Upravnik upravnik | Upravnik             | Pridobi upravnika z podanim identifikatorjem in njegove vrednosti posodobi z vrednostmi, ki jih vsebuje parameter upravnik |
| pridobiVseUpravnike() | -                                      | ArrayList\<Upravnik> | Pridobi seznam vseh uporabnikov z vlogo upravnika                                                                          |

---

#### Ime razreda: Izvajalec

Z razredom *Izvajalec* predstavimo uporabnika, ki je zadolžen za izvedbo predlogov oziroma reševanje težav, ki mu jih posreduje upravnik.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Izvajalec*.

| Ime atributa    | Podatkovni tip      | Zaloga vrednosti                                 | Pomen                                                                  |
|-----------------|---------------------|--------------------------------------------------|------------------------------------------------------------------------|
| id              | Integer             | -                                                | Identifikacija                                                         |
| nazivPodjetja   | String              | -                                                | -                                                                      |
| uporabniskoIme  | String              | -                                                | -                                                                      |
| geslo           | String              | ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$   | -                                                                      |
| email           | String              | ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$ | -                                                                      |
| obcineDelovanja | ArrayList\<Integer> | -                                                | Identifikatorji občin, v katerih deluje izvajalec                      |
| naloge          | ArrayList\<Integer> | -                                                | Identifikatorji nalog, ki so bile poslane izvajalcu s strani upravnika |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Izvajalec*.

| Ime metode               | Imena in tipi parametrov                 | Tip rezultata         | Pomen                                                                                                                           |
|--------------------------|------------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------|
| ustvariIzvajalca()       | Izvajalec izvajalec                      | void                  | Ustvari uporabniški račun z vlogo izvajalca                                                                                     |
| pridobiIzvajalca()       | Integer idIzvajalca                      | Izvajalec             | Pridobi izvajalca z podanim identifikatorjem                                                                                    |
| pridobiVseIzvajalce()    | -                                        | ArrayList\<Izvajalec> | Pridobi seznam vseh uporabnikov z vlogo izvajalec                                                                               |
| izbrisiIzvajalca()       | Integer idIzvajalca                      | void                  | Izbriše izvajalca z podanim identifikatorjem                                                                                    |
| urediIzvajalca()         | Integer idIzvajalca, Izvajalec izvajalec | Izvajalec             | Pridobi izvajalca z identifikatorjem idIZvajalca in njegove vrednosti posodobi z vrednostmi, ki jih vsebuje parameter izvajalec |
| pridobiObcineDelovanja() | Integer idIzvajalca                      | ArrayList\<Obcina>    | Pridobi vse občine, v katerih deluje izvajalec z podanim identifikatorjem                                                       |
| pridobiSeznamNalog()     | Integer idIzvajalca                      | ArrayList\<Naloga>    | Pridobi vse naloge, namenjene izvajalcu z podanim identifikatorjem                                                              |

---

#### Ime razreda: Administrator

Z razredom *Administrator* predstavimo uporabnika, ki bo nadziral objave in skrbel za red znotraj aplikacije.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Administrator*.

| Ime atributa   | Podatkovni tip      | Zaloga vrednosti                                 | Pomen                                                                                  |
|----------------|---------------------|--------------------------------------------------|----------------------------------------------------------------------------------------|
| id             | Integer             | -                                                | Identifikacija                                                                         |
| ime            | String              | -                                                | -                                                                                      |
| priimek        | String              | -                                                | -                                                                                      |
| rojstvo        | Date                | -                                                | -                                                                                      |
| uporabniskoIme | String              | -                                                | -                                                                                      |
| geslo          | String              | ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$   | -                                                                                      |
| email          | String              | ^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$ | -                                                                                      |
| obcine         | ArrayList\<Integer> | -                                                | Seznam občin, v katere je administrator prijavljen                                     |
| predlogi       | ArrayList\<Integer> | -                                                | Seznam potencialno neprimernih predlogov, ki so bili poslani administratorju v pregled |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Administrator*.

| Ime metode                    | Imena in tipi parametrov             | Tip rezultata             | Pomen                                                                                                                         |
|-------------------------------|--------------------------------------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| ustvariAdmin()                | Administrator admin                  | void                      | Ustvari uporabniški račun z vlogo administratorja                                                                             |
| pridobiAdmin()                | Integer idAdmin                      | Administrator             | Pridobi administratorja z podanim identifikatorjem                                                                            |
| izbrisiAdmin()                | Integer idAmin                       | void                      | Izbriše administratorja z podanim identifikatorjem                                                                            |
| urediAdmin()                  | Integer idAdmin, Administrator admin | Administrator             | Pridobi administratorja z identifikatorjem idAdmin in njegove vrednosti posodobi z vrednostmi, ki jih vsebuje parameter admin |
| pridobiVseAdmin()             | -                                    | ArrayList\<Administrator> | Pridobi seznam vseh uporabnikov z vlogo administrator                                                                         |
| pridobiSeznamPredlogovAdmin() | Integer idAdmin                      | ArrayList\<Predlog>       | Pridobi vse predloge, ki so bili poslani v obravnavo administratorju z podanim identifikatorjem                               |
| pridobiObcineAdmin()          | Integer idAdmin                      | ArrayList\<Obcina>        | Pridobi vse obcine, katerim administrator sledi                                                                               |

---

### Ime razreda: Obcina

Z razredom *Obcina* predstavimo občino na katero se bo nanašala vsebina Občinskega obveščevalnika.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Obcina*.

| Ime atributa    | Podatkovni tip     | Zaloga vrednosti | Pomen                                                  |
|-----------------|--------------------|------------------|--------------------------------------------------------|
| id              | Integer            | -                | Identifikacija                                         |
| imeObcine       | String             | -                |                                                        |
| pobrateneObcine | ArrayList<Integer> | -                | Seznam občin s katerimi je občina pobratena.           |
| opozorila       | ArrayList<Integer> | -                | Seznam opozoril, ki se nanašajo na občino.             |
| novice          | ArrayList<Integer> | -                | Seznam novic, ki se nanašajo na občino.                |
| ankete          | ArrayList<Integer> | -                | Seznam anket, ki se nanašajo na občino.                |
| predlogi        | ArrayList<Integer> | -                | Seznam predlogov, ki so jih občani posredovali občini. |
| izvajalci       | ArrayList<Integer> | -                | Seznam izvajalcev, ki so aktivni v občini              |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Obcina*.

| Ime metode            | Imena in tipi parametrov | Tip rezultata        | Pomen                                                                 |
|-----------------------|--------------------------|----------------------|-----------------------------------------------------------------------|
| pridobiObcino()       | Integer idObcine         | Obcina               | Pridobi občino z določenim id-jem.                                    |
| urediObcino()         | Integer idObcine         | Obcina               | Posodobi podatke občine z določenim id-jem.                           |
| pridobiVseObcine()    | -                        | ArrayList<Obcine>    | Pridobi seznam vseh občin.                                            |
| pridobiVsaOpozorila() | Integer idObcine         | ArrayList<Opozorilo> | Pridobi seznam vseh opozoril občine z določenim id-jem.               |
| pridobiVseNovice()    | Integer idObcine         | ArrayList<Novica>    | Pridobi seznam vseh novic občine z določenim id-jem.                  |
| pridobiVseAnkete()    | Integer idObcine         | ArrayList<Anketa>    | Pridobi seznam vseh anket občine z določenim id-jem.                  |
| pridobiVsePredloge()  | Integer idObcine         | ArrayList<Predlog>   | Pridobi seznam vseh posredovanih predlogov občine z določenim id-jem. |
| pridobiVseIzvajalce() | Integer idObcine         | ArrayList<Izvajalec> | Pridobi seznam vseh izvajalcev v občini                               |

---

### Ime razreda: Opozorilo

Z razredom *Opozorilo* predstavimo opozorilo, ki ga napiše upravnik.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Opozorilo*.

| Ime atributa | Podatkovni tip      | Zaloga vrednosti | Pomen                                                  |
|--------------|---------------------|------------------|--------------------------------------------------------|
| id           | Integer             | -                | Identifikacija                                         |
| naslov       | String              | -                | Naslov opozorila.                                      |
| vsebina      | String              | -                | Vsebina opozorila.                                     |
| komentarji   | ArrayList<Komentar> | -                | Seznam vseh komentarijev, ki se nanašajo na opozorilo. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Opozorilo*.

| Ime metode                   | Imena in tipi parametrov | Tip rezulata        | Pomen                                                                    |
|------------------------------|--------------------------|---------------------|--------------------------------------------------------------------------|
| pridobiOpozorilo()           | Integer idOpozorila      | Opozorilo           | Pridobi opozorilo z določenim id-jem.                                    |
| ustvariOpozorilo()           | Opozorilo opozorilo      | void                | Ustvari opozorilo novico.                                                |
| urediOpozorilo()             | Integer idOpozorila      | Opozorilo           | Uredi opozorilo z določenim id-jem.                                      |
| izbrisiOpozorilo()           | Integer idOpozorila      | void                | Izbriše opozorilo z določenim id-jem.                                    |
| pridobiKomentarjeOpozorila() | Integer idOpozorila      | ArrayList<Komentar> | Pridobi seznam vseh komentarjev, ki so del opozorila z določenim id-jem. |

---

### Ime razreda: Novica

Z razredom *Novica* predstavimo novico, ki jo napiše upravnik.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Novica*.

| Ime atributa | Podatkovni tip      | Zaloga vrednosti | Pomen                                               |
|--------------|---------------------|------------------|-----------------------------------------------------|
| id           | Integer             | -                | Identifikacija                                      |
| naslov       | String              | -                | Naslov novice.                                      |
| vsebina      | String              | -                | Vsebina novice.                                     |
| komentarji   | ArrayList<Komentar> | -                | Seznam vseh komentarijev, ki se nanašajo na novico. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Novica*.

| Ime metode                | Imena in tipi parametrov | Tip rezulata        | Pomen                                                                 |
|---------------------------|--------------------------|---------------------|-----------------------------------------------------------------------|
| pridobiNovico()           | Integer idNovice         | Novica              | Pridobi novico z določenim id-jem.                                    |
| ustvariNovico()           | Novica novica            | void                | Ustvari novo novico.                                                  |
| urediNovico()             | Integer idNovice         | Novica              | Uredi novico z določenim id-jem.                                      |
| izbrisiNovico()           | Integer idNovice         | void                | Izbriše novico z določenim id-jem.                                    |
| pridobiKomentarjeNovice() | Integer idNovice         | ArrayList<Komentar> | Pridobi seznam vseh komentarjev, ki so del novice z določenim id-jem. |

---

### Ime razreda: Predlog

Z razredom *Predlog* predstavimo predlog, ki ga je občan posredoval občini.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Predlog*.

| Ime atributa | Podatkovni tip  | Zaloga vrednosti | Pomen                                            |
|--------------|-----------------|------------------|--------------------------------------------------|
| id           | Integer         | -                | Identifikacija                                   |
| avtor        | PrijavljenObcan | -                | Občan, ki je napisal predlog.                    |
| naslov       | String          | -                | Naslov predloga.                                 |
| vsebina      | String          | -                | Vsebina predloga.                                |
| lat          | Integer         | -                | Zemljepisna širina lokacije, če je ta določena.  |
| lng          | Integer         | -                | Zemljepisna dolžina lokacije, če je ta določena. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Predlog*.

| Ime metoda       | Imena in tipi parametrov | Tip rezultata | Pomen                               |
|------------------|--------------------------|---------------|-------------------------------------|
| pridobiPredlog() | Integer idPredloga       | Predlog       | Pridobi predlog z določenim id-jem. |
| ustvariPredlog() | Predlog predlog          | void          | Ustvari nov predlog.                |
| urediPredlog()   | Integer idPredloga       | Predlog       | Uredi predlog z določenim id-jem.   |
| izbrišiPredlog() | Integer idPredloga       | void          | Izbriše predlog z določenim id-jem. |

---

### Ime razreda: Anketa

Z razredom *Anketa* predstavimo anketo, ki jo kreira upravnik.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Anketa*.

| Ime atributa | Podatkovni tip     | Zaloga vrednosti | Pomen                                                                   |
|--------------|--------------------|------------------|-------------------------------------------------------------------------|
| id           | Integer            | -                | Idntifikacija                                                           |
| naslov       | String             | -                | Naslov ankete.                                                          |
| vprasanje    | String             | -                | Vprašanje ankete.                                                       |
| odgovori     | ArrayList<String>  | -                | Seznam možnih odgovorov na anketo.                                      |
| rezultato    | ArrayList<Integer> | -                | Seznam, ki vsebuje število odgovorov na določeno vprašanje.             |
| odgovoriliSo | ArrayList<Integer> | -                | Seznam vseh id-jev prijavljenih občanov, ki so že odgovorili na anketo. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Anketa*.

| Ime metode        | Imena in tipi parametrov             | Tip rezultata      | Pomen                                                                           |
|-------------------|--------------------------------------|--------------------|---------------------------------------------------------------------------------|
| pridobiAnketo()   | Integer idAnkete                     | Anketa             | Pridobi anketo z določenim id-jem.                                              |
| ustvariAnketo()   | Anketa anketa                        | void               | Ustvari novo anketo.                                                            |
| urediAnketo()     | Integer idAnkete                     | Anketa             | Uredi a keto z določenim id-jem.                                                |
| izbrisiAnketo()   | Integer idAnkete                     | void               | Izbriše anketo z določenim id-jem.                                              |
| mozniOdgovori()   | Integer idAnkete                     | ArrayList<String>  | Pridobi seznam vseh možnih odgovorov na anketo.                                 |
| rezultatiAnkete() | Integer idAnkete                     | ArrayList<Integer> | Pridobi seznam, ki vsebuje število odgovorov na določeno vprašanje.             |
| kdoJeOdgovoril()  | Integer idAnkete                     | ArrayList<Integer> | Pridobi seznam id-jev vseh prijavljenih občanov, ki so že odgovorili na anketo. |

---

### Ime razreda: Naloga

Z razredom *Naloga* predstavimo nalogo, ki je bila posredovana izvajalcu.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Naloga*.

| Ime atributa | Podatkovni tip | Zaloga vrednosti | Pomen                                              |
|--------------|----------------|------------------|----------------------------------------------------|
| id           | Integer        | -                | Identifikacija                                     |
| naslov       | String         | -                | Naslov naloge.                                     |
| vsebina      | String         | -                | Vsebina naloge.                                    |
| opravljeno   | Boolean        | -                | Možnost označitve ali je naloga opravljena ali ne. |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Naloga*.

| Ime metode         | Imena in tipi parametrov             | Tip rezultata | Pomen                                                                |
|--------------------|--------------------------------------|---------------|----------------------------------------------------------------------|
| pridobiNalogo()    | Integer idNaloge                     | Naloga        | Pridobi nalogo z določeni id-jem.                                    |
| ustvariNalogo()    | Predlog predlog, Integer idIzvajalca | void          | Podani predlog pretvori v nalogo in jo posreduje podanemu izvajalcu. |
| izbrisiNalogo()    | Integer idNaloge                     | void          | Izbirše nalogo z določenim id-jem.                                   |
| oznaciOpravljeno() | Integer idNaloge                     | void          | Nalogo z določenim id-jem označi kot opravljeno.                     |

---

### Ime razreda: Komentar

Z razredom *Komentar* predstavimo komentar, ki ga prijavljen občan napiše pod novico.

#### Atributi

V tabeli so predstavljeni vsi atributi razreda *Komentar*.

| Ime atributa | Podatkovni tip | Zaloga vrednosti | Pomen                                              |
|--------------|----------------|------------------|----------------------------------------------------|
| id           | Integer        | -                | Identifikacija                                     |
| avtor        | Integer        | -                | Avtor komentarja podan z njegovim id-jem.          |
| vsebina      | String         | -                | Vsebina komentarja.                                |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *Komentar*.

| Ime metode         | Imena in tipi parametrov         | Tip rezultata | Pomen                                               |
|--------------------|----------------------------------|---------------|-----------------------------------------------------|
| pridobiKomentar()  | Integer idKomentarja             | Komentar      | Pridobi komentar z določeni id-jem.                 |
| ustvariKomentar()  | String vsebina, Integer idNovice | void          | Podan String doda kot komentar v Novico z idNovice. |
| izbrisiKomentar()  | Integer idKomenatrja             | void          | Izbirše komentar z določenim id-jem.                |

---

### 2.2.2 Mejni razredi
  
### Ime razreda : izbiraObčineView

Z razredom *izbiraObčineView* predstavimo pogled, ki omogoča uporabniku izbrati občino za katero želi videti dejavnosti ali oddati predlog/pritožbo.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *izbiraObčineView*.

| Ime metode        | Imena in tipi parametrov | Tip rezultata | Pomen                                                     |
|-------------------|--------------------------|---------------|-----------------------------------------------------------|
| prikaziObčine()   | -                        | void          | Prikaže ikone grbov občin, ki jih lahko uporabnik izbere. |
| prikaziNavodila() | String sporočilo         | void          | Prikaže navodilo za pomoč.                                |
  
  
---  
  
  
### Ime razreda : domacaStranView

Z razredom *domacaStranView* predstavimo pogled, ki omogoča uporabniku ogled vseh opozoril, novic in koledarja ter pošiljanje obvestila/pritožbe.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *domacaStranView*.

| Ime metode         | Imena in tipi parametrov | Tip rezultata | Pomen                                                                       |
|--------------------|--------------------------|---------------|-----------------------------------------------------------------------------|
| prikaziOpozorila() | -                        | void          | Prikaže opozorila občine občanom.                                           |
| prikaziNovice()    | -                        | void          | Prikaže novice povezane z občino.                                           |
| prikaziKoledar()   | -                        | void          | Prikaže koledar dejavnosti v občini.                                        |
| izberiOpozorilo()  | -                        | void          | Uporabnik izbere opozorilo, metoda prebere izbiro in jo pošlje kontrolerju. |
| izberiNovico()     | -                        | void          | Uporabnik izbere opozorilo, metoda prebere izbiro in jo pošlje kontrolerju. |

  
---

### Ime razreda : domacaStranIzvajalcaView

Z razredom *domacaStranIzvajalcaView* predstavimo pogled, ki omogoča uporabniku prijavljenim z računom izvajalca ogled vseh posredovanih obvestil.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *domacaStranIzvajalcaView*.

| Ime metode                    | Imena in tipi parametrov | Tip rezultata | Pomen                                                                       |
|-------------------------------|--------------------------|---------------|-----------------------------------------------------------------------------|
| prikaziPosredovanaObvestila() | -                        | void          | Prikaže posredovana obvestila izvajalcu.                                    |
| izberiPosredovanoObvestilo()  | -                        | void          | Uporabnik izbere obvestilo, metoda prebere izbiro in jo pošlje kontrolerju. |

  
---
  
  
### Ime razreda : registracijaView

Z razredom *registracijaView* predstavimo pogled, ki omogoča uporabniku registracijo v sistem.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *registracijaView*.

| Ime metode                   | Imena in tipi parametrov | Tip rezultata | Pomen                                                    |
|------------------------------|--------------------------|---------------|----------------------------------------------------------|
| prikaziPoljaZaRegistracijo() | -                        | void          | Prikaže polja potrebna za uspešno registracijo v sistem. |
| prikaziSporočilo()           | String sporočilo         | void          | Prikaže sporočilo o uspešni registraciji ali napaki.     |
  

---

### Ime razreda: prijavaView

Z razredom *prijavaView* predstavimo pogled, ki uporabniku omogoča prijavo v sistem.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *prijavaView*.

| Ime metode         | Imena in tipi parametrov | Tip rezultata | Pomen                                                           |
|--------------------|--------------------------|---------------|-----------------------------------------------------------------|
| preveri()          | -                        | void          | Preverjanje pravilnosti podatkov za prijavo.                    |
| prikaziSporocilo() | String sporocilo         | void          | V primeru napačno vnešenih podatkov uporabnika o tem obvestimo. |

---

### Ime razreda: anketaView

Z razredom *anketaView* predstavimo pogled, ki prijavljenemu občanu omogoča potroben pregled ankete in glasovanje na njej.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *anketaView*.

| Ime metode        | Imena in tipi parametrov                               | Tip rezultata | Pomen                                                   |
|-------------------|--------------------------------------------------------|---------------|---------------------------------------------------------|
| posredujOdgovor() | Integer idAnkete, Integer stOdgovora, Integer idObcana | void          | Doda nov odgovor na anketo.                             |

---

### Ime razreda: koledarView

Z razredom *koledarView* predstavimo pogled, ki uporabniku prikaže koledar.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *koledarView*.

| Ime metode       | Imena in tipi parametrov                            | Tip rezultata | Pomen                          |
|------------------|-----------------------------------------------------|---------------|--------------------------------|
| urediDogodek()   | //Parametri zahtevani s strani Google Calendar API. | void          | Urejanje dogodka na koledarju. |
| izbrisiDogodek() | //Parametri zahtevani s strani Google Calendar API. | void          | Brisanje dogodka na koledarju. |

---

### Ime razreda: dodajanjeKoledarView

Z razredom *dodajanjeKoledarView* predstavimo pogled, ki upravniku omogoča dodajanje novega dogodka na koledar.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *dodajanjeKoledarView*.

| Ime metode         | Imena in tipi parametrov | Tip rezultata | Pomen                                                                               |
|--------------------|--------------------------|---------------|-------------------------------------------------------------------------------------|
| prikaziSporocilo() | String sporocilo         | void          | Prikaz sporočila o uspešnosti dodajanja dogodka na koledar.                         |
| dodajDogodek()     | -                        | void          | Pridobi podatke iz vnosnih polj in jih posreduje preko Google Calendar API-ja.      |

---

### Ime razreda : dodajanjeAnketeView

Z razredom *dodajanjeAnketeView* predstavimo pogled, ki upravniku omogoča dodajanje nove ankete.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *dodajanjeAnketeView*.

| Ime metode      | Imena in tipi parametrov                                             | Tip rezultata | Pomen                                                                               |
|-----------------|----------------------------------------------------------------------|---------------|-------------------------------------------------------------------------------------|
| dodajOdgovor()  | string odgovor                                                       | void          | Trenutni anketi doda odgovor, za katerega se lahko občan odloči med izpolnjevanjem. |
| ustvariAnketo() | string anketaNaslov, string anketaVprasanje, string[] anketaOdgovori | void          | Ustvari novo anketo                                                                 |
---  

### Ime razreda : kreiranjePredlogaView

Z razredom *kreiranjePredlogaView* ostvarimo nov predlog, ki omogoča uporabniku posredovati predlog občini.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *kreiranjePredlogaView*.

| Ime metode          | Imena in tipi parametrov                                                     | Tip rezultata | Pomen                                                           |
|---------------------|------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------|
| ustvariNovPredlog() | string predlogNaslov, string predlogOpis, float predlogLat, float predlogLon | void          | Ustvari nov predlog, ki se posreduje občini v kateri se nahaja. |
  
---  

### Ime razreda : pregledPredlogaView

Z razredom *pregledPredlogaView* predstavimo pogled, ki upravniku omogoča pregled že ustvarjenega predloga.

#### Atributi

V tabeli so predstavljeni vsi atributi, ki se nanašajo na razred *pregledPredlogaView*.

| Ime tributa | Tipi atributa | Zaloga vrednosti | Pomen          |
|-------------|---------------|------------------|----------------|
| idPredloga  | String        | -                | identifikacija |

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *pregledPredlogaView*.

| Ime metode        | Imena in tipi parametrov                                                                       | Tip rezultata | Pomen                            |
|-------------------|------------------------------------------------------------------------------------------------|---------------|----------------------------------|
| izbrisiPredlog()  | string predlogID                                                                               | void          | Izbriše predlog, ki je prikazan. |
| posodobiPreglog() | string predlogID, string predlogNaslov, string predlogOpis, float predlogLat, float predlogLon | void          | Posodobi prikazani predlog.      |

---

### Ime razreda : nastavitveProfilaObčanaView

Z razredom *nastavitveProfilaObčanaView* predstavimo pogled, ki uporabniku omogoča urejanje poslanih predlogov, njegovega profila in izbiranje občin, ki jih želi spremljati.

#### Atributi

Ta razred nima atributov. 

#### Nesamoumevne metode

V tabeli so predstavljene vse metode, ki se nanašajo na razred *nastavitveProfilaObčanaView*.

| Ime metode                     | Imena in tipi parametrov | Tip rezultata | Pomen                                                                           |
|--------------------------------|--------------------------|---------------|---------------------------------------------------------------------------------|
| pridobiObcineObcana()          | -                        | void          | Prikaže seznam občin, ki jih uporabnik želi spremljati.                         |
| dodajObcinoObcana()            | int obcinaID             | void          | Doda občino, ki jo uporabnik želi spremljati poleg ostalih, ki jih že spremlja. |
| pridobiSeznamPredlogovObcana() | -                        | void          | Prikaže predloge, ki jih je občan pledlagal.                                    |
| urediObcana()                  | -                        | void          | Omogoča urejanje občanovega profila.                                            |
| izbrisiObcana()                | -                        | void          | Omogoča brisanje občanovega profila.                                            |
---

### Ime razreda: nastavitveProfilaUpravnikaView

Z razredom *nastavitveProfilaUpravnikaView* predstavimo pogled, ki upravniku omogoča spreminjanje njegovih prijavnih podatkov in prav tako tudi spreminjanje podatkov občine, ki jo le-ta predstavlja.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode          | Imena in tipi parametrov | Tip rezultata | Pomen                                                           |
|---------------------|--------------------------|---------------|-----------------------------------------------------------------|
| prikaziSporocilo()  | -                        | void          | Prikaz sporočila o uspešno posodobljenih podatkih               |

---

### Ime razreda: nastavitveProfilaIzvajalcaView

Z razredom *nastavitveProfilaIzvajalcaView* predstavimo pogled, ki uporabniku z vlogo izvajalec omogoča spreminjanje prikaznih podatkov in dodajanje občin, za katere je zadolžen.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode         | Imena in tipi parametrov | Tip rezultata | Pomen                                             |
|--------------------|--------------------------|---------------|---------------------------------------------------|
| prikaziSporocilo() | -                        | void          | Prikaz sporočila o uspešno posodobljenih podatkih |

---

### Ime razreda: posredovanjeView

Z razredom *posredovanjeView* predstavimo pogled, ki uporabniku z vlogo izvajalec omogoča sporočanje upravniku, da je posredovano obvestilo in z njim povezana zadolžitev opravljena.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode         | Imena in tipi parametrov | Tip rezultata | Pomen                                                        |
|--------------------|--------------------------|---------------|--------------------------------------------------------------|
| opravljeno()       | -                        | void          | Upravniku pošlje sporočilo o opravljeni zadolžitvi           |
| prikaziSporocilo() | -                        | void          | Prikaz sporočila o uspešnem posredovanju sporočila upravniku |

---

### Ime razreda: objavaView

Z razredom *objavaView* predstavimo pogled, ki omogoča vsem uporabnikom razen izvajalcu podroben ogled opozoril in novic določene občine.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode          | Imena in tipi parametrov                  | Tip rezultata | Pomen                                                                   |
|---------------------|-------------------------------------------|---------------|-------------------------------------------------------------------------|
| objavi()            | -                                         | void          | Pridobi besedilo iz vnosnega polja in ga pod novico objavi kot komentar |
| prikaziSporocilo()  | -                                         | void          | Prikaz sporočila o uspešno objavljenem komentarju                       |
| posredujSporocilo() | Integer idPosiljatelj, Integer idKomentar | void          | Posredovanje sporočila administratorju zaradi sumljive vsebine          |

---
  
### 2.2.4 Kontrolni razredi

### Ime razreda: uporabnikController

Razred *uporabnikController* skrbi za vso logiko, povezano z občani, upravniki, izvajalci in administratorji.

#### Atributi

| Ime atributa | Podatkovni tip | Zaloga vrednosti                                    | Pomen                         |
|--------------|----------------|-----------------------------------------------------|-------------------------------|
| id           | String         | -                                                   | Id prijavljenega uporabnika   |
| vloga        | String         | {"obcan", "administrator", "upravnik", "izvajalec"} | Vloga uporabnika              |
---

#### Nesamoumevne metode

| Ime metode                | Imena in tipi parametrov                                                                                       | Tip rezultata     | Pomen                                                                                                      |
|---------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------|
| registrirajObcana()       | String ime, String priimek, Date rojstvo, String uporabniskoIme, String geslo, String email, String obcina     | String            | Metoda ustvari novega uporabnika z vlogo prijavljeni občan                                                 |
| prijava()                 | String uporabniskoIme, String geslo                                                                            | String            | Prijava v sistem                                                                                           |
| dodajObcino()             | String zeton, String obcina                                                                                    | ArrayList<obcine> | Dodajanje občine na seznam občin občana, izvajalca ali administratorja                                     |
| odstraniObcino()          | String zeton, String obcina                                                                                    | ArrayList<obcine> | Brisanje občine iz seznama občin občana, izvajalca ali administratorja                                     |
| posodobiPodatke()         | String zeton, String ime, String priimek, String email, String uporabniskoIme, String staroGeslo, String geslo | boolean           | Spreminjanje osebnih podatkov občana, izvajalca ali administratorja. Metoda vrne true ob uspešni spremembi |
| izbrisiUporabnika()       | String zeton, String geslo                                                                                     | void              | Brisanje uporabnika                                                                                        |
| spremeniObcino()          | String zeton, String uporabniskoIme, String email, String staroGeslo, string geslo                             | boolean           | Spreminjanje podatkov upravnika ali občine. Metoda vrne true ob uspešni spremembi                          |
| dodajPobratenoObcino()    | String zeton, String obcina                                                                                    | ArrayList<obcine> | Dodajanje občine na seznam pobratenih občin občine                                                         |
| odstraniPobratenoObcino() | String zeton, String obcina                                                                                    | ArrayList<obcine> | Brisanje občine iz seznama pobratenih občin občine                                                         |
| spremeniVlogo()           | String zeton, String id                                                                                        | void              | Spreminjanje vloge uporabnika                                                                              |
| iskanje()                 | String zeton, String uporabniskoIme                                                                            | ArrayList<String> | Iskanje po uporabnikih. Funkcija vrne seznam z idji najdenih uporabnikov                                   |
| blokiraj()                | String zeton, String id                                                                                        | void              | Blokiranje uporabnika                                                                                      |
---

### Ime razreda: objavaController

Razred *objavaController* skrbi za vso logiko, povezano z objavami, predlogi, anketami in nalogami.

#### Atributi

| Ime atributa | Podatkovni tip | Zaloga vrednosti                          | Pomen       |
|--------------|----------------|-------------------------------------------|-------------|
| id           | String         | -                                         | id objave   |
| tip          | String         | {"predlog", "objava", "anketa", "naloga"} | Tip objave  |
---

#### Nesamoumevne metode

| Ime metode         | Imena in tipi parametrov                                                           | Tip rezultata | Pomen                                                |
|--------------------|------------------------------------------------------------------------------------|---------------|------------------------------------------------------|
| ustvariPredlog()   | String zeton, String obcina, String naslov, String vsebina, double lat, double lng | Predlog       | Metoda ustvari nov predlog in ga vrne                |
| urediPredlog()     | String zeton, String id, String vsebina                                            | Predlog       | Metoda uredi predlog in vrne popravljeni predlog     |
| brisiPredlog()     | String zeton, String id, String vsebina                                            | void          | Brisanje predloga                                    |
| ustvariObjavo()    | String zeton, String naslov, String vsebina                                        | String        | Metoda ustvari novo objavo in jo vrne                |
| komentirajObjavo() | String zeton, String id, String vsebina                                            | void          | Dodajanje komentarja na seznam komentarjev objave    |
| posredujPredlog()  | String zeton, String id, String idIzvajalca                                        | void          | Posredovanje predloga kot nalogo izbranemu izvajalcu |
| ustvariAnketo()    | String zeton, String naslov, String vprasanje, ArrayList<String> mozniOdgovori     | void          | Ustvarjanje nove ankete                              |
| ustvariAnketo()    | String zeton, String naslov, String vprasanje, ArrayList<String> mozniOdgovori     | void          | Ustvarjanje nove ankete                              |
| glasujNaAnketi()   | String zeton, int odgovor                                                          | void          | Glasovanje na anketi                                 |
| dodajDogodek()     | String zeton, Date zacetek, Date konec, String ime, double lat, double lng         | void          | Dodajanje dogodka na koledar                         |
| oznaciOpravljeno() | String zeton, String idNaloge                                                      | void          | Označi nalogo kot opravljeno                         |
---

### 2.2.5 Zunanji razredi

### Ime razreda: calendarAPI

Razred *calendarAPI* skrbi za povezavo z storitvijo Google Calendar.

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode           | Imena in tipi parametrov                                                                            | Tip rezultata      | Pomen                                           |
|----------------------|-----------------------------------------------------------------------------------------------------|--------------------|-------------------------------------------------|
| vrniDogodke()        | String idObcine                                                                                     | ArrayList<Dogodek> | Metoda vrne seznam dogodkov iz koledarja občine |
| podrobnostiDogodka() | String idObcine, String idDogodka                                                                   | Dogodek            | Metoda vrne podrobnosti zahtevanega dogodka     |
| ustvariDogodek()     | String zeton, String imeDogodka, Date zacetek, Date konec, double lat, double lng                   | Dogodek            | Metoda ustvari nov dogodek in ga vrne           |
| urediDogodek()       | String zeton, String idDogodka, String imeDogodka, Date zacetek, Date konec, double lat, double lng | Dogodek            | Metoda uredi obstoječi dogodek in ga vrne       |
| brisiDogodek()       | String zeton, String idDogodka                                                                      | void               | Brisanje dogodka iz koledarja                   |
---

### Ime razreda: leafletAPI

Razred *leafletAPI* skrbi za prikaz zemljevida

#### Atributi

Ta razred nima atributov.

#### Nesamoumevne metode

| Ime metode          | Imena in tipi parametrov  | Tip rezultata | Pomen                                              |
|---------------------|---------------------------|---------------|----------------------------------------------------|
| prikaziZemljevid()  | String idObcine           | void          | Prikaz zemljevida občine                           |
| vrniLokacijo()      | MouseEvent                | LatLng        | Metoda vrne koordinate izbrane točke na zemljevidu |

---

## 3. Načrt obnašanja

### Urejanje oddanega predloga

Naslednji diagram prikazuje funkcionalnost urejanja oddanega predloga:

![urejanjeoddanegapredloga](https://teaching.lavbic.net/plantuml/png/dLJ1Rjim3BthAuJiiXsAdWOCHH5W3RRJW0RejiEm2sqnYL95z6JPQVqF-wMTjlyQvJY9d2WssaECG7nwV7oakD8AvOB8P_GaHFceRG4EDZA3_77fgB8g9qDEUWUsv11Q7w4KBg0o_Yi--Oz6B-s6mpBd3xe81RadTqTEePkrP9bXzZF08UCEj5rfZp78ETf6zwMCWYN-gj3c-4Kl-6SnplRc_UUx3vzc2VGSdDUvBi3wbrz8oXLjANBkz1fgiqQhxxCSh8HIJcvls-1q-jD6SKdPtzzW9w8uSaiBfOTQ-nhdZXRQGCi2tpLkEweiP0Rt7DW6q7tQmk7Ie9exL8QMb-WIg3uDPImUPcIz8sFGTHpvxY1Gd2BwzplcxXfFY_RFErVQyuaGP_vTNKs7JBcHrzS_OEMnXZKtgx7SCr8Ah5w5eWChrQ4tkWQFGqnYoFgWubHQIFrm8IF_suDn2LsduQWZuNIwz0ImLt91ob5cgVHQwYRZjnhoTJgYXATz4Qc920bFWJUoTbPtiBVlZepTaJYRYPrNRJ18vR8KPRgdTA-F9VE-QL3i1oEjW4c6oqngk63T2DKbNrBTvxD7-FSdl6J7LUIo0LavN8DTetXTFqi6R72JqRYYb4_oOSK57GmMOBpyLdg73LfPSz4ZxMBrAchsS5jY9qFPs7TIuTcifBCFFk-H9AzvjFBGju9Auk4CuVtoE2uDD2Kl3Ap6xHjzf25V8wcWXXnhb7JWjRXfYQiN3TxzZYczPPBiKJDIkmUjYY5dsoAA3JZ-7m00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/urejanjeoddanegapredloga.puml))

### Komentiranje objave

Naslednji diagram prikazuje funkcionalnost komentiranja objave:

![komentiranjeobjave](https://teaching.lavbic.net/plantuml/png/dLJBRjj03BphAmZtqW8ESYfG6861n6WlBLe3QNeeVA4asbuzI7MrabFzG_ug7zRL8xQybbyzs338cI4vf7UjGeAbYF7bsVFoM7666bFmCOXNMWeE0qb4Wz78kKqHcnugf2KMYVb9p-O-KIjERHe2-qMwXyB0Y7uG7PAUDM9-OjKF0DkABMYpLeRw8Arbq-C3z98v_Ic80_gcblR3rA_sxkENXq-VPmFeEMgZ0fKXc-i9W-rwpIZmb8b6drKCcCFexgw9JgSBdciLOPb4n0h4Vtr17iDzc2fMkNNOWiQMgx6qr96NxQf1A2a6-5YluPUYJQVhr_LH_wsb7SG-NNnR5cV2HakIaExuGHkewIvYY7-ayYuvylPOFvf4nx1NeKo3RyCMw-rykhcPkZDEuFRsDwuDbHX1fbMCbLr4nPXYsqzjjYhHaClqNBTgTNV0MXws-gsmg-jol0CVQ-LsdWcKcbNpczv_s6cqMQ_pOhYJntxrmHe7tknHXkRTUZk1-P1vrvklAjzcErVeOfFFo0oEkpkf2nISTJKNq3lOOJFsDSOBBkCaAbvVMA2oGOrLGEc2eKA8fNxNb8L7vBXsfCzGGengUCT57I7aaDcmrIzpyXMBs-D9xovJnCJ0atr9waLtGJnziutkrqxIdkt9C-qKeSXDQHiWfXNs-l52Sg_-FvRRBgIPBPTG_EQnJBlZbNHNZyhpMxv6Z9ASu3iL5_btPePCAj4giVyru3T5Ig5aoOk-JKSUc5CJdPGc3ly1)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/komentiranjeobjave.puml))


### Ustvarjanje ankete

Naslednji diagram prikazuje funkcionalnost ustvarjanja ankete:

![ustvarjanjeankete](https://teaching.lavbic.net/plantuml/png/hLF1RjD04BtxAqRb0X9LJqWegYAr4KW8X291Ua1SnlOasSJUCRDhf_WV-0X-X1FzBzQxJkhOZcWf1_km--QzDszcroebM3BRc6-Zo6oLBb0mXnYJxKgur6d26GjOGMtS5MdRGQMqn3Apd-dMNcLgfNDt3OdxaNHGc5YMQvQKPER9uion3m07nG3QhPMbBaY4TvrwWCwbeMybwOG-gANxD7NLdhrwU_twpMm4FKUnAb45QlluWb6xaMy55eLWfTKMqC3PvQK_d4w_wltvMLJSCq7AEIRugOduHj6kBOeRRfJlJLqFSLpEyGOhdB6smbb6qjOduQ0fxoFwyYbkK6_eIc_9qaaB0zGnZJ_7jjAjWBA-BXoVHOT8pi-d_OudS77nFdDt6c5LvZ5ehh3jgqbKLMYfNnJrOsk8zoeJc8lQOWscA8tLj49mkwas23M2gcCb39KOn-fLwA_stjMncslETxyq6wiQcaCYW3wIKKFzw1kkBxYsLE46Yk2HOy4wyTQSsGhbYFNGVvyg6Wm-U1_CwGcQ8spHsBwCPOywg51oGgKV-eZn6qrtFqaJ59mAno5xjnsTpCVD37FtI8_YvoyYp2miZ1MgIKFbUCVJ3DixQTsh-_9zG04GjSi_hZntodQhW1ldAZXNKKfzaXFpxEtY8WH9xgrWg7l8Gq2Ddkht3mJJ85-2SrGPYait4EUB0nj7b1c2ZrJwS3H3J8PIbV7JrgtWcaLbs8ImvwPyJru-OgduGCQdo7mBSw4S7SQ_MRK6JbUkI-7glpLIZ2keTNUsWrVxhvq-I6tilP9E_m00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/ustvarjanjeankete.puml))


### Označevanje naloge kot opravljeno

Naslednji diagram prikazuje funkcionalnost označevanja naloge kot opravljeno:

![oznacevanjenalogeopravljeno](https://teaching.lavbic.net/plantuml/png/dLHBRjim4Dth54IwQHU1LmKA8p3G62rGe8i0QReel1bHOviIpM4fIavrXnwYTsdlrP6iMBG-TfA518XyyzxCcnbjLO9YJUHZUeoYF5F6WeETY45c6qU5IIHfSi8xC3bVeV41Ai4r5Df_mqV_KQkDsV6raFn25w10UdAtv19qouOirim-01mL3w3zLdaCGSxHFeWN8hZCyMU1Hk9NjUR7OAZsvltdsm-VbYFeEt1UIMN1-9S7ZAORDQM81qiEOgCo0RcukhbfJXUBbVbIbP22HdaLsOvB9BG32VUroIr2mdU5-pOyhcN0_QePfg2dX1IdKCAIZ7UaDRgMI1uEQfu-uZJUKkumeH9CYXE9z25NqGd37LzgshI1F1BADs7jEQCxawuNamxCnMps0xOU-OpRK1dkHgUiji8U-AYihLSbU9paYYPjvWJwVemA3xNwOT70UUPkQvwBqXdLVk3RTnrBUnOzcNOzcj1zFui41mn3-RFc3YadBMAUOyVchASog5fZ821uHLljWKjLCSDm0q63wo-AIyozqd2sV_rnFAkmCjCQU7cEZeY-Q3JOct7Rkb8xuLFZpfP3RFhVtzXS2WFrD7556V7UMmUbJj7GnLHcipOPoWo8gdRTkuH_OcKeVf8XQDxhKTGBahyeCvhusVKC8mAYqLqO4XsYY_IXzeuhA7WpnxRuEHD6bYfoB2vePOhSuhy_1iC_LbeyTqQETGWI4qmHwhnP_Kmh-Uf-Z8HVwiOmM-jAyhs9HfE4wpHObk2kx_T_)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/oznacevanjenalogeopravljeno.puml))

### Obveščanje o objavi z neprimerno vsebino

Naslednji diagram prikazuje funkcionalnost obveščanja Administratorja o objavi z neprimerno vsebino:

![obvescanjeNeprimerneVsebine](https://teaching.lavbic.net/plantuml/png/bLDBRjj03DtFAGRkfWKQU1MW2083YT5k6jHUj5rrGqcqFTQ8L4SZEVKTUeZUfRrNEPAWZoCxoS82JBxtI3voTYP1lM7s4JygLQI6Sd2GwGZYTEkuf2Hcoqvx1rH82iaFK0bkeBJ-ApxwEsksb4bQn_91Dq11xDdTiqlGBMkno8hw4q1NiG4TTiRZ4EGS7wRv1VuiaM9yC1lv4GvhlRd-TF_Xut82lGRdJMno8FzwmcIpgXv4VylPGKGcrL3esUrj7LqiVj3QcJrKTe-qYcAWzu9qK0bmfl9UMtCaAFXkyD0AHA4Gk5z1eqzEaPPCth6rw5fgt0HwPeyOyxzmPM9eMR91u-joJNWClKioGwQGamZJdZ96sPbIlHjNLul1R3TwFlzi9KpGH3dOPohmE42fWHazln_YHkVE91oPLItnzjsfI0zLJomAWis0dKpzToJJ05JhptGFyxciDeMZFiBEOmNKLaULuAdGP1TZMyw9dNZHENk9ywpzspABG7YIg_3Vdx-_WVR2reHYIOQEZAuAZ6IdSj_MwzKP66OwvGmzk7tvegK7D0bS7tiHRcknGahKnO537uKtbaFlENkNo1EiXbF0nJRMqvJdxuqBkpTTTJcLoOsEdi4KgxkB4N9uCEF4I-wc6ocKaoFODbiD9M6eVEPfdBcirwa6aVy0)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/obvescanjeNeprimerneVsebine.puml))

### Izbris objave

Naslednji diagram prikazuje funkcionalnost izbris objave, ki administratorju omogoča izbris komentarja pod novico:

![izbrisObjave](https://teaching.lavbic.net/plantuml/png/vLJBRjim4BppAmZtqXu2dme4GM0WCTfBYiH0YvvwMOdhU2sAgrAqdFeV-bVzi58lYx9aoptt847QdHakPvVSa4AvPdOHlmcH9sGoi93A2EBarVBEg9WrM-aicDodqBW0fN0DE-s-uPjxqFHgKf-MiN-X3L0GExQFR1NQPIKMQQy-01nNh47x3JaCGTRoVfoVuyyTcXY_qDe_1iErtdty_7ZxQJc2Ne5r55C6nlqxORHOKMr4FgYK3ENUil8FSZcxlwyoYyKFqqlEHDPfIewsKC1tmdr3Yie5mFugULsoJrASGWnVo_xqfBVdX2uJnYfQid6MjSPsCt4TwChg47t-CnSKGyFoOq6kAg4Ezw5FN0uFs06uJSo4w1jxSxC8BBkJy_cJfaGQgADSTeCAS1YWHE1nn-_AlvEP9SKHlLGIxp-SYdHGCJ2d5AotTfIfVdioDK0qpepNC9-lB2Lma0VOE2p0DAkZK7WgD5f5tvPpOYTUzDozn1EWdMoITKXI-LLWxaX3NsYx6sdRvHaCMvbdRFdFRz91Eo-pnSI9kAxjWT4Jo_stOu16NNyaa_Pu7wH1xqgArh0iSep8y6G9ByriiQz2PkoiyjTjuQSkifJ3P16h0MFo6gY1r5u-ldMZ3hVvCSAnHMqiRDinTatZ1kK7GcUkfGljd5OhoNy1)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/izbrisObjave.puml))


### Blokiranje prijavljenega občana

Naslednji diagram prikazuje funkcionalnost blokiranje prijavljenega občana:

![blokiranjeUporabnika](https://teaching.lavbic.net/plantuml/png/fLJDQjj04BxhAHRtqXv2Je4IWY4nBGGADQJaK7ePIUDuzBEZZbPowdV8G_HTqlVghcn7AsTZ9Sv10ktCVDyttunsIIcg1RE9-JwAwfnq1GAbYY79xuGRdIPSi2WZe6iRGcsyh1GNq1Jc1zwRouBkT6d3Ah4l52yB4iDonPAYp3gmkB3epnAU63T9goKPz9D4UENLA-K5Q_pTe4xm6otiez5d-t3szUhpbraWUmvYAA4Aj7bxGL1krBMYBjEIDDNMDFS5jPfSN7IHwVIN7WGdKTLZgfHBIE36cJt8ok2MSBK5YXqfo1-7TRXW2DvKB11hocUiZN1Hu4vQiZbmW86a8SfSA8Eso51_ZnFGMmGxSZATehtu98g6PfoSJ4VQF5UdfpzXQR25J5L2EQpj0DOQIb0SFpw0vjRvJ2qO7C6AHXnrQW8j3oHik5LRupB07wYEGauxfZrlpbrtASTqMsCVmYw67p_r77jrqVuC3dHnuucldih8w-GbiUD36iT-XVk3SuSw7qxy0FenYtMzZb5eYm5g3VOouPniGORlacjTvCS7AZhCYesazZveUtGuIkuy17JiJcyXChjQhzxGNKtt2ROonHVNyXsRj7EF5Qkchl3VNurbttFZquR-k6CczoRImmJ_0G00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/blokiranjeUporabnika.puml))

### Iskanje po nizu

Naslednji diagram prikazuje funkcionalnost iskanje po nizu:

![iskanjeponizu](https://teaching.lavbic.net/plantuml/png/pLDBRjj03Dth58DqaowCh08KWM4WCTgLuHf8uqMBBYY9ZgaFgSwCv5Htw25ob-PU7IcsD5PYm6uNwKA2XiFtI3u-hIb6jHAneJm4WKc92z2Ggn2Yz5vBoN4acMXbDR1nLyZMoufn1MLcl-23lSxeddDthIBtGkrbGMH5tuYEKKzRiZ1px2yIkehFIPirMVIJj9QDXrVAkpJueqIES4Ohzp3wrTvTVhhvy77wIlO2jAM82c1xEk3LTeDs57KTvyHad6ZDQJnkevD9KFHuTHPB3X7SDiek2JTd2epoOWuMDlIWVmwHPI4QGgPqAcorP1dg5XrrHmVU7eROXQO4gYn1_Xn6m2rEcYy7SOiZsrGBzWSOJVp6hjJ5XVeAQuiL9AgGM58MLQkkAsfKe0eixWlHXpssm1_P5UfdsAzZi6QtYQw8L3rTZmay2HnPEzYLAZJ54jBIuFdx7jLU-e3nQBH3zBEqwArYTxlej-z1Z0EYlTKvfi4Wjo_xzoYy2GRUSKn3xTqAKwXTcQqcbS7r8U8zfV70NexOzrmgKMHIu0HLrLLxUamnLyu0vQ6T1vb8eMfmNK8gpYu6SjTsH_OtfbWo6ce9CYR5L1zlXMtLyoruJlNRE69dXmHpIEJtBreVOGtasEqACgiOIrFWqwEdut-ksVnkDZjDeeM66dScFw38ioId_p8CIOnC__JR_040)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/iskanjePoNizu.puml))

### Sortiranje

Naslednji diagram prikazuje funkcionalnost sortiranje:

![sortiranje](https://teaching.lavbic.net/plantuml/png/nLB1RjD04BtxAqRbqaf4FI6XAehKHY0X8QWev03YCFPEcetj7JExTah-XX_XrlzYx3Rnsasb5WuSOcLdvhsPUVDMrX0icKFADqdYS-ig52mXnIo_5gwToRXWWI3elAR8XQZAq1Bh8docct1Us6jNQXeo_P14LPW5bWiMGpBloD92sHyKx3lU5MrMDb1S9CAR20yG9JtzgCbbzDukzUSexlRYrTkBrs_c1welKOBDR8KkF1zmSDoaMmNEJMcTzIfQ-vfEk-XibbGz7euCbvZXLQlimjBc2D1355DOsjAZ_1mZwue5KsVpERiWN1Ga7JhRFnLy_nXZByMkiIdMv3wc6ReEn-q_XUZXR6Yx9SC59hDui3CuFOMlk0hKu1egDfmxXYtifxAj2hR1G4CX-d34biGhQwD-Xs4VJrkdbzWtuQQdwp59986ITOkTGINMS6eNdevFUbINZ07JoMI7w7VfqFUAVTb5ltrF38s81gTJfj4YLm_dZoYY3KRUKQQnzdh27BVQnb4jf7CT4YSY7wXDZzpc2JV_m0s3PpMJHjO4pRxXxQ-SIb0Vr8-TFYcOAzWYD1vpLjTuB7NecEzlxF5kcv9OkFrDxNsW4H-S1I7pVyqHDneDhHSpTg5pyl7Tj9_8l8meJvxdh9sjEX_OrHFyHSuapp5P9TZOOY3klnZj3m00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/sortiranje.puml))

### Dodajanje na koledar

Naslednji diagram prikazuje funkcionalnost dodajanje na koledar:

![dodajanjenakoledar](https://teaching.lavbic.net/plantuml/png/fLFBRjim4BphAnRA9G5iv5IWC5m3YPi2GGlKG9eSUbjHQviMnLKfMaxzzLrHjaGxZwBeGO8epinoHgErpWcMp3xZvoIf2sqhT5X2XgfOETxQNB5X1zwXhMMBh8zGEIrnQ_mFUlOtHgziATkWv4OkGg7ox6xPvUJcGImpelu2q4_iGBkrzXI3dEDTn0U8DclwjIMhw9jUocKfddRnuSljnxlvA-W5Eg-Lhj3wVoUyUjmaM87qiNBOM5saW3Li3mkOJiFsR9PKWn2aEPUeyA6D-4dJBd3MN9BWitO0kjylAJbkq6xeAniIGC-BjDwXSxR11kTilMDZo0MgwfV2F2pEYGfblvMyMTm74bQwjLLfGIQzqV4i69Z0zJNynBMd1ZTWkM48axcDIJVegSzcUDCIas1VL28xGUn-Nx4HsnP17ZO8UuG-2tbQSLxWe1NHaoIEvbowSjIGqq-MQxgyEeSEoKowQP_RGLG8iXyrO98eI25BDcUiFNcs8pcw8a_520gsf4QWIng1GIytkugKHI2Md8x7HyqWDu7luMicEPrGJfeWdDX4mpgFyT7XtqkfhjYnqeRX4wG7Dy6QJQNvneCbVVQ1_YFrjqTtBP3_hPkH9bB9ltrVNU1UFnnLBdkzgwvhRK8dZCVQD-Z4o37deTqjjgltWclECzEYAbx9dmZxjkQwF5IHopZbk8tHwr3uQ7sSymS0)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/dodajanjeNaKoledar.puml))

### Posredovanje obvestila izvajalcu

Naslednji diagram prikazuje funkcionalnost posredovanja obvestila izvajalcu:

![posredovanjeobvestilaizvajalcu](https://teaching.lavbic.net/plantuml/png/rPNDRjD04CVl-nIhSe53bHCIYgfAj0Af0j58fJqWBcDxceopsJNhjLloDdqHRdqlnh5hhvqrTLiuS4XaUMT-y_MVzOeIbDV6kCZS2f6lIMTWOICZYDTBQmgTn4OPAvq5dVCHQkTP9NWDXN9VyTQzLxJK6pwMCV-XzQmWTiQU69kWFTt18iNqFOCsOcrqioA7lf6rviRpbz8xpF57WJh6ptJDFur-j5TlFvwy-t0Qi5w0THHJ1jeztI6OhjYL8YypOo7Ij9QGouEZeztRu-Fl-ZApKFBx0v5rA9cO3SHmKVNuYl2cSOegEDYVbT_0ekzUF4GxDTfPenJQ1X7NBof2mAXFCL4A9Vm9CRJe-sSMbmgJXSL4cIMC51AmEX0zpdaKauR6bQL4RkTOl-w7FDkMa8B2UC-wFM5uDup3us6hvt8s-wJuY2DkeQGLLeyHML3iK4sJId0uT1F3YJ4vqE2A_WrM3ZaPrj1MivIokd9JTl20fmZDb8FKNPZBCgUcXVJwJKUgZqNJmiEnh39BYOdeAiS6WWn9S8W9vX3guSMmD8yLAcwlUmnjfpIN2qjhs8BURzdaMJOkeJaDLTmRKcOIQo9jSaSF3EZQEtGLUpl3_832-o5srJqIAG0HeGKRwHp8l2fP-c4sNXnlFdlAnl5o--qVAVHi6w4bkJ7tlwgmd47E5aKwcl_4nQ5wfMDyyUOqbqFyijLve3nXTqPwTh5Nu2FxCq49izbmYpoy0ENaPPxX_PqspO1C2Jh5gHFc2z83Ij9CSJRXJs39J_Ttf5B6mRDdtZ6mLMqRi7YM04P2LlYI1SiffhZXusgU8uZsgpAlcgPIygxFDgNMI7IVfz6I4vD06hw4EyvJjBJWl42tgqvJj78UbSZNa3BIoA9M1MvyMHH2eCgHhnTSAuhz8vYacCxnSMayupghi_k2nNyiwN-dseaV99EPhR6aW5MWkPNEyhr1gygz3a6hlt0lBGR11Eh4nmOGlm40)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/posredovanjeobvestilaizvajalcu.puml))


### Glasovanje na anketi

Naslednji diagram prikazuje funkcionalnost glasovanja na anketi:

![glasovanjenaanketi](https://teaching.lavbic.net/plantuml/png/rLJBZjf04BpxAqRaaaX1UueKeHNIWZQNH0bIGWvHBcsxWS7ZQMTcR3Rymtv4_cNpNsbx37vW22lbaWCWt5NLtLKD6ncZM16va1w2m2PIPs0W5I54oTfGhkE851dX36ZB9TIkXOfn1RboN_31tIcvrYcNHSHlQ5eeY1oP6PaOpRmI2nMhdm2E7Jrejv4Eso1ZQDVY2z4gMloHeuxmWrpnIsExsuitxsPlx-S3w0KO9oEPWNRF9moE6rIhY6L61a8j4m5MZ6vlgwVJwNUzC78BXTgYbeB2fqVGhyLTd4ejBJlCe56GDJr4J2b4yBaq_wl4NQqMbbt1_2m5UuWkdK9k1dFIpf1IQ6f-v1-Kz3wYoyyFQroI601rLK0dwE3C_4rn57HOTrMXPl15ILVX_MF6DXQFftsV9kBcvhtYaWRVdSfSP04E-z2WRp6hzKqfvRx1nc41Mv4PcS3Uos8Zs-S49zwpSBFiDP8DEcXPE6QTu-uJiUXmOpm_KAlMzo00vSJIPlZx5pj6SGnR46i5Dk_QV6R-Ya3yiQQ2qK9gaP4piHI59jiPVZfqKvV46Zi6YC7GWPxhaHaiqCWb_z1mptEvbw_EyVsHJRm5suzGVPUCFmxZ4K5zfEDBUuMeS8-w4ck7K4iCZd3YDOK5MYSL6rCvf36j0sef3ZdqryivA7Fk8lSdq6yHeB8e5cIJtFfyq5T4o5OAkG_va70DJMZFk1elz9-VJ6_BJwsqKj3RXCTxUcG_wn7_RMh37Nneip8Wxwmhi3BtkdHuzKJ9YBdMKPR08NT-7YjQmzL_IQZZFm00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/glasovanjenaanketi.puml))

### Registracija

Naslednji diagram prikazuje funkcionalnost registracije v sistem:

![registracija](https://teaching.lavbic.net/plantuml/png/pLFDRjD04BxlKup21GvLJqYegYBH22wWA0BIGyLbl9ua6wztp7hjbBn37u9tAU_5R9AcMySMYhXmY2Lxl_d-Th8oES62EMHyhrHT65UXnn8orCNIS-DopPOz18-kbYDo8K7bjC36Xczq7zvRitIb78EM1_a4XJgmls6Vav_io38hx2U0e-8Uj5cPG2d8Uzuaym39OKq_6dAQFfk5_1obQg_UVhnvzs7IWvwX3qQR2bquVw3Nhjf5WUaSi8RHzVNkTJp-xgPKURF6rgx9cNd57ZDdYf6gdXaXvn8rVerLtnhQ72Yog87-PsJf85wEDq-i4tR1ixNa3nHw_o4oz81UidXQcbe4jBWTSF6b0naf9O4lBiRT15TmUVd9cW8Smh8fCqWdOrMcnK3TATNj8JBt-8xiTxWArE8QfDq2jy2Pnwr6s68QXA65MbweV1Rj8LHz3KRnRYV_fjnbKoUL3mRUQvaPspNUOT8cltxJJpETNy5iDuLkxv7qiCV3DPxclNNq-nV9DLPHkajmHe8KAPxH1h67hR7a6CnMwDtwg3Du8GFbK4jUoian57JyZqMPSouMzWG6QeP63cdhJ7_0dcsVUMhgKbp8RiIjZv371uOuwnJPcc2AbNpwJ-8-PNNchsdJJP908i6F3yOoi0Iji30gf-4T9vV_0G00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/registracija.puml))
  
  
### Prijava

Naslednji diagram prikazuje funkcionalnost prijava v sistem:

![prijava](https://teaching.lavbic.net/plantuml/png/dPD1Rjim44NtFCN0tRIB8Ai2HH0OQ8osYnQ6WTHP1DsCgB5DYIBL4IMdlaCEqRkazoffoJ6jC4ZQXGLO_FF-dszwetA2bRKkitT2DAKoDJ9MaA4irsnRaqkhBODZD8q_8kCYLKuhRBNxJdVkerPhK_bZaFv17AbGEijNbdFYsHwMQKz_8dXqx4NRZN8KYvZjDfe7Y0uR-jcIaVHDhVp7KEpsvltdgm-VPWdr0jafgMeqxjy7ad75VXMOBm4Rc5nUxhzEfp_Cd6fM1NQw8AEMjMNCZ2edeZuI8RSLIhmELTyesWw8B7WW_mgKaU9ql3rGPzOujbeJ3mZPlmY4XEYKqiV4Pm8iZgSJ8VoQPsVJSUuBE3__gbK91c7TLXaCGw4RrQ6ZyO0OBnwWYQ01V8iRHnqM8MU9Ex0PuquYx718Rg63HZMEggDVWYLIRGNVQF__zeiO8kupyEVBYr28Pw7fQIIJj4Ex9u5k3FtvJRvOgb1fK0RMr6Zxn2NPtY1w-qwWTZu4TagJ6QEUAoQ9x52hN34MNyBiuxqE7gyg-BfcAiYzk4_YYYsOsgOYzd-xBbor87cujz04aI3T4ConzgzUl-99j5lisFXmBvST_wJUtyFjmxtI5gpFrIUWgeUq1qehSahU5pBvNm00)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/prijava.puml))
  
  
### Pošiljanje predloga s strani občana

Naslednji diagram prikazuje funkcionalnost pošiljanja predloga:

![posiljanjepredloga](https://teaching.lavbic.net/plantuml/png/bLB1Rfj04BtlLwpSItA8SgfKHP6b9celZHoaDZb4lGpis1cptg7BWbF-mH_H7-af-QyE1coCiTGSGB3xvhqtR-QP3EevSuZvHQay9PU1XvME8KaNdWjd4hRiTV3WShb25teeWtCeRFY1B-6pfOLRoRLEv8M-Xu8aiBzXRz3VRibYA-n7W9rY0re_Ky0-o7jUz-grxbtc-Aj0b-0TpULns5VxyF7hpQSljoFe27oWX39muVq5etRLjXKzUz2GwydrzVPtEltf8azBAEqItNtykW4tKTcUInjUGGBVwv0V2TTjSLopW_zTrmyGX-KS2pVSiWkUhKNVrYVDGLq-H1pMHz49LPrvD9ONnv9HD0QF6lWXr2BCBOOkaOosqFPqefI4TN4n7MPmfIyllrbAjGEzA5Qndd79qcc9UI3BTT1KGi1XdHfcMNCFsw_9d-0vO0bBwP5Ig0JZeKf0Lz1rlTSOrgkZn6kL9iRtSZTLuunjI6EK5QvacqeoeBg0-nuQ53rrgBDprKwvHiqUhcHMDG9SOmwJlhbs91tPeyEtFoY3oDWkZr0xa_ULWzVD7YSVEvV5WSlZUPJUqHsdaD2I3xsEpKu4SZ719OX6wJ3VYIgmifmUIhBeM5Cbfswvlpunk2jTvA44J-q6dvrhyN12Fs838INDNHA5lfIy0x_zZMbSeHyuwpnZpwyRMMFXAF9CqfLJDWOShdQaIg7DKSyWswRw_ysStCACA_PaGLGTIiCUgremblmCsUBKXWmCEp6KaZ8uN65qvXy0)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/posiljanjepredloga.puml))
  
### Objava novice/opozorila s strani občine

Naslednji diagram prikazuje funkcionalnost objave novice s strani občine:

![posiljanjenoviceopozorila](https://teaching.lavbic.net/plantuml/png/hLFBZjD04BpxArhXiYknoWa9HQj8RBH829H4Wkm1SMdRdMGIUzhCZ9t5_y17y2ESsFzYngzr9eu2Y4CiPQQhkhgwPYjYWZMp2Van2FHUo0mLfX1YjDyepcKSSS8AZ4AfxHL9qwkAQOrvOZxHetcJY8rCxJL4zaEgLuMHONN7AYOrgyZ2nBAV57GTwwB3LXZg5od5XnuUe7UfwMjECg8FOcr_alhTNhnwU_VwVZPGlKHbH2GobERl0ODoWseKM6KA2odsW1f6jxVLuNJwHRRdeo1xPeAOKupmexFuGT2X0OME6zKtX_CgZk4Sxh306KkZE4b8DVYeFd1mly9l7-CEvOxcYpFjvro82AlBCImoBbc9X4-Lp1SDs2P0c1wq3ni5dJitDrD_-0cCn-yJUoSHDdaQWkG2cn6TkQ90Gpuey1rqn6sN2IoLs6C9EikraRH1i34LEuGIGPIXK0o5qfQrwa8NvRqhGxlYb9z-IjP6E9hEGYTNH3JcPbeSbERlmx5-ngsX0dUGrMevL5X6bKWhkq1rXh_pn2SDJd9HptEqxF_IsUCC_40DRGDbtOUYYttyXNW3F4Xw-a6I8EDOSLZln99mpSGT4myAEzr5LLNbbg-kRNAh_rryhwu3J0oij55KaeJ2DXosUhwOD8E97bjpSiJN6ZbV1FO93QjQMXLcBw0UgvvDG3TS7iJKvpcpV2_CgzftiezDjW-rRzVbLuKIAzfVtn6qgtm9LcIXASphNRPhE6AcH5kLb5ScIeQGDCNkufypswR5-TFoKjeIvt-OINxMU9Q8pkQUPFmR)

**Diagram zaporedja** ([Sequence Diagram](https://plantuml.com/sequence-diagram), izvorna koda :bar_chart: [PlantUML](../gradivo/plantuml/posiljanjenoviceopozorila.puml))
