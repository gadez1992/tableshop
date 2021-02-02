import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productDescription:{
    height: '9rem',
  },
  cartIcon: {
    fontSize: '1.2rem',
    paddingLeft: '.2rem',
    paddingRight: '0',
  },
}));
