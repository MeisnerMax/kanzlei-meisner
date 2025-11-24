import BlogPostCard from "@/components/BlogPostCard";
import type { BlogPost } from "@/lib/types";

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <BlogPostCard key={p.slug} post={p} />
      ))}
    </div>
  );
}

