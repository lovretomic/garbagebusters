
# EcoSentry


Aplikacija Ecosentry omogućuje prijavljivanje divljih odlagališta i povezuje građane, eko-udruge te komunalne redare kako bi olakšala proces prijave, organizacije čišćenja i uklanjanje otpada.

**Projekt na kolegiju:** Ovu je aplikaciju razvio studentski tim u sklopu kolegija [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz) na Fakultetu elektrotehnike i računarstva Sveučilišta u Zagrebu (FER).

## Opis aplikacije

Divlja odlagališta otpada ekološki su problem koji građani ne mogu jednostavno prijaviti niti pratiti što se dalje događa s prijavom. EcoSentry je namijenjen građanima, eko-udrugama i komunalnim redarima (administratorima): građani prijavljuju odlagališta i prate status prijava, eko-udruge organiziraju akcije čišćenja uz prijavu volontera, a administratori moderiraju prijave i izdaju službene naloge komunalnim tvrtkama. EcoSentry ne zamjenjuje službene kanale prijave (npr. ELOO), nego dodatno uključuje eko-udruge i volontere u sanaciju manjih odlagališta.


**Ključne funkcionalnosti**

- Registracija i prijava Google računom (OAuth 2.0) uz sesije pohranjene u bazi podataka (F-001).
- Pregled povijesti vlastitih prijava: nakon prijave građanin na početnoj stranici vidi kartice svojih prijava s identifikatorom, koordinatama, fotografijom i trenutačnim statusom (F-007).

Za potpuni opseg, zahtjeve, oblikovanje i dokaze ispitivanja pogledajte [docs](./docs/).

<a id="deployment"></a>

## Postavljanje (engl. deployment)

