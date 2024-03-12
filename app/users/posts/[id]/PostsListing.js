import Link from "next/link";
import { DeletePosts, EditPosts } from "./buttons";

export default function PostsListing({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <Link
                href={`/users/posts/${post.userId}/${post.id}/comments?modal=true`}
              >
                <div>
                  <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700 text-sm">{post.body}</p>
                </div>
              </Link>
              <div className="flex gap-2">
                <EditPosts userId={post.userId} postId={post.id} />
                <DeletePosts userId={post.userId} postId={post.id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
