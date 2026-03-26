const cases = {
kolay: { 
    realTitle: "Cheddar Jr. Kaçırıldı: Parktaki Gölge",
    description: `
        SAAT: 14:30 | YER: Prospect Park. 
        Bayan Higgins'in şampiyon köpeği Cheddar Jr., sahibinin arkasını döndüğü 30 saniye içinde ortadan kayboldu. 
        Görgü tanıkları parkta eski bir pardösü giyen, dağınık saçlı bir adam (Evsiz Arthur) gördüklerini iddia ediyor. 
        Ancak olay yerindeki bankta, Arthur'un hayatı boyunca yan yana gelmediği lüks bir marka yüzük bulundu.
    `,
    evidence: `
        1. [OLAY YERİ]: Parktaki bankın üzerinde 18 ayar pırlanta bir yüzük ve yere saçılmış kahverengi tanecikler bulundu. (Bkz: Fotoğraf 2)
        2. [KANIT DOLABI]: Şüphelilerin dolabından çıkanlar: Bir adet lüks çanta anahtarı, altın sarısı ince köpek tüyleri ve 'Premium Kalp Şekilli' köpek ödül mamaları. (Bkz: Fotoğraf 1)
        3. [TEKNİK ANALİZ]: Güvenlik kameraları tam kaçırılma anında 'Sinyal Kaybı' yaşadı; bu sıradan bir hırsızın yapabileceği bir şey değil.
    `,
    interrogation: `
        [ŞÜPHELİ: SARAH] (Bkz: Fotoğraf 3)
        DEDEKTİF: "Cebinizden çıkan o mamalara ne diyeceksiniz Sarah Hanım?"
        SARAH: "Onlar mama değil, benim fındıklı diyet krakerlerim! Köpeklerden nefret ederim, tüyleri alerjimi azdırıyor."
        DEDEKTİF: "Peki ya parktaki bankta unuttuğunuz o pırlanta yüzük? Arthur'un pırlanta takmadığından eminiz."
        SARAH: "Yüzüğümü kaybetmiş olabilirim ama bu beni hırsız yapmaz. Ben sadece o gün parkta yürüyüş yapıyordum!"
        
        [ŞÜPHELİ: EVSİZ ARTHUR]
        ARTHUR: "Köpeği sevdim mi? Evet. Ama o kadın gelip köpeği kucağına aldı ve hızla uzaklaştı. Ben sadece yere düşürdüğü mamaları topluyordum..."
    `,

    killer: "Sarah", 
    images: ["img/Sarah.jpg", "img/Golden_Retriever.jpg",] 
},
   normal: { 
    realTitle: "Müze Soygunu: Mühürlü İhanet",
    
    description: `
        YER: Üniversite Arkeoloji Müzesi - Özel Koleksiyon Odası.
        SAAT: 03:15.
        Olay gecesi müzedeki paha biçilemez "Mezopotamya Kraliyet Mührü" çalındı. 
        Odaya giriş sadece yüksek güvenlikli kartlarla yapılabiliyor. 
        Kapıda zorlama yok. Güvenlik kameraları ise tam o saatte devre dışı bırakıldı.
    `,

    evidence: `
        1. [DİJİTAL KANIT]: Güvenlik odasındaki monitörlerde 'SYSTEM COMPROMISED' uyarısı var. Hack işlemi içeriden yapılmış. (Bkz: Fotoğraf - Monitörler)
        2. [AYAKKABI İZİ]: Odadaki tozlu zeminde 38 numara, ince topuklu bir kadın ayakkabı izi bulundu. Bu izler doğrudan boşalan sergi standına gidiyor.
        3. [FİZİKSEL KANIT]: Müze girişindeki çöp kutusunda, parçalanmış bir "Dekanlık Giriş Kartı" ve üzerinde Dekan'ın asistanına ait parmak izleri olan bir çift eldiven bulundu.
    `,

    interrogation: `
        [GÜVENLİKÇİ]: "Ben devriyedeydim, her şey normaldi. Kameralar kararınca odaya koştum ama çok geçti."
        [TEMİZLİKÇİ]: "Gece 02:00 gibi asistan hanımı koridorda telaşlı gördüm, dekan beyin odasına gidiyordu."
        [DEKAN]: "O gece evimdeydim. Asistanım koleksiyon odasının anahtar kodlarını bilen tek kişiydi. Maalesef bana ihanet ettiğini düşünüyorum."
        [ASİSTAN (SEVGİLİ)]: "Aramızdaki ilişki yüzünden beni suçluyor! O gece dekanın yanındaydım, benden eldivenlerimi ve kartımı istedi, 'sergi alanını kontrol edeceğim' dedi. Ben hırsız değilim!"
        [ARKEOLOJİ ÖĞRETMENİ]: "Mührün çalınması dekanın çok işine gelir; müze sigortasından büyük bir para alacak."
    `,
    killer: "Dekan", 
    images: ["img/hacked_screens.jpg", "img/shoe_prints.jpg",] 
},
   zor: { 
    realTitle: "Yıldız Futbolcunun Gizemli Ölümü",
    description: `
        YER: Thorne Malikanesi - Kütüphane. 
        SAAT: 23:45. 
        Şehrin göz bebeği Alexander Thorne, viski kadehi elinde, masasının başında ölü bulundu. 
        Masanın üzerinde alelacele değiştirilmiş bir vasiyetname ve Mexico City'ye bir gidiş bileti duruyor. 
        Otopside viskisine karıştırılmış nadir bir bitkisel zehir bulundu.
    `,
    evidence: `
        1. [VİSKİ KADEHİ]: Kadehin kenarında ruj izi yok ama kütüphanede hafif bir papatya çayı kokusu var.
        2. [BİLET]: Futbolcu o gece kaçmaya hazırlanıyordu. Valizinde komşusunun bahçesine düşen topu almak için kullandığı gizli kapının anahtarı bulundu.
        3. [KOMŞU BAHÇESİ]: Yaşlı kadının bahçesindeki saksıların arkasında, kurbanın evinde kullanılan viski markasına ait boş bir şişe ve bitkisel zehrin elde edildiği 'Zakkum' çiçekleri bulundu.
    `,
    killer: "Komşu", 
    images: ["img/will_evidence.jpg", "img/ticket_evidence.jpg"] 
}
};
const statements = {
    "baba": "Oğlumla borsa yüzünden tartıştık doğru, ama o benim tek servetimdi. Onu öldürüp vasiyeti neden masada bırakayım?",
    "ex sevgili": "Meksika'ya bensiz gidecekti. O gece kapısına gittim, kütüphanenin ışığı yanıyordu ama içeriden yaşlı bir kadının sesini duydum, kavga ediyorlardı.",
    "ex arkadaşı": "Sahada düşmandık ama ölümü benim kariyerime bir şey katmaz. O gece kulüpte antrenmandaydım.",
    "komşu": "Zavallı Alexander... Çok gürültü yapardı, gençler işte. O gece ona biraz kurabiye ve papatya çayı götürmüştüm, kapıyı açık bırakmıştı. İçeride kimse yoktu, çayını bırakıp çıktım."
};

