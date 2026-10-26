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
| F-001 | Građani i volonteri registriraju se u sustav putem OAuth 2.0 servisa za autentifikaciju | Visok | Odobreni zadatak | Prijava omogućuje radnje dostupne prijavljenim korisnicima (prijava odlagališta, praćenje statusa...), a neuspješna prijava ostavlja te radnje nedostupnima. |
| F-002 | Administrator kreira druge korisnike s korisničkim imenom, lozinkom i adresom e-pošte.  | Visok | Odobreni zadatak | Administrator stvara korisnika s navedenim podacima i stvoreni korisnik se može prijaviti inicijalnom lozinkom. |
| F-003 | Sustav omogućuje promijenu inicijalne lozinke unosom prethodne za korisnike s računom kreiranim od strane administratora | Srednji | Odobreni zadatak | Promjena inicijalne lozinke uspjeva uz unos ispravne prethodne lozinke, inače se promjena odbija. |
| F-004 | Sustav omogućuje prijavu divljeg odlagališta građaninu. Automatski se učitavaju koordinate lokacije, zahtjeva se fotografija i nudi se izbornik za kategorizaciju otpada korisniku. | Visok | Odobreni zadatak | Prijava divljeg odlagališta sa svim navedenim parametrima se prikazuje na karti sa statusom "Prijavljeno". Nepotpuna prijava se ne može poslati. |
| F-005 | Sustav omogućuje prikaz prijava kao pribadače na karti obojene u skladu sa statusom prijave. (Crveno: Prijavljeno, Žuto: Akcija u tijeku, Zeleno: Očišćeno) | Visok | Odobreni zadatak | Valjane prijave se prikazuju obojanom pribadačom u skladu sa statusom te prijave. |
| F-006 | Sustav geokodira unesenu lokaciju. (Pretvorba koordinata prijave u tekstualnu adresu i obratno) | Srednji | Odobreni zadatak | Za svaku prijavu se prikazuje adresa koja je izvedena iz koordinata učitanih tijekom prijave. |
| F-007 | Sustav omogućava pregled povijesti vlastitih prijava toga građanina i pregled trenutnih statusa svake prijave. | Srednji | Odobreni zadatak | Građanin vidi povijest svojih prijava i njihov trenutni status. |
| F-008 | Sustav omogućuje slanje notifikacije o promjeni statusa prijave građanina. | Visok | Odobreni zadatak | Kada se promjeni status prijave građanin koji ju je podnio prima obavijest s oznakom prijave i njezinim novim statusom. |
| F-009 | Sustav omogućuje komunalnome redaru (administratoru) odbacivanje lažnih prijava, izmjenu krive kategorije otpada u stvarnim prijavama i potvrdu slika "Dokaz o sanaciji" kako bi se riješena prijava zatvorila. | Visok | Odobreni zadatak | Ako administrator odbaci prijavu ona se više ne prikazuje na karti i administrator može promijeniti kategoriju otpada što se nakon mijenjanja ažurira u prikazu detalja na upravljačkoj ploči, kojoj eko-udruga ima pristup. Također kada administrator potvrdi zatjev za zatvaranje prijave koji je eko-udruga poslala ta akcija čišćenja se označava kao "Očišćeno". |
| F-010 | Sustav omogućuje prikaz aktivnih prijava i njihovih detalja eko-udrugama. | Visok | Odobreni zadatak | Udruga vidi aktivne prijave unutar svoje regije (?kako se vidi regija?) na upravljačkoj ploči i može pogledati detalje te prijave. |
| F-011 | Sustav omogućuje stvaranje akcija čišćenja s nazivom, opisom, maksimalnim brojem volontera, datumom i vremenom sastanka eko-udrugama. | Visok | Odobreni zadatak | Nakon što je eko-udruga unijela sve potrebne podatke, akcija čišćenja se sprema i sve prijave vezane uz tu akciju čišćenja poprimaju status "Akcija u tijeku" te građani povezani uz tu prijavu dobivaju notifikaciju, a akcija se prikazuje volonterima kao dostupna za sudjelovanje. |
| F-012 | Sustav omogućuje pregled nadolazećih akcija čišćenja i prijavu za sudjelovanje u akciji građanima. | Visok | Odobreni zadatak | Kada se građanin prijavi kao volonter broj mjesta na akciji se ažurira te kada taj broj dosegne maksimalni daljnje prijave se onemogućavaju. |
| F-013 | Sustav vodi kalendar eko-udrugama u kojem vide sve nadolazeće akcije i popunjenost mjesta na tim akcijama. | Srednji | Odobreni zadatak | Eko-udruga u kalendaru vidi nadolazeće akcije, broj prijavljenih volontera za te akcije i ukupni broj mjesta. |
| F-014 | Sustav omogućuje prikaz lokacije akcije čišćenja na karti s rutom dolaska do lokacije. | Srednji | Odobreni zadatak | Kada se akcija selektira prikazuje se ruta do mjesta okupljanja od trenutne lokacije korisnika. |
| F-015 | Sustav automatski generira događaj u Google Calendaru korisnika kada eko-udruga kreira akciju čišćenja ili kada se građanin prijavi kao volonter. | Visok | Odobreni zadatak | Korisnik u svome Google Calendaru može vidjeti događaj koji sadrži termin, upute za akciju, poveznicu na lokaciju akcije i automatski podsjetnik prije same akcije. |
| F-016 | Sustav prikazuje prognozu za termin akcije na toj lokaciji. | Visok | Odobreni zadatak | U sučelju volontera i udruge se prikazuje prognoza za taj termin na toj lokaciji. |
| F-017 | Sustav u sučelju ističe crveno upozorenje i nudi opciju odgađanja ako je predviđeno nevrijeme za termin čišćenja. | Visok | Odobreni zadatak | Pri najavi nevremena u sučelju se prikazuje crveno upozorenje i eko-udruzi se nudi opcija odgode ili prebacivanja termina. |
| F-018 | Sustav omogućuje učitavanje fotografije "Dokaza o sanaciji" od strane voditelja eko-udruge kako bi se poslao zahtjev za zatvaranje prijave. | Visok | Odobreni zadatak | Zahtjev za zatvaranje prijave se šalje kada voditelj priloži fotografiju. Nakon što ju administrator potvrdi prijava dobiva status "Očišćeno". |
| F-019 | Sustav omogućuje administratoru da stvori službeni nalog i pošalje ga komunalnoj tvrtci jednim klikom za otpad koji smatra opasnim ili prevelikim za akcije čišćenja eko-udruga. | Visok | Odobreni zadatak | Jednim klikom generira se službeni nalog, proslijeđuje se nadležnoj tvrtci, prijava dobiva status "Službena sanacija" (?i prijavu eko-udruga više ne može pretvoriti u akciju čišćenja za volontere.?) |
| F-020 | Sustav omogućava administratoru provjeru prijavljenih udruga kako bi se osiguralo da se prijavljuju samo registrirane organizacije. | Visok | Odobreni zadatak | Samo se registrirane organizacije mogu prijaviti za sudjelovanje i mogu stvarati akcije čišćenja. |
| F-021 | Sustav omogućuje administratorima blokiranje problematičnih korisnika koji šalju lažne prijave. | Srednji | Odobreni zadatak | Kada administrator blokira korisnika taj korisnik se ne može prijaviti ni prijavljivati odlagališta otpada. |
| F-022 | Sustav omogućava pregled statističkih grafikona administratoru (broj prijava po mjesecima, najkritičniji kvartovi, postotak uspješnosti). | Nizak | Odobreni zadatak | Administrator u sučelju može pregledati statističke grafikone (broj prijava po mjesecima, najkritičniji kvartovi, postotak uspješnosti). |

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
| NF-1.2 | Osobni podaci korisnika su dostupni samo ovlaštenim ulogama te se koriste samo za rad sustava. Građanin vidi detalje samo vlastitih prijava, a e-pošta korisnika vidljiva je samo administratoru. | Visok | Zahtjev dionika iz [1.2](./1-Projekt.md#1.2-Ciljani-korisnici-i-dionici) | Testni scenarij: Samo administrator može dohvatiti podatke drugih korisnika, a građani vide samo vlastite prijave (?osim e pošte koji se osobni podaci građanina biljeze?) |
| NF-1.3 | Lozinke koje je administrator kreirao pohranjuju se u obliku hasha. | Visok | ?Zahtjev dionika iz [1.2](./1-Projekt.md#1.2-Ciljani-korisnici-i-dionici)? ili samo praksa  | Provjera: U bazi nijedna lozinka ne smije biti čitljiva. |
| NF-1.4 | Samo korisnik s ulogom administratora može izvršavati radnje administratora.  | Visok | Odobreni zadatak (Uloga C ima potpuna prava kontrole nad bazom podataka i korisnicima.) | Testni scenarij: Uloge građanina i eko-udruga ne mogu izvršiti nijednu od radnji administratora u 100% pokušaja. |
| NF-2.1 | Prijava divljeg odlagališta se može napraviti u 2 koraka (učitavanje fotografije i odabir kategorije otpada, a lokacija se automatski učitava uz dopuštenje korisnika). | Srednji | Odobreni zadatak ("Građanin koristi klijentski dio aplikacije koji mora biti maksimalno intuitivan za rad na otvorenom.") | Provjera: Proces prijave divljeg odlagališta je moguće ispuniti u samo 2 koraka. |
| NF-3.1 | Obavijesti o mijenjanju statusa prijave stiže građaninu unutar ?x? od promjene statusa. | Srednji | Odobreni zadatak ("Građani u realnom vremenu vide pomiče li se njihova prijava...") | Mjerenje: Promijeniti status ?x? puta i izmjeriti vrijeme do obavijesti koje svaki put mora biti manje od ?x?. |
| NF-3.2 | Ako je neki od vanjskih servisa nedostupan u sučelju aplikacije se prikazuje poruka, a ostatak aplikacije koji ne ovisi o tome servisu ostaje funkcionalan. | Srednji | Odobreni zadatak ("...uspješno implementirati i dokumentirati sljedeće tri vanjske integracije...") | Testni scenarij: Simulacijom pokazati da se aplikacija neće potpuno srušiti ako su sva 3 API-a nedostupna i da će ostali dijelovi funkcionirati ako samo neki od ta 3 API-a ne rade. |
| NF-3.3 | Mobilno sučelje radi na trenutnim verzijama Androida i ios-a, a web sučelje radi u trenutnim verzijama svih glavnih preglednika. | Srednji | Odobreni zadatak (" Sustav se sastoji od mobilnog sučelja prilagođenog radu na terenu (prijavljivanje i navigacija) te web sučelja namijenjenog administraciji i organizaciji događaja.") | Provjera: Pregledavanje funkcionalnosti na svim glavnim preglednicima i na ?x? mobilnih uređaja. |

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

| ID uloge ili aktera | Uloga | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- | --- |
| A-01 | Građanin | Akter - koristi mobilno sučelje, prijavljuje odlagališta, prati vlastite prijave i prijavljuje se na akcije čišćenja | F-001, F-004, F-005, F-006, F-007, F-008, F-012, F-014, F-015, F-016; NF-1.2, NF-2.1, NF-3.1, NF-3.3 |
| A-02 | Eko-udruga | Akter - koristi web i mobilno sučelje, pregledava prijave, organizira akcije te potvrđuje sanacije fotografiranjem | F-010, F-011, F-013, F-015, F-016, F-017, F-018; NF-3.2, NF-3.3 |
| A-03 | Administrator (komunalni redar) | Akter - koristi web sučelje, upravlja korisnicima, izdraje službene naloge, blokira korisnike, odobrava udruge, pregledava statistiku | F-002, F-003, F-009, F-018, F-019, F-020, F-021, F-022, NF-1.3, NF-1.4 |
| D-01 | Ugovorena komunalna tvrtka | Dionik - ne koristi aplikaciju, ali prima službene naloge i sanira opasni i veliki otpad | F-019 |
| D-02 | Agencija za zaštitu podataka | Dionik - ne koristi aplikaciju, ali određuje kako se obrađuju i koriste osobni podaci | NF-1.1, NF-1.2, NF-1.3 |

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
| C-01 | Ograničenje | [Fiksni tehnički ili procesni uvjet] | [Zadatak / Pravila] | [Utjecaj na arhitekturu i oblikovanje] |
| AS-01 | Pretpostavka | [Očekivani uvjet (npr. o podacima ili okolini)] | [Procjena tima] | [Kako i kada će se provjeriti valjanost] |
| C-01 | Ograničenje | Aplikacija implementira 3 vanjske integracije: Google Maps API, Google Calendar API i OpenWeatherMap API. | Odobreni zadatak | Svaka integracija treba imati testni scenarij, a ako je servis nedostupan obrađuje se prema NF-3.2 |
| C-02 | Ograničenje | Registracija i prijava korisnika se provodi s OAuth 2.0 | Odobreni zadatak | Prijava i registracija se dizajnira preko OAuth 2.0 |
| C-03 | Ograničenje | Sustav ima mobilno sučelje za građane i web sučelje za eko-udruge i administratore. Administratori koriste samo web sučelje. | Odobreni zadatak | Ovlasti se provjeravaju na poslužitelju neovisno o kojem je sučelju riječ. |
| C-04 | Ograničenje | Svaka prijava divljeg odlagališta mora imati fotografiju, lokaciju i kategoriju otpada. | Odobreni zadatak | Sva polja se trebaju provjeriti prilikom slanja prijave (F-004) i svi se podaci trebaju pohraniti u bazi. |
| C-05 | Ograničenje | Obrada osobnih podataka mora biti usklađena s primjenjenim propisima. | Zahtjev dionika iz [1.2](./1-Projekt.md#1.2-Ciljani-korisnici-i-dionici) | Pristup podacima je ograničen prema propisanim ulogama, podaci koji se prikupljaju su isključivo nužni za rad aplikacije (NF-1.2) |
| AS-01 | Pretpostavka | Građani se prijavljuju OAuth 2.0, a administrator ručno kreira druge račune. | Procjena tima | ?nejasno iz zadatka. što su drugi računi? samo redari ili i eko udruge, ako su oboje što se događa s F-020 (provjeravanjem eko udruge)? |
| AS-02 | Pretpostavka | Građanin dopušta pristup lokaciji uređaja tijekom prijave divljeg odlagališta, a ako ne omogućuje mu se ručni unos lokacije na karti | Procjena tima | Ispitati ponašanje pri odbijanju dozvole na stvarnom uređaju (F-004). |
| AS-03 | Pretpostavka | Područje regije aktivnosti eko-udruge je definirana unaprijed tj. eko-udruga ju je postavila pri stvaranju računa. | Procjena tima | Sukladno regiji eko-udruge testiranjem se provjerava jesu li se filtrirale pravilne prijave u F-010. |


<details>
<summary><strong>Ograničenja nasuprot pretpostavkama</strong></summary>

Ograničenje je uvjet koji tim mora poštovati; pretpostavka je uvjet na koji se tim oslanja i koji treba ponovno provjeravati.

**Primjer — projektni kontekst CrisisMapa:**

| ID | Ograničenje ili pretpostavka | Izvor | Posljedica ili način provjere |
| --- | --- | --- | --- |
| C-01 | Odobreni zadatak zahtijeva OAuth prijavu u sustav za uređivanje vlastitih prijava korisnika. | Odobreni zadatak  | Zaštićeno uređivanje projektirati oko odabranog pružatelja identiteta; provjeriti autorizirane i neautorizirane zahtjeve. |
| AS-01 | Prijave koje se prikazuju na karti imaju uporabive koordinate. | Pretpostavka o podacima  | Pregledati ogledne i uvezene prijave; planirati prikaz prijava bez valjanih koordinata. |

**Ograničenje nasuprot pretpostavci:** C-01 navodi obvezujuću odluku i njezin arhitekturni učinak; AS-01 je moguće provjeriti i može se pokazati netočnim. Nemojte kopirati C-01 ako OAuth nije dio stvarnog odobrenog zadatka. Projektni odgovor objasnite u arhitekturi bez prepisivanja ove tablice.

</details>

---

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
|  |  |  |  |

<details>
<summary><strong>Bilježenje značajne promjene</strong></summary>

**Primjer scenarija — odluka tijekom pregleda CrisisMapa:**

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| [Datum pregleda] | F-004, NF-01 | Dodati ručni odabir lokacije kada korisnik odbije geolokaciju preglednika; bez toga građanin ne može podnijeti prijavu kriznog događaja s lokacijom. | [Poveznica na stvarnu bilješku pregleda ili zadatak tima] |

**Razlog promjene:** Zapis navodi zahvaćene stavke i objašnjava razlog iz perspektive korisnika, a zatim upućuje na dokaz odluke.  Nakon stvarne odluke ažurirajte trenutačne zahtjeve; stilska izmjena teksta ne zahtijeva zapis u dnevniku promjena. Trenutačni red zadataka držite u alatu za praćenje zadataka.

</details>

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | [UC-001] | [Komponenta, modul ili drugo mjesto realizacije] | [ST-01, CT-01 ili druga provjera] |
|  |  |  |  |

<details>
<summary><strong>Povezivanje zahtjeva, slučajeva uporabe i ispitivanja</strong></summary>

**Primjer — poveznice zahtjeva CrisisMapa:**

| ID zahtjeva | Obrazac uporabe / ponašanje | Arhitekturna realizacija | Ispitivanje / provjera |
| --- | --- | --- | --- |
| F-004 | UC-002 Podnošenje prijave kriznog događaja | Web-klijent; API za prijave; usluga za prijave | T-01 Valjana prijava; T-02 Nedostaje lokacija; T-03 Odbijeno dopuštenje za geolokaciju |
| F-001 | UC-001 Registracija računa | [Odgovarajući dio sustava u projektu koji uključuje registraciju] | T-04 Valjana registracija; T-05 Postojeća adresa e-pošte |

**Pokrivenost i dokazi:** Svaki redak pokazuje gdje je zahtjev opisan kao ponašanje, gdje je ostvaren u sustavu i gdje se nalazi dokaz njegove provjere. Zahtjev ne mora imati zaseban obrazac uporabe ako ne opisuje korisničku interakciju; tada navedite relevantno ponašanje, arhitekturni element ili drugi prikladan način realizacije. U svojem projektu koristite stvarne nazive komponenata, modula i provjera iz dokumentacije i implementacije. Nedostajuću poveznicu ostavite praznom ili označite kao *na čekanju* uz kratak razlog. Stvarni rezultati ispitivanja bilježe se uz ispitne slučajeve; ova tablica pokazuje gdje ih pronaći.

</details>

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Kontrolna točka 1 (7. tjedan) | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Demo 2 (11. tjedan) | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Kontrolna točka 2 (14. tjedan) | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

<details>
<summary><strong>Bilježenje odluka nakon pregleda</strong></summary>

**Primjer scenarija — pregled zahtjeva CrisisMapa:**

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| 7. tjedan (primjer) | Demonstracija pokazuje da odbijanje pristupa lokaciji preglednika onemogućuje podnošenje prijave. | Dogovoriti ručni odabir lokacije; ažurirati F-004 i primjer NF-01 te razlog zabilježiti u odjeljku 2.5. |

**Odluka povezana s povratnom informacijom:** Zapis povezuje opaženo ponašanje s konkretnom promjenom zahtjeva i izbjegava zapisnik cijelog sastanka. Zapišite samo stvarne povratne informacije i odluke za kontrolne točke. Konzultacije u nekom drugom tjednu ne stvaraju dodatnu obaveznu predaju.

</details>

---

>**Završna provjera:** Zahtjevi su aktualni, provjerljivi i povezani. Svaki važan zahtjev moguće je pratiti od njegova opisa i ponašanja preko mjesta realizacije u sustavu do odgovarajućeg ispitivanja ili druge provjere. Poveznice koriste stvarne identifikatore i nazive iz projektne dokumentacije.

