# 1. Opseg projekta

**Cilj:** Objasniti odobreni projektni zadatak vlastitim riječima tima. Čitatelj treba razumjeti problem, ciljane korisnike, cilj projekta i njegove granice bez prethodnog čitanja detaljnih zahtjeva.

## 1.1 Problem i cilj projekta

**Cilj:** Jasno razgraničiti problem koji se rješava od predloženog rješenja i stvarne koristi za korisnika.

Divlja odlagališta otpada predstavljaju ekološki problem koji građani ne mogu na jednostavan način prijaviti i pratiti što se dalje događa s prijavom. Aplikacija Ecosentry omogućuje prijavljivanje divljih odlagališta i povezuje građane, eko-udruge te komunalne redare kako bi olakšala proces prijave, organizacije čišćenja i uklanjanje otpada.

<details>
<summary><strong>Očekivane koristi i potkrepljujući dokazi</strong></summary>

**Primjer — CrisisMap:** „Tijekom teških vremenskih prilika građaninu mogu trebati prijave kriznih događaja relevantne za njegovu lokaciju. CrisisMap ima za cilj prikazati lokacijski relevantne prijave kriznih događaja na karti kako bi ih građanin mogao pronaći na jednom mjestu.” Time su navedeni problem, ciljani korisnik, predložena mogućnost i očekivana korist. Ne tvrdi se da je izmjereno smanjenje vremena reagiranja niti da aplikacija ima integraciju sa službom za hitne intervencije. Tim i dalje mora opisati opseg odobren za vlastiti projekt.

„Aplikacija smanjuje vrijeme odgovora na krizni događaj za 30 % na temelju simulacija.” Broj očekivanu korist čini konkretnijom, ali odmah zahtijeva provjeru: **gdje je simulacija i kako je postotak izračunan?** Ako takav dokaz ne postoji, očekivanu korist navedite bez brojčanog rezultata.

</details>

## 1.2 Ciljani korisnici i dionici

**Cilj:** Utvrditi osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Građanin | Prijaviti divlje odlagalište otpada, pratiti tijek prijava, praćenje povijesti vlastitih prijava i prijava kao volonter za sudjelovanje u čišćenjima. |
| Eko-udruga | Pregledavanje prijavljenih odlagališta otpada, organiziranje akcija čišćenja, koordiniranje volontera i slanje zahtjeva za zatvaranje prijave. |
| Komunalni redar (administrator) | Pregledavanje i upravljanje korisnicima, kontrola prijava otpada, izdavanje službenih naloga komunalnim tvrtkama te pregledavanje statistike prijava. |
| Agencija za zaštitu podataka | Zahtijeva zaštitu njihovih osobnih podataka s primjenjivim propisima, ne koristi aplikaciju. |

<details>
<summary><strong>Korisnici, dionici i neobavezna persona</strong></summary>

**Primjer — CrisisMap:**

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Građanin | Pronaći informacije o obližnjim kriznim događajima i podnijeti prijavu kriznog događaja s lokacijom. |
| Koordinator pomoći | Pregledati prijave relevantne za područje i dostupne resurse, ako je koordinacija unutar odobrenog opsega. |
| Regulatorno tijelo / Agencija za zaštitu podataka (Dionik) | Zahtijeva osiguravanje anonimnosti prijavitelja i zaštitu osobnih podataka (npr. usklađenost s GDPR-om). Ovaj dionik ne koristi aplikaciju, ali definira ograničenja sustava. |

Riječ je o dvjema različitim potrebama, a ne o dvjema izmišljenim biografijama. Akter komunicira s aplikacijom; demonstrator na kolegiju kojem je rezultat zanimljiv ne mora biti akter aplikacije. Koristite uloge i ovlasti iz svojeg odobrenog zadatka. Persona je neobavezna i korisna je kada pomaže riješiti konkretno projektno pitanje.

**Neobavezni primjer persone:** Ana, koordinatorica pomoći, treba aktualne informacije o resursima kako bi mogla rasporediti pomoć. To može pomoći kada tim odlučuje koje informacije koordinator treba vidjeti prve. Personu opišite samo ako objašnjava projektnu odluku; popis izmišljenih biografija nije obavezni rezultat kolegija.

</details>

## 1.3 Granice projekta

**Cilj:** Jasno definirati granice sustava — što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

**Uključeno:** Prijava divljih odlagališta otpada fotografiranjem i pridruživanjem lokacije, praćenje statusa prijava, organiziranje akcija čišćenja uz prijavu volontera, moderiranje prijava te izdavanje službenih naloga komunalnim tvrtkama.

**Izvan opsega ili odgođeno:** 
- Stvarno izvršavanje službenih sanacija; sustav samo šalje nalog komunalnoj tvrtci i nije povezan s njenim podatkovnim sustavom.
- Automatsko prepoznavanje i kategorizacija otpada na fotografijama prijave; zahtijeva veliki skup podataka i količinu vremena koju ova verzija aplikacije ne može ispuniti.


