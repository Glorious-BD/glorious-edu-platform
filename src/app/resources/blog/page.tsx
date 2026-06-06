import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { generateMetadataHelper } from "@/utils/seo";

export const metadata: Metadata = generateMetadataHelper({
  title: "Academic Blog & Prep Tips | Glorious Edu BD",
  description: "Read peer-reviewed preparation methodologies, medical admission guidelines, and academic advice from senior lecturers.",
  path: "/resources/blog",
});

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "Cracking the Medical Admission Test: A 100-Day Study Strategy",
    slug: "cracking-medical-admission-100-days",
    excerpt: "An actionable breakdown of high-yield biology topics, medical chemistry maps, and timing strategies for public examinations.",
    category: "Medical Admission",
    readTime: "6 min read",
    publishedAt: "May 10, 2025",
  },
  {
    title: "Understanding Advanced Calculus for HSC and Engineering Prep",
    slug: "advanced-calculus-hsc-engineering",
    excerpt: "A conceptual guide to limit computations, integrations, and application problems commonly tested in engineering entry tests.",
    category: "Engineering Admission",
    readTime: "8 min read",
    publishedAt: "May 08, 2025",
  },
  {
    title: "5 Habits of High-Performing Students in SSC Board Examinations",
    slug: "high-performing-students-habits-ssc",
    excerpt: "Insights from board toppers on notes organization, weekly revision sessions, and optimal exam writing techniques.",
    category: "SSC Academic",
    readTime: "5 min read",
    publishedAt: "May 04, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header section with semantic markup */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-h1 font-extrabold mb-4 tracking-tight">Academic Resource Blog</h1>
          <p className="text-body text-primary/70 leading-relaxed">
            Vetted study patterns, academic tips, and system news compiled by our senior instructors and advisors.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug} 
              className="group flex flex-col justify-between bg-white border border-border rounded-premium p-6 hover:shadow-soft transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary bg-secondary/5 px-2.5 py-1 rounded-md">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <span className="text-xs text-primary/40 font-medium">{post.publishedAt}</span>
                </div>

                <h2 className="font-heading text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200 leading-snug">
                  <Link href={`/resources/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-primary/65 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <span className="inline-flex items-center gap-1 text-xs text-primary/50 font-medium">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <Link 
                  href={`/resources/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}