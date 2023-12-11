import {
    biala_wysokosc_srodka_wew,
    ikea_sze_wew,
    ikea_sze_zew,
    lewa_drewniana_wew,
    lewa_drewniana_zew,
    plyta,
    prawa_drewniana_wew,
    sciana_sze, sciana_wys
} from "./consts";

export const typeType = {
    WYKROJ: "wykroj",
}
export const orientationType = {
    HORIZONTAL: 'pozioma',
    VERTICAL: 'pionowa',
}
export const colorType = {
    WHITE: 'biala',
    WOOD: 'drewno',
}

export const config = [
    {
        name: "biała środek górnej lewej sufit",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: ikea_sze_wew,
        left: lewa_drewniana_zew + plyta,
        top: 0,
        sizer: {
            lvl: 1,
            position: "gora",
        }
    },
    {
        name: "biała środek górnej lewej dol",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.HORIZONTAL,
        width: ikea_sze_wew,
        left: lewa_drewniana_zew + plyta,
        top: biala_wysokosc_srodka_wew - plyta,
    },
    {
        name: "biała środek górnej prawej sufit",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: ikea_sze_wew,
        left: lewa_drewniana_zew + ikea_sze_zew + plyta,
        top: 0,
        sizer: {
            lvl: 1,
            position: "gora",
        }
    },
    {
        name: "biała środek górnej prawej dol",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: ikea_sze_wew,
        left: lewa_drewniana_zew + ikea_sze_zew + plyta,
        top: biala_wysokosc_srodka_wew - plyta,
    },
    {
        name: "biała środek górna lewej lewa",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: lewa_drewniana_zew,
        top: 0,
    },
    {
        name: "biała środek górna lewej prawa",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: lewa_drewniana_zew + ikea_sze_wew + plyta,
        top: 0,
        sizer: {
            lvl: 1,
            position: "lewa",
        }
    },
    {
        name: "biała środek górna prawej lewa",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: lewa_drewniana_zew + ikea_sze_zew,
        top: 0,
    },
    {
        name: "biała środek górna prawej prawa",
        type: typeType.WYKROJ,
        colorType: colorType.WHITE,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: lewa_drewniana_zew + ikea_sze_zew + ikea_sze_wew + plyta,
        top: 0,
    },
    {
        name: "drewniana lewa sufit",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: lewa_drewniana_wew,
        left: plyta,
        top: 0,
        sizer: {
            lvl: 1,
            position: "gora",
        }
    },
    {
        name: "drewniana lewa lewa",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: 0,
        top: 0,
        sizer: {
            lvl: 2,
            position: "lewa",
        }
    },
    {
        name: "drewniana lewa prawa gora",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: biala_wysokosc_srodka_wew,
        left: lewa_drewniana_wew + plyta,
        top: 0,
    },
    {
        name: "drewniana lewa prawa dol",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: sciana_wys - biala_wysokosc_srodka_wew,
        left: 0,
        top: biala_wysokosc_srodka_wew,
        sizer: {
            lvl: 1,
            position: "lewa",
        }
    },
    {
        name: "drewniana prawa gora",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.VERTICAL,
        helperTop: false,
        helperBottom: true,
        width: sciana_wys - biala_wysokosc_srodka_wew,
        left: 0,
        top: biala_wysokosc_srodka_wew,
        sizer: {
            lvl: 1,
            position: "lewa",
        }
    },
    {
        name: "drewniana prawa lewa 1",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.HORIZONTAL,
        helperLeft: true,
        width: prawa_drewniana_wew,
        left: sciana_sze - prawa_drewniana_wew - plyta,
        top: 0,
        sizer: {
            lvl: 1,
            position: "gora",
        }
    },
]
