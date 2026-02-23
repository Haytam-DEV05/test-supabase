import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { useParams } from "react-router";

export default function UpdateBlog() {
  const { id } = useParams();
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await supabase.from("blog").select().eq("id", id);
      response.data.forEach((ele) => {
        setFormInputs({ title: ele.title, description: ele.description });
      });
      //   const { title, description } = [...response.data];
      //   console.log(title);

      //   console.log(title);
      //   setFormInputs({ title: title, description: description });
    };
    fetchBlog();
  }, [id]);

  const handleBtnSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300 flex-col">
      <div className="bg-gray-50 shadow-lg p-5 rounded">
        <a href="/">← routeur</a>
        <form onSubmit={handleBtnSubmit}>
          <div className="my-2">
            <label>Title</label>
            <input
              type="text"
              value={formInputs.title}
              onChange={(e) =>
                setFormInputs({ ...formInputs, title: e.target.value })
              }
              className="border border-black w-full py-1 px-4 rounded focus:ring-1 focus:ring-purple-300 outline-0"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={formInputs.description}
              onChange={(e) =>
                setFormInputs({ ...formInputs, description: e.target.value })
              }
              className="border border-black w-full py-1 px-4 rounded focus:ring-1 focus:ring-purple-300 outline-0"
            ></textarea>
          </div>
          <button className="bg-green-400 cursor-pointer px-4 py-1 rounded-lg text-white">
            create
          </button>
        </form>
      </div>
    </div>
  );
}
