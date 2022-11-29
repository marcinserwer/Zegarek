const Poniedzialek = ["Dzień wolny!"];

const Wtorek = [];
Wtorek[3] = "Chemia s. 002"
Wtorek[4] = "Matematyka s. 207"
Wtorek[5] = "Język angielski s. 103"
Wtorek[6] = "Matematyka s. 207"
Wtorek[7] = "Pracownia programowania aplikacji s. 320"
Wtorek[8] = "Programowanie aplikacji s. 214"
Wtorek[9] = "Pracownia programowania aplikacji s. 320"
Wtorek[10] = "Pracownia programowania aplikacji s.320"

const Sroda = [ 
    "Religia s. 102",
    "Programowanie aplikacji s. 220",
    "Fizyka s. 219",
    "Biologia s. 208",
    "Wychowanie fizyczne s. sg4",
    "Wychowanie fizyczne s. sg4",
    "Wychowanie fizyczne s. sg4",
];
const Czwartek = [ 
    "Język angielski s. 103",
    "Historia s. 105",
    "Geografia s. 204",
    "Testowanie i dokumentowanie aplikacji s .312",
    "Język niemiecki s. 215",
    "Język polski s. 219",
    "Religia s. 121",
    "Testowanie i dokumentowanie aplikacji s. 320",
];
const Piatek = [
    "Programowanie aplikacji s. 306",
    "Pracownia programowania aplikacji s. 306",
    "Testowanie i dokumentowanie aplikacji s. 003",
    "Język polski s. 219",
    "Matematyka s. 207",
    "Język polski s. 219",
    "Wiedza o społeczeństwie s. 201",
    "Matemayka s. 207",
];

const Sobota = [];
Sobota[1] = "Matematyka s. 207"
Sobota[2] = "Programowanie apliakcji s. 108"
Sobota[3] = "Język Angielski s. 103"
Sobota[4] = "Pracownia programowania aplikacji s. 305"
Sobota[5] = "Pracownia programowania aplikacji s. 305"
Sobota[6] = "Zajęcia z wychowawcą s. 219"

const Niedziela = ["Dzień wolny!"];

var data = new Date(); //Pobiera aktualny czas
var rok = data.getFullYear(); //Pobiera rok z aktualnej daty
var miesiac = data.getMonth(); //Pobiera miesiąc z aktualnej daty
var dzien = data.getDate(); //Pobiera dzień z aktualnej daty
var numer_dnia = data.getDay(); //Pobiera numer dnia z aktualnej daty

const koniec_lekcji = [ 
    new Date(rok, miesiac, dzien, 7, 55, 00, 00),
    new Date(rok, miesiac, dzien, 8, 45, 00, 00),
    new Date(rok, miesiac, dzien, 9, 35, 00, 00),
    new Date(rok, miesiac, dzien, 10, 30, 00, 00),
    new Date(rok, miesiac, dzien, 11, 30, 00, 00),
    new Date(rok, miesiac, dzien, 12, 25, 00, 00),
    new Date(rok, miesiac, dzien, 13, 20, 00, 00),
    new Date(rok, miesiac, dzien, 14, 10, 00, 00),
    new Date(rok, miesiac, dzien, 15, 00, 00, 00),
    new Date(rok, miesiac, dzien, 15, 55, 00, 00),
    new Date(rok, miesiac, dzien, 16, 50, 00, 00),
    new Date(rok, miesiac, dzien, 17, 40, 00, 00),
    new Date(rok, miesiac, dzien, 18, 30, 00, 00),
]; //Godziny o której lekcje się kończą, automatycznie dopisuje rok, miesiąc i dzień

const poczatek_lekcji = [ 
    new Date(rok, miesiac, dzien, 7, 10, 00, 00),
    new Date(rok, miesiac, dzien, 8, 00, 00, 00),
    new Date(rok, miesiac, dzien, 8, 50, 00, 00),
    new Date(rok, miesiac, dzien, 09, 45, 00, 00),
    new Date(rok, miesiac, dzien, 10, 45, 00, 00),
    new Date(rok, miesiac, dzien, 11, 40, 00, 00),
    new Date(rok, miesiac, dzien, 12, 35, 00, 00),
    new Date(rok, miesiac, dzien, 13, 25, 00, 00),
    new Date(rok, miesiac, dzien, 14, 15, 00, 00),
    new Date(rok, miesiac, dzien, 15, 10, 00, 00),
    new Date(rok, miesiac, dzien, 16, 05, 00, 00),
    new Date(rok, miesiac, dzien, 16, 55, 00, 00),
    new Date(rok, miesiac, dzien, 17, 45, 00, 00),
]; //Godziny o której lekcje się zaczynają, automatycznie dopisuje rok, miesiąc i dzień

const dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]; //Tablica z polskimi nazwami
const miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]; //Tablica z polskimi nazwami

function odliczanie(){
    var data = new Date(); //Pobiera aktualny czas
    var godzina = data.getHours(); //Pobiera godzinę z aktualnej daty
    var minuta = data.getMinutes(); //Pobiera minuty z aktualnej daty
    var sekunda = data.getSeconds(); //Pobiera sekundy z aktualnej daty
    
    if (godzina < 10){
        godzina = "0" + godzina;
    }
    if (minuta < 10){
        minuta = "0" + minuta;
    }
    if (sekunda < 10){
        sekunda = "0" + sekunda;
    }
 
    document.getElementById("Aktualna_godzina").innerHTML = godzina+" : "+minuta+" : "+ sekunda;
}

function doPrzerwy(){
    var data = new Date(); //Pobiera aktualny czas

    if(numer_dnia === 0 || numer_dnia === 1){ //Jeśli jest niedziela lub poniedziałek wypisuje że to jest dzień wolny
        document.getElementById("Glowny_blok").innerHTML = "Dzień wolny!";
    }else if(data.getTime() > koniec_lekcji[12].getTime()){ //Jeśli jest po ostatnim dzwonku wypisuje koniec lekcji
        document.getElementById("Glowny_blok").innerHTML = "Koniec Lekcji!";
    }else{
        for(i = 0; i <= koniec_lekcji.length; i++){
            if(data.getTime() < koniec_lekcji[i].getTime()){
                var konieclekcji = koniec_lekcji[i]; //Koniec najbliższej lekcji
                var poczateklekcji = poczatek_lekcji[i+1]; //Początek następnej lekcji
                var pomocnica_poczateklekcji = poczatek_lekcji[i]; //Koniec aktualnej przerwy
                break;
            }
        } //Wyszukiwanie najbliższego końca lekcji i ustawienie początek następnej lekcji
         if(data.getTime() > koniec_lekcji[i-1].getTime() && data.getTime() < poczatek_lekcji[i].getTime()){
                var pozostalyCzas = pomocnica_poczateklekcji.getTime() - data.getTime(); //Zwraca czas przerwy w milisekundach
                przerwa_minuty_pozostaly = Math.floor((pozostalyCzas / 60000) % 60); //Oblicza i zaogrągla pozostałe minuty do przerwy
                przerwa_sekundy_pozostaly = Math.floor((pozostalyCzas / 1000) % 60); //Oblicza i zaogrągla pozostałe sekundy do przerwy

                if (przerwa_minuty_pozostaly < 10){
                    przerwa_minuty_pozostaly = "0" + przerwa_minuty_pozostaly;
                }
                if (przerwa_sekundy_pozostaly < 10){
                    przerwa_sekundy_pozostaly = "0" + przerwa_sekundy_pozostaly;
                }

                document.getElementById("Do_przerwy").innerHTML = "Koniec przerwy za: "+przerwa_minuty_pozostaly+" : "+przerwa_sekundy_pozostaly;
                document.getElementById("Ile_Przerwa").innerHTML = "";
            }else{ //Sprawdzenie czy jest przerwa i obliczanie do jej końca
                if(konieclekcji == koniec_lekcji[12]){
                    var dlugosc_przerwy = pomocnica_poczateklekcji.getTime() - koniec_lekcji[12].getTime(); //Zwraca czas przerwy w milisekundach
                    var dlugoscprzerwy = dlugosc_przerwy / 60000; //Obliczanie długości przerwy
                }else{
                    var dlugosc_przerwy = poczateklekcji.getTime() - konieclekcji.getTime(); //Zwraca czas przerwy w milisekundach
                    var dlugoscprzerwy = dlugosc_przerwy / 60000; //Obliczanie długości przerwy
                }

                var pozostalyCzas = konieclekcji.getTime() - data.getTime(); //Zwraca pozostały czas w milisekundach
                minuty_pozostaly = Math.floor((pozostalyCzas / 60000) % 60); //Oblicza i zaogrągla pozostałe minuty do przerwy
                sekundy_pozostaly = Math.floor((pozostalyCzas / 1000) % 60); //Oblicza i zaogrągla pozostałe sekundy do przerwy
                
                if (minuty_pozostaly < 10){
                    minuty_pozostaly = "0" + minuty_pozostaly;
                }
                if (sekundy_pozostaly < 10){
                    sekundy_pozostaly = "0" + sekundy_pozostaly;
                }
                    document.getElementById("Do_przerwy").innerHTML = "Koniec lekcji za "+minuty_pozostaly+" : "+sekundy_pozostaly;
                    document.getElementById("Ile_Przerwa").innerHTML = "Długość przerwy "+dlugoscprzerwy;

                if(minuty_pozostaly == 0 && sekundy_pozostaly == 0){
                    fajerwerki();
                }
            } //Obliczanie do końca lekcji
        Lekcja();
    }    
}
   
