let root = document.documentElement;

const properNumer = InputNumber => Math.round((InputNumber + Number.EPSILON) * 1000) / 1000;

const variables = {};
const variablesCss = {};

variables['plyta'] = 1.8;
variables['plyta_front'] = 2.2;

variables['sciana_wys'] = 245;
variables['sciana_sze'] = 304.5;

variables['skos'] = 112;
variables['skos_sze'] = 52;
variables['sciana_prawa_wys'] = 145;
variables['sciana_prawa_wys_wew'] = variables['sciana_prawa_wys'] - variables['plyta'];

variables['lewa_polka_sze'] = 24;
variables['lewa_polka_sze_wew'] = 24 - variables['plyta_front'];
variables['lewa_polka_wys'] = 19;
variables['lewa_polka_wys_wew'] = 19 - variables['plyta'];
variables['lewa_polka_grupa_wys'] = properNumer(3 * variables['lewa_polka_wys'] + variables['plyta']);


variables['drzwi_wys'] = 208.5;
variables['drzwi_sze'] = 89.5;

variables['gora_polki'] = variables['sciana_sze'] - variables['skos_sze'];
variables['gora_polka_sze'] = (variables['gora_polki'] - variables['plyta']) / 4;
variables['gora_polka_sze_wew'] = (variables['gora_polka_sze'] - variables['plyta']);
variables['gora_polka_sze_pierwsza'] = variables['gora_polka_sze'] + variables['plyta'];
variables['gora_polka_wys'] = variables['sciana_wys'] - variables['drzwi_wys'];
variables['gora_polka_wys_wew'] = properNumer(variables['gora_polka_wys'] - variables['plyta'] - variables['plyta']);


variables['drzwi_prawa'] = variables['lewa_polka_sze'] + variables['drzwi_sze'];

variables['ikea_sze_zew'] = 75;
variables['ikea_sze'] = variables['ikea_sze_zew'] - variables['plyta'];
variables['ikea_sze_wew'] = variables['ikea_sze_zew'] - variables['plyta'] - variables['plyta'];
variables['ikea_prawa'] = variables['drzwi_prawa'] + variables['ikea_sze'] * 2 + variables['plyta'];
variables['ikea_gora'] = 271;
variables['ikea_dol'] = 191.5;
variables['ikea_pion'] = variables['drzwi_wys'] - variables['plyta'];

variables['pion_prawy'] = variables['ikea_dol'] - variables['ikea_sze_zew'] - variables['ikea_sze'];
variables['pion_prawy_wew'] = variables['pion_prawy'] - variables['plyta'];

// variables['wstawka_sze'] = 20;
// variables['wstawka_wys'] = 28;

variables['glebokosc_srodek'] = 58;
variables['glebokosc'] = variables['glebokosc_srodek'] + 8;
variables['glebokosc_lewa_polka'] = variables['glebokosc'] - variables['plyta'];

variables['lustro_wysokosc'] = properNumer(variables['ikea_pion'] - 0.8);
variables['wzmacniajaca_sze'] = 20;


/* ################### */
Object.keys(variables).forEach(item => {
  const properyName = `--${item}`;
  const properyValue = properNumer(variables[item] * .1)  + 'cm';

  root.style.setProperty(properyName, properyValue);
  variablesCss[properyName] = properyValue;
});

console.log(variablesCss);

document.querySelectorAll('[data-sizer]').forEach((item) => {
  if (variables[item.getAttribute('data-sizer')]) {
    item.setAttribute('data-sizer-value', `${variables[item.getAttribute('data-sizer')]}cm`);
  }
});

document.querySelectorAll('[data-cutter]').forEach((item) => {
  if (variables[item.getAttribute('data-cutter')]) {
    item.innerHTML = `${variables[item.getAttribute('data-cutter')]}`;
  }
});

document.querySelectorAll('[data-cutter-amount]').forEach((item) => {
  item.innerHTML = `${item.getAttribute('data-cutter-amount')}`;
});
