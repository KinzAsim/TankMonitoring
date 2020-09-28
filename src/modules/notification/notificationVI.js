import { connect } from 'react-redux';
import NotificationView from '../notification/notificationView';
import Clear from '../../modules/notification/notificationView';

const mapStateToProps = (state) => {
   //isAuthenticated:state.auth.isAuthenticated,
   notification = state.notifications.notifications
}

export default connect (mapStateToProps,{Clear})(NotificationView);