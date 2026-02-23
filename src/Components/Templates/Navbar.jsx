import { NavLink, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const handleBtnNavigate = (e) => {
    e.preventDefault();
    navigate("/createBlog");
  };
  return (
    <nav className="flex justify-around items-center fixed top-0 left-0 right-0 bg-gra-100 backdrop-blur-3xl shadow-lg min-h-20">
      <h1>Blog</h1>
      <NavLink onClick={handleBtnNavigate}>Create Blog</NavLink>
    </nav>
  );
}