const characters = [
    { id: 'jake', name: 'Jake Peralta', quote: 'Cool-cool-cool-cool...', img: 'img/jake.jpg' },
    { id: 'amy', name: 'Amy Santiago', quote: 'Organize olmak bir sanattır.', img: 'img/amy.jpg' },
    { id: 'holt', name: 'Raymond Holt', quote: 'Ciddiyet her şeydir.', img: 'img/holt.jpg' },
    { id: 'rosa', name: 'Rosa Diaz', quote: 'Bana dokunma.', img: 'img/rosa.jpg' },
    { id: 'terry', name: 'Terry Jeffords', quote: 'Terry yoğurdu sever!', img: 'img/terry.jpg' },
    { id: 'boyle', name: 'Charles Boyle', quote: 'Mutfak bir tapınaktır.', img: 'img/boyle.jpg' },
    { id: 'gina', name: 'Gina Linetti', quote: 'Ben bir ikonum.', img: 'img/gina.jpg' }
];

let selectedCase = null;    
let selectedDetective = null; 
let index = 0;               
const text = "BROOKLYN 99";   

const typewriterElement = document.getElementById('typewriter');

window.addEventListener('DOMContentLoaded', () => {
    type();
});

function type() {
    if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    } else {
        setTimeout(finishIntro, 1000); 
    }
}

function finishIntro() {
    typewriterElement.classList.add('move-up'); 
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        intro.style.opacity = '0';
        intro.style.pointerEvents = 'none';
        
        renderCharacters(); 
        
        const main = document.getElementById('main-content');
        main.classList.remove('hidden');
        main.classList.add('visible');
    }, 800);
}

