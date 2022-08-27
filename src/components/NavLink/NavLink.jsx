import './NavLink.css';


function NavLink({text, icon, type}) {
  const color = type === 'secondary' ? 'text text_type_main-default text_color_inactive' : 'text text_type_main-default';

  return (
    <a className="Nav-link p-4" href="/#" >
      {icon}
      <p className={color}>{text}</p>
    </a>
  )
}

export default NavLink