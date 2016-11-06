import React from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './TopMenuDesktopNav.css'
import Icon from '../../../components/Icon/Icon'

const TopMenuDesktopNav = ({ navs }) => {
  return (
    <nav className={styles.main}>
      <ul>
        {navs.map((n, i) => <DesktopNavItem key={i} {...n} />)}
      </ul>
    </nav>
  )
}

const DesktopNavItem = ({ link, title, icon, main = false }) => (
  <li className={styles.navMain}>
    {main
      ? <IndexLink
        to={link}
        className={styles.navLink}
        activeStyle={{ borderTop: '3px solid #fff' }}
      >
        <Icon icon={icon} />
        <span>{title}</span>
      </IndexLink>
      : <Link
        to={link}
        className={styles.navLink}
        activeStyle={{ borderTop: '3px solid #fff' }}
      >
        <Icon icon={icon} />
        <span>{title}</span>
      </Link>
    }

  </li>
)

TopMenuDesktopNav.propTypes = {
  navs: React.PropTypes.array.isRequired,
}

DesktopNavItem.propTypes = {
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  main: React.PropTypes.bool,
}

export default TopMenuDesktopNav
