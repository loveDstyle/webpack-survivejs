export default (text = "Hello world~~~!!~") => {
    const element = document.createElement("div");
    element.className = "pu";
    element.innerHTML = text;

    return element;
};