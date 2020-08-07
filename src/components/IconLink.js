import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

const useStyles = createUseStyles((theme) => ({
  link: {
    color: ({ color }) =>
      color === 'contrasting' ? theme.palette.text.secondaryLight : theme.palette.text.secondary,
    outline: 'none',
    cursor: 'pointer',

    '&:hover': {
      color: ({ color }) =>
        color === 'contrasting' ? theme.palette.text.primaryLight : theme.palette.text.primary,
    },
  },
}));

const IconLink = ({ to, children, color }) => {
  const classes = useStyles({ color });

  if (to.startsWith('/')) {
    return (
      <Link to={to} className={classes.root}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className={classes.link}>
      {children}
    </a>
  );
};

export default IconLink;