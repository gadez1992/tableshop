import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '0',
  },
  cartActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttons: {
    display: 'flex',
    marginRight: '7rem',
  },
  removeButton: {
    backgroundColor: '#c2c2c2',
  }
}));
