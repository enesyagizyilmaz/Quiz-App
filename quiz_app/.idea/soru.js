function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- Türkiye'nin başkenti hangisidir?",{a:"İstanbul",b:"Ankara",c:"Edirne",d:"Konya"},"b"),
    new Soru("2- 1. Viyana kuşatmasının kaldırılma nedeni nedir?",{a:"Yangınlar",b:"İsyanlar",c:"Erzak Yetersizliği",d:"Kötü Kış Şartları"},"d"), new Soru("3- TBMM hangi yılda açılmıştır?",{a:"1920",b:"1923",c:"1919",d:"1938"},"a"),
    new Soru("4- TÜPRAŞ hangi yılda özelleştirilmiştir?",{a:"1983",b:"2006",c:"2001",d:"1999",},"b"),
    new Soru("5- Elon Musk'ın serveti kaç milyar dolardır?",{a:"80",b:"120",c:"200",d:"400"},"c"),
    new Soru("6- Hangisi sonradan il olmamıştır?",{a:"Osmaniye",b:"Aksaray",c:"Kastamonu",d:"Karaman"},"c"),
    new Soru("7- Hangisi Türkiye'nin komşusu değildir?",{a:"Mısır",b:"Yunanistan",c:"Suriye",d:"Irak"},"a"),
    new Soru("8- Türkiye'nin yüzölçümü en büyük ili hangisidir?",{a:"Ankara",b:"Erzurum",c:"İstanbul",d:"Konya"},"d"),
    new Soru("9- Türkiye'nin en zengin insanı kimdir?",{a:"Ali Koç",b:"Acun Ilıcalı",c:"Murat Ülker",d:"Ali Ağaoğlu"},"c"),
    new Soru("10- Konya'yı başkent yapmka isteyen ve yeniçeriler tarafından öldürülen padişah hangisidir?",{a:"2. Selim",b:"1. Ahmet",c:"Genç Osman",d:"3. Murat"},"c")
];
