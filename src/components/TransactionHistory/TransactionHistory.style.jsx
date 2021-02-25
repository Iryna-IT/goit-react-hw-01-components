import {createUseStyles} from 'react-jss';


export const useStyles = createUseStyles({
    transactionHistory: {
        width: '100%',
        marginBottom: 60,
        textAlign: 'left',
        borderBottom: '1px solid #dfdfdf',
        borderRadius: 6,
        borderCollapse: 'separate',
        borderSpacing: 10,
        // background: '#c83240',
    },
    
    th: {
        padding: '10px 200px 10px',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        background: '#c83240',
    },

    tbody: {
        color: 'gray',
        fontWeight: '400',
        fontSize: 20,
        background: '#c83240',
        borderRight: '1px solid #dfdfdf',
    },

    tr: {
        padding: '40% 0px 0px 0px',
        '&:last-child': {
            borderRight: 0,
        },
        '&:nth-child(1n)': {
            background: '#f6f6f6',
        },
        '&:nth-child(2n)': {
            background: '#e6e6e6',
        },
        '&:hover': {
            background: '#ffe8e8',
            transitionDuration: '0.6s',
        },
    },
    
    td: {
        padding: '10px 200px 10px',
        borderRight: '1px solid #dfdfdf',
        '&:last-child': {
            borderRight: 0,
        },
    },
})
