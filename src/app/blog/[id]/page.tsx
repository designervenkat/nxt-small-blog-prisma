import Link from "next/link";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function PostDetails(
  { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    },
    include: {
      author: true
    }
  })

  if (!post) {
    notFound()
   }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)] mx-auto w-full max-w-screen-lg">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex items-center gap-4">
                    <Link href="/blog" className="text-lg text-gray-400 ">
                        👈🏻 Back to Blog
                    </Link>

                    <h2 className="text-green-300 font-semibold">
                        X Twitter Blog
                    </h2>
                </div>
                <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
                    <h1 className="text-lg font-bold mb-8 text-gray-200">
                      {post.title} - by {post.author.name}                      
                    </h1>
                    <div className="prose prose-gray mt-8 text-lg">
                        {post.content || 'No content available.'}
                    </div>
                </article>
            </main>
        </div>
  )
}
