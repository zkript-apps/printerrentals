import { WidthWrapper } from "@/common/components/WidthWrapper";
import BlogContent from "@/module/Blog/One";
import Header from "@/module/Blog/One/Header";

const BlogContentPage = () => {
  return (
    <div>
      <Header />
      <WidthWrapper width="medium">
        <BlogContent />
      </WidthWrapper>
    </div>
  );
};

export default BlogContentPage;
