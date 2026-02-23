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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("blog").select();
      if (data) {
        setBlogs(data);
      }
    };
    fetchData();
  }, []);

  // DELETE :
  const deleteBlog = async (id) => {
    console.log(id);
    const response = await supabase.from("blog").delete().eq("id", id).select();
    setBlogs(blogs.filter((ele) => ele.id !== id));
    // const fetchData = async () => {
    //   const { data } = await supabase.from("blog").select();
    //   console.log(data);
    //   setBlogs(data);
    // };
    // fetchData();
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
        { path: "createBlog", element: <CreateBlog /> },
        { path: "update/:id", element: <UpdateBlog /> },
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
