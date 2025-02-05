const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  },
  {
    name: "Åland Islands",
    code: "AX",
    flag: "https://flagcdn.com/ax.svg",
  },
  {
    name: "Albania",
    code: "AL",
    flag: "https://flagcdn.com/al.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: "https://flagcdn.com/dz.svg",
  },
  {
    name: "American Samoa",
    code: "AS",
    flag: "https://flagcdn.com/as.svg",
  },
  {
    name: "AndorrA",
    code: "AD",
    flag: "https://flagcdn.com/ad.svg",
  },
  {
    name: "Angola",
    code: "AO",
    flag: "https://flagcdn.com/ao.svg",
  },
  {
    name: "Anguilla",
    code: "AI",
    flag: "https://flagcdn.com/ai.svg",
  },
  {
    name: "Antarctica",
    code: "AQ",
    flag: "https://flagcdn.com/aq.svg",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    flag: "https://flagcdn.com/ag.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "https://flagcdn.com/ar.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    flag: "https://flagcdn.com/am.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    flag: "https://flagcdn.com/aw.svg",
  },
  {
    name: "Australia",
    code: "AU",
    flag: "https://flagcdn.com/au.svg",
  },
  {
    name: "Austria",
    code: "AT",
    flag: "https://flagcdn.com/at.svg",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    flag: "https://flagcdn.com/az.svg",
  },
  {
    name: "Bahamas",
    code: "BS",
    flag: "https://flagcdn.com/bs.svg",
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: "https://flagcdn.com/bh.svg",
  },
  {
    name: "Bangladesh",
    code: "BD",
    flag: "https://flagcdn.com/bd.svg",
  },
  {
    name: "Barbados",
    code: "BB",
    flag: "https://flagcdn.com/bb.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    flag: "https://flagcdn.com/by.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    flag: "https://flagcdn.com/be.svg",
  },
  {
    name: "Belize",
    code: "BZ",
    flag: "https://flagcdn.com/bz.svg",
  },
  {
    name: "Benin",
    code: "BJ",
    flag: "https://flagcdn.com/bj.svg",
  },
  {
    name: "Bermuda",
    code: "BM",
    flag: "https://flagcdn.com/bm.svg",
  },
  {
    name: "Bhutan",
    code: "BT",
    flag: "https://flagcdn.com/bt.svg",
  },
  {
    name: "Bolivia",
    code: "BO",
    flag: "https://flagcdn.com/bo.svg",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    flag: "https://flagcdn.com/ba.svg",
  },
  {
    name: "Botswana",
    code: "BW",
    flag: "https://flagcdn.com/bw.svg",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    flag: "https://flagcdn.com/bv.svg",
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "https://flagcdn.com/br.svg",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    flag: "https://flagcdn.com/io.svg",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    flag: "https://flagcdn.com/bn.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag: "https://flagcdn.com/bg.svg",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    flag: "https://flagcdn.com/bf.svg",
  },
  {
    name: "Burundi",
    code: "BI",
    flag: "https://flagcdn.com/bi.svg",
  },
  {
    name: "Cambodia",
    code: "KH",
    flag: "https://flagcdn.com/kh.svg",
  },
  {
    name: "Cameroon",
    code: "CM",
    flag: "https://flagcdn.com/cm.svg",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://flagcdn.com/ca.svg",
  },
  {
    name: "Cape Verde",
    code: "CV",
    flag: "https://flagcdn.com/cv.svg",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    flag: "https://flagcdn.com/ky.svg",
  },
  {
    name: "Central African Republic",
    code: "CF",
    flag: "https://flagcdn.com/cf.svg",
  },
  {
    name: "Chad",
    code: "TD",
    flag: "https://flagcdn.com/td.svg",
  },
  {
    name: "Chile",
    code: "CL",
    flag: "https://flagcdn.com/cl.svg",
  },
  {
    name: "China",
    code: "CN",
    flag: "https://flagcdn.com/tw.svg",
  },
  {
    name: "Christmas Island",
    code: "CX",
    flag: "https://flagcdn.com/cx.svg",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    flag: "https://flagcdn.com/cc.svg",
  },
  {
    name: "Colombia",
    code: "CO",
    flag: "https://flagcdn.com/co.svg",
  },
  {
    name: "Comoros",
    code: "KM",
    flag: "https://flagcdn.com/km.svg",
  },
  {
    name: "Congo",
    code: "CG",
    flag: "https://flagcdn.com/cg.svg",
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD",
    flag: "https://flagcdn.com/cd.svg",
  },
  {
    name: "Cook Islands",
    code: "CK",
    flag: "https://flagcdn.com/ck.svg",
  },
  {
    name: "Costa Rica",
    code: "CR",
    flag: "https://flagcdn.com/cr.svg",
  },
  {
    name: "Cote D'Ivoire",
    code: "CI",
    flag: null,
  },
  {
    name: "Croatia",
    code: "HR",
    flag: "https://flagcdn.com/hr.svg",
  },
  {
    name: "Cuba",
    code: "CU",
    flag: "https://flagcdn.com/cu.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    flag: "https://flagcdn.com/cy.svg",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    flag: "https://flagcdn.com/cz.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    flag: "https://flagcdn.com/dk.svg",
  },
  {
    name: "Djibouti",
    code: "DJ",
    flag: "https://flagcdn.com/dj.svg",
  },
  {
    name: "Dominica",
    code: "DM",
    flag: "https://flagcdn.com/do.svg",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    flag: "https://flagcdn.com/do.svg",
  },
  {
    name: "Ecuador",
    code: "EC",
    flag: "https://flagcdn.com/ec.svg",
  },
  {
    name: "Egypt",
    code: "EG",
    flag: "https://flagcdn.com/eg.svg",
  },
  {
    name: "El Salvador",
    code: "SV",
    flag: "https://flagcdn.com/sv.svg",
  },
  {
    name: "England",
    code: "?",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    flag: "https://flagcdn.com/gq.svg",
  },
  {
    name: "Eritrea",
    code: "ER",
    flag: "https://flagcdn.com/er.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    flag: "https://flagcdn.com/ee.svg",
  },
  {
    name: "Ethiopia",
    code: "ET",
    flag: "https://flagcdn.com/et.svg",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    flag: "https://flagcdn.com/fk.svg",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    flag: "https://flagcdn.com/fo.svg",
  },
  {
    name: "Fiji",
    code: "FJ",
    flag: "https://flagcdn.com/fj.svg",
  },
  {
    name: "Finland",
    code: "FI",
    flag: "https://flagcdn.com/fi.svg",
  },
  {
    name: "France",
    code: "FR",
    flag: "https://flagcdn.com/fr.svg",
  },
  {
    name: "French Guiana",
    code: "GF",
    flag: "https://flagcdn.com/gf.svg",
  },
  {
    name: "French Polynesia",
    code: "PF",
    flag: "https://flagcdn.com/pf.svg",
  },
  {
    name: "French Southern Territories",
    code: "TF",
    flag: "https://flagcdn.com/tf.svg",
  },
  {
    name: "Gabon",
    code: "GA",
    flag: "https://flagcdn.com/ga.svg",
  },
  {
    name: "Gambia",
    code: "GM",
    flag: "https://flagcdn.com/gm.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    flag: "https://flagcdn.com/gs.svg",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://flagcdn.com/de.svg",
  },
  {
    name: "Ghana",
    code: "GH",
    flag: "https://flagcdn.com/gh.svg",
  },
  {
    name: "Gibraltar",
    code: "GI",
    flag: "https://flagcdn.com/gi.svg",
  },
  {
    name: "Greece",
    code: "GR",
    flag: "https://flagcdn.com/gr.svg",
  },
  {
    name: "Greenland",
    code: "GL",
    flag: "https://flagcdn.com/gl.svg",
  },
  {
    name: "Grenada",
    code: "GD",
    flag: "https://flagcdn.com/gd.svg",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    flag: "https://flagcdn.com/gp.svg",
  },
  {
    name: "Guam",
    code: "GU",
    flag: "https://flagcdn.com/gu.svg",
  },
  {
    name: "Guatemala",
    code: "GT",
    flag: "https://flagcdn.com/gt.svg",
  },
  {
    name: "Guernsey",
    code: "GG",
    flag: "https://flagcdn.com/gg.svg",
  },
  {
    name: "Guinea",
    code: "GN",
    flag: "https://flagcdn.com/gw.svg",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    flag: "https://flagcdn.com/gw.svg",
  },
  {
    name: "Guyana",
    code: "GY",
    flag: "https://flagcdn.com/gy.svg",
  },
  {
    name: "Haiti",
    code: "HT",
    flag: "https://flagcdn.com/ht.svg",
  },
  {
    name: "Heard Island and Mcdonald Islands",
    code: "HM",
    flag: "https://flagcdn.com/hm.svg",
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA",
    flag: "https://flagcdn.com/va.svg",
  },
  {
    name: "Honduras",
    code: "HN",
    flag: "https://flagcdn.com/hn.svg",
  },
  {
    name: "Hong Kong",
    code: "HK",
    flag: "https://flagcdn.com/hk.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    flag: "https://flagcdn.com/hu.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    flag: "https://flagcdn.com/is.svg",
  },
  {
    name: "India",
    code: "IN",
    flag: "https://flagcdn.com/in.svg",
  },
  {
    name: "Indonesia",
    code: "ID",
    flag: "https://flagcdn.com/id.svg",
  },
  {
    name: "Iran, Islamic Republic Of",
    code: "IR",
    flag: "https://flagcdn.com/ir.svg",
  },
  {
    name: "Iraq",
    code: "IQ",
    flag: "https://flagcdn.com/iq.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    name: "Isle of Man",
    code: "IM",
    flag: "https://flagcdn.com/im.svg",
  },
  {
    name: "Israel",
    code: "IL",
    flag: "https://flagcdn.com/il.svg",
  },
  {
    name: "Italy",
    code: "IT",
    flag: "https://flagcdn.com/it.svg",
  },
  {
    name: "Jamaica",
    code: "JM",
    flag: "https://flagcdn.com/jm.svg",
  },
  {
    name: "Japan",
    code: "JP",
    flag: "https://flagcdn.com/jp.svg",
  },
  {
    name: "Jersey",
    code: "JE",
    flag: "https://flagcdn.com/je.svg",
  },
  {
    name: "Jordan",
    code: "JO",
    flag: "https://flagcdn.com/jo.svg",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flag: "https://flagcdn.com/kz.svg",
  },
  {
    name: "Kenya",
    code: "KE",
    flag: "https://flagcdn.com/ke.svg",
  },
  {
    name: "Kiribati",
    code: "KI",
    flag: "https://flagcdn.com/ki.svg",
  },
  {
    name: "Korea, Democratic People'S Republic of",
    code: "KP",
    flag: "https://flagcdn.com/kp.svg",
  },
  {
    name: "Korea, Republic of",
    code: "KR",
    flag: "https://flagcdn.com/kr.svg",
  },
  {
    name: "Kuwait",
    code: "KW",
    flag: "https://flagcdn.com/kw.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flag: "https://flagcdn.com/kg.svg",
  },
  {
    name: "Lao People'S Democratic Republic",
    code: "LA",
    flag: "https://flagcdn.com/la.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    flag: "https://flagcdn.com/lv.svg",
  },
  {
    name: "Lebanon",
    code: "LB",
    flag: "https://flagcdn.com/lb.svg",
  },
  {
    name: "Lesotho",
    code: "LS",
    flag: "https://flagcdn.com/ls.svg",
  },
  {
    name: "Liberia",
    code: "LR",
    flag: "https://flagcdn.com/lr.svg",
  },
  {
    name: "Libyan Arab Jamahiriya",
    code: "LY",
    flag: null,
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flag: "https://flagcdn.com/li.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    flag: "https://flagcdn.com/lt.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: "https://flagcdn.com/lu.svg",
  },
  {
    name: "Macao",
    code: "MO",
    flag: "https://flagcdn.com/mo.svg",
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
    flag: "https://flagcdn.com/mk.svg",
  },
  {
    name: "Madagascar",
    code: "MG",
    flag: "https://flagcdn.com/mg.svg",
  },
  {
    name: "Malawi",
    code: "MW",
    flag: "https://flagcdn.com/mw.svg",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "https://flagcdn.com/my.svg",
  },
  {
    name: "Maldives",
    code: "MV",
    flag: "https://flagcdn.com/mv.svg",
  },
  {
    name: "Mali",
    code: "ML",
    flag: "https://flagcdn.com/ml.svg",
  },
  {
    name: "Malta",
    code: "MT",
    flag: "https://flagcdn.com/mt.svg",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    flag: "https://flagcdn.com/mh.svg",
  },
  {
    name: "Martinique",
    code: "MQ",
    flag: "https://flagcdn.com/mq.svg",
  },
  {
    name: "Mauritania",
    code: "MR",
    flag: "https://flagcdn.com/mr.svg",
  },
  {
    name: "Mauritius",
    code: "MU",
    flag: "https://flagcdn.com/mu.svg",
  },
  {
    name: "Mayotte",
    code: "YT",
    flag: "https://flagcdn.com/yt.svg",
  },
  {
    name: "Mexico",
    code: "MX",
    flag: "https://flagcdn.com/mx.svg",
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM",
    flag: "https://flagcdn.com/fm.svg",
  },
  {
    name: "Moldova, Republic of",
    code: "MD",
    flag: "https://flagcdn.com/md.svg",
  },
  {
    name: "Monaco",
    code: "MC",
    flag: "https://flagcdn.com/mc.svg",
  },
  {
    name: "Mongolia",
    code: "MN",
    flag: "https://flagcdn.com/mn.svg",
  },
  {
    name: "Montserrat",
    code: "MS",
    flag: "https://flagcdn.com/ms.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    flag: "https://flagcdn.com/ma.svg",
  },
  {
    name: "Mozambique",
    code: "MZ",
    flag: "https://flagcdn.com/mz.svg",
  },
  {
    name: "Myanmar",
    code: "MM",
    flag: "https://flagcdn.com/mm.svg",
  },
  {
    name: "Namibia",
    code: "NA",
    flag: "https://flagcdn.com/na.svg",
  },
  {
    name: "Nauru",
    code: "NR",
    flag: "https://flagcdn.com/nr.svg",
  },
  {
    name: "Nepal",
    code: "NP",
    flag: "https://flagcdn.com/np.svg",
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: "https://flagcdn.com/nl.svg",
  },
  {
    name: "Netherlands Antilles",
    code: "AN",
    flag: null,
  },
  {
    name: "New Caledonia",
    code: "NC",
    flag: "https://flagcdn.com/nc.svg",
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: "https://flagcdn.com/nz.svg",
  },
  {
    name: "Nicaragua",
    code: "NI",
    flag: "https://flagcdn.com/ni.svg",
  },
  {
    name: "Niger",
    code: "NE",
    flag: "https://flagcdn.com/ne.svg",
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: "https://flagcdn.com/ng.svg",
  },
  {
    name: "Niue",
    code: "NU",
    flag: "https://flagcdn.com/nu.svg",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    flag: "https://flagcdn.com/nf.svg",
  },
  {
    name: "Northern Ireland",
    code: "?",
    flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Northern_Ireland_%281953%E2%80%931972%29.svg",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    flag: "https://flagcdn.com/mp.svg",
  },
  {
    name: "Norway",
    code: "NO",
    flag: "https://flagcdn.com/no.svg",
  },
  {
    name: "Oman",
    code: "OM",
    flag: "https://flagcdn.com/ro.svg",
  },
  {
    name: "Pakistan",
    code: "PK",
    flag: "https://flagcdn.com/pk.svg",
  },
  {
    name: "Palau",
    code: "PW",
    flag: "https://flagcdn.com/pw.svg",
  },
  {
    name: "Palestinian Territory, Occupied",
    code: "PS",
    flag: null,
  },
  {
    name: "Panama",
    code: "PA",
    flag: "https://flagcdn.com/pa.svg",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    flag: "https://flagcdn.com/pg.svg",
  },
  {
    name: "Paraguay",
    code: "PY",
    flag: "https://flagcdn.com/py.svg",
  },
  {
    name: "Peru",
    code: "PE",
    flag: "https://flagcdn.com/pe.svg",
  },
  {
    name: "Philippines",
    code: "PH",
    flag: "https://flagcdn.com/ph.svg",
  },
  {
    name: "Pitcairn",
    code: "PN",
    flag: "https://flagcdn.com/pn.svg",
  },
  {
    name: "Poland",
    code: "PL",
    flag: "https://flagcdn.com/pl.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    flag: "https://flagcdn.com/pt.svg",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    flag: "https://flagcdn.com/pr.svg",
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "https://flagcdn.com/qa.svg",
  },
  {
    name: "Reunion",
    code: "RE",
    flag: "https://flagcdn.com/re.svg",
  },
  {
    name: "Romania",
    code: "RO",
    flag: "https://flagcdn.com/ro.svg",
  },
  {
    name: "Russian Federation",
    code: "RU",
    flag: "https://flagcdn.com/ru.svg",
  },
  {
    name: "RWANDA",
    code: "RW",
    flag: "https://flagcdn.com/rw.svg",
  },
  {
    name: "Saint Helena",
    code: "SH",
    flag: "https://flagcdn.com/sh.svg",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    flag: "https://flagcdn.com/kn.svg",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    flag: "https://flagcdn.com/lc.svg",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    flag: "https://flagcdn.com/pm.svg",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    flag: "https://flagcdn.com/vc.svg",
  },
  {
    name: "Samoa",
    code: "WS",
    flag: "https://flagcdn.com/as.svg",
  },
  {
    name: "San Marino",
    code: "SM",
    flag: "https://flagcdn.com/sm.svg",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    flag: "https://flagcdn.com/st.svg",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "https://flagcdn.com/sa.svg",
  },
  {
    name: "Scotland",
    code: "?",
    flag: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg",
  },
  {
    name: "Senegal",
    code: "SN",
    flag: "https://flagcdn.com/sn.svg",
  },
  {
    name: "Serbia and Montenegro",
    code: "CS",
    flag: null,
  },
  {
    name: "Seychelles",
    code: "SC",
    flag: "https://flagcdn.com/sc.svg",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    flag: "https://flagcdn.com/sl.svg",
  },
  {
    name: "Singapore",
    code: "SG",
    flag: "https://flagcdn.com/sg.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    flag: "https://flagcdn.com/sk.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    flag: "https://flagcdn.com/si.svg",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    flag: "https://flagcdn.com/sb.svg",
  },
  {
    name: "Somalia",
    code: "SO",
    flag: "https://flagcdn.com/so.svg",
  },
  {
    name: "South Africa",
    code: "ZA",
    flag: "https://flagcdn.com/za.svg",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    flag: "https://flagcdn.com/gs.svg",
  },
  {
    name: "Spain",
    code: "ES",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    flag: "https://flagcdn.com/lk.svg",
  },
  {
    name: "Sudan",
    code: "SD",
    flag: "https://flagcdn.com/sd.svg",
  },
  {
    name: "Suriname",
    code: "SR",
    flag: "https://flagcdn.com/sr.svg",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
    flag: "https://flagcdn.com/sj.svg",
  },
  {
    name: "Swaziland",
    code: "SZ",
    flag: "https://flagcdn.com/sz.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    flag: "https://flagcdn.com/se.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    flag: "https://flagcdn.com/ch.svg",
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    flag: "https://flagcdn.com/sy.svg",
  },
  {
    name: "Taiwan, Province of China",
    code: "TW",
    flag: null,
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flag: "https://flagcdn.com/tj.svg",
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    flag: "https://flagcdn.com/tz.svg",
  },
  {
    name: "Thailand",
    code: "TH",
    flag: "https://flagcdn.com/th.svg",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    flag: "https://flagcdn.com/tl.svg",
  },
  {
    name: "Togo",
    code: "TG",
    flag: "https://flagcdn.com/tg.svg",
  },
  {
    name: "Tokelau",
    code: "TK",
    flag: "https://flagcdn.com/tk.svg",
  },
  {
    name: "Tonga",
    code: "TO",
    flag: "https://flagcdn.com/to.svg",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    flag: "https://flagcdn.com/tt.svg",
  },
  {
    name: "Tunisia",
    code: "TN",
    flag: "https://flagcdn.com/tn.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    flag: "https://flagcdn.com/tr.svg",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flag: "https://flagcdn.com/tm.svg",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    flag: "https://flagcdn.com/tc.svg",
  },
  {
    name: "Tuvalu",
    code: "TV",
    flag: "https://flagcdn.com/tv.svg",
  },
  {
    name: "Uganda",
    code: "UG",
    flag: "https://flagcdn.com/ug.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    flag: "https://flagcdn.com/ua.svg",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "https://flagcdn.com/ae.svg",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    name: "United States",
    code: "US",
    flag: "https://flagcdn.com/um.svg",
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
    flag: "https://flagcdn.com/um.svg",
  },
  {
    name: "Uruguay",
    code: "UY",
    flag: "https://flagcdn.com/uy.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flag: "https://flagcdn.com/uz.svg",
  },
  {
    name: "Vanuatu",
    code: "VU",
    flag: "https://flagcdn.com/vu.svg",
  },
  {
    name: "Venezuela",
    code: "VE",
    flag: "https://flagcdn.com/ve.svg",
  },
  {
    name: "Viet Nam",
    code: "VN",
    flag: "https://flagcdn.com/vn.svg",
  },
  {
    name: "Virgin Islands, British",
    code: "VG",
    flag: "https://flagcdn.com/vg.svg",
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI",
    flag: "https://flagcdn.com/vi.svg",
  },
  {
    name: "Wales",
    code: "?",
    flag: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Wales.svg",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    flag: "https://flagcdn.com/wf.svg",
  },
  {
    name: "Western Sahara",
    code: "EH",
    flag: "https://flagcdn.com/eh.svg",
  },
  {
    name: "Yemen",
    code: "YE",
    flag: "https://flagcdn.com/ye.svg",
  },
  {
    name: "Zambia",
    code: "ZM",
    flag: "https://flagcdn.com/zm.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flag: "https://flagcdn.com/zw.svg",
  },
];

export default countries;