**Javno dostupna aplikacija:** [EcoSentry](https://ecosentry-backend-2jo9.onrender.com)

**Isprobajte:** Prijavite se Google računom, a zatim na početnoj stranici građanina pogledajte kartice vlastitih prijava i njihove statuse.


**Demonstracija:** Prijava je obavezna i provodi se Google računom (OAuth 2.0).

**Ograničenja:** Obrazac za prijavu odlagališta još nije izrađen pa se testne prijave stvaraju izravno preko `POST /reports`. Ostala poznata ograničenja i funkcionalnosti na čekanju navedene su u [2.4 ograničenja i pretpostavke](docs/2-Analiza-zahtjeva.md#24-ograničenja-i-pretpostavke).

[Vodič za postavljanje i pokretanje](docs/6-Postavljanje-instalacija-i-konfiguracija.md) opisuje smještaj aplikacije (engl. hosting) koji tim stvarno koristi. Tim može koristiti Render ili drugu platformu koju ste dogovorili s asistentom/demonstratorom.

<a id="quick-start"></a>

## Brzi početak / instalacija

<!-- Obavezno od Demo 1 nadalje. Zamijenite mjesta za unos naredbama koje je drugi član tima uspješno provjerio nakon čistog kloniranja repozitorija. Detaljne upute za administraciju držite u projektnoj dokumentaciji u direktoriju docs/. -->

**Preduvjeti:** Node.js 24.22.3 LTS, Yarn 4.18.1,
PostgreSQL baza podataka (u produkciji Neon)
i Google OAuth klijent.


```bash
git clone https://github.com/lovretomic/garbagebusters.git
cd garbagebusters

# Instalacija ovisnosti
yarn install
cd frontend && yarn install && cd ..
cd backend && yarn install && cd ..

# Pokretanje frontenda i backenda
yarn dev
```

**Adresa:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- Google prijava: http://localhost:5173

**Konfiguracija:** <br>Prije pokretanja potrebno je u
direktoriju backend stvoriti .env datoteku
prema predlošku backend/.env.example i
postaviti potrebne varijable:

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_CALLBACK_URL
- SESSION_SECRET
- DATABASE_URL

Stvarne pristupne podatke nije dopušteno
objavljivati u repozitoriju.


**Provjera:** Nakon pokretanja (`yarn dev`) otvorite http://localhost:5173 i prijavite se Google računom; nakon prijave trebaju se prikazati pozdrav korisniku i kartice njegovih prijava. Rad backenda možete provjeriti otvaranjem http://localhost:3001/auth/me. prijavljenom korisniku vraća njegove podatke, a neprijavljenom odbija pristup. Za detaljno postavljanje pogledajte [projektnu dokumentaciju](docs/Home.md).

## Tehnologije

Navedite nekoliko tehnologija i vanjskih usluga koje bitno određuju kako vaša aplikacija radi. Za svaku navedite njezinu konkretnu ulogu i jedan razlog ili ograničenje važno za projekt. Alat za razvoj ili ispitivanje uključite samo ako je njegova uloga važna za razumijevanje načina na koji je projekt izrađen ili provjeren. Nemojte prepisivati popis ovisnosti (engl. dependencies), statistiku programskih jezika ni popis razvojnih okruženja i komunikacijskih alata. Tablicu provjerite prema stvarnom repozitoriju i pokrenutoj aplikaciji; potrebne verzije i konfiguraciju dokumentirajte u vodiču za instalaciju.

| Tehnologija ili alat | Uloga u ovom projektu | Razlog uporabe ili važno ograničenje |
| -------------------- | --------------------- | ------------------------------------ |
| React, TypeScript i Vite | Klijentski dio: korisničko sučelje koje šalje HTTP zahtjeve prema backendu | Komponentna struktura olakšava ponovnu uporabu elemenata, a TypeScript otkriva pogreške tijekom pisanja koda; dio tima ih prije nije koristio pa je trebalo dodatno učenje. |
| Node.js, Express i TypeScript | Poslužiteljski dio podijeljen u funkcionalne module (`auth`, `reports`, `actions`, `volunteers`, `associations`) | Podjela na module olakšava raspodjelu zadataka, ali ista se funkcionalnost ponekad programira u više mapa. |
| PostgreSQL (Neon) i Prisma ORM | Pohrana prijava, korisnika i ostalih podataka; Prisma povezuje kod i bazu preko modela | Prisma generira TypeScript tipove i olakšava izmjene sheme; nakon svake promjene sheme članovi tima moraju ponovno generirati Prisma kod. |
| express-session i connect-pg-simple | Sesije prijavljenih korisnika pohranjene u PostgreSQL | Backend identitet korisnika (npr. za `GET /reports/me`) uzima iz sesije. |
| Google OAuth 2.0 | Vanjski pružatelj registracije i prijave | Zahtjev odobrenog zadatka (C-02); prijavljeni korisnici dolaze isključivo preko Google računa, osim administratora. |
| Render | Smještaj javne web-aplikacije i backenda | Javna aplikacija ovisi o toj platformi i njezinim varijablama okruženja. |
| GitHub Actions | Automatske provjere koda prije spajanja promjena | Obavezne za frontend i backend prije spajanja u `main`. |

Vanjske integracije Google Maps, Google Calendar i OpenWeatherMap dio su odobrenog zadatka, ali još nisu ostvarene u ovom stadiju projekta pa ovdje nisu navedene.

<a id="team-members"></a>

## Članovi tima

| Član            | Glavna uloga ili doprinos             |
| --------------- | ------------------------------------- |
| Lovre Tomić     | Dizajn i razvoj frontenda             |
| Mak Terbovc     | Razvoj frontenda                      |
| Luka Žeruk      | Razvoj backenda                       |
| Borna Zigo      | Razvoj backenda                       |
| Fran Vlahović   | Baza podataka i pisanje dokumentacije |
| Lovre Kolanović | Pisanje dokumentacije                 |

Uloge se tijekom projekta mogu mijenjati. Repozitorij i dogovoreni alat za praćenje zadataka (engl. task tracker) služe kao dodatni dokazi timskog rada.

## Doprinos projektu

Zadaci i nedostaci bilježe se putem [GitHub Issues](https://github.com/lovretomic/garbagebusters/issues), a plan rada vodi se na [GitHub Projects ploči](https://github.com/users/lovretomic/projects/2). Svaki član radi u zasebnoj grani (branchu), a promjene se u `main` spajaju isključivo putem zahtjeva za uključivanje promjena (pull requesta). Prije spajanja obvezne su lokalne provjere, pregled koda i provjere GitHub Actions.

<a id="license"></a>

**Status licence:**  izvorni kod i dokumentacija projekta EcoSentry objavljeni su pod [MIT licencom](../LICENSE) (© 2026 članovi tima TG01.4 Garbagebusters). Licenca se odnosi samo na kod i dokumentaciju tima.

<a id="ai-usage"></a>

## Uporaba umjetne inteligencije [![AI Usage: Disclosed](https://img.shields.io/badge/AI%20Usage-Disclosed-blue.svg)](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf)

Ovaj projekt slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

**Izjava:** [HOME – Uporaba umjetne inteligencije](./docs/Home.md#korišteni-alati). Ovaj odjeljak bilježi koji su alati korišteni, za koju dokumentaciju ili kod te kako je tim provjerio rezultat.

<a id="code-of-conduct-and-support"></a>

## Kodeks ponašanja i podrška [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Od članova tima očekuje se pridržavanje **Kodeksa ponašanja studenata** Fakulteta elektrotehnike i računarstva Sveučilišta u Zagrebu, pravila timskog rada na kolegiju i [Etičkog kodeksa IEEE-a](https://www.ieee.org/about/corporate/governance/p7-8.html).

---

Struktura dokumentacije prilagođena je predlošku kolegija Programsko inženjerstvo FER-a autora [Vlade Sruka](https://www.fer.unizg.hr/vlado.sruk), licenciranom pod [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Aplikaciju i njezin sadržaj izradio je gore navedeni studentski tim.
