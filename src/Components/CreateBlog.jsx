import { useState } from "react";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
  });
  const [error, setError] = useState(null);
  const handleBtnForm = (e) => {
    e.preventDefault();
    const { title, description } = formInputs;
    if (title !== "" && description !== "") {
      const insertData = async () => {
        const { data, error } = await supabase
          .from("blog")
          .insert([formInputs])
          .select();
        if (error) {
          console.error("Error => :", error.message);
          return;
        }
        if (data) {
          navigate("/");
        }
      };
      insertData();
    } else {
      setError("Pleas Enter All The Field !");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-gray-50 shadow-lg p-5 rounded">
        <a href="/">← routeur</a>
        <form onSubmit={handleBtnForm}>
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
          {error && (
            <p className="my-2 w-full text-red-700 bg-red-200 rounded-4xl border border-red-400 text-center">
              {error}
            </p>
          )}
          <button className="bg-green-400 cursor-pointer px-4 py-1 rounded-lg text-white">
            create
          </button>
        </form>
      </div>
    </div>
  );
}
