# 3. Obrasci uporabe
## 3.1 Dijagram obrazaca uporabe

![Dijagram obrazaca uporabe: Funkcionalnost građanina](./assets/diagrams/3-1-1-gradanin-UC-v4.png)
_Slika 3.1.1 - Dijagram obrazaca uporabe: Funkcionalnosti građanina_

![Dijagram obrazaca uporabe: Funkcionalnost eko-udruge](./assets/diagrams/3-1-2-ekoudruga-UC-v4.png)
_Slika 3.1.2 - Dijagram obrazaca uporabe: Funkcionalnosti eko-udruge_

![Dijagram obrazaca uporabe: Funkcionalnost administratora (komunalnog redara)](./assets/diagrams/3-1-3-administrator-UC-v5.png)
_Slika 3.1.3: Dijagram obrazaca uporabe - Funkcionalnosti administratora (komunalnog redara)_

**Napomena:** Sustav je prikazan uz pomoć 3 dijagrama jer su svi pokušaji spajanja više aktera u jedan dijagram rezultirali jako nečitljivim i nezgrapnim dijagramom. Zadatak je takav da građanin, eko-udruga i administrator imaju potpuno drukčiji skup obrazaca uporabe te je samim time teže provesti proces generalizacije. Jedino građanin i eko-udruga dijele mali broj obrazaca, ali i tada zbog samoga broja ostalih obrazaca dijagram funkcionalnosti građanina i eko-udruge bi bio nepregledan.

## 3.2 Specifikacije obrazaca uporabe

### UC-01: Prijava putem OAuth-a 2.0

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin ili Eko-udruga |
| **Povezani zahtjevi** | F-001; C-02; NF-1.1, NF-1.2 |
| **Preduvjeti** | Korisnik nije prijavljen i ima račun kod OAuth pružatelja identiteta. Račun u sustavu stvara se automatski pri prvoj prijavi. |
| **Glavni uspješni tok** | 1. Korisnik se prijavljuje putem OAuth 2.0.<br>2. Sustav pronalazi račun korisnika, a pri prvoj prijavi ga stvara (korisnik odabire je li građanin ili eko-udruga, pohranjuju se samo ime i adresa e-pošte).<br>3. Sustav provjerava da korisnik nije blokiran i omogućuje radnje dostupne prijavljenim korisnicima. |
| **Alternativni tokovi / Iznimke** | **1a — Pružatelj nedostupan ili prijava neuspješna:** Sustav prikazuje poruku, a korisnik ostaje neprijavljen.<br>**3a — Korisnik je blokiran:** Sustav odbija prijavu uz poruku.<br>**3b — Profil eko-udruge nije odobren ili nije dovršen:** Prijava uspijeva, a funkcije udruge ostaju nedostupne uz poruku da profil čeka provjeru. |
| **Posljedice (ishod)** | Prijavljeni korisnik ima pristup radnjama svoje uloge, a pri prvoj prijavi stvoren je račun. Neuspješna prijava ne mijenja stanje sustava. |

### UC-02: Registracija profila eko-udruge

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga |
| **Povezani zahtjevi** | F-001, F-020, F-010; AS-03 |
| **Preduvjeti** | Eko-udruga nije prijavljena i nema profil. |
| **Glavni uspješni tok** | 1. Voditelj udruge se registrira putem OAuth-a (UC-01) te odabire ulogu eko-udruge.<br>2. Voditelj unosi naziv udruge, OIB i odabire regiju.<br>3. Sustav provjerava obavezna polja, valjanost OIB-a i da udruga s tim OIB-om nema račun.<br>4. Sustav pohranjuje profil sa statusom "čeka provjeru". |
| **Alternativni tokovi / Iznimke** | **1a — Registracija nije uspjela:** Registracija se prekida i korisnik ostaje neprijavljen.<br>**2a — Voditelj odustaje tijekom unosa podataka:** Profil ostaje nepotpun.<br>**3a — Nedostaju obavezna polja ili je OIB nevaljan:** Sustav označava polja i ne pohranjuje profil.<br>**3b — Udruga s istim OIB-om već postoji:** Sustav ne pohranjuje profil uz poruku. |
| **Posljedice (ishod)** | Profil udruge pohranjen je neaktivan do provjere administratora. Regija se koristi za filtriranje prijava. |

### UC-03: Prijava administratora

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-002; AS-05; NF-1.3 |
| **Preduvjeti** | Račun administratora postoji (početni administrator stvoren je pri postavljanju sustava, a ostale stvara drugi administrator). Korisnik koristi web sučelje. |
| **Glavni uspješni tok** | 1. Administrator unosi korisničko ime i lozinku.<br>2. Sustav uspostavlja sesiju i prikazuje upravljačku ploču. |
| **Alternativni tokovi / Iznimke** | **2a — Pogrešno korisničko ime ili lozinka:** Sustav prikazuje poruku bez otkrivanja koji je podatak pogrešan, a sesija se ne uspostavlja. |
| **Posljedice (ishod)** | Administrator ima pristup radnjama administratora. Neuspješan pokušaj ne mijenja stanje sustava. |

