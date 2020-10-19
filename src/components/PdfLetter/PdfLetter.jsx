import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Page, Text, Document, StyleSheet, Font, PDFViewer, View, Image
} from '@react-pdf/renderer';
// import {styled } from '@react-pdf/styled-components';
import gnIcon from './greenNeighborlogo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Card, Typography } from '@material-ui/core'


Font.register({
    family: 'Roboto',
    src: "http://fonts.gstatic.com/s/roboto/v15/dtpHsbgPEm2lVWciJZ0P-A.ttf",
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    section: {
        margin: 30,
        padding: '10px 10px 0em 10px',
        flexGrow: 1,
        fontSize: 14,
        fontFamily: 'Roboto',
    },
    body: {
        padding: '1em',
        width: '48em',
        height: '35em',
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
    },
    logo: {
        width: '35vw',
        height: '27vw',
        alignSelf: 'flex-end',
        marginTop: '7vw'
    }

});

// const Picture = styled.Image`
//   margin: 15px 100px;
// `;

const PdfView = ({ letter, history }) => {

    const directToPreview = () => {
        history.push('/previewEmail')
    }


    const introArray = letter.intro.split('\n')

    console.log(introArray[0]);
    console.log(introArray[1]);
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

                                <Text>{introArray[0] + '\n' + '\n'}</Text>

                                <Text> {letter.intro.length > 0 ? introArray[1] + '\n' + '\n' : ''}</Text>
                                {letter &&
                                    <Text> {letter.body}</Text>}
                                <Text> {letter.conclusion}</Text>
                                <Image src={gnIcon} style={styles.logo} />
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