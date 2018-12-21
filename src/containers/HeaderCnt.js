import { connect } from 'react-redux';
import * as action from '../actions/appAction';

import Header from '../components/Header';

const mapStateToProps = state => ({
  isMenuOpened: state.app.isMenuOpened,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleClick: () => dispatch(action.toggleMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
