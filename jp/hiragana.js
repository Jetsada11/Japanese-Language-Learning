// Hiragana Data and Helper Functions
const hiraganaData = {
    // あ行 (a-row)
    'あ': { romaji: 'a', group: 'a', thai: 'อา' },
    'い': { romaji: 'i', group: 'a', thai: 'อิ' },
    'う': { romaji: 'u', group: 'a', thai: 'อุ' },
    'え': { romaji: 'e', group: 'a', thai: 'เอะ' },
    'お': { romaji: 'o', group: 'a', thai: 'โอะ' },
    
    // か行 (k-row)
    'か': { romaji: 'ka', group: 'k', thai: 'คะ' },
    'き': { romaji: 'ki', group: 'k', thai: 'คิ' },
    'く': { romaji: 'ku', group: 'k', thai: 'คุ' },
    'け': { romaji: 'ke', group: 'k', thai: 'เคะ' },
    'こ': { romaji: 'ko', group: 'k', thai: 'โคะ' },
    
    // さ行 (s-row)
    'さ': { romaji: 'sa', group: 's', thai: 'ซะ' },
    'し': { romaji: 'shi', group: 's', thai: 'ชิ' },
    'す': { romaji: 'su', group: 's', thai: 'ซุ' },
    'せ': { romaji: 'se', group: 's', thai: 'เซะ' },
    'そ': { romaji: 'so', group: 's', thai: 'โซะ' },
    
    // た行 (t-row)
    'た': { romaji: 'ta', group: 't', thai: 'ทะ' },
    'ち': { romaji: 'chi', group: 't', thai: 'ชิ' },
    'つ': { romaji: 'tsu', group: 't', thai: 'ซึ' },
    'て': { romaji: 'te', group: 't', thai: 'เตะ' },
    'と': { romaji: 'to', group: 't', thai: 'โตะ' },
    
    // な行 (n-row)
    'な': { romaji: 'na', group: 'n', thai: 'นะ' },
    'に': { romaji: 'ni', group: 'n', thai: 'นิ' },
    'ぬ': { romaji: 'nu', group: 'n', thai: 'นุ' },
    'ね': { romaji: 'ne', group: 'n', thai: 'เนะ' },
    'の': { romaji: 'no', group: 'n', thai: 'โนะ' },
    
    // は行 (h-row)
    'は': { romaji: 'ha', group: 'h', thai: 'ฮะ' },
    'ひ': { romaji: 'hi', group: 'h', thai: 'ฮิ' },
    'ふ': { romaji: 'fu', group: 'h', thai: 'ฟุ' },
    'へ': { romaji: 'he', group: 'h', thai: 'เฮะ' },
    'ほ': { romaji: 'ho', group: 'h', thai: 'โฮะ' },
    
    // ま行 (m-row)
    'ま': { romaji: 'ma', group: 'm', thai: 'มะ' },
    'み': { romaji: 'mi', group: 'm', thai: 'มิ' },
    'む': { romaji: 'mu', group: 'm', thai: 'มุ' },
    'め': { romaji: 'me', group: 'm', thai: 'เมะ' },
    'も': { romaji: 'mo', group: 'm', thai: 'โมะ' },
    
    // や行 (y-row)
    'や': { romaji: 'ya', group: 'y', thai: 'ยะ' },
    'ゆ': { romaji: 'yu', group: 'y', thai: 'ยุ' },
    'よ': { romaji: 'yo', group: 'y', thai: 'โยะ' },
    
    // ら行 (r-row)
    'ら': { romaji: 'ra', group: 'r', thai: 'ระ' },
    'り': { romaji: 'ri', group: 'r', thai: 'ริ' },
    'る': { romaji: 'ru', group: 'r', thai: 'รุ' },
    'れ': { romaji: 're', group: 'r', thai: 'เระ' },
    'ろ': { romaji: 'ro', group: 'r', thai: 'โระ' },
    
    // わ行 (w-row)
    'わ': { romaji: 'wa', group: 'w', thai: 'วะ' },
    'を': { romaji: 'wo', group: 'w', thai: 'โวะ' },
    
    // ん (n)
    'ん': { romaji: 'n', group: 'n', thai: 'น' }
};

