const countryCodes = [
	{ key: "AF", value: "93", name: "Afghanistan (+93)" },
	{ key: "AL", value: "355", name: "Albania (+355)" },
	{ key: "DZ", value: "213", name: "Algeria (+213)" },
	{ key: "AD", value: "376", name: "Andorra (+376)" },
	{ key: "AO", value: "244", name: "Angola (+244)" },
	{ key: "AG", value: "1-268", name: "Antigua and Barbuda (+1-268)" },
	{ key: "AR", value: "54", name: "Argentina (+54)" },
	{ key: "AM", value: "374", name: "Armenia (+374)" },
	{ key: "AU", value: "61", name: "Australia (+61)" },
	{ key: "AT", value: "43", name: "Austria (+43)" },
	{ key: "AZ", value: "994", name: "Azerbaijan (+994)" },
	{ key: "BS", value: "1-242", name: "Bahamas (+1-242)" },
	{ key: "BH", value: "973", name: "Bahrain (+973)" },
	{ key: "BD", value: "880", name: "Bangladesh (+880)" },
	{ key: "BB", value: "1-246", name: "Barbados (+1-246)" },
	{ key: "BY", value: "375", name: "Belarus (+375)" },
	{ key: "BE", value: "32", name: "Belgium (+32)" },
	{ key: "BZ", value: "501", name: "Belize (+501)" },
	{ key: "BJ", value: "229", name: "Benin (+229)" },
	{ key: "BT", value: "975", name: "Bhutan (+975)" },
	{ key: "BO", value: "591", name: "Bolivia (+591)" },
	{ key: "BA", value: "387", name: "Bosnia and Herzegovina (+387)" },
	{ key: "BW", value: "267", name: "Botswana (+267)" },
	{ key: "BR", value: "55", name: "Brazil (+55)" },
	{ key: "BN", value: "673", name: "Brunei (+673)" },
	{ key: "BG", value: "359", name: "Bulgaria (+359)" },
	{ key: "BF", value: "226", name: "Burkina Faso (+226)" },
	{ key: "BI", value: "257", name: "Burundi (+257)" },
	{ key: "CV", value: "238", name: "Cabo Verde (+238)" },
	{ key: "KH", value: "855", name: "Cambodia (+855)" },
	{ key: "CM", value: "237", name: "Cameroon (+237)" },
	{ key: "CA", value: "1", name: "Canada (+1)" },
	{ key: "CF", value: "236", name: "Central African Republic (+236)" },
	{ key: "TD", value: "235", name: "Chad (+235)" },
	{ key: "CL", value: "56", name: "Chile (+56)" },
	{ key: "CN", value: "86", name: "China (+86)" },
	{ key: "CO", value: "57", name: "Colombia (+57)" },
	{ key: "KM", value: "269", name: "Comoros (+269)" },
	{ key: "CG", value: "242", name: "Congo (+242)" },
	{ key: "CR", value: "506", name: "Costa Rica (+506)" },
	{ key: "HR", value: "385", name: "Croatia (+385)" },
	{ key: "CU", value: "53", name: "Cuba (+53)" },
	{ key: "CY", value: "357", name: "Cyprus (+357)" },
	{ key: "CZ", value: "420", name: "Czech Republic (+420)" },
	{ key: "DK", value: "45", name: "Denmark (+45)" },
	{ key: "DJ", value: "253", name: "Djibouti (+253)" },
	{ key: "DM", value: "1-767", name: "Dominica (+1-767)" },
	{ key: "DO-1", value: "1-809", name: "Dominican Republic (+1-809)" },
	{ key: "DO-2", value: "1-829", name: "Dominican Republic (+1-829)" },
	{ key: "DO-3", value: "1-849", name: "Dominican Republic (+1-849)" },
	{ key: "TL", value: "670", name: "East Timor (+670)" },
	{ key: "EC", value: "593", name: "Ecuador (+593)" },
	{ key: "EG", value: "20", name: "Egypt (+20)" },
	{ key: "SV", value: "503", name: "El Salvador (+503)" },
	{ key: "GQ", value: "240", name: "Equatorial Guinea (+240)" },
	{ key: "ER", value: "291", name: "Eritrea (+291)" },
	{ key: "EE", value: "372", name: "Estonia (+372)" },
	{ key: "SZ", value: "268", name: "Eswatini (+268)" },
	{ key: "ET", value: "251", name: "Ethiopia (+251)" },
	{ key: "FJ", value: "679", name: "Fiji (+679)" },
	{ key: "FI", value: "358", name: "Finland (+358)" },
	{ key: "FR", value: "33", name: "France (+33)" },
	{ key: "GA", value: "241", name: "Gabon (+241)" },
	{ key: "GM", value: "220", name: "Gambia (+220)" },
	{ key: "GE", value: "995", name: "Georgia (+995)" },
	{ key: "DE", value: "49", name: "Germany (+49)" },
	{ key: "GH", value: "233", name: "Ghana (+233)" },
	{ key: "GR", value: "30", name: "Greece (+30)" },
	{ key: "GD", value: "1-473", name: "Grenada (+1-473)" },
	{ key: "GT", value: "502", name: "Guatemala (+502)" },
	{ key: "GN", value: "224", name: "Guinea (+224)" },
	{ key: "GW", value: "245", name: "Guinea-Bissau (+245)" },
	{ key: "GY", value: "592", name: "Guyana (+592)" },
	{ key: "HT", value: "509", name: "Haiti (+509)" },
	{ key: "HN", value: "504", name: "Honduras (+504)" },
	{ key: "HU", value: "36", name: "Hungary (+36)" },
	{ key: "IS", value: "354", name: "Iceland (+354)" },
	{ key: "IN", value: "91", name: "India (+91)" },
	{ key: "ID", value: "62", name: "Indonesia (+62)" },
	{ key: "IR", value: "98", name: "Iran (+98)" },
	{ key: "IQ", value: "964", name: "Iraq (+964)" },
	{ key: "IE", value: "353", name: "Ireland (+353)" },
	{ key: "IL", value: "972", name: "Israel (+972)" },
	{ key: "IT", value: "39", name: "Italy (+39)" },
	{ key: "JM", value: "1-876", name: "Jamaica (+1-876)" },
	{ key: "JP", value: "81", name: "Japan (+81)" },
	{ key: "JO", value: "962", name: "Jordan (+962)" },
	{ key: "KZ", value: "7", name: "Kazakhstan (+7)" },
	{ key: "KE", value: "254", name: "Kenya (+254)" },
	{ key: "KI", value: "686", name: "Kiribati (+686)" },
	{ key: "XK", value: "383", name: "Kosovo (+383)" },
	{ key: "KW", value: "965", name: "Kuwait (+965)" },
	{ key: "KG", value: "996", name: "Kyrgyzstan (+996)" },
	{ key: "LA", value: "856", name: "Laos (+856)" },
	{ key: "LV", value: "371", name: "Latvia (+371)" },
	{ key: "LB", value: "961", name: "Lebanon (+961)" },
	{ key: "LS", value: "266", name: "Lesotho (+266)" },
	{ key: "LR", value: "231", name: "Liberia (+231)" },
	{ key: "LY", value: "218", name: "Libya (+218)" },
	{ key: "LI", value: "423", name: "Liechtenstein (+423)" },
	{ key: "LT", value: "370", name: "Lithuania (+370)" },
	{ key: "LU", value: "352", name: "Luxembourg (+352)" },
	{ key: "MG", value: "261", name: "Madagascar (+261)" },
	{ key: "MW", value: "265", name: "Malawi (+265)" },
	{ key: "MY", value: "60", name: "Malaysia (+60)" },
	{ key: "MV", value: "960", name: "Maldives (+960)" },
	{ key: "ML", value: "223", name: "Mali (+223)" },
	{ key: "MT", value: "356", name: "Malta (+356)" },
	{ key: "MH", value: "692", name: "Marshall Islands (+692)" },
	{ key: "MR", value: "222", name: "Mauritania (+222)" },
	{ key: "MU", value: "230", name: "Mauritius (+230)" },
	{ key: "MX", value: "52", name: "Mexico (+52)" },
	{ key: "FM", value: "691", name: "Micronesia (+691)" },
	{ key: "MD", value: "373", name: "Moldova (+373)" },
	{ key: "MC", value: "377", name: "Monaco (+377)" },
	{ key: "MN", value: "976", name: "Mongolia (+976)" },
	{ key: "ME", value: "382", name: "Montenegro (+382)" },
	{ key: "MA", value: "212", name: "Morocco (+212)" },
	{ key: "MZ", value: "258", name: "Mozambique (+258)" },
	{ key: "MM", value: "95", name: "Myanmar (+95)" },
	{ key: "NA", value: "264", name: "Namibia (+264)" },
	{ key: "NR", value: "674", name: "Nauru (+674)" },
	{ key: "NP", value: "977", name: "Nepal (+977)" },
	{ key: "NL", value: "31", name: "Netherlands (+31)" },
	{ key: "NZ", value: "64", name: "New Zealand (+64)" },
	{ key: "NI", value: "505", name: "Nicaragua (+505)" },
	{ key: "NE", value: "227", name: "Niger (+227)" },
	{ key: "NG", value: "234", name: "Nigeria (+234)" },
	{ key: "KP", value: "850", name: "North Korea (+850)" },
	{ key: "MK", value: "389", name: "North Macedonia (+389)" },
	{ key: "NO", value: "47", name: "Norway (+47)" },
	{ key: "OM", value: "968", name: "Oman (+968)" },
	{ key: "PK", value: "92", name: "Pakistan (+92)" },
	{ key: "PW", value: "680", name: "Palau (+680)" },
	{ key: "PS", value: "970", name: "Palestine (+970)" },
	{ key: "PA", value: "507", name: "Panama (+507)" },
	{ key: "PG", value: "675", name: "Papua New Guinea (+675)" },
	{ key: "PY", value: "595", name: "Paraguay (+595)" },
	{ key: "PE", value: "51", name: "Peru (+51)" },
	{ key: "PH", value: "63", name: "Philippines (+63)" },
	{ key: "PL", value: "48", name: "Poland (+48)" },
	{ key: "PT", value: "351", name: "Portugal (+351)" },
	{ key: "QA", value: "974", name: "Qatar (+974)" },
	{ key: "RO", value: "40", name: "Romania (+40)" },
	{ key: "RU", value: "7", name: "Russia (+7)" },
	{ key: "RW", value: "250", name: "Rwanda (+250)" },
	{ key: "KN", value: "1-869", name: "Saint Kitts and Nevis (+1-869)" },
	{ key: "LC", value: "1-758", name: "Saint Lucia (+1-758)" },
	{
		key: "VC",
		value: "1-784",
		name: "Saint Vincent and the Grenadines (+1-784)",
	},
	{ key: "WS", value: "685", name: "Samoa (+685)" },
	{ key: "SM", value: "378", name: "San Marino (+378)" },
	{ key: "ST", value: "239", name: "Sao Tome and Principe (+239)" },
	{ key: "SA", value: "966", name: "Saudi Arabia (+966)" },
	{ key: "SN", value: "221", name: "Senegal (+221)" },
	{ key: "RS", value: "381", name: "Serbia (+381)" },
	{ key: "SC", value: "248", name: "Seychelles (+248)" },
	{ key: "SL", value: "232", name: "Sierra Leone (+232)" },
	{ key: "SG", value: "65", name: "Singapore (+65)" },
	{ key: "SK", value: "421", name: "Slovakia (+421)" },
	{ key: "SI", value: "386", name: "Slovenia (+386)" },
	{ key: "SB", value: "677", name: "Solomon Islands (+677)" },
	{ key: "SO", value: "252", name: "Somalia (+252)" },
	{ key: "ZA", value: "27", name: "South Africa (+27)" },
	{ key: "KR", value: "82", name: "South Korea (+82)" },
	{ key: "SS", value: "211", name: "South Sudan (+211)" },
	{ key: "ES", value: "34", name: "Spain (+34)" },
	{ key: "LK", value: "94", name: "Sri Lanka (+94)" },
	{ key: "SD", value: "249", name: "Sudan (+249)" },
	{ key: "SR", value: "597", name: "Suriname (+597)" },
	{ key: "SE", value: "46", name: "Sweden (+46)" },
	{ key: "CH", value: "41", name: "Switzerland (+41)" },
	{ key: "SY", value: "963", name: "Syria (+963)" },
	{ key: "TW", value: "886", name: "Taiwan (+886)" },
	{ key: "TJ", value: "992", name: "Tajikistan (+992)" },
	{ key: "TZ", value: "255", name: "Tanzania (+255)" },
	{ key: "TH", value: "66", name: "Thailand (+66)" },
	{ key: "TG", value: "228", name: "Togo (+228)" },
	{ key: "TO", value: "676", name: "Tonga (+676)" },
	{ key: "TT", value: "1-868", name: "Trinidad and Tobago (+1-868)" },
	{ key: "TN", value: "216", name: "Tunisia (+216)" },
	{ key: "TR", value: "90", name: "Turkey (+90)" },
	{ key: "TM", value: "993", name: "Turkmenistan (+993)" },
	{ key: "TV", value: "688", name: "Tuvalu (+688)" },
	{ key: "UG", value: "256", name: "Uganda (+256)" },
	{ key: "UA", value: "380", name: "Ukraine (+380)" },
	{ key: "AE", value: "971", name: "United Arab Emirates (+971)" },
	{ key: "GB", value: "44", name: "United Kingdom (+44)" },
	{ key: "US", value: "1", name: "United States (+1)" },
	{ key: "UY", value: "598", name: "Uruguay (+598)" },
	{ key: "UZ", value: "998", name: "Uzbekistan (+998)" },
	{ key: "VU", value: "678", name: "Vanuatu (+678)" },
	{ key: "VA", value: "379", name: "Vatican City (+379)" },
	{ key: "VE", value: "58", name: "Venezuela (+58)" },
	{ key: "VN", value: "84", name: "Vietnam (+84)" },
	{ key: "YE", value: "967", name: "Yemen (+967)" },
	{ key: "ZM", value: "260", name: "Zambia (+260)" },
	{ key: "ZW", value: "263", name: "Zimbabwe (+263)" },
];

export default countryCodes;
