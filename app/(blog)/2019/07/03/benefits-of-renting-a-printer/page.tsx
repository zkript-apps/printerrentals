import { WidthWrapper } from "@/common/components/WidthWrapper";
import BlogContent from "@/module/Blog/Two";
import Header from "@/module/Blog/Two/Header";

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
