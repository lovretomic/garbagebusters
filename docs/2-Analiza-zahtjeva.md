# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju. Izvori, odluke i poveznice u primjerima kolegija nastavni su scenariji, a ne projektni zapisi.

<details>
<summary><strong>Održavanje zahtjeva ažurnima</strong></summary>

Primjeri koriste temu projekta CrisisMap. Neki namjerno sadrže korisne nedostatke za raspravu. Izvori, odluke i poveznice na provjere u tim primjerima **nastavni su scenariji**, a ne zapisi rada stvarnog studentskog tima. Zamijenite ih zahtjevima i dokazima svojeg odobrenog projekta. Značajne promjene zabilježite u §2.5.

</details>

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Građani, volonteri i voditelji eko-udruga (jedan račun za svaku udrugu) registriraju se i prijavljuju u sustav putem OAuth 2.0 servisa za autentifikaciju. Pri prvoj prijavi udruga unosi naziv, OIB i regiju, a njezin profil postaje aktivan tek nakon što ju administrator provjeri (F-020). Korisnike koji se ne prijavljuju putem OAuth-a (komunalni redari, tj. drugi administratori) stvara "nulti", početni administrator (F-002). | Visok | Odobreni zadatak | Prijava putem OAuth-a omogućuje radnje dostupne prijavljenim korisnicima (prijava odlagališta, praćenje statusa...), a neuspješna prijava ostavlja te radnje nedostupnima. |
| F-002 | Administrator kreira račune za korisnike koji se ne prijavljuju putem OAuth-a, tj. za komunalne redare (druge administratore), s korisničkim imenom, lozinkom i adresom e-pošte. | Visok | Odobreni zadatak | Administrator stvara korisnika s navedenim podacima i stvoreni korisnik se može prijaviti inicijalnom lozinkom. |
| F-003 | Sustav omogućuje promjenu inicijalne lozinke unosom prethodne za korisnike s računom kreiranim od strane administratora | Srednji | Odobreni zadatak | Promjena inicijalne lozinke uspjeva uz unos ispravne prethodne lozinke, inače se promjena odbija. |
| F-004 | Sustav omogućuje prijavu divljeg odlagališta građaninu. Automatski se učitavaju koordinate lokacije uz dopuštenje korisnika, a ako korisnik ne dopusti pristup lokaciji uređaja, lokaciju može ručno odabrati na karti. Zahtijeva se fotografija (kamerom ili iz galerije) i nudi se izbornik za kategorizaciju otpada. | Visok | Odobreni zadatak | Prijava divljeg odlagališta sa svim navedenim parametrima se prikazuje na karti sa statusom "Prijavljeno". Ako korisnik odbije pristup lokaciji, može ručno odabrati lokaciju na karti i uspješno poslati prijavu. Nepotpuna prijava se ne može poslati. |
| F-005 | Sustav omogućuje prikaz prijava kao pribadače na karti obojene u skladu sa statusom prijave. (Crveno: Prijavljeno, Žuto: Akcija u tijeku, Zeleno: Očišćeno) | Visok | Odobreni zadatak | Valjane prijave se prikazuju obojanom pribadačom u skladu sa statusom te prijave. |
| F-006 | Sustav geokodira unesenu lokaciju u oba smjera: pretvara koordinate prijave u tekstualnu adresu i tekstualnu adresu u koordinate. | Srednji | Odobreni zadatak | Za svaku prijavu se prikazuje adresa koja je izvedena iz koordinata učitanih ili odabranih tijekom prijave (slučaj pretvorbe koordinata u adresu). Kada korisnik unese adresu (pri ručnom odabiru lokacije), sustav ju pretvara u koordinate i prikazuje točku na karti (slučaj pretvorbe adrese u koordinate). |
| F-007 | Sustav omogućava pregled povijesti vlastitih prijava toga građanina i pregled trenutnih statusa svake prijave. | Srednji | Odobreni zadatak | Građanin vidi povijest svojih prijava i njihov trenutni status. |
| F-008 | Sustav omogućuje slanje notifikacije unutar aplikacije o promjeni statusa prijave građanina. | Visok | Odobreni zadatak | Kada se promjeni status prijave građanin koji ju je podnio prima obavijest unutar aplikacije s oznakom prijave i njezinim novim statusom. |
| F-009 | Sustav omogućuje komunalnome redaru (administratoru) odbacivanje lažnih prijava (spam, slike koje nemaju veze s otpadom). | Visok | Odobreni zadatak | Kada administrator odbaci prijavu ona se više ne prikazuje na karti niti eko-udrugama. |
| F-010 | Sustav omogućuje prikaz aktivnih prijava i njihovih detalja eko-udrugama. Regiju eko-udruge određuje grad ili općina koju udruga odabere pri prvoj prijavi (F-001), a prijava pripada regiji udruge ako se grad ili općina dobiveni geokodiranjem lokacije prijave (F-006) podudaraju s regijom udruge. | Visok | Odobreni zadatak | Odobrena eko-udruga na upravljačkoj ploči vidi samo aktivne prijave iz svoje regije i može pogledati detalje tih prijava. Prijave iz drugih regija i prijave u drugim statusima ne prikazuju se. |
| F-011 | Sustav omogućuje stvaranje akcija čišćenja eko-udrugama odabirom jedne ili više aktivnih prijava te unosom naziva, opisa, maksimalnog broja volontera, datuma i vremena sastanka. Lokacija akcije (mjesto okupljanja i točka za prognozu) je lokacija prve odabrane prijave. | Visok | Odobreni zadatak | Nakon što je eko-udruga unijela sve potrebne podatke, akcija čišćenja se sprema i sve prijave vezane uz tu akciju čišćenja poprimaju status "Akcija u tijeku" te građani povezani uz tu prijavu dobivaju notifikaciju, a akcija se prikazuje volonterima kao dostupna za sudjelovanje. |
| F-012 | Sustav omogućuje pregled nadolazećih akcija čišćenja i prijavu za sudjelovanje u akciji građanima. | Visok | Odobreni zadatak | Kada se građanin prijavi kao volonter broj mjesta na akciji se ažurira te kada taj broj dosegne maksimalni daljnje prijave se onemogućavaju. |
| F-013 | Sustav vodi kalendar eko-udrugama u kojem vide sve nadolazeće akcije i popunjenost mjesta na tim akcijama. | Srednji | Odobreni zadatak | Eko-udruga u kalendaru vidi nadolazeće akcije, broj prijavljenih volontera za te akcije i ukupni broj mjesta. |
| F-014 | Sustav omogućuje prikaz lokacije akcije čišćenja na karti s rutom dolaska do lokacije. | Srednji | Odobreni zadatak | Kada se akcija selektira prikazuje se ruta do mjesta okupljanja od trenutne lokacije korisnika. Ako korisnik ne dozvoli pristup svojoj lokaciji, prikazuje se samo mjesto okupljanja na karti. |
| F-015 | Sustav automatski generira događaj u Google Calendaru eko-udruge u trenutku kada ta eko-udruga kreira akciju čišćenja, te u Google Calendaru građanina u trenutku kada se taj građanin prijavi kao volonter na akciju. Događaj se ne dodaje u kalendare ostalih korisnika. | Visok | Odobreni zadatak | Eko-udruga koja je kreirala akciju vidi događaj u svome Google Calendaru odmah nakon kreiranja akcije, a građanin vidi događaj odmah nakon prijave kao volonter. Događaj sadrži termin, upute za akciju, poveznicu na lokaciju akcije i automatski podsjetnik 2 sata prije akcije. Korisnici koji nisu kreirali akciju niti su se prijavili na nju ne dobivaju događaj. |
| F-016 | Sustav prikazuje prognozu za termin akcije na toj lokaciji. | Visok | Odobreni zadatak | U sučelju volontera i udruge se prikazuje prognoza za taj termin na toj lokaciji. |
| F-017 | Sustav u sučelju ističe crveno upozorenje i nudi opciju odgađanja ako je predviđeno nevrijeme za termin čišćenja. | Visok | Odobreni zadatak | Pri najavi nevremena u sučelju se prikazuje crveno upozorenje i eko-udruzi se nudi opcija odgode ili prebacivanja termina. |
| F-018 | Sustav omogućuje učitavanje fotografije "Dokaza o sanaciji" od strane voditelja eko-udruge, zasebno za svaku prijavu obuhvaćenu akcijom, kako bi se poslao zahtjev za zatvaranje prijave. | Visok | Odobreni zadatak | Zahtjev za zatvaranje prijave se šalje kada voditelj priloži fotografiju. Nakon što ju administrator potvrdi prijava dobiva status "Očišćeno". (F-024) |
| F-019 | Sustav omogućuje administratoru da stvori službeni nalog i pošalje ga komunalnoj tvrtci jednim klikom za otpad koji smatra opasnim ili prevelikim za akcije čišćenja eko-udruga. Nalog sadrži podatke prijave (oznaka, adresa, koordinate, kategorija, fotografija) i šalje se putem poslovnih procesa. | Visok | Odobreni zadatak | Jednim klikom na prijavu u statusu "Prijavljeno" generira se službeni nalog, šalje se komunalnoj tvrtci, a prijava dobiva status "Službena sanacija". Prijava u tom statusu više se ne prikazuje eko-udrugama kao aktivna i ne može se uključiti u akciju čišćenja. Ako slanje naloga ne uspije, status prijave se ne mijenja i administrator dobiva poruku o grešci. |
| F-020 | Sustav omogućava administratoru provjeru prijavljenih udruga kako bi se osiguralo da se prijavljuju samo registrirane organizacije. | Visok | Odobreni zadatak | Samo se registrirane organizacije mogu prijaviti za sudjelovanje i mogu stvarati akcije čišćenja. |
| F-021 | Sustav omogućuje administratorima blokiranje problematičnih korisnika koji šalju lažne prijave. | Srednji | Odobreni zadatak | Kada administrator blokira korisnika taj korisnik se ne može prijaviti ni prijavljivati odlagališta otpada. |
| F-022 | Sustav omogućava pregled statističkih grafikona administratoru (broj prijava po mjesecima, najkritičniji kvartovi, postotak uspješnosti). | Nizak | Odobreni zadatak | Administrator u sučelju može pregledati statističke grafikone (broj prijava po mjesecima, najkritičniji kvartovi, postotak uspješnosti). |
| F-023 | Sustav omogućuje administratoru izmjenu krive kategorije otpada u stvarnim prijavama. | Visok | Odobreni zadatak | Administrator može promijeniti kategoriju otpada prijave, a nova kategorija se nakon mijenjanja ažurira u prikazu detalja prijave na upravljačkoj ploči, kojoj eko-udruga ima pristup i u pregledu povijesti prijava građanina. |
| F-024 | Sustav omogućuje administratoru potvrdu slika "Dokaz o sanaciji" kako bi se riješena prijava zatvorila. | Visok | Odobreni zadatak | Kada administrator potvrdi zahtjev za zatvaranje prijave koji je eko-udruga poslala, prijava se označava kao "Očišćeno" i prijavitelj dobiva obavijest (F-008). Ako administrator odbije zahtjev, prijava ostaje u statusu "Akcija u tijeku". |

