//this function will make the website jump to the catalog page
function open_catalog() {
    window.location.href = "catalog_page.html"
}

//this function will make the website jump to the market page
function check_market() {
    window.location.href = "market_page.html"
}

//this array will act as a database for all 191 cards
const card_set = [
    {id: "001", name: "Exeggcute", category: "Common", price: 11.52, img: "images/cards/001.jpg.webp"},
    {id: "002", name: "Alolan Exeggutor", category: "Common", price: 13.44, img: "images/cards/002.jpg.webp"},
    {id: "003", name: "Volbeat", category: "Common", price: 10.24, img: "images/cards/003.jpg.webp"},
    {id: "004", name: "Illumise", category: "Common", price: 9.60, img: "images/cards/004.jpg.webp"},
    {id: "005", name: "Tropius", category: "Common", price: 8.96, img: "images/cards/005.jpg.webp"},
    {id: "006", name: "Cherubi", category: "Common", price: 12.80, img: "images/cards/006.jpg.webp"},
    {id: "007", name: "Cherrim", category: "Common", price: 16.64, img: "images/cards/007.jpg.webp"},
    {id: "008", name: "Vivillon", category: "Common", price: 12.16, img: "images/cards/008.jpg.webp"},
    {id: "009", name: "Vulpix", category: "Common", price: 9.60, img: "images/cards/009.jpg.webp"},
    {id: "010", name: "Ninetales", category: "Common", price: 16.00, img: "images/cards/010.jpg.webp"},
    {id: "011", name: "Moltres", category: "Common", price: 14.72, img: "images/cards/011.jpg.webp"},
    {id: "012", name: "Ho-Oh", category: "Common", price: 17.28, img: "images/cards/012.jpg.webp"},
    {id: "013", name: "Victini", category: "Common", price: 15.36, img: "images/cards/013.jpg.webp"},
    {id: "014", name: "Reshiram", category: "Common", price: 14.72, img: "images/cards/014.jpg.webp"},
    {id: "015", name: "Fuecoco ex", category: "Double Rare", price: 29.45, img: "images/cards/015.jpg.webp"},
    {id: "016", name: "Slowpoke", category: "Common", price: 14.72, img: "images/cards/016.jpg.webp"},
    {id: "017", name: "Lapras", category: "Common", price: 17.28, img: "images/cards/017.jpg.webp"},
    {id: "018", name: "Articuno", category: "Common", price: 16.00, img: "images/cards/018.jpg.webp"},
    {id: "019", name: "Kyogre", category: "Common", price: 12.16, img: "images/cards/019.jpg.webp"},
    {id: "020", name: "Palkia", category: "Common", price: 12.80, img: "images/cards/020.jpg.webp"},
    {id: "021", name: "Greninja ex", category: "Double Rare", price: 33.93, img: "images/cards/021.jpg.webp"},
    {id: "022", name: "Wishiwashi", category: "Common", price: 12.80, img: "images/cards/022.jpg.webp"},
    {id: "023", name: "Pikachu", category: "Pikachu Rare", price: 29.45, img: "images/cards/023.jpg.webp"},
    {id: "024", name: "Pikachu", category: "Pikachu Rare", price: 28.17, img: "images/cards/024.jpg.webp"},
    {id: "025", name: "Pikachu", category: "Pikachu Rare", price: 24.33, img: "images/cards/025.jpg.webp"},
    {id: "026", name: "Pikachu", category: "Pikachu Rare", price: 28.17, img: "images/cards/026.jpg.webp"},
    {id: "027", name: "Pikachu", category: "Pikachu Rare", price: 42.89, img: "images/cards/027.jpg.webp"},
    {id: "028", name: "Pikachu", category: "Pikachu Rare", price: 35.85, img: "images/cards/028.jpg.webp"},
    {id: "029", name: "Pikachu", category: "Pikachu Rare", price: 30.73, img: "images/cards/029.jpg.webp"},
    {id: "030", name: "Pikachu", category: "Pikachu Rare", price: 30.37, img: "images/cards/030.jpg.webp"},
    {id: "031", name: "Pikachu", category: "Pikachu Rare", price: 33.93, img: "images/cards/031.jpg.webp"},
    {id: "032", name: "Pikachu", category: "Pikachu Rare", price: 46.09, img: "images/cards/032.jpg.webp"},
    {id: "033", name: "Pikachu", category: "Pikachu Rare", price: 28.17, img: "images/cards/033.jpg.webp"},
    {id: "034", name: "Pikachu", category: "Pikachu Rare", price: 37.77, img: "images/cards/034.jpg.webp"},
    {id: "035", name: "Pikachu", category: "Pikachu Rare", price: 36.49, img: "images/cards/035.jpg.webp"},
    {id: "036", name: "Pikachu", category: "Pikachu Rare", price: 46.73, img: "images/cards/036.jpg.webp"},
    {id: "037", name: "Pikachu", category: "Pikachu Rare", price: 24.33, img: "images/cards/037.jpg.webp"},
    {id: "038", name: "Pikachu", category: "Pikachu Rare", price: 29.45, img: "images/cards/038.jpg.webp"},
    {id: "039", name: "Pikachu", category: "Pikachu Rare", price: 29.45, img: "images/cards/039.jpg.webp"},
    {id: "040", name: "Pikachu", category: "Pikachu Rare", price: 129.32, img: "images/cards/040.jpg.webp"},
    {id: "041", name: "Pikachu", category: "Pikachu Rare", price: 27.53, img: "images/cards/041.jpg.webp"},
    {id: "042", name: "Pikachu", category: "Pikachu Rare", price: 30.73, img: "images/cards/042.jpg.webp"},
    {id: "043", name: "Pikachu", category: "Pikachu Rare", price: 33.29, img: "images/cards/043.jpg.webp"},
    {id: "044", name: "Pikachu", category: "Pikachu Rare", price: 34.57, img: "images/cards/044.jpg.webp"},
    {id: "045", name: "Pikachu", category: "Pikachu Rare", price: 26.89, img: "images/cards/045.jpg.webp"},
    {id: "046", name: "Pikachu", category: "Pikachu Rare", price: 23.69, img: "images/cards/046.jpg.webp"},
    {id: "047", name: "Pikachu", category: "Pikachu Rare", price: 30.09, img: "images/cards/047.jpg.webp"},
    {id: "048", name: "Pikachu", category: "Pikachu Rare", price: 33.93, img: "images/cards/048.jpg.webp"},
    {id: "049", name: "Pikachu", category: "Pikachu Rare", price: 32.01, img: "images/cards/049.jpg.webp"},
    {id: "050", name: "Pikachu", category: "Pikachu Rare", price: 36.49, img: "images/cards/050.jpg.webp"},
    {id: "051", name: "Pikachu", category: "Pikachu Rare", price: 30.09, img: "images/cards/051.jpg.webp"},
    {id: "052", name: "Pikachu", category: "Pikachu Rare", price: 31.37, img: "images/cards/052.jpg.webp"},
    {id: "053", name: "Pikachu ex", category: "Double Rare", price: 42.25, img: "images/cards/053.jpg.webp"},
    {id: "054", name: "Pikachu ex", category: "Double Rare", price: 48.65, img: "images/cards/054.jpg.webp"},
    {id: "055", name: "Zapdos", category: "Common", price: 14.08, img: "images/cards/055.jpg.webp"},
    {id: "056", name: "Zekrom", category: "Common", price: 13.44, img: "images/cards/056.jpg.webp"},
    {id: "057", name: "Zeraora", category: "Common", price: 12.16, img: "images/cards/057.jpg.webp"},
    {id: "058", name: "Toxel", category: "Common", price: 10.88, img: "images/cards/058.jpg.webp"},
    {id: "059", name: "Toxtricity", category: "Common", price: 15.36, img: "images/cards/059.jpg.webp"},
    {id: "060", name: "Toxtricity", category: "Common", price: 14.08, img: "images/cards/060.jpg.webp"},
    {id: "061", name: "Morpeko", category: "Common", price: 13.44, img: "images/cards/061.jpg.webp"},
    {id: "062", name: "Miraidon", category: "Common", price: 14.72, img: "images/cards/062.jpg.webp"},
    {id: "063", name: "Mewtwo", category: "Common", price: 21.77, img: "images/cards/063.jpg.webp"},
    {id: "064", name: "Mewtwo ex", category: "Double Rare", price: 39.05, img: "images/cards/064.jpg.webp"},
    {id: "065", name: "Mew", category: "Common", price: 24.97, img: "images/cards/065.jpg.webp"},
    {id: "066", name: "Mew ex", category: "Double Rare", price: 88.99, img: "images/cards/066.jpg.webp"},
    {id: "067", name: "Marill", category: "Common", price: 9.60, img: "images/cards/067.jpg.webp"},
    {id: "068", name: "Azumarill", category: "Common", price: 13.44, img: "images/cards/068.jpg.webp"},
    {id: "069", name: "Espeon", category: "Common", price: 23.69, img: "images/cards/069.jpg.webp"},
    {id: "070", name: "Espeon ex", category: "Double Rare", price: 37.77, img: "images/cards/070.jpg.webp"},
    {id: "071", name: "Slyveon ex", category: "Double Rare", price: 43.53, img: "images/cards/071.jpg.webp"},
    {id: "072", name: "Unown", category: "Common", price: 17.93, img: "images/cards/072.jpg.webp"},
    {id: "073", name: "Drifloon", category: "Common", price: 12.80, img: "images/cards/073.jpg.webp"},
    {id: "074", name: "Cresselia", category: "Common", price: 12.80, img: "images/cards/074.jpg.webp"},
    {id: "075", name: "Chandelure", category: "Common", price: 14.72, img: "images/cards/075.jpg.webp"},
    {id: "076", name: "Xerneas", category: "Common", price: 12.80, img: "images/cards/076.jpg.webp"},
    {id: "077", name: "Comfey", category: "Common", price: 10.24, img: "images/cards/077.jpg.webp"},
    {id: "078", name: "Cosmog", category: "Common", price: 9.60, img: "images/cards/078.jpg.webp"},
    {id: "079", name: "Cosmoem", category: "Common", price: 14.08, img: "images/cards/079.jpg.webp"},
    {id: "080", name: "Lunala", category: "Common", price: 14.72, img: "images/cards/080.jpg.webp"},
    {id: "081", name: "Gimmighoul", category: "Common", price: 11.52, img: "images/cards/081.jpg.webp"},
    {id: "082", name: "Groudon", category: "Common", price: 11.52, img: "images/cards/082.jpg.webp"},
    {id: "083", name: "Lucario", category: "Common", price: 20.49, img: "images/cards/083.jpg.webp"},
    {id: "084", name: "Seismitoad", category: "Common", price: 15.36, img: "images/cards/084.jpg.webp"},
    {id: "085", name: "Lyanroc", category: "Common", price: 12.16, img: "images/cards/085.jpg.webp"},
    {id: "086", name: "Koraidon", category: "Common", price: 10.88, img: "images/cards/086.jpg.webp"},
    {id: "087", name: "Nidoran F", category: "Common", price: 12.16, img: "images/cards/087.jpg.webp"},
    {id: "088", name: "Nidorina", category: "Common", price: 10.24, img: "images/cards/088.jpg.webp"},
    {id: "089", name: "Alolan Meowth", category: "Common", price: 13.44, img: "images/cards/089.jpg.webp"},
    {id: "090", name: "Gengar ex", category: "Double Rare", price: 62.10, img: "images/cards/090.jpg.webp"},
    {id: "091", name: "Umbreon", category: "Common", price: 20.49, img: "images/cards/091.jpg.webp"},
    {id: "092", name: "Umbreon ex", category: "Double Rare", price: 45.45, img: "images/cards/092.jpg.webp"},
    {id: "093", name: "Murkrow", category: "Common", price: 13.44, img: "images/cards/093.jpg.webp"},
    {id: "094", name: "Scraggy", category: "Common", price: 10.88, img: "images/cards/094.jpg.webp"},
    {id: "095", name: "Zorua", category: "Common", price: 12.80, img: "images/cards/095.jpg.webp"},
    {id: "096", name: "Zoroark", category: "Common", price: 12.80, img: "images/cards/096.jpg.webp"},
    {id: "097", name: "Deino", category: "Common", price: 13.44, img: "images/cards/097.jpg.webp"},
    {id: "098", name: "Zweilous", category: "Common", price: 14.08, img: "images/cards/098.jpg.webp"},
    {id: "099", name: "Hydreigon", category: "Common", price: 14.72, img: "images/cards/099.jpg.webp"},
    {id: "100", name: "Yveltal", category: "Common", price: 13.44, img: "images/cards/100.jpg.webp"},
    {id: "101", name: "Galarian Meowth", category: "Common", price: 10.88, img: "images/cards/101.jpg.webp"},
    {id: "102", name: "Jirachi ex", category: "Double Rare", price: 28.17, img: "images/cards/102.jpg.webp"},
    {id: "103", name: "Dialga", category: "Common", price: 13.44, img: "images/cards/103.jpg.webp"},
    {id: "104", name: "Ferrothorn", category: "Common", price: 14.08, img: "images/cards/104.jpg.webp"},
    {id: "105", name: "Solgaleo", category: "Common", price: 12.16, img: "images/cards/105.jpg.webp"},
    {id: "106", name: "Zacian", category: "Common", price: 14.08, img: "images/cards/106.jpg.webp"},
    {id: "107", name: "Zamazenta", category: "Common", price: 17.28, img: "images/cards/107.jpg.webp"},
    {id: "108", name: "Gholdengo", category: "Common", price: 11.52, img: "images/cards/108.jpg.webp"},
    {id: "109", name: "Salamence ex", category: "Double Rare", price: 28.81, img: "images/cards/109.jpg.webp"},
    {id: "110", name: "Jangmo-o", category: "Common", price: 13.44, img: "images/cards/110.jpg.webp"},
    {id: "111", name: "Hakamo-o", category: "Common", price: 15.36, img: "images/cards/111.jpg.webp"},
    {id: "112", name: "Kommo-o", category: "Common", price: 14.08, img: "images/cards/112.jpg.webp"},
    {id: "113", name: "Meowth", category: "Common", price: 16.00, img: "images/cards/113.jpg.webp"},
    {id: "114", name: "Kangaskhan", category: "Common", price: 14.72, img: "images/cards/114.jpg.webp"},
    {id: "115", name: "Ditto", category: "Common", price: 18.57, img: "images/cards/115.jpg.webp"},
    {id: "116", name: "Eevee", category: "Common", price: 19.21, img: "images/cards/116.jpg.webp"},
    {id: "117", name: "Eevee", category: "Common", price: 17.28, img: "images/cards/117.jpg.webp"},
    {id: "118", name: "Eevee", category: "Common", price: 19.85, img: "images/cards/118.jpg.webp"},
    {id: "119", name: "Snorlax", category: "Common", price: 20.49, img: "images/cards/119.jpg.webp"},
    {id: "120", name: "Igglybuff", category: "Common", price: 19.21, img: "images/cards/120.jpg.webp"},
    {id: "121", name: "Lugia", category: "Common", price: 18.57, img: "images/cards/121.jpg.webp"},
    {id: "122", name: "Hisuian Zorua", category: "Common", price: 12.80, img: "images/cards/122.jpg.webp"},
    {id: "123", name: "Hisuian Zoroark", category: "Common", price: 16.00, img: "images/cards/123.jpg.webp"},
    {id: "124", name: "Minior", category: "Common", price: 12.80, img: "images/cards/124.jpg.webp"},
    {id: "125", name: "Maushold", category: "Common", price: 17.28, img: "images/cards/125.jpg.webp"},
    {id: "126", name: "Poke Pad", category: "Common", price: 17.23, img: "images/cards/126.jpg.webp"},
    {id: "127", name: "Switch ", category: "Common", price: 10.88, img: "images/cards/127.jpg.webp"},
    {id: "128", name: "Ultra Ball", category: "Common", price: 17.28, img: "images/cards/128.jpg.webp"},
    {id: "129", name: "Alolan Exeggutor", category: "Special Art", price: 60.18, img: "images/cards/129.jpg.webp"},
    {id: "130", name: "Moltres", category: "Special Art", price: 183.09, img: "images/cards/130.jpg.webp"},
    {id: "131", name: "Lapras", category: "Special Art", price: 181.81, img: "images/cards/131.jpg.webp"},
    {id: "132", name: "Articuno", category: "Special Art", price: 157.48, img: "images/cards/132.jpg.webp"},
    {id: "133", name: "Zapdos", category: "Special Art", price: 149.80, img: "images/cards/133.jpg.webp"},
    {id: "134", name: "Toxtricity", category: "Special Art", price: 84.50, img: "images/cards/134.jpg.webp"},
    {id: "135", name: "Morpeko", category: "Special Art", price: 113.95, img: "images/cards/135.jpg.webp"},
    {id: "136", name: "Drifloon", category: "Special Art", price: 109.47, img: "images/cards/136.jpg.webp"},
    {id: "137", name: "Chandelure", category: "Special Art", price: 76.82, img: "images/cards/137.jpg.webp"},
    {id: "138", name: "Lycanroc", category: "Special Art", price: 68.50, img: "images/cards/138.jpg.webp"},
    {id: "139", name: "Alolan Meowth", category: "Special Art", price: 178.61, img: "images/cards/139.jpg.webp"},
    {id: "140", name: "Scraggy", category: "Special Art", price: 65.94, img: "images/cards/140.jpg.webp"},
    {id: "141", name: "Galarian Meowth", category: "Special Art", price: 172.85, img: "images/cards/141.jpg.webp"},
    {id: "142", name: "Gholdengo", category: "Special Art", price: 62.10, img: "images/cards/142.jpg.webp"},
    {id: "143", name: "Kommo-o", category: "Special Art", price: 69.14, img: "images/cards/143.jpg.webp"},
    {id: "144", name: "Meowth", category: "Special Art", price: 241.99, img: "images/cards/144.jpg.webp"},
    {id: "145", name: "Hisuian Zorua", category: "Special Art", price: 135.72, img: "images/cards/145.jpg.webp"},
    {id: "146", name: "Maushold", category: "Special Art", price: 304.73, img: "images/cards/146.jpg.webp"},
    {id: "147", name: "Fuecoco ex", category: "Special Art", price: 565.28, img: "images/cards/147.jpg.webp"},
    {id: "148", name: "Greninja ex", category: "Special Art", price: 814.95, img: "images/cards/148.jpg.webp"},
    {id: "149", name: "Pikachu ex", category: "Special Art", price: 2108.11, img: "images/cards/149.jpg.webp"},
    {id: "150", name: "Pikachu ex", category: "Special Art", price: 2407.72, img: "images/cards/150.jpg.webp"},
    {id: "151", name: "Mewtwo ex", category: "Special Art", price: 1965.35, img: "images/cards/151.jpg.webp"},
    {id: "152", name: "Mew ex", category: "Special Art", price: 3612.54, img: "images/cards/152.jpg.webp"},
    {id: "153", name: "Slyveon ex", category: "Special Art", price: 2003.76, img: "images/cards/153.jpg.webp"},
    {id: "154", name: "Gengar ex", category: "Special Art", price: 2980.04, img: "images/cards/154.jpg.webp"},
    {id: "155", name: "Jirachi ex", category: "Special Art", price: 1734.89, img: "images/cards/155.jpg.webp"},
    {id: "156", name: "Salamence ex", category: "Special Art", price: 567.84, img: "images/cards/156.jpg.webp"},
    {id: "157", name: "Mewtwo ex", category: "Futuristic Rare", price: 1495.46, img: "images/cards/157.jpg.webp"},
    {id: "158", name: "Mew ex", category: "Futuristic Rare", price: 1889.17, img: "images/cards/158.jpg.webp"},
    {id: "159", name: "Mew", category: "Futuristic Rare", price: 273776.88, img: "images/cards/159.jpg.webp"},
    {id: "160", name: "Mew", category: "Futuristic Rare", price: 276337.60, img: "images/cards/160.jpg.webp"},
    {id: "161", name: "Mew", category: "Futuristic Rare", price: 217100.45, img: "images/cards/161.jpg.webp"},
    {id: "162", name: "Charizard", category: "Classic Collection", price: 6639.95, img: "images/cards/162.jpg.webp"},
    {id: "163", name: "Delcatty", category: "Classic Collection", price: 164.53, img: "images/cards/163.jpg.webp"},
    {id: "164", name: "Genesect ex (Team Plasma)", category: "Classic Collection", price: 352.10, img: "images/cards/164.jpg.webp"},
    {id: "165", name: "Metagross", category: "Classic Collection", price: 231.11, img: "images/cards/165.jpg.webp"},
    {id: "166", name: "Misty", category: "Classic Collection", price: 211.90, img: "images/cards/166.jpg.webp"},
    {id: "167", name: "Dark Tyranitar", category: "Classic Collection", price: 414.84, img: "images/cards/167.jpg.webp"},
    {id: "168", name: "Sneasel", category: "Classic Collection", price: 160.69, img: "images/cards/168.jpg.webp"},
    {id: "169", name: "Pikachu & Zekrom GX", category: "Classic Collection", price: 1234.91, img: "images/cards/169.jpg.webp"},
    {id: "170", name: "Greninja BREAK", category: "Classic Collection", price: 417.40, img: "images/cards/170.jpg.webp"},
    {id: "171", name: "Uxie", category: "Classic Collection", price: 151.72, img: "images/cards/171.jpg.webp"},
    {id: "172", name: "Crobat G", category: "Classic Collection", price: 157.48, img: "images/cards/172.jpg.webp"},
    {id: "173", name: "Raikou", category: "Classic Collection", price: 460.93, img: "images/cards/173.jpg.webp"},
    {id: "174", name: "Buzzwole GX", category: "Classic Collection", price: 128.04, img: "images/cards/174.jpg.webp"},
    {id: "175", name: "Pikachu", category: "Classic Collection", price: 759.25, img: "images/cards/175.jpg.webp"},
    {id: "176", name: "Erika's Jigglypuff", category: "Classic Collection", price: 350.18, img: "images/cards/176.jpg.webp"},
    {id: "177", name: "Rayquaza EX", category: "Classic Collection", price: 1070.38, img: "images/cards/177.jpg.webp"},
    {id: "178", name: "Solgaleo GX", category: "Classic Collection", price: 331.61, img: "images/cards/178.jpg.webp"},
    {id: "179", name: "Gengar (Prime)", category: "Classic Collection", price: 2525.51, img: "images/cards/179.jpg.webp"},
    {id: "180", name: "Darkrai & Cresselia (Top)", category: "Classic Collection", price: 827.75, img: "images/cards/180.jpg.webp"},
    {id: "181", name: "Darkrai & Cresselia (Bottom)", category: "Classic Collection", price: 805.35, img: "images/cards/181.jpg.webp"},
    {id: "182", name: "N", category: "Classic Collection", price: 618.14, img: "images/cards/182.jpg.webp"},
    {id: "183", name: "Shining Celebi", category: "Classic Collection", price: 926.34, img: "images/cards/183.jpg.webp"},
    {id: "184", name: "Palkia LV.X", category: "Classic Collection", price: 463.49, img: "images/cards/184.jpg.webp"},
    {id: "185", name: "M Gardevoir EX", category: "Classic Collection", price: 505.74, img: "images/cards/185.jpg.webp"},
    {id: "186", name: "Scizor ex", category: "Classic Collection", price: 456.45, img: "images/cards/186.jpg.webp"},
    {id: "187", name: "Mew VMAX", category: "Classic Collection", price: 985.24, img: "images/cards/187.jpg.webp"},
    {id: "188", name: "Arceus VSTAR", category: "Classic Collection", price: 403.31, img: "images/cards/188.jpg.webp"},
    {id: "189", name: "Zacian V", category: "Classic Collection", price: 294.48, img: "images/cards/189.jpg.webp"},
    {id: "190", name: "Lugia", category: "Classic Collection", price: 7180.26, img: "images/cards/190.jpg.webp"},
    {id: "191", name: "Magikarp", category: "Classic Collection", price: 3881.41, img: "images/cards/191.jpg.webp"},
];

