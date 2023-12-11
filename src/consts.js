import {properNumber} from "./helpers";


export const plyta = 1.8;
export const ikea_sze_zew = 75;
export const ikea_sze_wew = ikea_sze_zew - plyta - plyta;

export const sciana_wys = 269;
export const sciana_sze = 253;
export const sufit_kanal = 240;

export const sufit_biala_srodek = ikea_sze_zew + ikea_sze_zew;
export const pantograf = 130;
export const szuflady_srodek = 2 * 40;
export const biala_wysokosc_srodka_zew = pantograf + szuflady_srodek;
export const lewa_drewniana_zew = 35;
export const lewa_drewniana_wew = lewa_drewniana_zew - (2 * plyta);
export const prawa_drewniana_zew = sciana_sze - lewa_drewniana_zew - (2 * ikea_sze_zew);
export const prawa_drewniana_wew = prawa_drewniana_zew - (2 * plyta);


/**
 * OLD TO REMOVE
 */

export const plyta_front = 2.2;



export const skos_sze = 52;
export const sciana_prawa_wys = 145;
export const sciana_prawa_wys_wew = sciana_prawa_wys - plyta;

export const lewa_polka_sze = 24;
export const lewa_polka_sze_wew = 24 - plyta_front;
export const lewa_polka_wys = 19;
export const lewa_polka_wys_wew = 19 - plyta;
export const lewa_polka_grupa_wys = properNumber(3 * lewa_polka_wys + plyta);


export const drzwi_wys = 208.5;
export const drzwi_sze = 89.5;

export const gora_polki = sciana_sze - skos_sze;
export const gora_polka_sze = (gora_polki - plyta) / 4;
export const gora_polka_sze_wew = (gora_polka_sze - plyta);
export const gora_polka_sze_pierwsza = gora_polka_sze + plyta;
export const gora_polka_wys = sciana_wys - drzwi_wys;
export const gora_polka_wys_wew = properNumber(gora_polka_wys - plyta - plyta);


export const drzwi_prawa = lewa_polka_sze + drzwi_sze;
export const ikea_sze = ikea_sze_zew - plyta;
export const ikea_prawa = drzwi_prawa + ikea_sze * 2 + plyta;
export const ikea_gora = 271;
export const ikea_dol = 191.5;
export const ikea_pion = drzwi_wys - plyta;

export const pion_prawy = ikea_dol - ikea_sze_zew - ikea_sze;
export const pion_prawy_wew = pion_prawy - plyta;

export const glebokosc_srodek = 58;
export const glebokosc = glebokosc_srodek + 8;
export const glebokosc_lewa_polka = glebokosc - plyta;

export const lustro_wysokosc = properNumber(ikea_pion - 0.8);
export const wzmacniajaca_sze = 20;

