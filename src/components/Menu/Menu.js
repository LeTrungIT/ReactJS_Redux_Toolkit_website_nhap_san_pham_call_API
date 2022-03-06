import { Link } from "react-router-dom";

function Menu() {
  const menus = [
    {
      to: "/",
      name: "Trang chủ",
      active: true,
    },
    {
      to: "/product",
      name: "Quản lý sản phẩm",
      active: true,
    },
    {
      to: "/about",
      name: "Liên hệ",
      active: true,
    },
  ];
  var showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        var active = menu.active ? "active" : "";
        return (
          <li key={index} className={`nav-item ${active}`}>
            <Link to={menu.to} className="nav-link">
              {menu.name}
            </Link>
          </li>
        );
      });
    }
    return result;
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{showMenu(menus)}</ul>
        </div>
      </nav>
    </div>
  );
}
export default Menu;
