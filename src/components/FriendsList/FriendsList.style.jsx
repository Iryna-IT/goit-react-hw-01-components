import {createUseStyles} from 'react-jss';


export const useStyles = createUseStyles({

  friendsList: {
    maxWidth: 500,
    margin: 30,
    padding: 0,
    // display: 'flex',
    // flexWrap: 'nowrap',
    // justifyContent: 'space-between',
    listStyle: 'none',
  },

  item: {
    display: 'flex',
    flexDirection:"row",
    alignItems: 'center',
    width: '100%',
    height: 100,
    lineHeight: 1.5,
    border: '1px solid rgb(232, 232, 232)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
    paddingLeft: 150,
  },

  status: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: '50%',
  },

  avatar: {
    width: 80,
    height: 80,
    objectFit: 'contain',
    borderRadius: '10%',
    border: '1px solid gray',
    marginRight: 10,
  },

  name: {
    fontSize: 36,
    fontWeight: 400,
    color: 'black',
  },
})