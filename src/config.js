import {ikea_sze_wew, ikea_sze_zew, lewa_drewniana_wew, lewa_drewniana_zew, plyta} from "./consts";

export const typeType = {
    WYKROJ: "wykroj",
}
export const orientationType = {
    HORIZONTAL: 'pozioma',
    VARTICAL: 'pionowa',
}
export const colorType = {
    WOOD: 'drewno',
}

export const config = [
    {
        name: "biała środek sufit lewa",
        type: typeType.WYKROJ,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: ikea_sze_wew,
        left: lewa_drewniana_zew + plyta,
        top: 0,
    },
    {
        name: "biała środek sufit prawa",
        type: typeType.WYKROJ,
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
    }, {
        name: "drewniana lewa sufit",
        type: typeType.WYKROJ,
        colorType: colorType.WOOD,
        orientation: orientationType.HORIZONTAL,
        helperLeft: false,
        helperRight: true,
        width: lewa_drewniana_wew,
        left: plyta,
        top: 0,
    },
]