// Level 5 Vocabulary Data
const vocabularyData = [
    { thai: "แมว", romaji: "neko", hiragana: "ねこ" },
    { thai: "ภูเขา", romaji: "yama", hiragana: "やま" },
    { thai: "ทะเล", romaji: "umi", hiragana: "うみ" },
    { thai: "ฟ้า", romaji: "sora", hiragana: "そら" },
    { thai: "พ่อ", romaji: "otou", hiragana: "おとう" },
    { thai: "แม่", romaji: "haha", hiragana: "はは" },
    { thai: "มือ", romaji: "te", hiragana: "て" },
    { thai: "หู", romaji: "mimi", hiragana: "みみ" },
    { thai: "จมูก", romaji: "hana", hiragana: "はな" },
    { thai: "ปลา", romaji: "sakana", hiragana: "さかな" },
    { thai: "ดวงดาว", romaji: "hoshi", hiragana: "ほし" },
    { thai: "บ้าน", romaji: "ie", hiragana: "いえ" },
    { thai: "รถ", romaji: "kuruma", hiragana: "くるま" },
    { thai: "แม่น้ำ", romaji: "kawa", hiragana: "かわ" },
    { thai: "ต้นไม้", romaji: "ki", hiragana: "き" },
    { thai: "ฤดูร้อน", romaji: "natsu", hiragana: "なつ" },
    { thai: "ฤดูหนาว", romaji: "fuyu", hiragana: "ふゆ" },
    { thai: "เด็ก", romaji: "ko", hiragana: "こ" },
    { thai: "หนังสือ", romaji: "hon", hiragana: "ほん" },
    { thai: "ป่า", romaji: "mori", hiragana: "もり" },
    { thai: "กลางวัน", romaji: "hiru", hiragana: "ひる" },
    { thai: "กลางคืน", romaji: "yoru", hiragana: "よる" },
    { thai: "ข้างใน", romaji: "naka", hiragana: "なか" },
    { thai: "ข้างนอก", romaji: "soto", hiragana: "そと" },
    { thai: "เพื่อน", romaji: "tomo", hiragana: "とも" },
    { thai: "ใบไม้", romaji: "ha", hiragana: "は" },
    { thai: "ข้าว", romaji: "ine", hiragana: "いね" },
    { thai: "ตอนเช้า", romaji: "asa", hiragana: "あさ" },
    { thai: "พรุ่งนี้", romaji: "asu", hiragana: "あす" },
    { thai: "แมลง", romaji: "mushi", hiragana: "むし" },
    { thai: "เสียง", romaji: "oto", hiragana: "おと" },
    { thai: "เสือ", romaji: "tora", hiragana: "とら" },
    { thai: "ลิง", romaji: "saru", hiragana: "さる" },
    { thai: "นก", romaji: "tori", hiragana: "とり" },
    { thai: "เชือก", romaji: "nawa", hiragana: "なわ" },
    { thai: "เก้าอี้", romaji: "isu", hiragana: "いす" },
    { thai: "เวลา", romaji: "toki", hiragana: "とき" },
    { thai: "ปี", romaji: "toshi", hiragana: "とし" },
    { thai: "ข้างบน", romaji: "ue", hiragana: "うえ" },
    { thai: "ข้างล่าง", romaji: "shita", hiragana: "した" },
    { thai: "ซ้าย", romaji: "hidari", hiragana: "ひだり" },
    { thai: "หน้า", romaji: "kao", hiragana: "かお" },
    { thai: "ปาก", romaji: "kuchi", hiragana: "くち" },
    { thai: "ขา", romaji: "ashi", hiragana: "あし" },
    { thai: "วัว", romaji: "ushi", hiragana: "うし" },
    { thai: "หมู่บ้าน", romaji: "mura", hiragana: "むら" },
    { thai: "เมือง", romaji: "machi", hiragana: "まち" },
    { thai: "หัวเราะ", romaji: "wara", hiragana: "わら" },
    { thai: "ทะเลสาบ", romaji: "ike", hiragana: "いけ" },
    { thai: "เร็ว", romaji: "hayai", hiragana: "はやい" }
];

// Helper Functions
class HiraganaHelper {
    static getAllCharacters() {
        return Object.keys(hiraganaData);
    }
    
    static getRandomCharacter() {
        const characters = this.getAllCharacters();
        return characters[Math.floor(Math.random() * characters.length)];
    }
    
