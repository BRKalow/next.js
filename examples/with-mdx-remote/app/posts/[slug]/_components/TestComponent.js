import styles from './TestComponent.module.css'

export default function TestComponent({ name = 'world' }) {
  return <div className={styles.root}>Hello, {name}!</div>
}
