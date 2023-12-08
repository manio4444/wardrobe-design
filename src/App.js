import './App.css';

function App() {
  return (
    <div className="wrapper">

        <div className="main"></div>

        <div className="ikea_gora"></div>

        <div className="pion_prawy">
            <div className="pion_prawy_polka"></div>
            <div className="pion_prawy_polka"></div>
            <div className="pion_prawy_polka"></div>
            <div className="pion_prawy_polka"></div>
        </div>

        <div className="skos"></div>
        <div className="skos2"></div>

        <div className="sizer gora lvl_1" data-sizer="gora_polka_sze_wew" style="left: var(--plyta); width: calc(var(--gora_polka_sze) - var(--plyta));"></div>
        <div className="sizer gora lvl_1" data-sizer="skos_sze" style="left: var(--gora_polki); width: var(--skos_sze);"></div>
        <div className="sizer gora lvl_2" data-sizer="gora_polka_sze" style="left: 0; width: var(--gora_polka_sze);"></div>
        <div className="sizer gora lvl_3" data-sizer="gora_polki" style="left: 0; width: var(--gora_polki);"></div>
        <div className="sizer gora lvl_4" data-sizer="ikea_gora" style="left: 0; width: var(--ikea_gora);"></div>

        <div className="pomocnicza_poziom" style="bottom: var(--sciana_wys);"></div>
        <div className="pomocnicza_poziom" style="bottom: calc(var(--sciana_wys) - var(--plyta));"></div>
        <div className="pomocnicza_poziom prawa" style="bottom: calc(var(--drzwi_wys) + var(--plyta));"></div>
        <div className="pomocnicza_poziom" style="bottom: var(--drzwi_wys);"></div>
        <div className="pomocnicza_poziom lewa" style="bottom: calc(var(--drzwi_wys) - var(--lewa_polka_wys));"></div>
        <div className="pomocnicza_poziom" style="bottom: 0cm;"></div>

        <div className="sizer lewa lvl_1" data-sizer="lewa_polka_wys" style="bottom: calc(var(--drzwi_wys) - var(--lewa_polka_wys)); width:  var(--lewa_polka_wys);"></div>
        <div className="sizer lewa lvl_1" data-sizer="lewa_polka_wys_wew" style="bottom: calc(var(--drzwi_wys) - var(--lewa_polka_wys) - var(--lewa_polka_wys)); width:  calc(var(--lewa_polka_wys) - var(--plyta));"></div>
        <div className="sizer lewa lvl_1" data-sizer="lewa_polka_grupa_wys" style="bottom: 0; width: var(--lewa_polka_grupa_wys);"></div>

        <div className="sizer prawa lvl_1 sciana_skos"data-sizer="skos"  style="bottom: var(--sciana_prawa_wys); width: var(--skos);"></div>
        <div className="sizer prawa lvl_3" data-sizer="ikea_pion" style="bottom: var(--plyta); width: calc(var(--ikea_pion) + -0.03cm);"><div className="info left">Ikea pion płyta</div></div>
        <div className="sizer prawa lvl_1" data-sizer="sciana_prawa_wys_wew" style="bottom: var(--plyta); width: var(--sciana_prawa_wys_wew);"></div>
        <div className="sizer prawa lvl_2" data-sizer="sciana_prawa_wys" style="bottom: 0; width: var(--sciana_prawa_wys);"></div>
        <div className="sizer prawa lvl_1" data-sizer="gora_polka_wys_wew" style="bottom: calc(var(--drzwi_wys) + var(--plyta)); width: var(--gora_polka_wys_wew);"></div>
        <div className="sizer prawa lvl_2" data-sizer="gora_polka_wys" style="bottom: var(--drzwi_wys); width: var(--gora_polka_wys);"><div className="info">Krzywy sufit, wacha się od 38.5cm do 37cm po prawo</div></div>
        <div className="sizer prawa lvl_4" data-sizer="sciana_wys" style="bottom: 0; width: var(--sciana_wys);"></div>

        <div className="pomocnicza_pion" style="left: 0cm;"></div>
        <div className="pomocnicza_pion dol" style="left: var(--lewa_polka_sze);"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa));"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--plyta));"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew));"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta));"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta) + var(--ikea_sze_zew));"></div>
        <div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta) + var(--ikea_sze_zew) - var(--plyta));"></div>

        <div className="sizer dol lvl_1" data-sizer="lewa_polka_sze_wew" style="left: 0; width: calc(var(--lewa_polka_sze) - var(--plyta));"><div className="info">Wymiar na półki i tylnią płytę</div></div>
        <div className="sizer dol lvl_2" data-sizer="lewa_polka_sze" style="left: 0; width: var(--lewa_polka_sze);"></div>
        <div className="sizer dol lvl_1" data-sizer="drzwi_sze" style="left: var(--lewa_polka_sze); width: var(--drzwi_sze);"><div className="info">Prawa linia to nie krawędź drzwi tylko punkt zaczepienia plyty meblowej (z bez piecznym zapasem)</div></div>
        <div className="sizer dol lvl_1" data-sizer="ikea_sze_wew" style="left: calc(var(--drzwi_prawa) + var(--plyta)); width: var(--ikea_sze_wew);"><div className="info left">Ikea szerokość wewnętrzna wsporników/półek. Minimum 2 pełne</div></div>
        <div className="sizer dol lvl_2" data-sizer="ikea_sze_zew" style="left: var(--drzwi_prawa); width: var(--ikea_sze_zew);"><div className="info">Ikea szerokość modułu szafy</div></div>
        <div className="sizer dol lvl_1" data-sizer="pion_prawy_wew" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) + var(--ikea_sze)); width: var(--pion_prawy_wew);"></div>
        <div className="sizer dol lvl_2" data-sizer="pion_prawy" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) + var(--ikea_sze)); width: var(--pion_prawy);"></div>
        <div className="sizer dol lvl_3" data-sizer="ikea_dol" style="left: var(--drzwi_prawa); width: calc(var(--ikea_dol));"><div className="info">Dolna deska po całej szerokości, na niej oparta szyna systemu przesuwnego</div></div>
        <div className="sizer dol lvl_4" data-sizer="sciana_sze" style="left: 0; width: var(--sciana_sze);"></div>

        <div className="gora_polka"></div>
        <div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza));"></div>
        <div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze));"></div>
        <div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze) + var(--gora_polka_sze));"></div>

        <div className="lewe_polki" style="top: calc(var(--gora_polka_wys) + 0cm);">
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
        </div>

        <div className="lewe_polki" style="top: calc(var(--gora_polka_wys) + 7.5cm);">
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
        </div>

        <div className="lewe_polki" style="top: calc(var(--gora_polka_wys) + 15cm);">
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
        </div>


        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza) - var(--plyta));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze) - var(--plyta));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze) + var(--gora_polka_sze) - var(--plyta));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze) + var(--gora_polka_sze));"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--sciana_sze) - var(--skos_sze) - var(--plyta));"></div>
        <div className="pomocnicza_pion gora" style="left: var(--ikea_gora);"></div>
        <div className="pomocnicza_pion gora" style="left: calc(var(--sciana_sze) - var(--skos_sze));"></div>

        <div className="pomocnicza_pion" style="left: var(--sciana_sze);"></div>

        <div className="doors"></div>

        <div className="ikea_pion"></div>
        <div className="ikea_pion"></div>

        <div className="ikea_dol"></div>

        <div className="sizer lewa" data-sizer="drzwi_wys" style= "bottom: 0; left: 8cm; width: calc(var(--drzwi_wys) - .1cm);"></div>
        <div className="sizer dol" data-sizer style="top: calc(100% - 10cm); left: calc(var(--drzwi_prawa) + var(--plyta));"><div className="info">Lewa i prawa przegroda zmniejszona 58cm + 8cm = 66cm</div></div>
        <div className="sizer dol" data-sizer style="top: calc(100% - 13cm); left: calc(var(--drzwi_prawa) + var(--ikea_sze));"><div className="info left">Środkowa przegroda zmniejszona głębokość o system przesuwny (8cm), ale minimum 58cm (ikea)</div></div>
        <div className="sizer dol" data-sizer="ikea_sze" style="top: calc(100% - 5cm); left: calc(var(--drzwi_prawa) + var(--ikea_sze)); width: var(--ikea_sze);"><div className="info">Tyle będzie miało prawe skrzydło z lustrem, bo ma zachodzić na środkową przegrodę</div></div>
        <div className="sizer lewa" data-sizer="lustro_wysokosc" style= "bottom: var(--plyta); left: calc(var(--drzwi_prawa) + var(--ikea_sze) + (var(--ikea_sze) / 3)); width: calc(var(--lustro_wysokosc));"><div className="info">Lustro wysokość: Ikea pion minus 8mm</div></div>

        <table className="wykroje">
            <tr className="wykroj no-count">
                <td className="no-border">Wykroje płyty 18mm:</td>
            </tr>
            <tr className="wykroj">
                <td className="no-border" data-cutter-name="Głębokość szafy:"></td>
                <td className="no-border" data-cutter="glebokosc"></td>
            </tr>
            <tr className="wykroj no-count">
                <td>Lp. Nazwa</td>
                <td>Wys 1</td>
                <td>Sze 2</td>
                <td>ilość</td>
                <td>słój</td>
                <td>Kr 1</td>
                <td>Kr 2</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Górne półki góra"></td>
                <td data-cutter="gora_polki"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Górne półki dół"></td>
                <td data-cutter="ikea_gora"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Górne półki piony"></td>
                <td data-cutter="gora_polka_wys_wew"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="5"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Prawy górny skos"></td>
                <td data-cutter="skos"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Prawa ściana"></td>
                <td data-cutter="sciana_prawa_wys_wew"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Prawe półki"></td>
                <td data-cutter="pion_prawy_wew"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="4"></td>
                <td>NIE</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Podłoga"></td>
                <td data-cutter="ikea_dol"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Ikea pion"></td>
                <td data-cutter="ikea_pion"></td>
                <td data-cutter="glebokosc"></td>
                <td data-cutter-amount="2"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Ikea pion środkowy"></td>
                <td data-cutter="ikea_pion"></td>
                <td data-cutter="glebokosc_srodek"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Ikea półka wewnątrz"></td>
                <td data-cutter="ikea_sze_wew"></td>
                <td data-cutter="glebokosc_srodek"></td>
                <td data-cutter-amount="2"></td>
                <td>NIE</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Ikea wzmacniające wew."></td>
                <td data-cutter="ikea_sze_wew"></td>
                <td data-cutter="wzmacniajaca_sze"></td>
                <td data-cutter-amount="4"></td>
                <td>NIE</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Skrzydło na lustro"></td>
                <td data-cutter="lustro_wysokosc"></td>
                <td data-cutter="ikea_sze"></td>
                <td data-cutter-amount="1"></td>
                <td>NIE</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Lewe półki plecy"></td>
                <td data-cutter="lewa_polka_grupa_wys"></td>
                <td data-cutter="lewa_polka_sze_wew"></td>
                <td data-cutter-amount="3"></td>
                <td>NIE</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr className="wykroj">
                <td data-cutter-count data-cutter-name="Lewe półki"></td>
                <td data-cutter="lewa_polka_sze_wew"></td>
                <td data-cutter="glebokosc_lewa_polka"></td>
                <td data-cutter-amount="12"></td>
                <td>NIE</td>
                <td>1</td>
                <td>1</td>
            </tr>

        </table>

    </div>
  );
}

export default App;
