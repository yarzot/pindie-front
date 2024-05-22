import Link from "next/link";

import Styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={Styles['footer']}>
      <Link href="/" className={Styles['footer__logo']}>
        <span className={Styles['footer__logo-name']}>pindie</span>
        <span className={Styles['footer__logo-copy']}>, XXI век</span>
      </Link>
      <ul className={Styles['social-list']}>
        <li className={Styles['social-list__item']}>
          <a href="https://www.youtube.com/channel/UC6UcWTD3NTv-H5b6KmS2OuQ" className={`button ${Styles['social-list__link']}`}>YT</a>
        </li>
        <li className={Styles['social-list__item']}>
          <a href="https://vk.com/agares_from_apokalipsis_welcome" className={`button ${Styles['social-list__link']}`}>ВК</a>
        </li>
        <li className={Styles['social-list__item']}>
          <a href="https://t.me/+JCQhzzvnv1g3ZGRi" className={`button ${Styles['social-list__link']}`}>TG</a>
        </li>
      </ul>
    </footer>
  )
}