### UC-04: Stvaranje računa administratora

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-002; AS-01, AS-05; NF-1.3, NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. |
| **Glavni uspješni tok** | 1. Administrator unosi korisničko ime, inicijalnu lozinku i adresu e-pošte komunalnog redara.<br>2. Sustav provjerava obavezna polja, format e-pošte i jedinstvenost korisničkog imena.<br>3. Sustav pohranjuje račun, a lozinku u obliku hasha. |
| **Alternativni tokovi / Iznimke** | **2a — Nedostaju podaci ili je e-pošta nevaljana:** Sustav označava polja i ne stvara račun.<br>**2b — Korisničko ime već postoji:** Sustav ne stvara račun uz poruku. |
| **Posljedice (ishod)** | Novi administrator može se prijaviti inicijalnom lozinkom. |

### UC-05: Promjena inicijalne lozinke

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator, kojem je račun stvorio drugi administrator |
| **Povezani zahtjevi** | F-003; NF-1.3 |
| **Preduvjeti** | Administrator je prijavljen. |
| **Glavni uspješni tok** | 1. Administrator unosi prethodnu (inicijalnu) i novu lozinku.<br>2. Sustav pohranjuje novu lozinku. |
| **Alternativni tokovi / Iznimke** | **2a — Prethodna lozinka nije ispravna:** Sustav odbija promjenu uz poruku, a lozinka ostaje nepromijenjena. |
| **Posljedice (ishod)** | Pri sljedećoj prijavi vrijedi nova lozinka. |

### UC-06: Provjera i odobravanje eko-udruge

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-020; AS-03 |
| **Preduvjeti** | Administrator je prijavljen. Postoji profil eko-udruge koji čeka provjeru. |
| **Glavni uspješni tok** | 1. Administrator otvara popis profila koji čekaju provjeru i podatke odabrane udruge (naziv, OIB, regija).<br>2. Administrator provjerava je li udruga registrirana organizacija (izvan sustava).<br>3. Administrator odobrava profil, a sustav ga aktivira. |
| **Alternativni tokovi / Iznimke** | **3a — Administrator odbije profil:** Profil ostaje neaktivan.<br>**3b — Administrator odustane od odluke:** Profil ostaje u stanju "čeka provjeru". |
| **Posljedice (ishod)** | Odobrena udruga može pregledavati aktivne prijave svoje regije i stvarati akcije čišćenja. Neodobrena udruga ne može. |

### UC-07: Blokiranje korisnika

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-021; NF-1.2 |
| **Preduvjeti** | Administrator je prijavljen. Korisnik postoji i nije blokiran. |
| **Glavni uspješni tok** | 1. Administrator odabire  korisnika i pregledava njegove podatke i prijave.<br>2. Administrator odabire opciju "blokiraj" i potvrđuje radnju.<br>3. Sustav označava korisnika kao blokiranog. |
| **Alternativni tokovi / Iznimke** | **2a — Administrator ne potvrdi radnju:** Korisnik ostaje neblokiran. |
| **Posljedice (ishod)** | Blokirani korisnik se ne može prijaviti niti prijavljivati odlagališta. |

### UC-08: Prijava divljeg odlagališta

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-004, F-006; C-04; NF-2.1, NF-3.2 |
| **Preduvjeti** | Građanin je prijavljen, nije blokiran i koristi mobilno sučelje. |
| **Glavni uspješni tok** | 1. Građanin otvara obrazac za prijavu, a sustav uz njegovo dopuštenje učitava koordinate.<br>2. Građanin odabire fotografiju (kamera ili galerija) i kategoriju otpada te šalje prijavu.<br>3. Sustav provjerava da su fotografija, lokacija i kategorija zadani.<br>4. Sustav pretvara koordinate u adresu i određuje regiju.<br>5. Sustav pohranjuje prijavu sa statusom "Prijavljeno" i prikazuje crvenu pribadaču na karti. |
| **Alternativni tokovi / Iznimke** | **1a — Pristup lokaciji nije dopušten:** Nastavlja se ručni odabir lokacije na karti, a zatim korak 2.<br>**3a — Prijava je nepotpuna:** Sustav označava polje koje nedostaje i ne šalje prijavu, a unesene podatke zadržava.<br>**3b — Korisnik je blokiran:** Sustav odbija prijavu uz poruku.<br>**5a — Pohrana nije uspjela:** Sustav javlja neuspjeh i ne prikazuje potvrdu. |
| **Posljedice (ishod)** | Prijava je pohranjena sa statusom "Prijavljeno" i vidljiva kao crvena pribadača, administratoru, udruzi čija regija odgovara gradu/općini prijave i u povijesti prijava građanina. Obavezna su dva koraka, fotografija i kategorija. |

