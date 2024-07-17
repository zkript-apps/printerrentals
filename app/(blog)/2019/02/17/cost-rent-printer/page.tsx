import { WidthWrapper } from "@/common/components/WidthWrapper";
import BlogContent from "@/module/Blog/Three";
import Header from "@/module/Blog/Three/Header";

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