**Vanjske ovisnosti:** 
- Google Maps API za prikaz karte, postavljanje markera, geokodiranje i prikaz lokacije akcije čišćenja s uputama za dolazak.
- Google Calendar API za automatsko generiranje događaja u korisnikovome Google kalendaru s točnim terminom, poveznicom na lokaciju i automatske podsjetnike. 
- OpenWeatherMap API za vremensku prognozu na lokaciji tijekom akcije čišćenja s upozorenjima na nevrijeme.
- OAuth 2.0 za registraciju i prijavu korisnika.
- Aplikacija ostaje odgovorna za vlastite podatke o prijavama, korisnicima i statusima.

<details>
<summary><strong>Definiranje početne granice projekta</strong></summary>

**Primjer — CrisisMap:**  
**Uključeno:** Podnošenje prijave kriznog događaja s lokacijom i pregled prijava na karti.  
**Isključeno:** Automatsko angažiranje hitnih službi; prikaz prijave ne odobrava niti pokreće službenu intervenciju.  
**Vanjska ovisnost:** Pružatelj kartografske usluge omogućuje prikaz karte; aplikacija ostaje odgovorna za vlastite podatke o prijavama.

Ovo je konkretna granica jer razdvaja prikaz informacija od službenog odgovora hitnih službi i određuje koji sustav osigurava kartu. Izuzeće i ovisnost dio su **nastavnog scenarija**, a ne tvrdnja o tome što objavljena aplikacija stvarno implementira; te činjenice određuju odobreni opseg i stvarna aplikacija tima.

**Drugi primjer korisne granice:** U prvoj implementaciji usredotočite se na koordinaciju odgovora na poplavu. Navedite vrste događaja ili korisnika koje pokriva odobreni projekt umjesto obećavanja svih mogućih kriznih procesa. Predviđanje pomoću umjetne inteligencije ili obuku u virtualnoj stvarnosti navedite kao budući rad samo ako predstavljaju smislen sljedeći korak, a ne kao pretpostavljene funkcionalnosti prve inačice.

Tvrdnja poput „modularna arhitektura omogućuje brzo postavljanje u novim regijama” zahtijeva stvarno projektno uporište. Ovdje nemojte obećavati prilagodljivost samo zato što zvuči kao poželjna korist projekta.

Ovaj pregled zadržite na razini opsega: navedite glavnu mogućnost i njezinu granicu bez popisivanja svakog zahtjeva ili projektne pojedinosti. Ono što je stvarno dovršeno i ono što je ostalo nedovršeno navedite u završnim rezultatima, a ne u ovom početnom opisu.

</details>

## 1.4 Postojeći pristupi i opravdanost projekta

**Cilj:** Objasniti kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

U Hrvatskoj postoji aplikacija [ELOO](https://eloo.haop.hr/public/o-projektu) koja građanima omogućuje prijavu divljih odlagališta otpada i [prijavu tih odlagališta nadležnim komunalnim redarima](https://mzozt.gov.hr/o-ministarstvu-1065/djelokrug/uprava-za-procjenu-utjecaja-na-okolis-i-odrzivo-gospodarenje-otpadom-1271/gospodarenje-otpadom/prijava-nezakonitog-odbacivanja-otpada-u-okolis/10418). Ecosentry dodatno omogućuje uključivanje eko-udruga i volontera kako bi se sanacija manjih odlagališta otpada mogla lakše koordinirati. EcoSentry ne zamjenjuje službene kanale prijave.

<details>
<summary><strong>Postojeći pristupi i opravdanost projekta</strong></summary>

**Primjer — CrisisMap:** „Nakon teškog vremenskog događaja građanin će možda morati provjeriti izvor meteoroloških upozorenja i zaseban izvor lokalnih prijava. Predloženi prikaz na karti u CrisisMapu objedinjuje prijave kriznih događaja relevantne za odabranu lokaciju. Aplikacija ne zamjenjuje službena upozorenja ni hitne službe.” Time se objašnjava potreba i namjeravana granica projekta bez tvrdnje da su svi postojeći kanali neučinkoviti. Prva je rečenica **primjer korisničkog scenarija**, a ne izmjeren nalaz o stvarnim korisnicima. Ako tim navodi konkretnu službu upozoravanja ili konkurentski proizvod, treba navesti izvor. Pregled konkurencije i snimke zaslona nisu obavezni.

Ako je postojeće rješenje stvarno utjecalo na projekt, usporedite samo relevantnu funkcionalnost, primjerice jasnoću karte ili potrebnu integraciju. Izbjegavajte unaprijed zadani broj proizvoda ili tablicu kriterija koji nisu povezani s odobrenim zadatkom.

</details>

---

>**Završna provjera:** Opis problema, cilj projekta, korisnici i dionici, granice opsega te postojeći pristupi međusobno su usklađeni. Navedene koristi ne predstavljaju neprovjerene tvrdnje, a uključene i izostavljene funkcionalnosti odgovaraju odobrenom projektnom zadatku.