### UC-09: Ručni odabir lokacije na karti

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-004, F-006; AS-02 |
| **Preduvjeti** | Građanin je započeo prijavu odlagališta, a nije dopustio pristup lokaciji uređaja. |
| **Glavni uspješni tok** | 1. Sustav prikazuje kartu.<br>2. Građanin postavlja pribadaču na kartu ili upisuje adresu (sustav je pretvara u koordinate).<br>3. Građanin potvrđuje točku, a sustav ga vraća u obrazac prijave s odabranom lokacijom. |
| **Alternativni tokovi / Iznimke** | **2a — Adresa nije pronađena:** Građanin ispravlja adresu ili postavlja pribadaču na kartu.<br>**3a — Građanin ne odabere lokaciju:** Prijava se ne može poslati. |
| **Posljedice (ishod)** | Prijava ima ručno odabranu lokaciju i može se poslati. |

### UC-10: Geokodiranje lokacije

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin, preko prijave divljeg odlagališta i ručnog odabira lokacije |
| **Povezani zahtjevi** | F-004, F-006, F-010 |
| **Preduvjeti** | Postoje koordinate (pretvorba u adresu) ili tekstualna adresa (pretvorba u koordinate). |
| **Glavni uspješni tok** | 1. Sustav šalje koordinate ili adresu Google Maps API-ju.<br>2. Sustav iz odgovora izdvaja adresu i regiju, odnosno koordinate, i vraća ih pozivajućem obrascu. |
| **Alternativni tokovi / Iznimke** | **2a — Nema rezultata:** Sustav javlja da lokacija nije prepoznata, a traži se ispravak.<br>**2b — Usluga nije dostupna:** Sustav prikazuje poruku. |
| **Posljedice (ishod)** | Svaka prijava ima adresu i regiju izvedene iz koordinata, prema kojima se pridjeljuje regiji udruge. |

### UC-11: Pregled karte prijava

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-005, F-006, F-009; NF-1.2, NF-3.2 |
| **Preduvjeti** | Građanin je prijavljen. |
| **Glavni uspješni tok** | 1. Građanin otvara kartu.<br>2. Sustav prikazuje valjane prijave kao pribadače obojane prema statusu (crveno – Prijavljeno, žuto – Akcija u tijeku, zeleno – Očišćeno).<br>3. Građanin odabire pribadaču, a sustav za njegovu prijavu prikazuje detalje (adresa, kategorija, fotografija, status). |
| **Alternativni tokovi / Iznimke** | **2a — Karta nije dostupna:** Sustav prikazuje poruku, a ostale funkcije ostaju dostupne.<br>**2b — Nema prijava:** Sustav prikazuje praznu kartu.<br>**3a — Odabrana je tuđa prijava:** Građanin vidi samo pribadaču, a detalji nisu dostupni. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. Odbačene prijave se ne prikazuju. |

### UC-12: Pregled povijesti vlastitih prijava

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-007, F-023; NF-1.2 |
| **Preduvjeti** | Građanin je prijavljen. |
| **Glavni uspješni tok** | 1. Građanin otvara svoj profil i povijest prijava.<br>2. Sustav prikazuje popis njegovih prijava s adresom, kategorijom, datumom i statusom.<br>3. Građanin odabire prijavu, a sustav prikazuje njezine detalje. |
| **Alternativni tokovi / Iznimke** | **2a — Građanin nema prijava:** Učitava se prazna stranica. |
| **Posljedice (ishod)** | Građanin vidi samo vlastite prijave. Kategorija koju je administrator izmijenio prikazuje se ažurirana. |

### UC-13: Slanje obavijesti o promjeni statusa prijave

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin, prijavitelj. Pasivni je akter jer prima obavijest, a obrazac pokreću promjene statusa prijave. |
| **Povezani zahtjevi** | F-008, F-011, F-024; NF-3.1 |
| **Preduvjeti** | Status prijave promijenjen je slanjem službenog naloga, stvaranjem akcije čišćenja ili potvrdom dokaza o sanaciji. |
| **Glavni uspješni tok** | 1. Sustav prepoznaje promjenu statusa prijave i određuje prijavitelja.<br>2. Sustav stvara obavijest s oznakom prijave i novim statusom.<br>3. Sustav prikazuje obavijest unutar aplikacije u roku od 30 sekundi (dok je aplikacija otvorena). |
| **Alternativni tokovi / Iznimke** | **3a — Aplikacija nije otvorena:** Obavijest se sprema i prikazuje pri sljedećem otvaranju aplikacije. |
| **Posljedice (ishod)** | Građanin je obaviješten o novom statusu svoje prijave. |

