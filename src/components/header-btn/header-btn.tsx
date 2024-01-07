type HeaderBtnProps = {
  btnText: string;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
  activeClass: string;
};

function HeaderBtn({ btnText, onBtnClick, activeClass }: HeaderBtnProps) {
  
  return (
    <button
      onClick={(e) => onBtnClick(e)}
      className={activeClass}
    >
      { btnText }
    </button>
  );
}

export default HeaderBtn;