    static getRandomCharacters(count) {
        const characters = this.getAllCharacters();
        const shuffled = [...characters].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    static getCharactersByGroup(group) {
        return Object.keys(hiraganaData).filter(char => hiraganaData[char].group === group);
    }
    
    static getRandomCharacterFromGroup(group) {
        const characters = this.getCharactersByGroup(group);
        return characters[Math.floor(Math.random() * characters.length)];
    }
    
    static getRomaji(character) {
        return hiraganaData[character]?.romaji || '';
    }
    
    static getThai(character) {
        return hiraganaData[character]?.thai || '';
    }
    
    static getGroup(character) {
        return hiraganaData[character]?.group || '';
    }
    
    // Generate wrong answers for multiple choice
    static generateWrongAnswers(correctAnswer, count, includeSameGroup = true) {
        const wrongAnswers = [];
        const correctGroup = this.getGroup(correctAnswer);
        
        while (wrongAnswers.length < count) {
            let candidate;
            
            if (includeSameGroup && wrongAnswers.length < Math.ceil(count / 2)) {
                // Prioritize same group characters
                candidate = this.getRandomCharacterFromGroup(correctGroup);
            } else {
                // Random character from different group
                do {
                    candidate = this.getRandomCharacter();
                } while (this.getGroup(candidate) === correctGroup);
            }
            
            const candidateRomaji = this.getRomaji(candidate);
            if (candidateRomaji !== this.getRomaji(correctAnswer) && !wrongAnswers.includes(candidateRomaji)) {
                wrongAnswers.push(candidateRomaji);
            }
        }
        
        return wrongAnswers;
    }
    
    // Shuffle array
    static shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    // Play sound (using Web Speech API)
    static playSound(text, lang = 'ja-JP') {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            utterance.rate = 0.8;
            speechSynthesis.speak(utterance);
        }
    }
    
    // Check answer with tolerance for common mistakes
    static checkAnswer(userAnswer, correctAnswer) {
        const normalize = (str) => str.toLowerCase().trim();
        return normalize(userAnswer) === normalize(correctAnswer);
    }
    
    // Get random vocabulary for Level 5
    static getRandomVocabulary() {
        return vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    }
    
    static getRandomVocabularies(count) {
        const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    // Save vocabulary to localStorage
    static saveVocabulary(vocab) {
        const saved = localStorage.getItem('customVocabulary');
        const vocabList = saved ? JSON.parse(saved) : [];
        vocabList.push(vocab);
        localStorage.setItem('customVocabulary', JSON.stringify(vocabList));
    }
    
    // Load vocabulary from localStorage
    static loadCustomVocabulary() {
        const saved = localStorage.getItem('customVocabulary');
        return saved ? JSON.parse(saved) : [];
    }
    
    // Delete vocabulary from localStorage
    static deleteVocabulary(index) {
        const saved = localStorage.getItem('customVocabulary');
        const vocabList = saved ? JSON.parse(saved) : [];
        vocabList.splice(index, 1);
        localStorage.setItem('customVocabulary', JSON.stringify(vocabList));
    }
    
    // Get all vocabulary (default + custom)
    static getAllVocabulary() {
        const defaultVocab = [...vocabularyData];
        const customVocab = this.loadCustomVocabulary();
        return [...defaultVocab, ...customVocab];
    }
    
    // Get default vocabulary only
    static defaultVocabulary() {
        return [...vocabularyData];
    }
}

// Score Management
class ScoreManager {
    static saveScore(level, score, total) {
        const scores = this.getAllScores();
        scores[level] = { score, total, percentage: Math.round((score / total) * 100), date: new Date().toISOString() };
        localStorage.setItem('hiraganaScores', JSON.stringify(scores));
    }
    
    static getAllScores() {
        const saved = localStorage.getItem('hiraganaScores');
        return saved ? JSON.parse(saved) : {};
    }
    
    static getScore(level) {
        const scores = this.getAllScores();
        return scores[level] || null;
    }
    
    static clearAllScores() {
        localStorage.removeItem('hiraganaScores');
    }
}

// Progress Management
class ProgressManager {
    static saveProgress(level, currentQuestion, totalQuestions) {
        const progress = this.getAllProgress();
        progress[level] = { currentQuestion, totalQuestions, date: new Date().toISOString() };
        localStorage.setItem('hiraganaProgress', JSON.stringify(progress));
    }
    
    static getAllProgress() {
        const saved = localStorage.getItem('hiraganaProgress');
        return saved ? JSON.parse(saved) : {};
    }
    
    static getProgress(level) {
        const progress = this.getAllProgress();
        return progress[level] || null;
    }
    
    static clearProgress(level) {
        const progress = this.getAllProgress();
        delete progress[level];
        localStorage.setItem('hiraganaProgress', JSON.stringify(progress));
    }
    
    static clearAllProgress() {
        localStorage.removeItem('hiraganaProgress');
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HiraganaHelper, ScoreManager, ProgressManager };
}