### UC-14: Odbacivanje lažne prijave

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-009; NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. Prijava postoji i nije odbačena. |
| **Glavni uspješni tok** | 1. Administrator otvara prijavu na upravljačkoj ploči i pregledava njezine podatke.<br>2. Administrator procjenjuje da je prijava lažna, odabire odbacivanje i potvrđuje radnju.<br>3. Sustav označava prijavu kao odbačenu. |
| **Alternativni tokovi / Iznimke** | **2a — Administrator ne potvrdi radnju:** Prijava ostaje nepromijenjena. |
| **Posljedice (ishod)** | Odbačena prijava više se ne prikazuje na karti niti eko-udrugama. Administrator može blokirati prijavitelja. |

### UC-15: Izmjena kategorije otpada

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-023; NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. Prijava postoji i nije odbačena. |
| **Glavni uspješni tok** | 1. Administrator otvara prijavu na upravljačkoj ploči i odabire izmjenu kategorije.<br>2. Administrator odabire ispravnu kategoriju iz izbornika i sprema.<br>3. Sustav pohranjuje novu kategoriju. |
| **Alternativni tokovi / Iznimke** | **2a — Administrator odustane ili odabere postojeću kategoriju:** Prijava ostaje nepromijenjena. |
| **Posljedice (ishod)** | Nova kategorija prikazuje se u detaljima prijave na upravljačkoj ploči udruge i u povijesti prijava građanina. |

### UC-16: Slanje službenog naloga komunalnoj tvrtki

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-019, F-008; AS-06; NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. Prijava je u statusu "Prijavljeno", a otpad je opasan ili prevelik za akciju čišćenja. |
| **Glavni uspješni tok** | 1. Administrator otvara prijavu i jednim klikom pokreće slanje službenog naloga.<br>2. Sustav generira nalog s podacima prijave.<br>3. Sustav mijenja status prijave u "Službena sanacija" i šalje obavijest prijavitelju. |
| **Alternativni tokovi / Iznimke** | **1a — Prijava nije u statusu "Prijavljeno":** Opcija slanja naloga nije dostupna.<br>**2a — Slanje naloga nije uspjelo:** Status prijave se ne mijenja, a administrator dobiva poruku o grešci. |
| **Posljedice (ishod)** | Prijava u statusu "Službena sanacija" više se ne prikazuje udrugama kao aktivna i ne može se uključiti u akciju čišćenja. |

### UC-17: Pregled aktivnih prijava regije

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga |
| **Povezani zahtjevi** | F-010, F-006, F-005; AS-03; NF-1.2, NF-3.2 |
| **Preduvjeti** | Voditelj je prijavljen, a profil udruge odobren. |
| **Glavni uspješni tok** | 1. Voditelj otvara upravljačku ploču s kartom (web ili mobilno sučelje).<br>2. Sustav prikazuje kao crvene pribadače samo prijave u statusu "Prijavljeno" čiji se grad/općina podudara s regijom udruge.<br>3. Voditelj odabire pribadaču, a sustav prikazuje detalje prijave. |
| **Alternativni tokovi / Iznimke** | **1a — Profil udruge nije odobren:** Ploča nije dostupna, a sustav prikazuje poruku da profil čeka provjeru.<br>**2a — Nema aktivnih prijava u regiji:** Sustav prikazuje praznu kartu s porukom.<br>**2b — Karta nije dostupna:** Sustav prikazuje poruku. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. Detalji ne sadrže ime ni e-poštu prijavitelja. Prijave iz drugih regija, u drugim statusima i odbačene prijave ne prikazuju se. Odabrane prijave polazište su za stvaranje akcije čišćenja. |

### UC-18: Stvaranje akcije čišćenja

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga |
| **Povezani zahtjevi** | F-011, F-015, F-008, F-020 |
| **Preduvjeti** | Voditelj je prijavljen, a profil udruge odobren. U regiji udruge postoje aktivne prijave. |
| **Glavni uspješni tok** | 1. Voditelj odabire jednu ili više aktivnih prijava i pokreće stvaranje akcije.<br>2. Voditelj unosi naziv, opis, maksimalan broj volontera te datum i vrijeme sastanka.<br>3. Sustav provjerava podatke i određuje lokaciju akcije kao lokaciju prve odabrane prijave.<br>4. Sustav sprema akciju, mijenja status odabranih prijava u "Akcija u tijeku", stvara događaj u Google Calendaru udruge i šalje obavijesti prijaviteljima.<br>5. Akcija se prikazuje građanima i u kalendaru udruge. |
| **Alternativni tokovi / Iznimke** | **1a — Nije odabrana nijedna prijava:** Pokretanje akcije nije moguće.<br>**3a — Podaci su nepotpuni ili nevaljani:** Sustav označava polja i ne sprema akciju.<br>**4a — Google Calendar nedostupan ili pristup kalendaru nije odobren:** Događaj se ne dodaje u kalendar i voditelj dobiva poruku, ali akcija se svejedno sprema te prijave vezane uz akciju mijenjaju status u "Akcija u tijeku". Prijavitelji se obavještavaju.|
| **Posljedice (ishod)** | Akcija je pohranjena, njezine prijave imaju status "Akcija u tijeku", udruga vidi događaj u Google Calendaru ako je njegovo dodavanje uspjelo, a prijavitelji su obaviješteni. |