function Data(){
    var nazwa_dnia = dni[data.getDay()]; //Przypisuje nazwę dnia 
    var miesiac = miesiace[data.getMonth()]; //Przypisuje nazwę miesiąca 

    document.getElementById("Jaka_Data").innerHTML = nazwa_dnia+" "+dzien+" "+miesiac+" "+rok;
}

function Lekcja(){
    switch(numer_dnia){
        case 1:
            Jaka_lekcja(Poniedzialek);
        break;

        case 2:
            Jaka_lekcja(Wtorek);
        break;

        case 3:
            Jaka_lekcja(Sroda);
        break;
        
        case 4:
            Jaka_lekcja(Czwartek);
        break;

        case 5:
            Jaka_lekcja(Piatek);
        break;
    
        case 6:
            Jaka_lekcja(Sobota);
        break;
    
        case 0:
            Jaka_lekcja(Niedziela);
        break; 
    }
}

function Jaka_lekcja(Plan_lekcyjny){
    if(Plan_lekcyjny[i+1] === undefined && Plan_lekcyjny[i] !== undefined){ //Jeśli aktualna lekcja istnieje, a następnej nie ma, to jest ostatnia lekcja
        document.getElementById("Ile_Przerwa").innerHTML = "";
        document.getElementById("Jaka_lekcja").innerHTML = "Ostatnia Lekcja!";
    }else if(Plan_lekcyjny[i+1] === undefined){ //Jeśli już nie ma żadnych lekcji wypisuje koniec lekcji
        document.getElementById("Glowny_blok").innerHTML = "Koniec Lekcji!";
    }else{
        document.getElementById("Jaka_lekcja").innerHTML = Plan_lekcyjny[i]; //Pierwsza lekcja
    }
}