let select_category = "All";

// these functions sync a card to the catalog
function get_owned_catalog() {
    return JSON.parse(localStorage.getItem("catalog_page")) || {};
}

function save_owned_catalog(catalog) {
    localStorage.setItem("catalog_page", JSON.stringify(catalog));
}

function add_to_catalog(card_id) {
    const catalog = get_owned_catalog();
    catalog[card_id] = (catalog[card_id] || 0) + 1;
    save_owned_catalog(catalog);
    render_to_market();
}

function remove_from_catalog(card_id) {
    const catalog = get_owned_catalog();
    delete catalog[card_id];
    save_owned_catalog(catalog);
    render_to_catalog();
}

// this block of code will filter the cards and display them on the market page
function render_to_market() {
    const $grid = $("#grid");
    if (!$grid.length) {
        return;
    }

    const search_term = ($("#market_search").val() || "").toLowerCase().trim();
    const owned = get_owned_catalog();

    $grid.empty();

    const filtered_cards = card_set.filter(card => {
        const match_category = select_category === "All" || card.category === select_category;
        const match_search = card.name.toLowerCase().includes(search_term) || card.id.includes(search_term);
        return match_category && match_search;
    });

    if (filtered_cards.length === 0) {
        $grid.html(`<div class="empty_catalog"><p>No cards were found for "${select_category}".</p></div>`);
        return;
    }

    filtered_cards.forEach(card => {
        const num_owned = owned[card.id] || 0;
        const button_label = num_owned > 0 ? `Owned (${num_owned}) • +1` : "+ Add to Catalog";

        $grid.append(`
            <div class = "tcg_card">
                <div class = "tcg_card_header">
                    <span class = "card_num">#${card.id}</span>
                    <span class = "card_rarity">${card.category}</span>
                </div>

                <img src = "${card.img}" alt = "card not found." loading="lazy">
                <h3>${card.name}</h3>
                <p class="card_price">₱${card.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}</p>
                <button type = "button" class = "add_card_button ${num_owned > 0 ? "owned" : ""}" data-id = "${card.id}">${button_label}</button>
            </div>
        `);
    });
}

