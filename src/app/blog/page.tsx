import Link from "next/link";
import prisma from "@/lib/prisma";
import AddPost from "@/components/AddPost";

export default async function Blog() {

  // const users = await prisma.user.findMany();

  const posts = await prisma.post.findMany({
    include: {
      author: true
    }
  })



  // console.log(users);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] mx-auto w-full max-w-screen-xl">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-lg text-gray-400 ">
                        👈🏻 Back to Home
                    </Link>

                    <h2 className="text-green-300 font-semibold">
                        X Twitter Blog
                    </h2>
                </div>
               
        <AddPost />
                
                {/* <ol className="flex flex-col gap-y-8 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ol> */}

                <ul className="flex flex-col gap-y-8 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <h2>All Blog post</h2>
          {posts.map((post) => (
                      post.published && (
                        <li key={post.id}>
                            
                              <Link href={`/blog/${post.id}`}>
                                <span className="font-semibold">
                                    {post.title}
                                </span>
                                <span className="text-sm text-gray-600 ml-2">
                                    by {post.author.name}
                                </span>
                              </Link>
                           
                        </li>
                      )
                    ))}
                </ul>
            </main>
        </div>
  )
}
