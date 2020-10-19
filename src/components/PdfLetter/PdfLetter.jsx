import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Page, Text, Document, StyleSheet, PDFDownloadLink, PDFViewer, View
} from '@react-pdf/renderer';
import gnIcon from './greenNeighbor3.jpg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Card, Typography } from '@material-ui/core'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        width: '100%',
        // height: '100%',
    },
    section: {
        margin: 10,
        padding: '5px 5px 0em 5px',
        flexGrow: 1
    },
    body: {
        padding: '1em',
        width: '48em',
        height: '40em',
        borderRadius: '1em',
        border: '0',
    },
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',

    },
    card: {
        background: 'rgb(255,255,255, .85)',
        margin: '2em',
        padding: '1em'
    },
    title: {
        fontSize: 40,
        fontFamily: 'leafy',
        color: 'black',
    },
    arrowIcon: {
        color: 'black'
    }

});

const PdfView = ({ letter, history }) => {

    const directToPreview = () => {
        history.push('/previewEmail')
    }

    return (
        <div style={styles.root}>
            <Card style={styles.card}>
                <Typography align="center" style={styles.title}>
                    Print or Save your letter
                </Typography>
                <PDFViewer style={styles.body}>
                    <Document>
                        <Page size="A4" style={styles.page} >
                            <View style={styles.section}>
                                <Text> {letter.intro + '\n' + '\n'}</Text>


                                <Text> {letter.body}</Text>


                                <Text> {letter.conclusion}</Text>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
                <div>
                    <IconButton onClick={directToPreview} style={styles.arrowIcon}><ArrowBackIcon /></IconButton>
                </div>
            </Card>
        </div>
    )
}

const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
    };
};


// export default PdfLetter;
export default withRouter(connect(mapStoreToProps)(PdfView));