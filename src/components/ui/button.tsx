import Link from "next/link";
import btnStyle from "./button.module.css";

function Button(props:any) {
  if (props.link) {
    return (
      <Link href={props.link} className={props.btnclass}>
        {props.children}
      </Link>
      //  <div className={btnStyle.cbtn}>  </div>
    );
  } else {
    return (
      <button className={props.btnclass} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default Button;
