import { useNavigate } from "react-router";

export default function Blog({ data, deleteBlog }) {
  const navigate = useNavigate();
  const handleBtnDelete = (id) => {
    if (confirm("are you sure?")) {
      deleteBlog(id);
    }
  };

  const handleBtnUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="blog bg-gray-300 shadow-md p-5">
      <h2 className="text-[20px] font-medium">{data.title}</h2>
      <p className="text-[15px] font-extralight my-2">{data.description}</p>
      <div className="space-x-2 mt-2">
        <button
          onClick={() => handleBtnUpdate(data.id)}
          className="bg-blue-400 px-1 cursor-pointer rounded-md text-white  "
        >
          Update
        </button>
        <button
          onClick={() => handleBtnDelete(data.id)}
          className="bg-red-400 px-1 cursor-pointer rounded-md text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
