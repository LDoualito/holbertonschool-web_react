import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent{
  constructor(props) {
    super(props);
  }
  render() {
    const { id, type, html, value, markAsRead } = this.props;
    return (
      <li onClick={() => markAsRead(id)} className={type === 'urgent' ? css(styles.urgent) :  css(styles.default)} data-notification-type={type} dangerouslySetInnerHTML={html}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
})

export default NotificationItem;
