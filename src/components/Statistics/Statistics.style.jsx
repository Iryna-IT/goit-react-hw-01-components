import {createUseStyles} from 'react-jss';

export const useStyles = createUseStyles({
  statistics:  {
    margin: 30,
    maxWidth: 500,
    backgroundColor: 'rgb(250, 250, 250)',
    border: '1px solid rgb(232, 232, 232)',
    textAlign: 'center',
  },

  title: {
    color: 'gray',
    textTransform: "uppercase",
    fontSize: 28,
    padding: 30,
  },

  statList: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    listStyle: 'none',
  },

  item: {
    display: 'flex',
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    lineHeight: 1.5,
  },

  label: {
    fontSize: 16,
    color: '#fff',
  },

  percentage: {
    fontSize: 24,
    color: '#fff',
  }
})