### UC-19: Dodavanje događaja u Google Calendar

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga pri stvaranju akcije ili Građanin pri prijavi na akciju |
| **Povezani zahtjevi** | F-015; C-01; NF-3.2 |
| **Preduvjeti** | Akcija je stvorena, odnosno građanin je prijavljen na akciju. Korisnik je odobrio pristup svom Google Calendaru. |
| **Glavni uspješni tok** | 1. Sustav sastavlja događaj s terminom, uputama za akciju, poveznicom na lokaciju na karti i podsjetnikom 2 sata prije akcije.<br>2. Sustav REST zahtjevom šalje događaj Google Calendar API-ju za kalendar korisnika koji je stvorio akciju, odnosno prijavio se.<br>3. Korisnik vidi događaj u svom kalendaru. |
| **Alternativni tokovi / Iznimke** | **2a — Google Calendar API nedostupan ili pristup kalendaru nije odobren:** Događaj se ne dodaje i korisnik dobiva poruku te stvaranje akcije tj. prijava na akciju svejedno uspijeva. |
| **Posljedice (ishod)** | Događaj postoji samo u kalendaru udruge koja je stvorila akciju i građanina koji se prijavio. Promjena termina ne ažurira već stvorene događaje. |

### UC-20: Pregled kalendara akcija

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga |
| **Povezani zahtjevi** | F-013 |
| **Preduvjeti** | Voditelj je prijavljen, a profil udruge odobren. |
| **Glavni uspješni tok** | 1. Voditelj otvara kalendar akcija.<br>2. Sustav prikazuje nadolazeće akcije udruge s terminom, brojem prijavljenih volontera i ukupnim brojem mjesta.<br>3. Voditelj odabire akciju i vidi detalje, a odavde može pogledati prognozu, odgoditi termin ili poslati dokaz o sanaciji. |
| **Alternativni tokovi / Iznimke** | **2a — Udruga nema nadolazećih akcija:** Sustav prikazuje poruku. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. Broj prijavljenih volontera ažuran je nakon svake prijave. |

### UC-21: Pregled nadolazećih akcija čišćenja

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-012 |
| **Preduvjeti** | Građanin je prijavljen. |
| **Glavni uspješni tok** | 1. Građanin otvara popis nadolazećih akcija.<br>2. Sustav prikazuje akcije s nazivom, terminom, lokacijom i brojem slobodnih mjesta.<br>3. Građanin odabire akciju, a sustav prikazuje detalje i mogućnost prijave kao volonter. |
| **Alternativni tokovi / Iznimke** | **2a — Nema nadolazećih akcija:** Sustav prikazuje poruku.<br>**2b — Akcija je popunjena:** Sustav je prikazuje s oznakom da nema slobodnih mjesta, a prijava je onemogućena. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. |

### UC-22: Prijava na akciju čišćenja kao volonter

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-012, F-015; NF-3.2 |
| **Preduvjeti** | Građanin je prijavljen i pregledava detalje akcije. Akcija ima slobodno mjesto, a građanin se na nju još nije prijavio. |
| **Glavni uspješni tok** | 1. Građanin odabire prijavu za sudjelovanje.<br>2. Sustav provjerava da ima slobodnih mjesta i da se građanin nije već prijavio.<br>3. Sustav evidentira građanina kao volontera, ažurira broj popunjenih mjesta i stvara događaj u njegovu Google Calendaru. |
| **Alternativni tokovi / Iznimke** | **2a — Akcija je u međuvremenu popunjena:** Sustav odbija prijavu uz poruku.<br>**2b — Građanin je već prijavljen:** Sustav javlja da je prijava već evidentirana.<br>**3a — Google Calendar nedostupan ili pristup kalendaru nije odobren:** Sustav prihvaća prijavu, a građanin dobiva poruku da događaj nije dodan u njegov kalendar. |
| **Posljedice (ishod)** | Građanin je volonter na akciji i broj slobodnih mjesta se smanjio. Kada broj dosegne maksimum, daljnje prijave se onemogućavaju. Udruga vidi novi broj u kalendaru. |

### UC-23: Prikaz rute do mjesta okupljanja

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin |
| **Povezani zahtjevi** | F-014; NF-3.2 |
| **Preduvjeti** | Građanin je odabrao akciju iz popisa nadolazećih akcija čišćenja. |
| **Glavni uspješni tok** | 1. Sustav prikazuje mjesto okupljanja akcije na karti.<br>2. Ako je građanin dopustio pristup lokaciji, sustav određuje njegovu lokaciju i prikazuje rutu do mjesta okupljanja. |
| **Alternativni tokovi / Iznimke** | **1a — Google Maps nije dostupan:** Sustav prikazuje poruku, a ostali detalji akcije ostaju vidljivi.<br>**2a — Pristup lokaciji nije dopušten:** Prikazuje se samo mjesto okupljanja, bez rute. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. |

