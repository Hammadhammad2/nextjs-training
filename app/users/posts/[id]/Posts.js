import { fetchFilteredPostsAndTotalCount } from "../../../api/posts";
import Search from "../../../components/shared/Search";
import Breadcrumbs from "../../../components/shared/Breadcrumbs";
import PostsListing from "./components/PostsListing";
import Pagination from "../../../components/shared/Pagination";
import { CreatePosts } from "./buttons";
import { SEARCH_POSTS } from "../../constants";
import { notFound } from "next/navigation";
import { postsBreadcrumb } from "../../../utils/helpers/dataHelper";
const ITEMS_PER_PAGE = 4;

export default async function Page({ params, searchParams }) {
  let posts = [],
    totalPages;
  const userId = params.id;
  const currentPage = searchParams?.page || 1;
  const query = searchParams?.query || "";

  try {
    const [paginatedPosts, allPosts] = await fetchFilteredPostsAndTotalCount(
      userId,
      currentPage,
      query
    );

    posts = paginatedPosts?.data || [];
    totalPages = Math.ceil(allPosts?.data?.length / ITEMS_PER_PAGE);
  } catch (e) {
    console.error(e);
  }
  if (!posts) notFound();

  return (
    <div className="w-full">
      <Breadcrumbs breadcrumbs={postsBreadcrumb(userId)} />
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
