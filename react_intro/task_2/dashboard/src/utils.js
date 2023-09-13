export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex=true) => {
  if (isIndex === true)
    return 'Holberton School'
  else
    return 'Holberton School main dashboard';
};

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};
