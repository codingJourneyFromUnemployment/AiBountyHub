'use client'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import Hero from '@/components/hero'
import SearchBar from '@/components/searchbar'
import Boxes from '@/components/boxes'
import PostsList from '@/components/posts-list'

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        <main className='grow'>
          <Hero/>
          {/* Page content */}
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="flex flex-col items-center">
                <SearchBar />
                {/* Main content */}
                <div className="md:grow pt-6 pb-12 md:pb-20">
                  <div className="md:pr-6 lg:pr-10">
                    {/* @ts-expect-error Async Server Component */}
                    <PostsList />
                    <Boxes />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home