### UC-24: Pregled prognoze za termin akcije

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Građanin (kao volonter) ili Eko-udruga |
| **Povezani zahtjevi** | F-016, F-017; NF-3.2 |
| **Preduvjeti** | Akcija postoji ili se planira. Poznata je lokacija i termin akcije. |
| **Glavni uspješni tok** | 1. Korisnik otvara detalje akcije.<br>2. Sustav REST zahtjevom dohvaća prognozu od OpenWeatherMap API-ja za koordinate lokacije i termin akcije i prikazuje je.<br>3. Ako je za termin najavljeno nevrijeme , sustav ističe crveno upozorenje, a udruzi koja je stvorila akciju nudi odgodu ili prebacivanje termina. |
| **Alternativni tokovi / Iznimke** | **2a — OpenWeatherMap nije dostupan:** Sustav prikazuje poruku, a ostatak sučelja akcije ostaje funkcionalan.<br>**2b — Prognoza za termin još nije dostupna**: Sustav to javlja i ne prikazuje upozorenje. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. |

### UC-25: Odgoda termina akcije zbog nevremena

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga |
| **Povezani zahtjevi** | F-017; AS-07 |
| **Preduvjeti** | Voditelj je prijavljen, udruga je organizator akcije, a za termin je predviđeno nevrijeme. |
| **Glavni uspješni tok** | 1. Voditelj odabire odgodu odnosno prebacivanje termina i unosi novi datum i vrijeme.<br>2. Sustav provjerava da je novi termin u budućnosti i pohranjuje ga.<br>3. Sustav obavještava prijavljene volontere unutar aplikacije i prikazuje prognozu za novi termin. |
| **Alternativni tokovi / Iznimke** | **1a — Voditelj odustane:** Termin ostaje nepromijenjen.<br>**2a — Novi termin nije valjan:** Sustav traži ispravak. |
| **Posljedice (ishod)** | Akcija ima novi termin, a volonteri su obaviješteni. Već stvoreni događaji u Google Calendaru ne ažuriraju se automatski. |

### UC-26: Slanje dokaza o sanaciji

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Eko-udruga, voditelj udruge |
| **Povezani zahtjevi** | F-018 |
| **Preduvjeti** | Voditelj je prijavljen. Akcija je završila na terenu, a prijava obuhvaćena akcijom udruge je u statusu "Akcija u tijeku". |
| **Glavni uspješni tok** | 1. Voditelj otvara akciju i odabire prijavu obuhvaćenu akcijom.<br>2. Voditelj učitava fotografiju očišćenog prostora kao "Dokaz o sanaciji" (kamera ili galerija) i šalje zahtjev za zatvaranje prijave.<br>3. Sustav pohranjuje fotografiju uz prijavu i šalje zahtjev na potvrdu administratoru. |
| **Alternativni tokovi / Iznimke** | **1a — Prijava nije obuhvaćena akcijom ove udruge ili nije u statusu "Akcija u tijeku":** Slanje dokaza nije dostupno.<br>**2a — Fotografija nije priložena:** Sustav ne šalje zahtjev i traži fotografiju. |
| **Posljedice (ishod)** | Zahtjev čeka potvrdu administratora. Postupak se ponavlja zasebno za svaku prijavu obuhvaćenu akcijom. Ako administrator odbije zahtjev, voditelj može poslati novi dokaz. |

### UC-27: Potvrda dokaza o sanaciji

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-024, F-018, F-008; NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. Postoji zahtjev za zatvaranje prijave s priloženim "Dokazom o sanaciji". |
| **Glavni uspješni tok** | 1. Administrator otvara zahtjev, a sustav prikazuje izvornu fotografiju prijave i "Dokaz o sanaciji".<br>2. Administrator procjenjuje da je lokacija očišćena i potvrđuje zahtjev.<br>3. Sustav mijenja status prijave u "Očišćeno" i šalje obavijest prijavitelju. |
| **Alternativni tokovi / Iznimke** | **2a — Administrator odbije zahtjev:** Prijava ostaje u statusu "Akcija u tijeku".<br>**2b — Administrator ne donese odluku:** Zahtjev ostaje na čekanju. |
| **Posljedice (ishod)** | Potvrđena prijava ima status "Očišćeno" i prikazuje se zelenom pribadačom, a prijavitelj je obaviješten. |

### UC-28: Pregled statističkih grafikona

