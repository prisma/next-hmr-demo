import { prisma } from './db'
import styles from './page.module.css'

export default async function Home() {
  const user = await prisma.user.findFirst();
  const name = user?.name ?? 'Stranger'
  return (
    <main className={styles.main}>
      <h1>Hello, {name}</h1>
    </main>
  )
}
