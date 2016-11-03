import React from 'react'
import { Link } from 'react-router'
import styles from './TopMenuDesktopNav.css'
import Icon from '../../../components/Icon/Icon'

const TopMenuDesktopNav = ({ navs }) => {
  return (
    <nav className={styles.main}>
      <ul>
        {navs.map((n, i) => (
          <DesktopNavItem
            key={i}
            link={n.link}
            title={n.title}
            icon={n.icon}
          />
        ))}
      </ul>
    </nav>
  )
}

const DesktopNavItem = ({ link, title, icon }) => (
  <li className={styles.navMain}>
    <Link to={link} className={styles.navLink}>
      <Icon icon={icon} />
      <span>{title}</span>
    </Link>
  </li>
)

TopMenuDesktopNav.propTypes = {
  navs: React.PropTypes.array.isRequired,
}

DesktopNavItem.propTypes = {
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
}

export default TopMenuDesktopNav
