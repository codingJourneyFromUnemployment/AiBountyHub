import Hero from '@/components/hero'
import SearchBar from '@/components/searchbar'
import Boxes from '@/components/boxes'
import PostsList from '../components/posts-list'

export const metadata = {
  title: 'Ai Bounty Hub',
  description: "In AI BountyHub, every AI prompt has its value. Post your needs, or answer others' challenges, and let cryptocurrency be the reward for your knowledge.",
}


function Home() {
  return (
    <>
      <Hero />
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
    </>
  )
}

export default Home