function wypisywanie_planu_lekcji(value){
    var nazwa_dnia = dni[data.getDay()];
    document.getElementById("pierwsza_opcja").innerHTML = nazwa_dnia;

    switch(value){
        case "1":
            for(i = 0; i < Poniedzialek.length; i++){
                document.getElementById("Plan_lekcji").innerHTML = "";
                document.getElementById("Plan_lekcji").innerHTML = Poniedzialek[i];
            }
        break;

        case "2":
            document.getElementById("Plan_lekcji").innerHTML = "";
            for(i = 0; i <= Wtorek.length; i++){
                if(Wtorek[i] !== undefined){ //Jeżeli istnieje lekcja 
                    const para = document.createElement("p");
                    para.innerText = poczatek_lekcji[i].getHours()+":"+poczatek_lekcji[i].getMinutes()+" - "+koniec_lekcji[i].getHours()+" : "+koniec_lekcji[i].getMinutes()+"  "+Wtorek[i];
                    document.getElementById("Plan_lekcji").appendChild(para);
                }
            }
        break;

        case "3":
            document.getElementById("Plan_lekcji").innerHTML = "";
            for(i = 0; i <= Sroda.length; i++){
                if(Sroda[i] !== undefined){
                    const para = document.createElement("p");
                    para.innerText = poczatek_lekcji[i].getHours()+":"+poczatek_lekcji[i].getMinutes()+" - "+koniec_lekcji[i].getHours()+" : "+koniec_lekcji[i].getMinutes()+"  "+Sroda[i];
                    document.getElementById("Plan_lekcji").appendChild(para);
                }
            }
        break;
        
        case "4":
            document.getElementById("Plan_lekcji").innerHTML = "";
            for(i = 0; i <= Czwartek.length; i++){
                if(Czwartek[i] !== undefined){
                    const para = document.createElement("p");
                    para.innerText = poczatek_lekcji[i].getHours()+":"+poczatek_lekcji[i].getMinutes()+" - "+koniec_lekcji[i].getHours()+" : "+koniec_lekcji[i].getMinutes()+"  "+Czwartek[i];
                    document.getElementById("Plan_lekcji").appendChild(para);
                }
            }
        break;

        case "5":
            document.getElementById("Plan_lekcji").innerHTML = "";
            for(i = 0; i <= Piatek.length; i++){
                if(Piatek[i] !== undefined){
                    const para = document.createElement("p");
                    para.innerText = poczatek_lekcji[i].getHours()+":"+poczatek_lekcji[i].getMinutes()+" - "+koniec_lekcji[i].getHours()+" : "+koniec_lekcji[i].getMinutes()+"  "+Piatek[i];
                    document.getElementById("Plan_lekcji").appendChild(para);
                }
            }
        break;
    
        case "6":
            document.getElementById("Plan_lekcji").innerHTML = "";
            for(i = 0; i <= Sobota.length; i++){
                if(Sobota[i] !== undefined){
                    const para = document.createElement("p");
                    para.innerText = poczatek_lekcji[i].getHours()+":"+poczatek_lekcji[i].getMinutes()+" - "+koniec_lekcji[i].getHours()+" : "+koniec_lekcji[i].getMinutes()+"  "+Sobota[i];
                    document.getElementById("Plan_lekcji").appendChild(para);
                }
            }
        break;
    
        case "0":
            for(i = 0; i < Niedziela.length; i++){
                document.getElementById("Plan_lekcji").innerHTML = "";
                document.getElementById("Plan_lekcji").innerHTML = Niedziela[i];
            }
        break;        
    }
}

function fajerwerki(){
    var duration = 10 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
}//https://www.kirilv.com/canvas-confetti/

/*22.11.2022 - Pierwsza wersja prototypowa zegaru: pokazuje aktualną godzinę, ile zostało do przerwy, jaka będzie długość przerwy
Błędy: występuje czasem złe obliczanie pozostałego czasu do końca lekcji i długości przerwy*/
/*23.11.2022 - Druga wersja prototypowa zegaru: zaaktualizowany styl css, dodanie odświeżania co sekundę, dodana aktualna data
Błędy: duże zużycie procesora oraz ramu, występuje czasem złe obliczanie pozostałego czasu do końca lekcji i długości przerwy/*
/*24.11.2022 - Trzecia wersja zegaru: optymalizacja (zmiejszenie kodu o 30 linijek), naprawiony błąd z złym obliczeniem (nowy krótszy i zoptymalizowany kod)
Stworzenie prototypowej nowej funkcji która będzie pokazywała następną lekcje w danym dniu, lekka modyfikacja tablic przechowujące godziny*/
/*25.11.2022 - Kontynuowana trzecia wersja zegaru: zmiana sposobu pobierania daty, modyfikacja tablic przechowujące godziny, naprawienie obliczania pozostałego czasu do końca lekcji od aktualnej godziny
Dodany komunikat o skończonych  lekcjich i zamknięciu szkoły, uzupełnienie planu lekcji w pozostałych dniach*/
/*26.11.2022 - Kontynuowana trzecia wersja zegaru: dodanie obliczania czasu do końca przerwy, naprawienie wyświetlania długości przerwy, czasu do końca lekcji, wyśwetlanie o ostatniej lekcji.
Dodanie komuniaktu o dniu wolnym, optymalizacja (zmiejszenie kodu o 20) Dodanie nowej strony z planem lekcji, stworzenie skryptu który wypisuje plan lekcji na dany dzień*/
/*27.11.2022 - Czwarta testowa wersja zegaru: Dodanie fajerwerek kiedy jest koniec lekcji, dodanie wyświetlania aktualnego planu i nazwy dnia w polu wyboru */
/*28.11.2022 - Czwarta oficjalna wersja zegaru: Optymalizacja skryptu (zmiejszenie kodu o 10 linijek)*/ /*Marcin Krefta*/