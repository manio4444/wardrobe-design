import {
    biala_wysokosc_srodka_wew,
    ikea_sze_wew,
    ikea_sze_zew,
    lewa_drewniana_wew,
    lewa_drewniana_zew,
    plyta
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
        name: "biała środek sufit lewa",
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
        name: "biała środek sufit prawa",
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
            lvl: 1,
            position: "lewa",
        }
    },
]
