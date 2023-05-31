import styles from './LayoutContainer.module.css';

interface LayoutContainerProps {
    children: any
}

function LayoutContainer({children}: LayoutContainerProps) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default LayoutContainer