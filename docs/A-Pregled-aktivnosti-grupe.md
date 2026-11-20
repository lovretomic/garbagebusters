# A. Pregled aktivnosti grupe

Putem pregleda aktivnosti grupe prikazujemo kako je tim organizirao projekt, raspodijelio rad, reagirao na važne probleme i pridonio rezultatu.

## A.1 Evidencija sastanaka
															
>BZ = Borna Zigo,
LT = Lovre Tomić,
MT = Mak Terbovc,
LK = Lovre Kolanović,				
LŽ = Luka Žeruk,
FV = Fran Vlahović



| Datum i sudionici | Glavna tema | Donesena odluka ili zadatak | Poveznica na zadatak ili rezultat |
| --- | --- | --- | --- |
| 15. 10. 2026.; BZ, LT, MT, LK, LŽ, FV | Početna organizacija projekta i podjela uloga | Uloge: LT voditelj i dizajn; MT frontend i API; BZ i LŽ backend; FV baza i pomoć s dokumentacijom; LK dokumentacija i dijagrami. Za frontend odabrani React i TypeScript. Zadaci: postaviti React (MT); izraditi shemu baze (FV); dizajn sučelja (LT); predložak dokumentacije i zahtjevi (LK); početna backend struktura (BZ, LŽ). Otvoreno: izbor baze (FV) i načina deploymenta (BZ). | Issues #1, #3, #7, #15, #16; PR #6, #18, #19 |
| 19. 10. – 25. 10. 2026.; BZ, LŽ, MT, LT, FV | Usklađivanje backend i frontend zadataka | Dogovoreno usklađivanje ulaza i odgovora API ruta te pravodobno javljanje promjena. Zadaci: Prisma ORM (LŽ); Google autentifikacija i sesije (BZ); zajednički stilovi i komponente (MT); početna stranica, prijava i gumb za Google prijavu (MT). | Issues #25, #21, #11, #12; PR #23, #28 |
| 26. 10. – 28. 10. 2026.; BZ, LT, MT | Povezivanje frontenda i backenda | Frontend se usklađuje s backend sučeljem (obvezna polja, oblik podataka). Zadaci: Google prijava ↔ korisnici u PostgreSQL-u (BZ); gumb za prijavu ↔ backend (MT); prikaz podataka prijavljenog korisnika na početnoj (MT); javna objava aplikacije (BZ). | Issues #42, #61, #62; PR #45, #70, #64 |
| 27. 10. – 2. 11. 2026.; LŽ, BZ, LT, MT | Pregled PR-ova i ispravljanje backend pogrešaka | Ispravke se dijele prema dijelovima koje su BZ i LŽ radili; prije spajanja obvezne lokalne provjere, pregled koda i GitHub Actions. Zadaci: ispravci prema pregledima PR-a #49 (LŽ); ujednačavanje poruka i obrade pogrešaka (LŽ); stvaranje, uređivanje i brisanje prijava (BZ); provjere koda i GitHub Actions (LT). | PR #49, #46, #48 |
| 5. 11. i 7. 11. 2026.; BZ, LŽ, LT, MT, FV, LK | Zajedničko definiranje F-007 (pregled vlastitih prijava) | Korisnik vidi samo svoje prijave (GET /reports/me); kartice prikazuju broj prijave, koordinate, sliku i status. Zadaci: dohvat uz provjeru vlasništva (BZ); kartice prijava na korisničkoj stranici (MT); usklađivanje podataka backenda i prikaza (BZ, MT); povezivanje kartica sa stvarnim podacima (MT). | Issue #30; PR #46, #50, #53, #68, #69 |
| 13. 11. – 19. 11. 2026.; BZ, MT, LT | Povezivanje i provjera F-007 | Provjera provedena: nova prijava #10 vidljiva nakon osvježavanja, zamjenska slika prikazana. Zadaci: polje photos_before u odgovoru (BZ); povezivanje početne stranice s GET /reports/me i usklađivanje statusa (MT); provjera različitih računa, zamjenske slike i nove prijave (MT, uz BZ). Nema zabilježenih otvorenih pitanja. | PR #68, #69; MT snimka provjere |


## A.2 Plan rada

Putem GitHub Projects ploče prikazujemo planirani redoslijed rada i odgovornosti u timu.

