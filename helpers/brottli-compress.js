const brotli = require('brotli');
const fs = require('fs');
const {inlineSource} = require('inline-source');
const path = require('path');
const indexHtmlFile = 'public/index.html';
const indexCopy = 'public/i.html';
const htmlpath = path.resolve(indexHtmlFile);
let html;

function brottli() {
    const brotliSettings = {
        extension: 'br',
        skipLarger: true,
        mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
        quality: 11, // 0 - 11,
        lgwin: 12 // default
    };

    const fileCompress = (dir) => (file) => {
        if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
            const result = brotli.compress(fs.readFileSync(dir + '/' + file), brotliSettings);
            fs.writeFileSync(dir + '/' + file + '.br', result)
        }
    };
    // fs.readdirSync('public/build').forEach(fileCompress('public/build'));
    fs.readdirSync('public').forEach(fileCompress('public'));

}

async function inlinerMM() {
    try {
        //Make a copy
        fs.writeFileSync(indexCopy, html);

        html = await inlineSource(htmlpath, {
            compress: true,
            rootpath: 'public',
            // Skip all css types and png formats
            // ignore: ['css', 'png']
        });
        // Save inlined js in the htm file
        fs.writeFileSync(indexHtmlFile, html);
        // Compress files with brottli algorithm
        brottli();

    } catch (err) {
        // Handle error
    }
}

inlinerMM();
