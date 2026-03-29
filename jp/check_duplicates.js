const fs = require('fs');
const content = fs.readFileSync('hiragana.js', 'utf8');
const vocabMatch = content.match(/const vocabularyData = \[([\s\S]*?)\];/s);

if (vocabMatch) {
    const vocabData = eval('(' + vocabMatch[1] + ')');
    console.log('Checking', vocabData.length, 'vocabulary items for duplicates...\n');
    
    const duplicates = [];
    const seen = new Map();
    
    vocabData.forEach((item, index) => {
        const key = item.thai + '|' + item.romaji + '|' + item.hiragana;
        if (seen.has(key)) {
            duplicates.push({
                index: index + 1,
                thai: item.thai,
                romaji: item.romaji,
                hiragana: item.hiragana,
                duplicateOf: seen.get(key)
            });
        } else {
            seen.set(key, index + 1);
        }
    });
    
    if (duplicates.length > 0) {
        console.log('DUPLICATES FOUND:');
        duplicates.forEach(dup => {
            console.log(`Item ${dup.index}: ${dup.thai} (${dup.romaji}) - ${dup.hiragana}`);
            console.log(`  -> Duplicate of item ${dup.duplicateOf}\n`);
        });
    } else {
        console.log('No duplicates found in vocabulary data.');
    }
} else {
    console.log('Vocabulary data not found.');
}
