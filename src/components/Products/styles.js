import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  loading: {
    backgroundColor: 'black',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#707276',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/arabesque.png")',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
