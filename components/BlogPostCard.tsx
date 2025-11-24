import Link from "next/link";
import type { BlogPost } from "@/lib/types";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8 shadow-soft hover:shadow-elevated transition duration-200 will-change-transform hover:-translate-y-0.5">
      <div className="text-xs text-white/60">{new Date(post.date).toLocaleDateString("de-DE")}</div>
      <h3 className="mt-2 font-serif text-xl font-semibold text-white">
        <Link href={`/blog/${post.slug}`} className="no-underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 text-white/80 leading-relaxed">{post.excerpt}</p>
      {post.tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs rounded bg-white/10 px-2 py-1 text-white/80">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
