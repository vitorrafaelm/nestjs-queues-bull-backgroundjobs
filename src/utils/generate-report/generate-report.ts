import * as PDFDocument from 'pdfkit';
import * as fs from 'fs';

export class generatePdf {
    generate(pdfInformations: any) {
        // Create a document
        const doc = new PDFDocument();
        const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. 
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec 
        hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. 
        Ut nec accumsan nisl.`;

        doc.pipe(fs.createWriteStream(`output.pdf`));

        doc
            .fontSize(50)
            .text(pdfInformations.title, {
                align: 'center'
            })
        doc.moveDown();  
        doc
            .fontSize(40)
            .text(pdfInformations.subtitle, {
                align: 'center'
            })
        doc.moveDown(); 

        doc
            .fontSize(40)
            .text(lorem, {
                align: 'justify'
            })

        doc
            .addPage()
            .fontSize(25)
            .text('Here is some vector graphics...', 100, 100);

        doc
            .save()
            .moveTo(100, 150)
            .lineTo(100, 250)
            .lineTo(200, 250)
            .fill('#FF3300');

        doc
            .scale(0.6)
            .translate(470, -380)
            .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            .fill('red', 'even-odd')
            .restore();

        doc.end();
        console.log('end pdf')
    }
}