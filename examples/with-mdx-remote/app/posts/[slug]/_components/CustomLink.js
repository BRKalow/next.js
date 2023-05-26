import Link from 'next/link'
import styles from './CustomLink.module.css'

export default function CustomLink({ as, href, ...otherProps }) {
  return <Link href={href} className={styles.link} {...otherProps} />
}
