import React from 'react';
import { Page, Text, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const PdfLetter = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                
                    <Text>Section #1</Text>
           
             
                    <Text>Section #2</Text>
          
            </Page>
        </Document>
    );
}

ReactPDF.render(<PdfLetter />, `${__dirname}/example.pdf`);

export default PdfLetter;
