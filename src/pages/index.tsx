import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage<{}> = () => {
  return (
    <div>
      Hi, test{' '}
      <Link href="/api/apples">
        <a>the page</a>
      </Link>{' '}
      sometimes it returns a bug.
    </div>
  )
}

export default HomePage
