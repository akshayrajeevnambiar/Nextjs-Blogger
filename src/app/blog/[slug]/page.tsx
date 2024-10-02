"use client";
import { useParams } from "next/navigation";

export default async function BlogPosts({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(`https://myapi.com/posts/${params.slug}`);
  const post = await data.json();

  return (
    <div>
      <h1>{params.slug}</h1>
      <p>This is a dynamic blog post with the slug: {params.slug}</p>
    </div>
  );
}