<details>
<summary><strong>Izvori zahtjeva i kriteriji prihvaćanja</strong></summary>

Svaki zahtjev treba imati stabilan ID. **Izvor označava odakle zahtjev potječe**, primjerice iz odobrenog projektnog zadatka, zahtjeva dionika ili povratne informacije koja je promijenila zahtjev. Opišite opažljivo ponašanje umjesto naziva zaslona ili programskog okvira. U cijeloj dokumentaciji koristite istu ljestvicu prioriteta. Složenu korisničku interakciju objasnite u odgovarajućem obrascu uporabe umjesto kopiranja cijelog tijeka u ovu tablicu.

**Primjer — funkcijski zahtjevi za aplikaciju CrisisMap:**

Kategorije izvora pokazuju različite načine na koje zahtjev može nastati.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje korisniku registraciju računa pomoću adrese e-pošte. | Visok | Zahtjev dionika | Korisnik se može registrirati adresom e-pošte, primiti poruku za potvrdu i aktivirati račun slijedeći poveznicu. |
| F-002 | Sustav omogućuje oporavak lozinke putem e-pošte. | Srednji | Zahtjev dionika | Korisnik može zatražiti ponovno postavljanje lozinke, primiti poveznicu i uspješno postaviti novu lozinku. |
| F-003 | Sustav prikazuje popis dostupnih resursa povezanih s kriznim događajima. | Visok | Postojeći sustav | Korisnik može pregledati ažurirani popis resursa relevantnih za vrstu kriznog događaja, lokaciju i raspoloživost. |
| F-004 | Sustav omogućuje korisnicima podnošenje prijave kriznog događaja s lokacijom. | Visok | Dokument sa zahtjevima | Korisnik može podnijeti prijavu s vrstom kriznog događaja, razinom ozbiljnosti i lokacijom te dobiti potvrdu o zaprimanju. Ako odbije pristup geolokaciji preglednika, može lokaciju odabrati ručno.|
| F-005 | Sustav šalje korisnicima obavijesti o relevantnim promjenama u njihovoj blizini. | Visok | Povratna informacija korisnika | Korisnici dobivaju obavijest unutar jedne minute od relevantne promjene za njihovu lokaciju. |
| F-006 | Sustav prikazuje dostupne resurse prema lokaciji. | Visok | Analiza dokumentacije | Prikazuje se ažurirani popis resursa prilagođen vrsti kriznog događaja, lokaciji i raspoloživosti. |
| F-007 | Sustav prikazuje prijave kriznih događaja s lokacijom kao oznake na karti. | Visok | Odobreni zadatak | Prijava s valjanom lokacijom prikazuje se kao oznaka na karti; odabirom oznake korisnik može otvoriti pripadajuću prijavu. |
| F-008 | Sustav omogućuje moderatoru odobravanje ili odbijanje podnesenih prijava. | Visok | Zahtjev dionika | Moderator može odobriti ili odbiti prijavu koja čeka pregled; korisnik bez moderatorskih ovlasti ne može izvršiti te radnje. |

