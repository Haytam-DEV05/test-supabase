import Blog from "./Blog";

export default function ListBlog({ blogs, deleteBlog }) {
  return (
    <div>
      <h1 className="text-[40px] font-extrabold">ListBlog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-4xl mx-auto px-5">
        {blogs.map((ele) => {
          return <Blog data={ele} key={ele.id} deleteBlog={deleteBlog} />;
        })}
      </div>
    </div>
  );
}
