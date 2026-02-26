import { useNavigate } from "react-router";
import Blog from "./Blog";

export default function ListBlog({ blogs, deleteBlog }) {
  const navigate = useNavigate();
  const handleBtnCreate = () => {
    navigate("/createBlog");
  };
  return (
    <div className={`${blogs.length < 1 && "max-w-md mx-auto my-10"}`}>
      <h1 className="text-[40px] font-extrabold">ListBlog</h1>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 max-w-4xl mx-auto px-5`}
      >
        {blogs.length >= 1 ? (
          blogs.map((ele) => {
            return <Blog data={ele} key={ele.id} deleteBlog={deleteBlog} />;
          })
        ) : (
          <div className="min-w-100 py-2 px-10">
            <h3 className="text-[30px] font-semibold mb-3">
              Create First Blog
            </h3>
            <button
              onClick={handleBtnCreate}
              className="text-white bg-green-400 rounded-md px-5 py-1 cursor-pointer"
            >
              Create
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