**Kriteriji prihvaćanja i podrijetlo zahtjeva:** Primjer prikazuje registraciju, oporavak lozinke, resurse, prijavu kriznog događaja i obavijesti te nekoliko vrsta izvora i opažljivih kriterija. Istodobno otvara korisna pitanja: opisuju li F-003 i F-006 istu funkcionalnost resursa? Je li obećanje od jedne minute u F-005 dogovoreno i moguće ispitati? Treba li aplikaciji koja koristi isključivo OAuth uopće F-001 i F-002? Retke koristite kao materijal za analizu; u svojem projektu navedite vlastite zahtjeve. U stvarnom projektu stupac Izvor bilježi odakle su doista potekli njegovi zahtjevi.

**Primjer prilagodbe kada odobreni zadatak koristi OAuth i kartu:** Umjesto kopiranja registracije e-poštom i oporavka lozinke formulirajte relevantni zahtjev za prijavu, primjerice: „F-001: Korisnici se prijavljuju putem odobrenog OAuth pružatelja identiteta; uspješna prijava omogućuje radnje rezervirane za prijavljene korisnike, a odustajanje od prijave ostavlja te radnje nedostupnima.” Zaseban zahtjev za kartu može glasiti: „F-007 : Prijave s lokacijom prikazuju se kao oznake na karti; odabirom oznake otvara se pripadajuća prijava.” Izvor treba biti stvarni odobreni zadatak ili dogovoreni zahtjev dionika. Ova je prilagodba zamjena za neodgovarajuće retke, a ne dodatna tablica koju svaki tim mora ispuniti.

