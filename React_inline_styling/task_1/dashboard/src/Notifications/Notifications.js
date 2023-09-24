import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes, { arrayOf } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button style={{
              position: 'absolute',
              background: 'none',
              border: 'none',
              right: '10px',
              top: '15px',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={() => {console.log('Close button has been clicked')}}>
                <img src={closeIcon} alt="close icon"/>
            </button>
            {listNotifications.length === 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
            <ul>
              {listNotifications.map((notification) => (<NotificationItem 
                                                         key={notification.id}
                                                         id={notification.id}
                                                         html={notification.html}
                                                         type={notification.type}
                                                         value={notification.value}
                                                         markedAsRead={this.markAsRead}/>))}
            </ul>
          </div>
        )}
      </>
    )
  }
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    border: '0.2rem dashed #e0354b',
    padding: '5px 20px',
    width: '30vw',
    right: '5px',
    position: 'absolute',
    textAlign: 'left',
  }
})

export default Notifications;