// this block of code will display owned cards and calculate the total value
function render_to_catalog() {
    const $grid = $("#catalog_grid");
    if (!$grid.length) {
        return;
    }

    const owned = get_owned_catalog();
    const owned_ids = Object.keys(owned);

    $grid.empty();

    if (owned_ids.length === 0) {
        $("#card_total").text("0/191");
        $("#card_value").text("₱0.00");
        $grid.html(`
            <div class="empty_catalog">
                <p>Your catalog is currently empty.</p>
                <a href="market_page.html" class="cta_link">Browse the Market to add cards &rarr;</a>
            </div>
        `);
        return;
    }

    let total_value = 0;
    let total_copies = 0;

    owned_ids.forEach(id => {
        const card = card_set.find(c => c.id === id);
        if (!card) return;

        const num_owned_cards = owned[id];
        const subtotal = card.price * num_owned_cards;
        
        total_value += subtotal;
        total_copies += num_owned_cards;

        $grid.append(`
            <div class = "tcg_card">
                <div class = "tcg_card_header">
                    <span class = "card_num">#${card.id}</span>
                    <span class = "card_rarity">Qty: ${num_owned_cards}</span>
                </div>

                <img src="${card.img}" alt="card not found." loading="lazy">
                <h3>${card.name}</h3>
                <p class = "card_price">
                    ₱${subtotal.toLocaleString("en-PH", { minimumFractionDigits: 2 })} 
                    <small>(₱${card.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })} ea)</small>
                </p>
                <button type = "button" class = "remove_card_button" data-id="${card.id}">Remove</button>
            </div>
        `);
    });

    $("#card_total").text(`${owned_ids.length}/191 (${total_copies} total)`);
    $("#card_value").text(`₱${total_value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`);
}

// this will correspond as our event listener
$(document).ready(function () {
    $("#catalog_button").click(function() {
        open_catalog();
    });

    $("#market_button").click(function() {
        check_market();
    });

    // this function call will display all the cards available
    render_to_market();
    render_to_catalog();

    // this will filter the cards by removing the cards that doesn't belong adding the appropriate ones
    $(".market_category button").click(function() {
        $(".market_category button").removeClass("active");
        $(this).addClass("active");
        select_category = $(this).data("category");
        render_to_market();
    });

    // this will check the input for any matching card that can be displayed 
    $("#market_search").on("input", function() {
        render_to_market();
    });

    // this will add a card to the catalog
    $(document).on("click", ".add_card_button", function() {
        const id = $(this).data("id").toString().padStart(3, "0");
        add_to_catalog(id);
    });

    // this will remove a card from the catalog
    $(document).on("click", ".remove_card_button", function() {
        const id = $(this).data("id").toString().padStart(3, "0");
        remove_from_catalog(id);
    });

    // this will clear all owned cards from the catalog
    $("#clear_catalog_button").click(function() {
        localStorage.removeItem("catalog_page");
        render_to_catalog();
    });
});