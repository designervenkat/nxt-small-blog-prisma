import prisma from '@/lib/prisma'
import Form from 'next/form'

export default function AddPost() {

  async function creatPost(formData: FormData) {
    'use server'

    const title = formData.get('title') as string
    const content = formData.get('content') as string

    try {
      await prisma.post.create({
      data: {
        title,
        content,
        slug: title.replace(/\s+/g, '-').toLowerCase() as string,
        authorId: "679a453251ff00bcca643c5f" as string,
        published: true
        }
    })
    } catch (error) {
      if (error instanceof Error){
        console.log("Error: ", error.message)
    }
    }
  }



  return (
    
    <div className="w-[720px] mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
            <Form action={creatPost} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-lg mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter your post title"
                        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-lg mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Write your post content here..."
                        rows={6}
                        className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                    Create Post
                </button>
            </Form>
        </div>
  )
}