Za složenu interakciju kratak scenarij *Given / When / Then* može pojasniti kriterij. Primjerice: *Given* prijava bez lokacije, *when* građanin je podnese, *then* sustav objašnjava da lokacija nedostaje i ne pohranjuje prijavu. Nemojte jednostavan kriterij ponavljati i u prozi i u Gherkinu niti pisati Gherkin za svaki zahtjev.

</details>


## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.

| ID | Opis | Prioritet | Izvor | Tip provjere | 
| --- | --- | --- | --- | --- |
| NF-1.1 | Komunikacija između klijenta i poslužitelja se odvija isključivo preko šifrirane veze HTTPS. | Visok | Zahtjev dionika iz [1.2](./1-Projekt.md#1.2-Ciljani-korisnici-i-dionici) | Provjera: HTTP zahtjev se odbija ili preusmjerava na HTTPS. |
| NF-1.2 | Osobni podaci korisnika su dostupni samo ovlaštenim ulogama te se koriste samo za rad sustava. Sustav pohranjuje samo ime i adresu e-pošte iz OAuth profila (za administratorske račune korisničko ime i adresu e-pošte) te vlastite prijave korisnika. Građanin vidi detalje samo vlastitih prijava (na karti vidi pribadače svih prijava), eko-udruge ne vide osobne podatke prijavitelja, a e-pošta korisnika vidljiva je samo administratoru. | Visok | Zahtjev dionika iz [1.2](./1-Projekt.md#1.2-Ciljani-korisnici-i-dionici) | Testni scenarij: Zahtjev građanina ili eko-udruge za podacima drugih korisnika (popis korisnika, e-pošta, detalji tuđe prijave) je odbijen (HTTP 403), a administrator ih može dohvatiti. Uvidom u odgovore sustava za eko-udruge provjeriti da ne sadrže ime ni e-poštu prijavitelja. |
| NF-1.3 | Lozinke koje je administrator kreirao pohranjuju se u obliku hasha. | Visok | Sigurnosna politika | Provjera: U bazi nijedna lozinka ne smije biti čitljiva. |
| NF-1.4 | Samo korisnik s ulogom administratora može izvršavati radnje administratora.  | Visok | Odobreni zadatak (Uloga C ima potpuna prava kontrole nad bazom podataka i korisnicima.) | Testni scenarij: Uloge građanina i eko-udruga ne mogu izvršiti nijednu od radnji administratora u 100% pokušaja. |
| NF-2.1 | Prijava divljeg odlagališta se može napraviti u 2 koraka (učitavanje fotografije i odabir kategorije otpada, a lokacija se automatski učitava uz dopuštenje korisnika). | Srednji | Odobreni zadatak ("Građanin koristi klijentski dio aplikacije koji mora biti maksimalno intuitivan za rad na otvorenom.") | Provjera: Proces prijave divljeg odlagališta je moguće ispuniti u samo 2 koraka. |
| NF-3.1 | Obavijesti o mijenjanju statusa prijave stiže građaninu unutar 30 sekundi od promjene statusa (dok je aplikacija otvorena). | Srednji | Odobreni zadatak ("Građani u realnom vremenu vide pomiče li se njihova prijava...") | Mjerenje: Promijeniti status prijave 5 puta i štopericom izmjeriti vrijeme do prikaza obavijesti koje svaki put mora biti kraće od 30 sekundi. |
| NF-3.2 | Ako je neki od vanjskih servisa nedostupan u sučelju aplikacije se prikazuje poruka, a ostatak aplikacije koji ne ovisi o tome servisu ostaje funkcionalan. | Srednji | Odobreni zadatak ("...uspješno implementirati i dokumentirati sljedeće tri vanjske integracije...") | Testni scenarij: Simulacijom pokazati da se aplikacija neće potpuno srušiti ako su sva 3 API-a nedostupna i da će ostali dijelovi funkcionirati ako samo neki od ta 3 API-a ne rade. |
| NF-3.3 | Mobilno sučelje radi na aktualnoj i jednoj prethodnoj glavnoj verziji Androida i iOS-a, a web sučelje radi na aktualnoj i jednoj prethodnoj glavnoj verziji preglednika Chrome, Firefox, Safari. Konkretne verzije koje se smatraju podržanima navedene su u AS-04. | Visok | Odobreni zadatak ("Sustav se sastoji od mobilnog sučelja prilagođenog radu na terenu (prijavljivanje i navigacija) te web sučelja namijenjenog administraciji i organizaciji događaja.") | Provjera: Ključne procese (prijava u sustav, pregled karte, stvaranje prijave odnosno akcije) izvršiti u Chromeu i Firefoxu te na jednom Android uređaju ili emulatoru (Android 12+) i jednom iOS uređaju ili simulatoru (iOS 17+). Svi procesi rade bez grešaka. |

<details>
<summary><strong>Odabir provjerljivih nefunkcijskih zahtjeva</strong></summary>

Relevantna svojstva mogu se odnositi na uporabljivost, pristupačnost, sigurnost, performanse ili pouzdanost. Odaberite svojstva specifična za projekt i opišite kako ih je moguće provjeriti. Zahtjev navodi što se očekuje; stvarna opažanja i dokazi pripadaju rezultatima ispitivanja, a ne drugom stupcu s rezultatima u ovoj tablici.

**Primjer — nefunkcijski zahtjevi za aplikaciju CrisisMap:**

| ID | Opis | Prioritet | Izvor |
| --- | --- | --- | --- |
| NF-1.1 | Sustav mora podržati 1.000 istodobnih korisnika uz vrijeme odziva kraće od 1 s. | Visok | SLA |
| NF-1.2 | Svi osjetljivi podaci moraju biti šifrirani algoritmom AES-256. | Visok | Sigurnosna politika |
| NF-1.3 | Korisničko sučelje mora podržavati engleski i španjolski jezik. | Srednji | Povratna informacija dionika |
| NF-1.4 | Dostupnost sustava mora iznositi najmanje 99,5 % mjesečno. | Visok | SLA |
| NF-3.1.7 | Sustav treba imati odgovarajuću dokumentaciju. | Visok | Pravila dokumentiranja |
| NF-3.1.7.1 | Kod sustava treba biti dokumentiran prema „Code Conventions for the Java Programming Language”. | Visok | Pravila dokumentiranja |
| NF-3.1.7.2 | Sustav treba biti opisan projektnim dokumentom/SRS-om. | Visok | Pravila dokumentiranja |
| NF-3.1.7.3 | Sustav treba imati „Operativni priručnik” koji opisuje pravilnu uporabu. | Visok | Pravila dokumentiranja |
| NF-3.1.7.4 | Sustav treba imati „Plan implementacije” za pravilno postavljanje. | Visok | Smjernice za postavljanje |

**Provjerljivost i opseg:** Primjer uvodi performanse, sigurnost, lokalizaciju, dostupnost i dokumentaciju, uključujući hijerarhijski ID zahtjeva. Navedeni izvori primjeri su podrijetla zahtjeva, a ne dokaz da za studentski projekt stvarno postoji SLA ili sigurnosna politika. Vrijednosti poput 1.000 korisnika, 99,5 % mjesečne dostupnosti i AES-256 moraju imati odobren izvor i izvediv način provjere prije nego što postanu zahtjevi tima. Skup zahtjeva o dokumentaciji ilustrira razlaganje zahtjeva, ali zahtjevi za izradu *ove dokumentacije kolegija* u pravilu pripadaju uputama zadatka, a ne zahtjevima kvalitete web-aplikacije.

**Primjer prilagodbe:** Ako je pristupačnost zahtjevana za  projekt, projektno specifičan zahtjev može glasiti: „NF-01: Sve obavezne radnje u obrascu za podnošenje prijave moguće je izvršiti samo tipkovnicom, uz vidljiv fokus na aktivnoj kontroli.” Provjera: navigirati kroz obrazac bez pokazivačkog uređaja, odabrati ili unijeti lokaciju, poslati prijavu i provjeriti može li se pročitati rezultat. To je provjerljivo svojstvo kvalitete, a ne dodatna funkcionalnost koju svaki projekt mora implementirati.

</details>

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| Akter | Uloga | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- | --- |
| A-01 | Građanin | Akter - koristi mobilno sučelje, prijavljuje odlagališta, prati vlastite prijave i prijavljuje se na akcije čišćenja | F-001, F-004, F-005, F-006, F-007, F-008, F-012, F-014, F-015, F-016; NF-1.2, NF-2.1, NF-3.1, NF-3.3 |
| A-02 | Eko-udruga | Akter - koristi web i mobilno sučelje, pregledava prijave, organizira akcije te šalje sanacije na potvrdu fotografiranjem | F-001, F-010, F-011, F-013, F-015, F-016, F-017, F-018; NF-3.2, NF-3.3 |
| A-03 | Administrator (komunalni redar) | Akter - koristi web sučelje, upravlja korisnicima, izdaje službene naloge, blokira korisnike, odobrava udruge, pregledava statistiku | F-002, F-003, F-009, F-019, F-020, F-021, F-022, F-023, F-024, NF-1.3, NF-1.4 |

| Dionik | Uloga | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- | --- |
| D-01 | Agencija za zaštitu osobnih podataka | Dionik - ne koristi aplikaciju, ali određuje kako se obrađuju i koriste osobni podaci | NF-1.1, NF-1.2, NF-1.3 |
| D-02 | Razvojni tim | Dionik - Izrađuje, testira i održava aplikaciju. U njihovom interesu je da je aplikacija pouzdana i funkcionalna. | Funkcionalnost aplikacije u cijelosti. |
| D-03 | Komunalna tvrtka | Dionik - Ne koristi sustav. Prima službene naloge internim poslovnim procesima. | F-019 |
| D-04 | Kupac aplikacije (asistent na kolegiju) | Dionik - Ne koristi sustav. Interes u način izvedbe i rezultat projekta koji je kupio tj. u koji je uložio. | Funkcionalnost aplikacije u cijelosti. |
| D-05 | Građanin | Dionik koji koristi mobilno sučelje. U interesu mu je funkcionalnost prijavljuje odlagališta, prati vlastite prijave i prijavljuje se na akcije čišćenja. | F-001, F-004, F-005, F-006, F-007, F-008, F-012, F-014, F-015, F-016; NF-1.2, NF-2.1, NF-3.1, NF-3.3 |
| D-06 | Eko-udruga | Dionik koji koristi web i mobilno sučelje. U interesu mu je funkcionalnost pregledavanja prijava, organiziranje akcija te slanje sanacija na potvrdu fotografiranjem. | F-001, F-010, F-011, F-013, F-015, F-016, F-017, F-018; NF-3.2, NF-3.3 |
| D-07 | Administrator (komunalni redar) | Dionik koji koristi web sučelje. U interesu mu je funkcionalnost upravljanja korisnicima, izdavanja službenih naloga, blokiranje korisnika, odobravanja udruga i pregledavanje statistike. | F-002, F-003, F-009, F-019, F-020, F-021, F-022, F-023, F-024, NF-1.3, NF-1.4 |

<details>
<summary><strong>Povezivanje aktera sa zahtjevima</strong></summary>

**Primjer — akteri aplikacije CrisisMap:**

| ID aktera | Uloga | Obuhvaćeni funkcijski zahtjevi |
| --- | --- | --- |
| A-01 | Koordinator pomoći | F-003: Pregled resursa; F-004: Podnošenje prijave kriznog događaja. |
| A-02 | Građanin | F-001: Izrada računa; F-005: Primanje obavijesti. |
| A-03 | Administrator sustava | NF-1.2: Provođenje sigurnosnih pravila; upravljanje korisnicima. |
| A-04 | Posjetitelj | F-007: Pregled prijava na karti. |
| A-05 | Moderator | F-008: Odobravanje ili odbijanje prijava. |

**Odgovornosti aktera:** Uloga aktera treba biti povezana s interakcijom, a ne samo s nazivom. Provjerite podnosi li koordinator pomoći u odobrenom zadatku doista prijave kriznih događaja. Poveznica administratora s NF-1.2 navodi sigurnosni aspekt, ali sama po sebi ne opisuje obrazac uporabe; navedite stvarnu radnju administratora ili izostavite ulogu ako je nema. Nastavnici zainteresirani za rezultat mogu biti dionici, a da nisu akteri aplikacije. Tablica je polazište za razmišljanje, a ne potvrđen opis ovlasti u CrisisMapu.

</details>

---

## 2.4 Ograničenja i pretpostavke

**Cilj:** Zabilježiti projektno specifične granice i pretpostavke koje utječu na zahtjeve ili oblikovanje, zajedno s njihovim izvorom i praktičnom posljedicom. Ovo je njihovo mjerodavno mjesto u dokumentaciji.

| ID | Tip | Opis ograničenja ili pretpostavke | Izvor | Inženjerska posljedica / Provjera |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | Aplikacija implementira 3 vanjske integracije: Google Maps API, Google Calendar API i OpenWeatherMap API. | Odobreni zadatak | Svaka integracija treba imati testni scenarij, a ako je servis nedostupan obrađuje se prema NF-3.2 |
| C-02 | Ograničenje | Registracija i prijava korisnika se provodi s OAuth 2.0 | Odobreni zadatak | Prijava i registracija se dizajnira preko OAuth 2.0 |
| C-03 | Ograničenje | Sustav ima mobilno sučelje za građane, web i mobilno sučelje za eko-udruge te web sučelje za administratore. Administratori koriste samo web sučelje. | Odobreni zadatak | Ovlasti se provjeravaju na poslužitelju neovisno o kojem je sučelju riječ. |
| C-04 | Ograničenje | Svaka prijava divljeg odlagališta mora imati fotografiju, lokaciju i kategoriju otpada. | Odobreni zadatak | Sva polja se trebaju provjeriti prilikom slanja prijave (F-004) i svi se podaci trebaju pohraniti u bazi. |
| C-05 | Ograničenje | Obrada osobnih podataka mora biti usklađena s primijenjenim propisima. | Zahtjev dionika iz [1.2](./1-Projekt.md#12-Ciljani-korisnici-i-dionici) | Pristup podacima je ograničen prema propisanim ulogama, podaci koji se prikupljaju su isključivo nužni za rad aplikacije (NF-1.2) |
| AS-01 | Pretpostavka | Građani, volonteri i voditelji eko-udruga prijavljuju se putem OAuth 2.0 (profil udruge aktivira administrator prema F-020), a administrator ručno kreira samo račune komunalnih redara (administratora). | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Provjeriti da administrator može ručno kreirati samo račune drugih administratora dok se bilo koji drugi tip profila (građanin i eko-udruga) može kreirati jedino prijavom putem OAuth 2.0. |
| AS-02 | Pretpostavka | Građanin dopušta pristup lokaciji uređaja tijekom prijave divljeg odlagališta, a ako ne, omogućuje mu se ručni unos lokacije na karti. | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Ispitati ponašanje pri odbijanju dozvole na stvarnom uređaju (F-004). |
| AS-03 | Pretpostavka | Svaka eko-udruga ima jedan korisnički račun i jednu regiju (grad ili općinu) koju odabire pri prvoj prijavi. | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Testiranjem provjeriti da se u F-010 prikazuju samo prijave iz regije udruge. |
| AS-04 | Pretpostavka | Na dan 15. 11. 2026. aktualne verzije su: Android 17 i 16, iOS 27 i 26, Firefox 158 i 160, Chrome 158 i 157 i Safari 27 i 26. | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Provjeriti verzije prije svake kontrolne točke (7. i 14. tjedan) i prije završne predaje. Ako se promijene, treba ažurirati AS-04 i zabilježiti u poglavlju 2.5 samo ako se mijenja opseg testiranja. |
| AS-05 | Pretpostavka | Prvi administratorski račun postoji unaprijed (kreira se pri postavljanju sustava). | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Prije prve isporuke provjeriti da se sustav može pokrenuti na praznoj bazi i da se prvi administrator može prijaviti. |
| AS-06 | Pretpostavka | Ugovorena komunalna tvrtka zaprima službeni nalog putem poslovnih procesa (F-019) tj. proces slanja samog naloga se događa izvan EcoSentry sustava. | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Proces slanja službenog naloga se ne implementira u EcoSentry sustavu nego je dio vanjskih poslovnih procesa koji su izvan opsega projekta.  |
| AS-07 | Pretpostavka | Promjena termina akcije (F-017) mijenja termin u sustavu i obavještava volontere unutar aplikacije. Već stvoreni događaji u Google Calendaru se ne ažuriraju automatski. | Procjena tima (Vidi odjeljak [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) | Potvrditi s asistentom da automatsko ažuriranje Google događaja nije obavezno. |



---
## 2.5 Značajne promjene zahtjeva

Ovo poglavlje prikazuje razloge promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| 26. 10. | F-001, F-002, AS-01 | Razjašnjeno tko se prijavljuje putem OAuth-a, a kome administrator kreira račun zbog nejasnoće originalnog zahtjeva kupca. | Validirano s kupcem (asistentom). |
| 26. 10. | F-010, AS-03 | Razjašnjeno određivanje regije udruge i filtriranje prijava zbog nejasnoće originalnog zahtjeva kupca. | Validirano s kupcem (asistentom). |
| 26. 10. | NF-3.1, NF-3.3 | Uvedene konkretne mjerljive vrijednosti. Prijašnju iteraciju nije bilo moguće testirati. | Validirano s kupcem (asistentom). |
| 26. 10. | AS-01 | Jasnije definirano s kupcem zbog nejasnoće originalnog zahtjeva kupca. | Validirano s kupcem (asistentom). |
| 26. 10. | AS-02 | Prijašnja implementacija bi onemogućivala prijave dijelu korisnika (onima koji ne žele dozvoliti pristup lokaciji uređaja) te se ovime dodaje ručni unos. | Validirano s kupcem (asistentom). |
| 26. 10. | AS-03 | Jasnije definiran pojam regije eko-udruge i broj te struktura njihovih prijava zbog nejasnoće originalnog zahtjeva kupca. | Validirano s kupcem (asistentom). |
| 26. 10. | AS-04 | Uvedene konkretne mjerljive vrijednosti. Prijašnju iteraciju nije bilo moguće testirati. | Validirano s kupcem (asistentom). |
| 26. 10. | AS-05 | Jasnije definiran proces stvaranja administratora zbog nejasnoće originalnog zahtjeva kupca. | Validirano s kupcem (asistentom). |
| 16. 11. | AS-06 | Komunalna tvrtka zaprima naloge putem poslovnih procesa umjesto e-poštom. Prevelika zahtjevnost navedene implementacije. | Validirano s kupcem (asistentom). |
| **Na čekanju:** Nakon 1. kontrolne točke. | AS-07 | Promjena termina akcije (F-017) mijenja termin u sustavu i obavještava volontere unutar aplikacije. Već stvoreni događaji u Google Calendaru se ne ažuriraju automatski. | Čeka na validaciju. |

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | UC-01, UC-02 | Modul src/auth | |
| F-002 | UC-03, UC-04 | Modul src/auth | |
| F-003 | UC-05 | Modul src/auth | |
| F-004 | UC-08, UC-09, UC-10 | Web klijent; Modul src/reports (geokodiranje u ovome periodu razvoja sustava nije implementirano u arhitekturi) | |
| F-005 | UC-11, UC-17 | Web klijent; Modul src/reports | |
| F-006 | UC-10, UC-08, UC-09, UC-11, UC-17 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-007 | UC-12 | Modul src/reports | |
| F-008 | UC-13, UC-16, UC-18, UC-27 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-009 | UC-14, UC-11 | Modul src/reports | |
| F-010 | UC-17, UC-02, UC-10 | Web klijent; Modul src/reports (filtriranje po regiji u ovome periodu razvoja sustava nije implementirano u arhitekturi) | |
| F-011 | UC-18, UC-13 | Modul src/actions; Modul src/reports | |
| F-012 | UC-21, UC-22 | Web klijent; Modul src/volunteers | |
| F-013 | UC-20 | Web klijent; Modul src/actions (kalendar u ovome periodu razvoja sustava nije implementiran u arhitekturi) | |
| F-014 | UC-23 | Web klijent; Modul src/actions (ruta do mjesta okupljanja u ovome periodu razvoja sustava nije implementirana u arhitekturi) | |
| F-015 | UC-18, UC-19, UC-22 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-016 | UC-24 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-017 | UC-24, UC-25 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-018 | UC-27, UC-26 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-019 | UC-16 | Modul src/orders; Modul src/reports | |
| F-020 | UC-06, UC-02, UC-18 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-021 | UC-07 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-022 | UC-28 | **Na čekanju:** U ovome periodu razvoja sustava nije implementirano u arhitekturi. | |
| F-023 | UC-15, UC-12 | Modul src/reports | |
| F-024 | UC-27, UC-13 | Modul src/reports | |


---

## 2.7 Pregled zahtjeva

U tablici pregleda zahtjeva bilježimo važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Kontrolna točka 1 (7. tjedan) | Tijekom diskusije s kupcem (asistentom) utemeljeno je da je slanje službenih naloga e-poštom komunalnoj tvrtci izvan opsega projekta. | Uklanjanje planova za implementaciju funkcionalnosti slanja naloga komunalnoj tvrtci e-poštom; Ažurirati F-019 te pretpostavku zabilježiti u odjeljku [2.4](./2-Analiza-zahtjeva.md#24-ograničenja-i-pretpostavke), a razlog u odjeljku [2.5](./2-Analiza-zahtjeva.md#25-značajne-promjene-zahtjeva)) (AS-06)  |
| Demo 2 (11. tjedan) | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Kontrolna točka 2 (14. tjedan) | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

_Napomena_: Trenutno stanje projekta dozvoljava ispunjavanje samo prvog retka tablice.