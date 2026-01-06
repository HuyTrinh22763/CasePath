export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: string
  readTime: string
  content: string // HTML string for the full article
  tags: string[]
}

// INSTRUCTIONS:
// 1. To add a new blog post, copy one of the objects below (from '{' to '},') and paste it at the top of the list.
// 2. Change the 'id' to be unique.
// 3. Update the content strings. Use <p>, <h3>, <ul> etc for formatting inside the content string.
// 4. If you don't have an image yet, keep the placeholder or remove the property.

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "navigating-digital-transformation",
    title: "Navigating Digital Transformation in Legacy Manufacturing",
    excerpt: "A deep dive into how a 50-year-old manufacturing plant adopted IoT and AI to increase efficiency by 40%.",
    coverImage: "/assets/Blog_1.jpg", // Correct path referencing public folder
    date: "2023-10-15",
    author: {
      name: "Alex Johnson",
      avatar: "/assets/avatars/alex.jpg"
    },
    category: "Operations",
    readTime: "8 min read",
    tags: ["IoT", "AI", "Manufacturing"],
    content: `
      <div class="space-y-6 text-foreground/90">
        <h3 class="text-xl font-bold text-[#8B5A2B] mt-8">
          1. Case competition mô phỏng đúng bản chất công việc thực tế
        </h3>
        <p>
          Khác với bài tập trên lớp, case competition đặt người tham gia vào các bài toán mơ hồ, thiếu dữ liệu và nhiều ràng buộc, rất giống môi trường làm việc ngoài đời.
        </p>
        <blockquote class="border-l-4 border-[#8B5A2B] pl-4 italic text-muted-foreground my-4">
          “In the real world, there is rarely a single correct answer, only better or worse decisions.” <br/>
          <span class="text-sm not-italic">— McKinsey Problem Solving Test preparation material</span>
        </blockquote>
        <p>
          Nhà tuyển dụng không tìm lời giải hoàn hảo, mà quan sát cách bạn xác định vấn đề cốt lõi, đặt giả định hợp lý và ra quyết định trong điều kiện không chắc chắn. Đây chính là kỹ năng nền tảng của consulting, finance, strategy và data roles.
        </p>

        <h3 class="text-xl font-bold text-[#8B5A2B] mt-8">
          2. Case competition thể hiện tư duy cấu trúc và khả năng ưu tiên
        </h3>
        <p>
          Một bài case tốt buộc bạn phải trả lời ba câu hỏi lớn: vấn đề thật sự là gì, yếu tố nào quan trọng nhất và nên phân bổ nguồn lực ra sao. Điều này phản ánh trực tiếp năng lực structured thinking và prioritization.
        </p>
        <blockquote class="border-l-4 border-[#8B5A2B] pl-4 italic text-muted-foreground my-4">
          “The mark of a good problem solver is not how much they analyze, but what they choose not to analyze.” <br/>
          <span class="text-sm not-italic">— BCG Interviewer Training Guide</span>
        </blockquote>
        <p>
          Trong hồ sơ, việc tham gia case competition là tín hiệu cho thấy bạn biết đơn giản hóa vấn đề phức tạp, thay vì sa đà vào phân tích lan man.
        </p>

        <h3 class="text-xl font-bold text-[#8B5A2B] mt-8">
          3. Case competition biến năng lực trừu tượng thành minh chứng cụ thể
        </h3>
        <p>
          Rất nhiều resume liệt kê các cụm từ như “strong analytical skills” hay “business mindset”, nhưng thiếu bằng chứng. Case competition cho phép bạn kể một câu chuyện rõ ràng: bài toán gì, cách tiếp cận ra sao, quyết định nào được đưa ra và kết quả đạt được.
        </p>
         <blockquote class="border-l-4 border-[#8B5A2B] pl-4 italic text-muted-foreground my-4">
          “Evidence beats adjectives.” <br/>
          <span class="text-sm not-italic">— Harvard Business School Career & Professional Development</span>
        </blockquote>
        <p>
          Những minh chứng này giúp nhà tuyển dụng tin tưởng năng lực của bạn hơn, thay vì phải suy đoán từ điểm số hay tên môn học.
        </p>

        <h3 class="text-xl font-bold text-[#8B5A2B] mt-8">
          4. Case competition phản ánh khả năng làm việc nhóm và chịu áp lực
        </h3>
        <p>
          Hầu hết các cuộc thi case đều diễn ra trong thời gian ngắn, với cường độ cao và nhiều quan điểm khác nhau trong team. Đây là môi trường lý tưởng để thể hiện communication, teamwork và decision-making under pressure.
        </p>
         <blockquote class="border-l-4 border-[#8B5A2B] pl-4 italic text-muted-foreground my-4">
          “We hire for how people think and collaborate under constraints.” <br/>
          <span class="text-sm not-italic">— Former Bain & Company Recruiter</span>
        </blockquote>
        <p>
          Những kỹ năng này rất khó học qua sách vở, nhưng lại là yếu tố quyết định hiệu quả làm việc khi đi làm thực tế.
        </p>

         <h3 class="text-xl font-bold text-[#8B5A2B] mt-8">
          5. Case competition là tín hiệu về mức độ nghiêm túc với định hướng nghề nghiệp
        </h3>
        <p>
          Việc chủ động tham gia case competition cho thấy bạn không chỉ học để qua môn, mà đã sớm tiếp cận nghề nghiệp theo hướng thực hành và dài hạn.
        </p>
        <blockquote class="border-l-4 border-[#8B5A2B] pl-4 italic text-muted-foreground my-4">
          “Candidates who seek real-world problem solving early tend to ramp up faster once hired.” <br/>
          <span class="text-sm not-italic">— Deloitte Campus Recruiting Insight</span>
        </blockquote>
        <p>
          Với nhiều nhà tuyển dụng, đây là dấu hiệu của motivation và career maturity, đặc biệt ở sinh viên và new grads. Giá trị của case competition không nằm ở giải thưởng, mà ở quá trình tư duy và cách bạn trình bày trải nghiệm đó trong hồ sơ. Khi được viết và kể đúng cách, case competition trở thành một trong những yếu tố giúp resume đáng tin cậy, thuyết phục và khác biệt hơn trên thị trường tuyển dụng.
        </p>
      </div>
    `
  },
  {
    id: "2",
    slug: "scaling-saas-10k-users",
    title: "Scaling SaaS: From 1k to 10k Users",
    excerpt: "The architectural operational challenges faced during rapid scaling usage, and how we solved them.",
    coverImage: "/assets/Blog_2.jpg",
    date: "2023-11-02",
    author: {
      name: "Sarah Chen",
      avatar: "/assets/avatars/sarah.jpg"
    },
    category: "Technology",
    readTime: "12 min read",
    tags: ["SaaS", "Scaling"],
    content: `
      <p>Content for the second blog post...</p>
    `
  },
  // Add your remaining 6 blogs here following the same pattern...
  {
    id: "3",
    slug: "crisis-management-retail",
    title: "Crisis Management: A Retail Case Study",
    excerpt: "How a major retail chain handled a supply chain crisis during peak season.",
    coverImage: "/assets/Blog_3.jpg",
    date: "2023-12-10",
    author: {
      name: "Michael Ross",
      avatar: "/assets/avatars/michael.jpg"
    },
    category: "Management",
    readTime: "6 min read",
    tags: ["Crisis", "Retail"],
    content: `<p>Content placeholder...</p>`
  },
  {
    id: "4",
    slug: "ux-redesign-booking",
    title: "UX Redesign: Booking Platform Case",
    excerpt: "Analyzing the impact of a simplified booking flow on conversion rates.",
    coverImage: "/assets/Blog_4.jpg",
    date: "2024-01-05",
    author: {
      name: "Emily White",
      avatar: "/assets/avatars/emily.jpg"
    },
    category: "Design",
    readTime: "5 min read",
    tags: ["UX", "Case Study"],
    content: `<p>Content placeholder...</p>`
  },
  {
    id: "5",
    slug: "blog-placeholder-5",
    title: "Blog Post Title 5",
    excerpt: "Short description of what this blog is about.",
    coverImage: "/assets/Blog_5.jpg",
    date: "2024-01-10",
    author: {
      name: "Author Name",
      avatar: "/assets/avatars/default.jpg"
    },
    category: "General",
    readTime: "5 min read",
    tags: ["Tag1"],
    content: `<p>Paste content for blog 5 here...</p>`
  },
  {
    id: "6",
    slug: "blog-placeholder-6",
    title: "Blog Post Title 6",
    excerpt: "Short description of what this blog is about.",
    coverImage: "/assets/Blog_6.jpg",
    date: "2024-01-12",
    author: {
      name: "Author Name",
      avatar: "/assets/avatars/default.jpg"
    },
    category: "General",
    readTime: "5 min read",
    tags: ["Tag1"],
    content: `<p>Paste content for blog 6 here...</p>`
  },
  {
    id: "7",
    slug: "blog-placeholder-7",
    title: "Blog Post Title 7",
    excerpt: "Short description of what this blog is about.",
    coverImage: "/assets/Blog_7.jpg",
    date: "2024-01-15",
    author: {
      name: "Author Name",
      avatar: "/assets/avatars/default.jpg"
    },
    category: "General",
    readTime: "5 min read",
    tags: ["Tag1"],
    content: `<p>Paste content for blog 7 here...</p>`
  }
]
