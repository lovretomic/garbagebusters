# EcoSentry — Projektna dokumentacija

**Kolegij:** [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz), Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu  
**Akademska godina:** [2026./2027.]  
**Tim:** TG01.4 Garbagebusters 
**Nastavnik:** Vlado Sruk  
**Asistent / demonstrator:** Goran Rajić

## Pregled projekta

EcoSentry je aplikacija za prijavu divljih odlagališta otpada namijenjena građanima, eko-udrugama i komunalnim redarima (administratorima). Građani prijavljuju odlagališta fotografijom i lokacijom te prate status svojih prijava, eko-udruge organiziraju akcije čišćenja uz prijavu volontera, a administratori moderiraju prijave i izdaju službene naloge komunalnim tvrtkama. EcoSentry ne zamjenjuje službene kanale prijave (npr. ELOO), nego dodatno uključuje eko-udruge i volontere u sanaciju manjih odlagališta.

**Aplikacija i osnovno postavljanje:** [README repozitorija](../README.md#quick-start)  
**Javno dostupna aplikacija:** pogledajte [README – Postavljanje](../README.md#deployment)

## Članovi tima i uloge

Ažurirani popis članova, njihovih GitHub profila i glavnih uloga ili doprinosa nalazi se u [README-u repozitoriju](../README.md#team-members).

## Kazalo dokumentacije

| Stranica | Svrha |
| --- | --- |
| [1. Opseg projekta](1-Projekt.md) | Problem, cilj i granice projekta |
| [2. Analiza zahtjeva](2-Analiza-zahtjeva.md) | Zahtjevi, ograničenja i sljedivost |
| [3. Obrasci uporabe](3-Obrasci-uporabe.md) | Akteri i reprezentativne interakcije korisnika |
| [4. Arhitektura i oblikovanje](4-Arhitektura-i-oblikovanje.md) | Glavne odluke oblikovanja, struktura, podaci i ponašanje |
| [5. Ispitivanje](5-Ispitivanje.md) | Pristup ispitivanju, stvarni rezultati i poznati nedostaci |
| [6. Postavljanje, instalacija i konfiguracija](6-Postavljanje-instalacija-i-konfiguracija.md) | Lokalna instalacija, konfiguracija, javno postavljanje i administracija |
| [7. Zaključak i budući rad](7-Zakljucak-i-buduci-rad.md) | Zaključak i moguća daljnja poboljšanja |
| [A. Pregled aktivnosti grupe](A-Pregled-aktivnosti-grupe.md) | Aktivnosti tima, doprinosi i izazovi |

## Ključne točke projekta

| Kontrolna točka | Demonstracija | Video |
| --- | --- | --- |
| 7. tjedan — prvi pregled | [Poveznica na demonstraciju ili inačicu projekta](https://ecosentry-backend-2jo9.onrender.com) | [Poveznica na video Demo 1](https://ferhr.sharepoint.com/:v:/s/PROINZ_26_G01-TG01.4/IQBaf7151W5HSYgoS-pdc4aEAbuX5BnSj8wO4GOA1pHbQrE?e=2F27uW) |
| 14. tjedan — završni pregled | [Poveznica na završnu demonstraciju ili inačicu projekta] | [Poveznica na video završne demonstracije, ako je snimljen] |


## Organizacija projekta i razvojni proces

**Način rada:** Tim redovito održava sastanke i zadatke dijeli prema ulogama (evidencija u [A.1](A-Pregled-aktivnosti-grupe.md#a1-evidencija-sastanaka)), zadaci se bilježe putem Github Issues. Svaki član radi u zasebnoj grani (branchu), a promjene se u `main` spajaju isključivo putem zahtjeva za uključivanje promjena (pull requesta). Prije spajanja obvezne su lokalne provjere, pregled koda i provjere GitHub Actions, koje vrijede za frontend i backend.
**Praćenje trenutačnih zadataka i nedostataka:** [GitHub Issues](https://github.com/lovretomic/garbagebusters/issues)

## Akademski integritet, ponašanje i licenciranje

README repozitorija sadrži projektnu [izjavu o uporabi umjetne inteligencije](../README.md#uporaba-umjetne-inteligencije-ai-usage-disclosed), [informacije o kodeksu ponašanja i podršci](../README.md#kodeks-ponašanja-i-podrška-contributor-covenant) te [status licence ili ponovne uporabe](../README.md#license). Pristupni podaci i druge tajne nikada se ne objavljuju u dokumentaciji niti dijele u običnim porukama.

## Izjava o uporabi umjetne inteligencije

<!-- UPUTA: Ovo je detaljan zapis uporabe umjetne inteligencije; README sadrži kratak sažetak i poveznicu na ovaj odjeljak. Unesite samo ono što se stvarno dogodilo i uklonite neupotrijebljene retke. Ako nije korišten nijedan alat generativne umjetne inteligencije, zamijenite cijeli odjeljak jednom rečenicom koja to jasno navodi. Svaki redak mora upućivati na stranicu, datoteku, zahtjev za uključivanje promjena (PR) ili zadatak. Nikada ne unosite pristupne podatke, osobne podatke ni tuđi zaštićeni sadržaj u alate umjetne inteligencije. -->

Kratak sažetak: [README – Uporaba umjetne inteligencije](../README.md#uporaba-umjetne-inteligencije-ai-usage-disclosed). Ovaj odjeljak bilježi koji su alati korišteni, za koju dokumentaciju ili kod te kako je tim provjerio rezultat. Slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

### Korišteni alati

| Alat | Inačica ili model | Koristio/la | Glavna svrha |
| --- | --- | --- | --- |
| ChatGPT | **GPT-5.6 Luna** | MT, LT | Formatiranje samostalno napisanog koda te pomoći u otklanjanju pogrešaka (debugging): analiza poruka o greškama, predlaganje ispravki i objašnjavanje koda. |
| Claude | **Claude Sonnet 5.5** | BZ, LK, FV | Formatiranje samostalno napisanog koda te pomoći u otklanjanju pogrešaka (debugging): prepoznavanje logičkih i sintaksnih pogrešaka, predlaganje popravki i objašnjavanje koda.<br>Pomoć pri izradi dokumentacije: pridruživanje poveznica na zadatke (issuee), provjera teksta, gramatike i strukture rečenica, razjašnjavanje teorijskih koncepata, provjera zadovoljava li samostalno napisan tekst kriterijima, prepisivanje povezanih zahtjeva uz obrasce uporabe. |
| DeepSeek | **DeepSeek-V4.1-Flash-1017** | LŽ | Formatiranje samostalno napisanog koda te pomoći u otklanjanju pogrešaka (debugging): analiza koda, pronalazak pogrešaka, predlaganje ispravki i objašnjavanje rješenja. |



### Opseg doprinosa umjetne inteligencije

| Stranica, datoteka ili artefakt | Vrsta pomoći | Što je alat proizveo | Što je tim zadao i promijenio | Lokacija |
| --- | --- | --- | --- | --- |
| Programski kod (frontend i backend) | Formatiranje i otklanjanje pogrešaka | Formatirani kod i prijedloge za ispravak pogrešaka | Kod su samostalno napisali članovi tima, alati su korišteni samo za formatiranje tog koda i debugging | [frontend](../frontend/), [backend](../backend/) |
| A.  Pregled aktivnosti grupe, tablica aktivnosti | Pridruživanje poveznica | Poveznice na odgovarajuće zadatke (issuee) uz svaku aktivnost | Tim je zadao popis aktivnosti | [A.3](./A-Pregled-aktivnosti-grupe.md#a3-tablica-aktivnosti) |
| 2. Analiza zahtjeva, 3. Obrasci uporabe | Provjera i preoblikovanje teksta | Ispravke gramatičkih pogrešaka i prijedloge strukture rečenica | Tekst je napisao LK; AI je korišten za provjeru gramatike i strukture rečenica | [2. Analiza zahtjeva](2-Analiza-zahtjeva.md), [3. Obrasci uporabe](3-Obrasci-uporabe.md) |
| 2. Analiza zahtjeva | Provjera kriterija | Procjena zadovoljavaju li napisani funkcijski zahtjevi tražene kriterije | Zahtjeve je napisao LK | [2. Analiza zahtjeva](./2-Analiza-zahtjeva.md#21-funkcijski-zahtjevi)  |

Stranice i artefakti koji nisu navedeni iznad izrađeni su bez pomoći generativne umjetne inteligencije. 

### Provjera generiranog sadržaja i pogreške pronađene u izlazu umjetne inteligencije

Tim nije primjetio pogreške u izlazu umjetne inteligencije (UI). Kako je UI većinom korištena za estetske svrhe nije bilo potrebe za detaljnim provjeravanjem izlaza UI jer je glavna funkcionalnost i logička implementacija sustava ručno pisana.
