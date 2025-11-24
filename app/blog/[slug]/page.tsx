import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { title: post ? post.title : "Beitrag" };
}

export default function Page({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <section className="py-14 sm:py-16">
      <div className="container-max max-w-3xl">
        <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString("de-DE")}</div>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-gray-900">{post.title}</h1>
        <div className="prose-legal mt-6 text-gray-800">
          <p>{post.excerpt}</p>
          <p>
            Dies ist ein Beispielartikel. In einem echten Beitrag würden hier die Inhalte mit
            Hinweisen, Checklisten und praxisnahen Erläuterungen folgen.
          </p>
        </div>
      </div>
    </section>
  );
}

