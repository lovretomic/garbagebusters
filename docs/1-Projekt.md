# 1. Opseg projekta

## 1.1 Problem i cilj projekta

Divlja odlagališta otpada predstavljaju ekološki problem koji građani ne mogu na jednostavan način prijaviti i pratiti što se dalje događa s prijavom. Aplikacija Ecosentry omogućuje prijavljivanje divljih odlagališta i povezuje građane, eko-udruge te komunalne redare kako bi olakšala proces prijave, organizacije čišćenja i uklanjanje otpada.

## 1.2 Ciljani korisnici i dionici

Definiranjem korisnika i dionika utvrđujemo osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Građanin | Prijaviti divlje odlagalište otpada, pratiti tijek prijava, praćenje povijesti vlastitih prijava i prijava kao volonter za sudjelovanje u čišćenjima. |
| Eko-udruga | Pregledavanje prijavljenih odlagališta otpada, organiziranje akcija čišćenja, koordiniranje volontera i slanje zahtjeva za zatvaranje prijave. |
| Komunalni redar (administrator) | Pregledavanje i upravljanje korisnicima, kontrola prijava otpada, izdavanje službenih naloga komunalnim tvrtkama te pregledavanje statistike prijava. |

| Skupina dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Komunalna tvrtka | Interes komunalne tvrtke je proces primanja službenih naloga za sanacije, ne koristi aplikaciju.  |
| Agencija za zaštitu podataka | Zahtijeva zaštitu njihovih osobnih podataka s primjenjivim propisima, ne koristi aplikaciju. |
| Razvojni tim | U njihovom interesu je da je aplikacija pouzdana i funkcionalna. |
| Kupac aplikacije (asistent na kolegiju) | Interes u način izvedbe i rezultat projekta koji je kupio tj. u koji je uložio. |
| Građanin | U interesu mu je funkcionalnost prijavljuje odlagališta, prati vlastite prijave i prijavljuje se na akcije čišćenja. |
| Eko-udruga | U interesu mu je funkcionalnost pregledavanja prijava, organiziranje akcija te slanje sanacija na potvrdu fotografiranjem. |
| Administrator (komunalni redar) | U interesu mu je funkcionalnost upravljanja korisnicima, izdavanja službenih naloga, blokiranje korisnika, odobravanja udruga i pregledavanje statistike. |

## 1.3 Granice projekta

Granice projekta definiraju što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

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


## 1.4 Postojeći pristupi i opravdanost projekta

Napisanim prikazujemo kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

U Hrvatskoj postoji aplikacija [ELOO](https://eloo.haop.hr/public/o-projektu) koja građanima omogućuje prijavu divljih odlagališta otpada i [prijavu tih odlagališta nadležnim komunalnim redarima](https://mzozt.gov.hr/o-ministarstvu-1065/djelokrug/uprava-za-procjenu-utjecaja-na-okolis-i-odrzivo-gospodarenje-otpadom-1271/gospodarenje-otpadom/prijava-nezakonitog-odbacivanja-otpada-u-okolis/10418). Ecosentry dodatno omogućuje uključivanje eko-udruga i volontera kako bi se sanacija manjih odlagališta otpada mogla lakše koordinirati. EcoSentry ne zamjenjuje službene kanale prijave.