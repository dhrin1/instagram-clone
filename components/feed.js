import React from 'react'
import Stories from './stories'
import Posts from './posts'
import Miniprofile from './miniprofile'
import Suggestion from './suggestion'
import { useSession } from 'next-auth/react'


function feed() {
    const {data: session} = useSession();

    return (
        <main className={ !session ? "grid-cols-1  max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto bg-gray"  }>
            <section className="col-span-2">
                <Stories />
                <Posts />
            </section>
            {session &&
                <section className="hidden xl:inline-grid md:col-span-1">
                    <div className="fixed top-20" >
                        <Miniprofile />
                        <Suggestion />
                    </div>
                </section>
            }
          
        </main>
    )
}

export default feed
