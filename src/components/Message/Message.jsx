import PropTypes from 'prop-types';

export function Message({ message }) {
  return <div>{message}</div>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};
