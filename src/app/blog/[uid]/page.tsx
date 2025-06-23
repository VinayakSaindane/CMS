import { getData } from '@/lib/getdata';
import Image from 'next/image';

export default async function BlogPost({ params }: { params: { uid: string } }) {
  const blogPost = await getData({
    contentType: 'blog_post',
    entryUid: params.uid,
    params: {
      include_fallback: true,
      include_branch: false,
      include: ['author.profile_picture'], // Include author's profile picture
    },
  });



  if (!blogPost) {
    return <div className="container mx-auto p-8">Blog post not found.</div>;
  }

  const post = blogPost; // When entryUid is provided, getData returns data.entry directly

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.featured_image && (
        <div className="mb-6">
          <Image
            src={post.featured_image.url}
            alt={post.featured_image.title || 'Featured Image'}
            width={800}
            height={450}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}


      {post.author && (
        <div className="flex items-center space-x-4">
          {post.author.profile_picture && (
            <Image
              src={post.author.profile_picture.url}
              alt={post.author.name || 'Author'}
              width={60}
              height={60}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-gray-600">{post.author.bio}</p>
          </div>
        </div>
      )}
    </main>
  );
}