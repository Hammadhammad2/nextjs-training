import { EditPosts } from "../buttons";
import PostsListingBody from "./PostListingBody";
import DeletePost from "./DeletePost";

export default function PostsListing({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <ul>
        {posts?.length === 0 ? (
          <h2 className="text-lg font-bold text-center">No posts found</h2>
        ) : (
          posts?.map((post) => (
            <li key={post.id} className="bg-gray-100 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <PostsListingBody post={post} postId={post.id} />
                <div className="flex gap-2">
                  <EditPosts userId={post.userId} postId={post.id} />
                  <DeletePost postId={post.id} userId={post.userId} />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
