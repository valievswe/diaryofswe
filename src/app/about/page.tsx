import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Valiyev Barkamol

![Valiyev](https://pub-7d284f232bb7450dbcead63122c0b4d2.r2.dev/photo_2024-09-14_16-38-19.jpg)

I am a software engineer focused on building robust web systems and exploring low-level systems architecture. My approach to development is rooted in performance, efficiency, and full-stack ownership.

### Technical Foundation
While I work extensively within the JavaScript ecosystem—specializing in **Node.js, React, Express, Vue**—my engineering perspective is heavily influenced by **C++**. I value C++ for its uncompromising performance and the granular control it provides over system resources. This low-level understanding informs how I architect high-level applications, ensuring they are not just functional, but optimized.

### Systems & Infrastructure
I believe an engineer should understand the environment their code runs in. This blog itself is a reflection of that philosophy: built with modern frameworks and self-hosted on a VPS using Nginx and Linux process management. 

![Systems](https://pub-7d284f232bb7450dbcead63122c0b4d2.r2.dev/photo_2024-01-07_22-30-56.jpg)

### Focus Areas
- **Backend Architecture:** Designing scalable services and efficient API structures.
- **Systems Programming:** Utilizing C++ for performance-critical logic and system-level tools.
- **Infrastructure:** Managing deployment pipelines, server configurations, and web security.

### Objective
This space serves as a technical log for documenting engineering challenges, architectural decisions, and system-level explorations.

For technical inquiries or collaboration on systems-oriented projects, reach out via the links below.

**Valiyev Barkamol**  
Software Engineer`;

export async function generateMetadata() {
  return {
    title: "About | Valiyev",
    description: "Software Engineer specializing in Node JS and C++.",
    openGraph: {
      title: "Valiyev | Software Engineering",
      description: "Technical profile and focus areas of Valiyev.",
      images: [
        signOgImageUrl({
          title: "Valiyev",
          label: "Software Engineer",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
      <div className="container mx-auto px-5">
        <Header />
        <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
          <Markdown>{content}</Markdown>
        </div>
        <Footer />
      </div>
  );
};

export default Page;