import { fetchFilteredPosts, fetchPostsPages } from "../../../api/posts";
import Search from "../../../components/shared/Search";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import PostsListing from "./PostsListing";
import Pagination from "../../../components/shared/Pagination";
import { CreatePosts } from "./buttons";

export default async function Page({ params, searchParams }) {
  const userId = params.id;
  const currentPage = searchParams?.page || 1;
  const query = searchParams?.query || "";
  const posts = await fetchFilteredPosts(userId, currentPage, query);
  const totalPages = await fetchPostsPages(userId, query);

  // if (!posts) {
  //   notFound();
  // }

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/users" },
          {
            label: "Posts",
            href: `/users/posts/${userId}`,
            active: true,
          },
        ]}
      />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search posts..." />
        <CreatePosts userId={userId} />
      </div>
      <PostsListing posts={posts} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