| Element specifikacije | Opis |
| :--- | :--- |
| **Primarni akter** | Administrator |
| **Povezani zahtjevi** | F-022; NF-1.4 |
| **Preduvjeti** | Administrator je prijavljen. |
| **Glavni uspješni tok** | 1. Administrator otvara stranicu sa statistikom.<br>2. Sustav izračunava podatke iz pohranjenih prijava i prikazuje grafikone. |
| **Alternativni tokovi / Iznimke** | **2a — Nema podataka:** Sustav prikazuje grafikone bez vrijednosti uz poruku da još nema prijava. |
| **Posljedice (ishod)** | Prikaz ne mijenja stanje sustava. |




<details>
<summary><strong>Primjeri specifikacija: Registracija i prijava kriznog događaja</strong></summary>

**Primjer — CrisisMap:**

**UC-001: Registracija računa.** Ovaj kratki primjer odnosi se na projekt čiji odobreni zadatak uključuje račune s adresom e-pošte i lozinkom.

| Polje | Opis |
| --- | --- |
| Primarni akter | Građanin (A-02 u primjeru) |
| ID zahtjeva | F-001 |
| Preduvjeti, ako postoje | Nema. |
| Glavni tijek | Građanin unosi adresu e-pošte; aplikacija šalje poveznicu za potvrdu; građanin potvrđuje račun. |
| Alternativni ili neuspješni tijekovi, ako postoje | Adresa e-pošte već postoji → aplikacija objašnjava zašto se registracija ne može nastaviti. |
| Rezultat | Račun je aktivan nakon potvrde. |

Ako odobreni zadatak umjesto toga koristi isključivo OAuth prijavu, zamijenite ovaj primjer odgovarajućim ponašanjem prijave; nemojte dodavati registraciju lokalnom lozinkom samo radi podudaranja s primjerom.

**UC-002: Podnošenje prijave kriznog događaja.** Ista polja mogu opisati dulji tijek u kojem odabir lokacije, provjera valjanosti i pohrana mogu ne uspjeti.

| Polje | Opis |
| --- | --- |
| Primarni akter | Građanin |
| ID zahtjeva | F-004 |
| Preduvjeti, ako postoje | Obrazac za prijavu dostupan je. Ako odobreni zadatak zahtijeva prijavu u sustav, građanin je prijavljen. |
| Glavni tijek | 1. Građanin otvara obrazac za prijavu; aplikacija prikazuje polja za vrstu kriznog događaja, razinu ozbiljnosti, opis i lokaciju.<br>2. Građanin unosi podatke i odabire lokaciju na karti ili drugim podržanim načinom.<br>3. Građanin podnosi obrazac; aplikacija provjerava obavezna polja i lokaciju.<br>4. Aplikacija pohranjuje prijavu i prikazuje potvrdu s referencom na nju. |
| Alternativni ili neuspješni tijekovi, ako postoje | **1a — Prijava u sustav nije uspjela:** Ako je prijava obavezna, a pružatelj identiteta je ne dovrši, prijava kriznog događaja ostaje nepodnesena i aplikacija objašnjava kako pokušati ponovno.<br>**2a — Odbijen pristup lokaciji:** Ako aplikacija nudi geolokaciju, ali je korisnik odbije, građanin ručno odabire lokaciju ako ta mogućnost postoji; tijek se nastavlja u koraku 3.<br>**3a — Nevaljana ili nedostajuća lokacija:** Aplikacija objašnjava problem, po mogućnosti zadržava unesene podatke i ne pohranjuje prijavu; građanin ispravlja lokaciju i ponavlja korak 3.<br>**3b — Pohrana nije uspjela:** Aplikacija prijavljuje neuspjeh i ne prikazuje lažnu potvrdu o podnošenju. |
| Rezultat | Aplikacija pohranjuje prijavu kriznog događaja i potvrđuje njezino podnošenje. |

**Odabir razine detalja:** Oba primjera koriste ista polja. UC-001 je kratak jer je glavna iznimka jasna; UC-002 zahtijeva numerirane korake i alternative jer oni mijenjaju ishod i mogu usmjeravati ispitivanje. Uklonite grane prijave u sustav ili geolokacije koje ne postoje u stvarnoj aplikaciji tima. Obavještavanje spasilačkih timova, pokretanje akcije spašavanja ili dostavljanje povratnih informacija interventnih službi uvodi **zasebne mogućnosti s vanjskim posljedicama**; dokumentirajte ih samo ako ih odobreni zadatak i implementacija podržavaju. Oporavak lozinke odnosi se na račune s lokalnom lozinkom, a ne automatski na zadatak koji koristi isključivo OAuth. Pri prilagodbi primjera koristite ID-ove zahtjeva i ponašanje vlastite aplikacije.

**UC-005: Moderiranje prijave kriznog događaja.** Ovaj primjer vrijedi samo za projekt u kojem odobreni opseg uključuje moderatorski pregled prijava.

