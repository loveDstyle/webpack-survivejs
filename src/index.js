import component from "./component";
import "./main.css";
import "purecss";



document.body.appendChild(component());
const element = document.createElement("div");
element.className = "pu";
element.innerHTML = '123';
document.body.appendChild(element);