**Trenutačni plan:** [Poveznica na GitHub Projects ploču](https://github.com/users/lovretomic/projects/2)

## A.3 Tablica aktivnosti

Prikaz rada članova na važnim projektnim aktivnostima i približan trud koji prijavljuju.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Oblikovanje i izrada sheme baze podataka (ERDPlus, SQL, provjera tablica u PostgreSQL-u) | FV | 8 | Shema svih entiteta i veza te SQL kod; [Issue #3](https://github.com/lovretomic/garbagebusters/issues/3). |
| Prebacivanje SQL sheme u Prismu i pomoć timu pri postavljanju | FV | 2 | Prisma shema prema SQL kodu; povezano s [Issue #25](https://github.com/lovretomic/garbagebusters/issues/25), [PR #23](https://github.com/lovretomic/garbagebusters/pull/23). |
| Dokumentacija: dijagrami (.puml), tablice i zadaci dokumentacije | FV | 7 | PlantUML dijagrami i ispunjene tablice dokumentacije; [upisati poveznicu na mapu s dijagramima]. |
| Inicijalna konfiguracija frontenda (Vite, yarn, SCSS varijable, SVG ikone) | MT | 2 | [Issue #1](https://github.com/lovretomic/garbagebusters/issues/1), [PR #6](https://github.com/lovretomic/garbagebusters/pull/6); [Issue #11](https://github.com/lovretomic/garbagebusters/issues/11), [PR #13](https://github.com/lovretomic/garbagebusters/pull/13). |
| Komponente početne stranice (StartButton, Button, Input, PasswordTooltip) | MT | 5 | [Issue #12](https://github.com/lovretomic/garbagebusters/issues/12), [PR #26](https://github.com/lovretomic/garbagebusters/pull/26). |
| Početna stranica (višekoračni tok, validacija, gumb za Google prijavu) | MT | 3 | [Issue #8](https://github.com/lovretomic/garbagebusters/issues/8), [Issue #44](https://github.com/lovretomic/garbagebusters/issues/44), [PR #28](https://github.com/lovretomic/garbagebusters/pull/28). |
| Postavljanje routera | MT | 1 | [Issue #29](https://github.com/lovretomic/garbagebusters/issues/29). |
| Komponente početne stranice građanina (ReportCard, ActionCard, CardCarousel, UserGreeting) | MT | 7 | [Issue #30](https://github.com/lovretomic/garbagebusters/issues/30), [PR #53](https://github.com/lovretomic/garbagebusters/pull/53). |
| Početna stranica građanina (CitizenHomePage, responzivna) | MT | 4 | Stranica s UserGreeting i dva carousela; [Issue #30](https://github.com/lovretomic/garbagebusters/issues/30). |
| Povezivanje stranice s backendom (/reports/me, /auth/me, profile_photo) | MT | 3 | Prikaz stvarnih prijava i korisnika; PR #69. |
| Dizajn korisničkog sučelja u Figmi (identitet, znak, stranice, komponente, tok) | LT | 12 | Dizajn za računala i mobitele; [Issue #7](https://github.com/lovretomic/garbagebusters/issues/7) (u tijeku). |
| Postavljanje projekta (repozitorij, zaštita grana, provjere koda, struktura, admin aplikacija) | LT | 5 | [Issue #40](https://github.com/lovretomic/garbagebusters/issues/40), [#41](https://github.com/lovretomic/garbagebusters/issues/41), [#47](https://github.com/lovretomic/garbagebusters/issues/47), [PR #48](https://github.com/lovretomic/garbagebusters/pull/48). |
| Pregled i ispitivanje koda suradnika | LT | 5 | Svaki PR ocijenjen ili vraćen s komentarima, npr. [PR #49](https://github.com/lovretomic/garbagebusters/pull/49). |
| Razvoj frontenda: zajednički layout, navigacija i početna verzija karte | LT | 3 | [Issue #32](https://github.com/lovretomic/garbagebusters/issues/32), [PR #63](https://github.com/lovretomic/garbagebusters/pull/63). |
| Priprema radne okoline na backendu (struktura direktorija, konfiguracija Prisme) | LŽ | 5 | Osnove za daljnji razvoj backenda; [Issue #25](https://github.com/lovretomic/garbagebusters/issues/25), [PR #23](https://github.com/lovretomic/garbagebusters/pull/23). |
| Rute i funkcije za akcije čišćenja (dodavanje, brisanje, dohvat aktualnih i starih) | LŽ | 5 | [Issue #27](https://github.com/lovretomic/garbagebusters/issues/27), [PR #49](https://github.com/lovretomic/garbagebusters/pull/49). |
| Rute i funkcije za prijavu volontera na akcije i pregled vlastitih prijava | LŽ | 7 | [Issue #27](https://github.com/lovretomic/garbagebusters/issues/27), [PR #49](https://github.com/lovretomic/garbagebusters/pull/49). |
| Konfiguracija i javno postavljanje aplikacije (Render Web Service, build i start naredbe, varijable okruženja) | BZ | 10 | Javno dostupna aplikacija: https://ecosentry-backend-2jo9.onrender.com; [Issue #62](https://github.com/lovretomic/garbagebusters/issues/62), [PR #64](https://github.com/lovretomic/garbagebusters/pull/64). |
| Konfiguracija i ispitivanje Google OAuth autentifikacije (callback, prijava, sesije, dohvat korisnika, odjava) | BZ | 17 | Provjerena prijava Google računom i odjava; rute /auth/google, /auth/google/callback, /auth/me; [Issue #21](https://github.com/lovretomic/garbagebusters/issues/21), [PR #45](https://github.com/lovretomic/garbagebusters/pull/45). |
| Povezivanje i testiranje PostgreSQL baze (Neon na Renderu, spremanje korisnika, demonstracijski podaci) | BZ | 7 | Provjereno spremanje Google korisnika i dohvaćanje podataka; [Issue #42](https://github.com/lovretomic/garbagebusters/issues/42), [PR #45](https://github.com/lovretomic/garbagebusters/pull/45). |
| Ispitivanje backend API-ja za F-007 (/reports/me, /reports/:id, kontrola pristupa) | BZ | 11 | Provjereno dohvaćanje prijava iz baze i odbijanje neprijavljenih korisnika; backend spreman za integraciju s frontendom; [PR #46](https://github.com/lovretomic/garbagebusters/pull/46), [PR #68](https://github.com/lovretomic/garbagebusters/pull/68). |
| Predložak dokumentacije i definiranje funkcionalnih i nefunkcionalnih zahtjeva | LK | 6 | [Issue #15](https://github.com/lovretomic/garbagebusters/issues/15), [PR #14](https://github.com/lovretomic/garbagebusters/pull/14); [Issue #16](https://github.com/lovretomic/garbagebusters/issues/16), [PR #17](https://github.com/lovretomic/garbagebusters/pull/17). |
| Ispravak funkcionalnih i nefunkcionalnih zahtjeva | LK | 3 | [Issue #54](https://github.com/lovretomic/garbagebusters/issues/54), [PR #56](https://github.com/lovretomic/garbagebusters/pull/56). |
| Pisanje obrazaca uporabe i njihov ispravak | LK | 6 | [Issue #57](https://github.com/lovretomic/garbagebusters/issues/57), [PR #58](https://github.com/lovretomic/garbagebusters/pull/58), [PR #66](https://github.com/lovretomic/garbagebusters/pull/66). |
| Prvi dio finalnih ispravaka dokumentacije, README i A-Pregled aktivnosti | LK | 6 | [Issue #59](https://github.com/lovretomic/garbagebusters/issues/59), [PR #73](https://github.com/lovretomic/garbagebusters/pull/73). |
| Finalni ispravci i nadopuna dokumentacije prije 1. kontrolne točke | LK | 4 | [Issue #74](https://github.com/lovretomic/garbagebusters/issues/74) |


## A.4 Pregled promjena u repozitoriju

Prikaz kada su promjene napravljene u repozitoriju i tko ih je napravio.

**Prikaz aktivnosti repozitorija:** [GitHubov prikaz `Contributors`](https://github.com/lovretomic/garbagebusters/graphs/contributors) - obuhvaća razdoblje prošla tri mjeseca od datuma otvaranja poveznice

## A.5 Ključni inženjerski izazovi i rješenja

Dokumentiranje stvarne tehničke i organizacijske prepreke s kojima se tim suočio, poduzete korektivne inženjerske korake te konačni ishod.

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| Pregled PR-a #49 (prijave na akcije čišćenja) otkrio je pogreške u backendu: zamijenjeni argumenti `userId` i `actionId`, nedostajući `await`, previše podataka o volonterima u odgovoru API-ja i neprovjerena zaštita od prekoračenja kapaciteta akcije. | BZ i LT ostavili su komentare u pregledu PR-a, a LŽ je ispravio pogreške, ograničio podatke o volonterima i doradio rute za akcije (popunjenost, zabrana prijave na završenu akciju). Backend tim ujednačio je poruke i obradu pogrešaka, a LT je postavio provjere koda i GitHub Actions koje se izvršavaju prije spajanja (PR #48). | Ispravci su provedeni i issue #27 je zatvoren s PR-om #49. Provjere prije spajanja sada vrijede za frontend i backend. |
| Izvorni zahtjevi kupca bili su nejasni ili nisu bili provjerljivi: tko se prijavljuje putem OAuth-a, a kome administrator stvara račun, kako se određuje regija udruge, što kad korisnik odbije lokaciju te nemjerljive vrijednosti u NF-3.1 i NF-3.3. | Tim je 26. 10. razjasnio zahtjeve s kupcem (asistentom), preradio F-001, F-002, F-010, NF-3.1 i NF-3.3, zabilježio pretpostavke AS-01–AS-05 u 2.4 i razloge u 2.5. Dana 16. 11. dogovoreno je da se slanje naloga komunalnoj tvrtci odvija izvan sustava (AS-06). | Zahtjevi su provjerljivi, a promjene imaju dokaz u 2.5. Preostalo: AS-07 (događaji u Google Calendaru ne ažuriraju se pri promjeni termina) čeka validaciju nakon 1. kontrolne točke. |
| Frontend nije mogao prikazati fotografiju prijave jer odgovor rute `GET /reports/me` nije sadržavao polje `photos_before`; statusi iz backenda nisu odgovarali oznakama u sučelju. | BZ je dodao polje `photos_before` u odgovor (PR #68). MT je povezao početnu stranicu s `GET /reports/me`, zamijenio unaprijed zadane prijave stvarnima i uskladio statuse (PR #69). BZ i MT provjerili su prikaz s dva računa („Mrak” bez prijava, „Mak” s prijavama #8 i #9), zamjensku sliku i novu prijavu. | Provjera je uspjela: nova prijava #10 vidljiva je nakon osvježavanja sa statusom „Prijavljeno” (Makova snimka). Ograničenje: testna prijava stvorena je preko `POST /reports` iz razvojne konzole jer obrazac za prijavu (issue #34) još nije izrađen. |
