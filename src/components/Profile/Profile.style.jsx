import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
    profile: {
      margin: 10,
      maxWidth: 250,
      backgroundColor: 'rgb(250, 250, 250)',
      border: '1px solid rgb(232, 232, 232)',
      borderRadius: 5,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      color: '#8c9aa8',
    },

    description: {
        textAlign: 'center',
        lineHeight: '1.1',
    },

    avatar: {
        height: 159,
        margin: '46px 0px 16px',
        borderRadius: '50%',
    },

    name: {
        color: 'darkslategray',
        fontWeight: 'bold',
        fontSize: 28,
        margin: '0 0 10px',
    },

    tag: {
        fontSize: 20,
        margin: '0 0 10px',
    },

    location: {
        fontSize: 20,
        margin: '0 0 30px',
    },

    stats: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        listStyle: 'none',
    },

    statsItem:  {
        padding: '20px 0px',
        height: 88,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        lineHeight: '1.5',
        backgroundColor: 'rgb(232, 232, 232)',
        border: '1px solid rgb(222, 222, 222)',
    },

    label: {
        // color: '#89aaB',
        fontSize: 16,
    },

    quantity: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'darkslategray',
    }
});