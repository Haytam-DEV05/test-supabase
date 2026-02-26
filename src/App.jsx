import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
// ===============================================
import supabase from "./utils/supabase";
// ===============================================
import Navbar from "./Components/Templates/Navbar";
import ListBlog from "./Components/ListBlog";
import CreateBlog from "./Components/CreateBlog";
import UpdateBlog from "./Components/UpdateBlog";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const { data } = await supabase.from("blog").select();
    setBlogs(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // DELETE :
  const deleteBlog = async (id) => {
    await supabase.from("blog").delete().eq("id", id).select();
    setBlogs(blogs.filter((ele) => ele.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ListBlog blogs={blogs} deleteBlog={deleteBlog} />,
        },
        { path: "createBlog", element: <CreateBlog fetchData={fetchData} /> },
        { path: "update/:id", element: <UpdateBlog fetchData={fetchData} /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
      </>
    );
  }
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
