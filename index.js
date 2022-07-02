const paterns = {
    'A': 'FFFFFFFFF\nFFFFAFFFF\nFFFAAAFFF\nFFAAFAAFF\nFAAAAAAAF\nAAFFFFFAA',
    'B': '',
    'C': '',
    'D': 'FFFFFFFFF\nAAAAAAAFF\nAAFFFFFAA\nAAFFFFFAA\nAAFFFFFAA\nAAAAAAAAA',
    'E': '',
    'F': '',
    'G': 'FFFFFFFFF\nFFAAAAAAA\nAAFFFFFFF\nAAFFFAAAA\nAAFFFFFAA\nFFAAAAAFF',
    'H': '',
    'I': 'FFFFFFFFF\nFFAAAAAFF\nFFFFAFFFF\nFFFFAFFFF\nFFFFAFFFF\nFFAAAAAFF',
    'J': '',
    'K': '',
    'L': '',
    'M': '',
    'N': 'FFFFFFFFF\nAAAFFFFAA\nAAFAFFFAA\nAAFFAFFAA\nAAFFFAFAA\nAAFFFFAAA',
    'O': '',
    'P': '',
    'Q': '',
    'R': '',
    'S': '',
    'T': '',
    'U': '',
    'V': '',
    'W': '',
    'X': '',
    'Y': '',
    'Z': ''
}

const config = {
    replacer: '9',
    text: 'Hello World !'
}

var finalText = '';

for(let i = 0; i < paterns['A'].split('\n').length; i++) {

    config.text.toUpperCase().split('').forEach(character => {

        if(character === ' ') {
           
            for(let j = 0; j < 10; j++) {
                
                let rand = Math.round(Math.random() * 9);
    
                if(rand === config.replacer) rand--;
    
                finalText += rand;

            }

        } else {
         
            let line = paterns[character].split('\n')[i];

            let finalLine = '';
    
            line.split('').forEach(c => {
    
                if(c === 'A') finalLine += config.replacer;
    
                if(c === 'F') {
    
                    let rand = Math.round(Math.random() * 9);
    
                    if(rand === config.replacer) rand--;
    
                    finalLine += rand;
    
                }
    
            });
    
            finalText += finalLine;

            let rand = Math.round(Math.random() * 9);
    
            if(rand === config.replacer) rand--;
    
            finalText += rand;

        }

    });

    finalText += '\n';

}

require('fs').writeFileSync('dingding3000-output.txt', finalText, 'utf-8');
