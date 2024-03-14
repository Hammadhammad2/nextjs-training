import { fetchFilteredPostsAndTotalCount } from "../../../api/posts";
import Search from "../../../components/shared/Search";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import PostsListing from "./components/PostsListing";
import Pagination from "../../../components/shared/Pagination";
import { CreatePosts } from "./buttons";
import { urls } from "../../../utils/constants";
import { POSTS, SEARCH_POSTS, USERS } from "../../constants";

export default async function Page({ params, searchParams }) {
  let posts = [],
    totalPages;
  const userId = params.id;
  const currentPage = searchParams?.page || 1;
  const query = searchParams?.query || "";

  try {
    const resp = await fetchFilteredPostsAndTotalCount(
      userId,
      currentPage,
      query
    );
    posts = resp?.data;
    totalPages = resp?.totalPages;
  } catch (e) {
    console.error(e);
  }

  if (!posts) notFound();

  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: USERS, href: urls.USERS },
          {
            label: POSTS,
            href: urls.USER_POSTS(userId),
            active: true,
          },
        ]}
      />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder={SEARCH_POSTS} />
        <CreatePosts userId={userId} />
      </div>
      <PostsListing posts={posts} currentPage={currentPage} />
      {posts?.length > 0 && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
