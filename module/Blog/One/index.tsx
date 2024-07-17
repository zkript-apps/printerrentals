"use client";
import MainSection from "./MainSection";
import RelatedPost from "./RelatedPost";
import ReplyForm from "./ReplyForm";

const BlogContent = () => {
  return (
    <div className="mx-4 md:mx-10 2xl:mx-auto mt-10 md:mt-14 lg:mt-16 max-w-7xl">
      <MainSection />
      <hr className="my-10" />
      <RelatedPost />
      <div className="mt-12 mb-20">
        <ReplyForm />
      </div>
    </div>
  );
};

export default BlogContent;
