import { NavLink } from "react-router";

export default function Navbar() {
  const linkes = [
    { id: 1, link: "Blog", to: "/" },
    { id: 2, link: "Create Blog", to: "/createBlog" },
  ];
  return (
    <nav className="flex justify-around items-center fixed top-0 left-0 right-0 bg-gra-100 backdrop-blur-3xl shadow-lg min-h-20">
      <h1 className="text-[50px] font-medium text-red-300">HN</h1>
      <div className="space-x-3.5 flex items-center">
        {linkes.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            className={({ isActive }) => {
              return isActive
                ? "text-red-400 border-b border-red-500"
                : "text-black hover:text-red-400 duration-300 transition-all";
            }}
          >
            {link.link}
          </NavLink>
        ))}
        <NavLink className="bg-black text-white py-1 px-5 rounded-md">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