function renderCharacters() {
    const charGrid = document.getElementById('char-grid');
    if(!charGrid) return; 

    charGrid.innerHTML = characters.map(char => `
        <div class="char-card" onclick="selectChar('${char.id}')">
            <img src="${char.img}" alt="${char.name}" class="char-card-img">
            <h3>${char.name}</h3>
            <p>"${char.quote}"</p>
        </div>
    `).join('');
}

window.selectChar = function(id) {
    selectedDetective = characters.find(c => c.id === id);
    
    document.getElementById('char-grid').classList.add('hidden');
    
    const diffPanel = document.getElementById('difficulty-panel');
    diffPanel.classList.remove('hidden');
    diffPanel.classList.add('visible');

    document.querySelector('.selection-text').innerText = "DETECTIVE: " + selectedDetective.name.toUpperCase();
    document.querySelector('.instruction').innerText = "Vaka zorluğunu seçin.";
};

window.prepareCase = (level) => {
    selectedCase = cases[level]; 
    
    document.getElementById('difficulty-panel').classList.remove('visible');
    document.getElementById('difficulty-panel').classList.add('hidden');
    document.querySelector('.precinct-header').classList.add('hidden'); 
    document.getElementById('case-room').classList.remove('hidden');
    
    const interBtn = document.getElementById('interrogation-btn');
    if (level === 'zor') {
        interBtn.classList.remove('hidden');
    } else {
        interBtn.classList.add('hidden');    
    }

    document.getElementById('current-case-title').innerText = selectedCase.realTitle;
    
    // Klasör içeriğini bas
    document.getElementById('evidence-list').innerHTML = `
        <div class="evidence-item"><span class="evidence-label">OLAY ÖZETİ</span><p>${selectedCase.description}</p></div>
        <div class="evidence-item"><span class="evidence-label">KANITLAR</span><p>${selectedCase.evidence}</p></div>
        <div class="evidence-item"><span class="evidence-label">SORGULAR</span><p>${selectedCase.interrogation}</p></div>
        <div class="case-photos-container">
            <div class="case-photo-frame"><img src="${selectedCase.images[0]}" onerror="this.src='https://via.placeholder.com/200'"><p class="photo-caption">KANIT #A</p></div>
            <div class="case-photo-frame"><img src="${selectedCase.images[1]}" onerror="this.src='https://via.placeholder.com/200'"><p class="photo-caption">KANIT #B</p></div>
        </div>
    `;
};

window.openInterrogation = () => {
    const modal = document.getElementById('interrogation-modal');
    modal.classList.remove('hidden');
    modal.style.display = "flex"; 
};

window.closeInterrogation = () => {
    const modal = document.getElementById('interrogation-modal');
    modal.classList.add('hidden');
    modal.style.display = "none";
    document.getElementById('statement-output').innerText = "";
};

window.readStatement = () => {
    const name = document.getElementById('statement-input').value.toLowerCase().trim();
    const output = document.getElementById('statement-output');
    
    if (statements[name]) {
        output.innerText = `[${name.toUpperCase()} İFADESİ]: "${statements[name]}"`;
    } else {
        output.innerText = "Sistem hatası: Bu isimde bir sorgu kaydı bulunamadı. Lütfen (baba, sevgili, rakip, komşu) isimlerinden birini deneyin.";
    }
};

window.closeAlert = () => { 
    document.getElementById('custom-alert').classList.add('hidden'); 
    
    document.getElementById('interrogation-btn').classList.add('hidden');
};
window.checkCriminal = () => {
    const input = document.getElementById('suspect-input');
    const guess = input.value.trim().toLowerCase(); 
    
    if(selectedCase && guess === selectedCase.killer.toLowerCase()) {
        document.getElementById('congrats-panel').classList.remove('hidden'); 
        setTimeout(() => { location.reload(); }, 3000); 
    } else {
        showAlert("Hatalı tespit! Delilleri tekrar incele dedektif.");
    }
};

document.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.char-card');
    if (card) {
        const name = card.querySelector('h3').innerText;
        const textEl = document.querySelector('.selection-text');
        if(textEl) textEl.innerText = "ASSIGNING: " + name.toUpperCase();
    }
});

window.showAlert = (msg) => {
    document.getElementById('alert-message').innerText = msg;
    document.getElementById('custom-alert').classList.remove('hidden');
};
