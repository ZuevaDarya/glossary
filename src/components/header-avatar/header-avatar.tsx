import avatar from "../../assets/avatar.jpg";

function HeaderAvatar() {
  return(
    <div className='header__info'>
      <span>Зуева Дарья</span>
      <img className='header__avatar' width={40} height={40} src={avatar} alt='avatar' />
    </div>
  );
}

export default HeaderAvatar;