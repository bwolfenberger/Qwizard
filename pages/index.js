import Link from 'next/link'
import categoryStyles from '../styles/Category.module.css'

export default function Home() {
  return (
    <div>      
      <p>Select your quiz category:</p>
      <ul>
        <li className={categoryStyles.category}>
          <Link href='/questions/HTML'>HTML</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/JavaScript'>JavaScript</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/DevOps'>DevOps</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/MySQL'>MySQL</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/Linux'>Linux</Link>
        </li>
        <li className={categoryStyles.category}>
          <Link href='/questions/WordPress'>WordPress</Link>
        </li>
      </ul>
    </div>
  )
}