import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import injectSheet from 'react-jss';

const styles = {
  Navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    fontSize: '22px',
    marginTop: '20px',
    '& a': {
      color: '#777',
      display: 'inline-block',
      lineHeight: 1.1,
      marginRight: '4px',
      textDecoration: 'none',
      '&:hover, &:active': {
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
      },
      '& > span': {
        '&:hover': {
          color: '#000 !important',
        },
      },
    },
  },
  innerContainer: {
    paddingRight: '7.5vw',
  },
  highlightedLink: {
    color: '#000 !important',
    borderBottom: '1px solid #ddd',
  },
  '@media (max-width: 767px)': {
    Navbar: {
      float: 'none',
      fontSize: '4vw',
      marginRight: 0,
      textAlign: 'center',
    },
  },
};

const Navbar = ({ classes, location }) => {
  const links = [
    { label: 'About', to: '/' },
    { label: 'GitHub', to: 'https://github.com/jsonkao' },
  ];

  return (
    <div className={classes.Navbar}>
      <div className={classes.innerContainer}>
        {links.map(link => {
          const highlighterProps =
            link.to == location.pathname
              ? { className: classes.highlightedLink }
              : null;
          if (highlighterProps) {
            return (
              <Link key={link.to} {...highlighterProps} to={link.to}>
                <span>{link.label}.</span>
              </Link>
            );
          } else {
            return (
              <a key={link.to} href={link.to} target="_blank">
                <span>{link.label}.</span>
              </a>
            );
          }
        })}
        <a
          key="scroll-link"
          onClick={() =>
            document
              .getElementById('contactme-scroll-target')
              .scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Contact.</span>
        </a>
      </div>
    </div>
  );
};

export default withRouter(injectSheet(styles)(Navbar));
