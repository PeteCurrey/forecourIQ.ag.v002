"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-init";
import Eyebrow from "@/components/ui/eyebrow";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import Link from "next/link";

export default function BlogPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter(p => p.slug !== featuredPost.slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#07080B]">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex flex-col justify-center px-6 lg:px-20 pt-20">
        <div className="max-w-container mx-auto w-full">
          <Eyebrow className="mb-8">The Editorial</Eyebrow>
          <h1 className="font-cormorant font-600 text-[56px] lg:text-[72px] text-[#EDE8DC] leading-[0.95] max-w-4xl">
            Intelligence from the forecourt.
          </h1>
        </div>
      </section>

      <section className="py-[100px] px-6 lg:px-20">
        <div className="max-w-container mx-auto">
          {/* Featured Post */}
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="group block mb-20 bg-[#0D0F14] border border-[#252B37] rounded-[2px] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-[#13161C] border-r border-[#252B37]/30 flex items-center justify-center p-20 text-center">
                <span className="font-cormorant font-300 italic text-[14px] text-[#5C6678] opacity-40">
                  [Featured imagery — intelligence series]
                </span>
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-[0.2em]">Featured Post · {featuredPost.category}</span>
                <h2 className="font-syne font-700 text-[32px] lg:text-[44px] text-[#EDE8DC] mt-6 mb-8 leading-tight group-hover:text-[#39FF14] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="font-cormorant font-300 text-[18px] text-[#9DA8B7] leading-relaxed mb-10 max-w-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] text-[#5C6678] uppercase">{featuredPost.readTime} Read</span>
                  <span className="font-mono text-[11px] text-[#5C6678] uppercase">{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <BlogCard key={i} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const line = lineRef.current;
    if (!card || !line) return;

    const onEnter = () => {
      gsap.to(line, { width: "100%", duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(line, { width: "0%", duration: 0.4, ease: "power2.in" });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <Link 
      ref={cardRef}
      href={`/blog/${post.slug}`}
      className="blog-card group flex flex-col bg-[#0D0F14] border border-[#252B37] rounded-[2px] p-8 relative overflow-hidden"
    >
      <span className="font-mono text-[11px] text-[#39FF14] uppercase tracking-[0.16em]">{post.category}</span>
      <h3 className="font-syne font-700 text-[20px] text-[#EDE8DC] mt-4 mb-4 leading-tight group-hover:text-[#39FF14] transition-colors">
        {post.title}
      </h3>
      <p className="font-cormorant font-300 text-[16px] text-[#9DA8B7] leading-relaxed mb-8 flex-1">
        {post.excerpt}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-mono text-[10px] text-[#5C6678] uppercase">{post.readTime} Read</span>
        <span className="font-mono text-[10px] text-[#5C6678] uppercase">{post.date}</span>
      </div>
      
      {/* Hover Line */}
      <div 
        ref={lineRef}
        className="absolute bottom-0 left-0 h-[1px] bg-[#39FF14] opacity-40 w-0" 
      />
    </Link>
  );
}
