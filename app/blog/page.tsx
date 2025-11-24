import Section from "@/components/Section";
import BlogPostList from "@/components/BlogPostList";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Beispielartikel zu familien- und erbrechtlichen Themen aus der Praxis."
};

export default function Page() {
  return (
    <Section variant="muted" as="h1" title="Blog" intro="Beispielbeiträge zu familien- und erbrechtlichen Themen.">
      <BlogPostList posts={blogPosts} />
    </Section>
  );
}