| Polje | Opis |
| --- | --- |
| Primarni akter | Moderator (A-05 u primjeru) |
| ID zahtjeva | F-008 |
| Preduvjeti, ako postoje | Moderator je prijavljen i ima moderatorske ovlasti; postoji prijava koja čeka pregled. |
| Glavni tijek | 1. Moderator otvara prijavu koja čeka pregled.<br>2. Aplikacija prikazuje podatke prijave i dostupne moderatorske radnje.<br>3. Moderator odabire odobravanje ili odbijanje.<br>4. Aplikacija provjerava ovlasti, mijenja status prijave i prikazuje novi status. |
| Alternativni ili neuspješni tijekovi, ako postoje | **3a — Radnja nije potvrđena:** Moderator odustaje od promjene i prijava ostaje nepromijenjena.<br>**4a — Ovlasti nisu valjane:** Aplikacija odbija promjenu i status prijave ostaje nepromijenjen. |
| Rezultat | Prijava ima novi status ako je moderatorska radnja uspješno provedena; inače ostaje nepromijenjena. |
</details>

---

## 3.3 Provjera dosljednosti obrazaca uporabe

Provjeravamo međusobnu usklađenost obrazaca uporabe, aktera, zahtjeva i ispitnih slučajeva, dok se cjelovito mapiranje održava se isključivo u **[matrici sljedivosti zahtjeva](2-Analiza-zahtjeva.md#26-sljedivost-zahtjeva)**.


| Broj obrasca uporabe | Naziv obrasca uporabe | Obuhvaćeni funkcijski zahtjevi |
| --- | --- | --- |
| UC-01 | Prijava putem OAuth-a 2.0 | F-001: Registracija i prijava putem OAuth-a |
| UC-02 | Registracija profila eko-udruge | F-001; F-020: Provjera prijavljenih udruga; F-010: Prikaz aktivnih prijava eko-udrugama (regija udruge) |
| UC-03 | Prijava administratora | F-002: Kreiranje računa administratora (prijava inicijalnom lozinkom) |
| UC-04 | Stvaranje računa administratora | F-002 |
| UC-05 | Promjena inicijalne lozinke | F-003: Promjena inicijalne lozinke |
| UC-06 | Provjera i odobravanje eko-udruge | F-020 |
| UC-07 | Blokiranje korisnika | F-021: Blokiranje korisnika |
| UC-08 | Prijava divljeg odlagališta | F-004: Prijava divljeg odlagališta; F-006: Geokodiranje lokacije |
| UC-09 | Ručni odabir lokacije na karti | F-004; F-006 |
| UC-10 | Geokodiranje lokacije | F-004; F-006; F-010 |
| UC-11 | Pregled karte prijava | F-005: Prikaz prijava na karti; F-006; F-009: Odbacivanje lažnih prijava |
| UC-12 | Pregled povijesti vlastitih prijava | F-007: Povijest vlastitih prijava; F-023: Izmjena kategorije otpada |
| UC-13 | Slanje obavijesti o promjeni statusa prijave | F-008: Obavijesti o promjeni statusa; F-011: Stvaranje akcije čišćenja; F-024: Potvrda dokaza o sanaciji |
| UC-14 | Odbacivanje lažne prijave | F-009 |
| UC-15 | Izmjena kategorije otpada | F-023 |
| UC-16 | Slanje službenog naloga komunalnoj tvrtki | F-019: Službeni nalog; F-008 |
| UC-17 | Pregled aktivnih prijava regije | F-010; F-006; F-005 |
| UC-18 | Stvaranje akcije čišćenja | F-011; F-015: Događaj u Google Calendaru; F-008; F-020 |
| UC-19 | Dodavanje događaja u Google Calendar | F-015 |
| UC-20 | Pregled kalendara akcija | F-013: Kalendar akcija |
| UC-21 | Pregled nadolazećih akcija čišćenja | F-012: Pregled akcija i prijava volontera |
| UC-22 | Prijava na akciju čišćenja kao volonter | F-012; F-015 |
| UC-23 | Prikaz rute do mjesta okupljanja | F-014: Prikaz rute do lokacije akcije |
| UC-24 | Pregled prognoze za termin akcije | F-016: Prognoza za termin akcije; F-017: Upozorenje o nevremenu i odgoda |
| UC-25 | Odgoda termina akcije zbog nevremena | F-017 |
| UC-26 | Slanje dokaza o sanaciji | F-018: Dokaz o sanaciji |
| UC-27 | Potvrda dokaza o sanaciji | F-024; F-018; F-008 |
| UC-28 | Pregled statističkih grafikona | F-022: Statistički grafikoni |

**Problemi pokrivenosti koje treba riješiti:**
- **F-019 / UC-16 / AS-06:** Alternativa 2a („slanje naloga nije uspjelo”) i kriterij prihvaćanja F-019 pretpostavljaju slanje, no prema AS-06 slanje je izvan sustava.
- **UC-08 / 2.6:** Preduvjet UC-08 navodi mobilno sučelje, a arhitekturna realizacija F-004 u 2.6 navodi „Web klijent”.