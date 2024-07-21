function PopUp({ header, left,vision,top}: { header: string|null,left:number|undefined,vision:boolean,top:number|undefined }) {

  return (
    <div
    style={{top:`${top}px`,left:`${left}px`, display:`${vision?"block":"none"}`}}
      className={`border-2  border-black p-3 w-fit absolute  z-1 `}
    >
      {header}
    </div>
  );
}

export default PopUp;
