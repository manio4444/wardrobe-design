import * as consts from "./consts";
import {config, typeType} from "./config";
import {constToCssVar} from "./helpers";

import './App.css';
import './App.scss';

import {Sizer} from "./components/Sizer";
import {Wykroj} from "./components/Wykroj";

function App() {
    return (
        <div className="wrapper" style={{
            width: constToCssVar(consts.sciana_sze),
            height: constToCssVar(consts.sciana_wys),
        }}>

            <div className="main"></div>

            {config.map(element => {
                if (element.type === typeType.WYKROJ) {
                    return <Wykroj key={element.name} {...element} />
                }
            })}

            <div className="ikea_gora"></div>

            <div className="pion_prawy">
                <div className="pion_prawy_polka"></div>
                <div className="pion_prawy_polka"></div>
                <div className="pion_prawy_polka"></div>
                <div className="pion_prawy_polka"></div>
            </div>

            <div className="skos"></div>
            <div className="skos2"></div>

            {/*<Sizer*/}
            {/*    lvl={1}*/}
            {/*    position={'gora'}*/}
            {/*    size={consts.gora_polka_sze_wew}*/}
            {/*    left={consts.plyta}*/}
            {/*    width={consts.gora_polka_sze - consts.plyta}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"gora"}*/}
            {/*    lvl={1}*/}
            {/*    size={consts.skos_sze}*/}
            {/*    left={consts.gora_polki}*/}
            {/*    width={consts.skos_sze}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"gora"}*/}
            {/*    lvl={2}*/}
            {/*    size={consts.gora_polka_sze}*/}
            {/*    left={0}*/}
            {/*    width={consts.gora_polka_sze}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"gora"}*/}
            {/*    lvl={3}*/}
            {/*    size={consts.gora_polki}*/}
            {/*    left={0}*/}
            {/*    width={consts.gora_polki}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"gora"}*/}
            {/*    lvl={4}*/}
            {/*    size={consts.ikea_gora}*/}
            {/*    left={0}*/}
            {/*    width={consts.ikea_gora}*/}
            {/*/>*/}

            {/*<div className="pomocnicza_poziom" style="bottom: var(--sciana_wys);"></div>*/}
            {/*<div className="pomocnicza_poziom" style="bottom: calc(var(--sciana_wys) - var(--plyta));"></div>*/}
            {/*<div className="pomocnicza_poziom prawa" style="bottom: calc(var(--drzwi_wys) + var(--plyta));"></div>*/}
            {/*<div className="pomocnicza_poziom" style="bottom: var(--drzwi_wys);"></div>*/}
            {/*<div className="pomocnicza_poziom lewa" style="bottom: calc(var(--drzwi_wys) - var(--lewa_polka_wys));"></div>*/}
            {/*<div className="pomocnicza_poziom" style="bottom: 0cm;"></div>*/}

            {/*<Sizer*/}
            {/*    position={"lewa"}*/}
            {/*    lvl={1}*/}
            {/*    size={consts.lewa_polka_wys}*/}
            {/*    width={consts.lewa_polka_wys}*/}
            {/*    bottom={consts.drzwi_wys - consts.lewa_polka_wys}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"lewa"}*/}
            {/*    lvl={1}*/}
            {/*    size={consts.lewa_polka_wys_wew}*/}
            {/*    bottom={consts.drzwi_wys - consts.lewa_polka_wys - consts.lewa_polka_wys}*/}
            {/*    width={consts.lewa_polka_wys_wew}*/}
            {/*/>*/}
            {/*<Sizer*/}
            {/*    position={"lewa"}*/}
            {/*    lvl={1}*/}
            {/*    size={consts.lewa_polka_grupa_wys}*/}
            {/*    bottom={0}*/}
            {/*    width={consts.lewa_polka_grupa_wys}*/}
            {/*/>*/}

            <Sizer
                position={"prawa"}
                lvl={1}
                size={consts.skos}
                className={"sciana_skos"}
                bottom={consts.sciana_prawa_wys}
                width={consts.skos}
            />
            <Sizer
                position={"prawa"}
                lvl={3}
                size={consts.ikea_pion}
                bottom={consts.plyta}
                width={consts.ikea_pion + -0.3}
                info={"Ikea pion płyta"}
                infoPosition={"left"}
            />
            <Sizer
                position={"prawa"}
                lvl={1}
                size={consts.sciana_prawa_wys_wew}
                bottom={consts.plyta}
                width={consts.sciana_prawa_wys_wew}
            />
            <Sizer
                position={"prawa"}
                lvl={2}
                size={consts.sciana_prawa_wys}
                bottom={0}
                width={consts.sciana_prawa_wys}
            />
            <Sizer
                position={"prawa"}
                lvl={1}
                size={consts.gora_polka_wys_wew}
                bottom={consts.drzwi_wys + consts.plyta}
                width={consts.gora_polka_wys_wew}
            />
            <Sizer
                position={"prawa"}
                lvl={2}
                size={consts.gora_polka_wys}
                bottom={consts.drzwi_wys}
                width={consts.gora_polka_wys}
                info={"Krzywy sufit, wacha się od 38.5cm do 37cm po prawo"}
            />
            <Sizer
                position={"prawa"}
                lvl={4}
                size={consts.sciana_wys}
                bottom={0}
                width={consts.sciana_wys}
            />

            {/*<div className="pomocnicza_pion" style="left: 0cm;"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: var(--lewa_polka_sze);"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa));"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--plyta));"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew));"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta));"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta) + var(--ikea_sze_zew));"></div>*/}
            {/*<div className="pomocnicza_pion dol" style="left: calc(var(--drzwi_prawa) + var(--ikea_sze_zew) - var(--plyta) + var(--ikea_sze_zew) - var(--plyta));"></div>*/}

            <Sizer
                position={"dol"}
                lvl={1}
                size={consts.lewa_polka_sze_wew}
                left={0}
                width={consts.lewa_polka_sze - consts.plyta}
                info={" Wymiar na półki i tylnią płytę"}
            />
            <Sizer
                position={" dol"}
                lvl={2}
                size={consts.lewa_polka_sze}
                left={0}
                width={consts.lewa_polka_sze}
            />
            <Sizer
                position={"dol"}
                lvl={1}
                size={consts.drzwi_sze}
                left={consts.lewa_polka_sze}
                width={consts.drzwi_sze}
                info={"Prawa linia to nie krawędź drzwi tylko punkt zaczepienia plyty meblowej (z bez piecznym zapasem)"}
            />
            <Sizer
                position={"dol"}
                lvl={1}
                size={consts.ikea_sze_wew}
                left={consts.drzwi_prawa + consts.plyta}
                width={consts.ikea_sze_wew}
                info={"Ikea szerokość wewnętrzna wsporników/półek. Minimum 2 pełne"}
                infoPosition={"left"}
            />
            <Sizer
                position={"dol"}
                lvl={2}
                size={consts.ikea_sze_zew}
                left={consts.drzwi_prawa}
                width={consts.ikea_sze_zew}
                info={"Ikea szerokość modułu szafy"}
            />
            <Sizer
                position={"dol"}
                lvl={1}
                size={consts.pion_prawy_wew}
                left={consts.drzwi_prawa + consts.ikea_sze_zew + consts.ikea_sze}
                width={consts.pion_prawy_wew}
            />
            <Sizer
                position={"dol"}
                lvl={2}
                size={consts.pion_prawy}
                left={consts.drzwi_prawa + consts.ikea_sze_zew + consts.ikea_sze}
                width={consts.pion_prawy}
            />
            <Sizer
                position={"dol"}
                lvl={3}
                size={consts.ikea_dol}
                width={consts.ikea_dol}
                left={consts.drzwi_prawa}
                info={"Dolna deska po całej szerokości, na niej oparta szyna systemu przesuwnego"}
            />
            <Sizer
                position={"dol"}
                lvl={4}
                size={consts.sciana_sze}
                left={0}
                width={consts.sciana_sze}
            />

            <div className="gora_polka"></div>
            {/*<div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza));"></div>*/}
            {/*<div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze));"></div>*/}
            {/*<div className="gora_polka" style="left: calc(var(--gora_polka_sze_pierwsza) + var(--gora_polka_sze) + var(--gora_polka_sze));"></div>*/}

            {/*<div className="lewe_polki" style="top: calc(var(--gora_polka_wys) + 0cm);">*/}
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            {/*</div>*/}

            {/*<div className="lewe_polki" style="top: calc(var(--gora_polka_wys) + 7.5cm);">*/}
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            {/*</div>*/}

            {/*<div className="lewe_polki" style="top: calc(consts.gora_polka_wys + 15cm);">*/}
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            <div className="lewa_polka"></div>
            {/*</div>*/}


            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza - consts.plyta);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza + consts.gora_polka_sze - consts.plyta);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza + consts.gora_polka_sze);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza + consts.gora_polka_sze + consts.gora_polka_sze - consts.plyta);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.gora_polka_sze_pierwsza + consts.gora_polka_sze + consts.gora_polka_sze);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.sciana_sze - consts.skos_sze - consts.plyta);"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: consts.ikea_gora;"></div>*/}
            {/*<div className="pomocnicza_pion gora" style="left: calc(consts.sciana_sze - consts.skos_sze);"></div>*/}

            {/*<div className="pomocnicza_pion" style="left: consts.sciana_sze;"></div>*/}

            <div className="doors"></div>

            <div className="ikea_pion"></div>
            <div className="ikea_pion"></div>

            <div className="ikea_dol"></div>

            <Sizer
                position={"lewa"}
                size={consts.drzwi_wys}
                bottom={0}
                left={'8cm'}
                width={consts.drzwi_wys - 1}
            />
            <Sizer
                position={"dol"}
                top={"calc(100% - 10cm)"}
                left={consts.drzwi_prawa + consts.plyta}
                info={"Lewa i prawa przegroda zmniejszona 58cm + 8cm = 66cm"}
            />
            <Sizer
                position={"dol"}
                top={"calc(100% - 13cm)"}
                left={consts.drzwi_prawa + consts.ikea_sze}
                info={"Środkowa przegroda zmniejszona głębokość o system przesuwny (8cm), ale minimum 58cm (ikea)"}
                infoPosition={"left"}
            />
            <Sizer
                position={"dol"}
                size={consts.ikea_sze}
                top={"calc(100% - 5cm)"}
                left={consts.drzwi_prawa + consts.ikea_sze}
                width={consts.ikea_sze}
                info={"Tyle będzie miało prawe skrzydło z lustrem, bo ma zachodzić na środkową przegrodę"}
            />
            <Sizer
                position={"lewa"}
                size={consts.lustro_wysokosc}
                bottom={consts.plyta}
                left={consts.drzwi_prawa + consts.ikea_sze + (consts.ikea_sze / 3)}
                width={consts.lustro_wysokosc}
                info={"Lustro wysokość: Ikea pion minus 8mm"}
            />

            <table className="wykroje" style={{"--sciana_sze": constToCssVar(consts.sciana_sze)}}>
                <tbody>
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
                </tbody>
            </table>

        </div>
    );
}

export default App;
