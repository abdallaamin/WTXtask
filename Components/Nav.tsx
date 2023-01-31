import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import githublogo from '../assets/github.png'

type Props = {}

const Nav = (props: Props) => {
  return (
      <div className={styles.navbar}>
            <div>
            <button style={{ background:'#c2f7cb' , borderRadius:'10px' }}>
            <Link href="/">
                <a style={{ color: 'white' }}>
                <Image 
                    src="/favicon.png"
                    alt="logo"
                    width={40}
                    height={50}
                />
                </a>
            </Link>
            </button>
            </div>

            <div>
            <Link href="/my-account">
            <a style={{ color: 'white' }}>my account</a>
            </Link>
            </div>

            <div>
                <Link href="/challenges">
                    <a style={{ color: 'white' }}>challenges</a>
                </Link>
            </div>

            <div>
            <Link 
                  href="https://github.com/abdallaamin/WTXtask" 
            target="_blank"
            rel="noopener noreferrer">
            <a style={{ color: 'white' }}>
                <Image
                    src={githublogo}
                    alt="githublogo"
                    width={30}
                    height={30}
                />
                
            </a>
            </Link>
            </div>
        </div>
  )
}

export default Nav