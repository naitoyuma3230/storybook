import jquery from "jquery";
import Template from "./demo.html";
// import Template from "./demo.js";
import "./demo.css";

export default {
	title: "MyDemo/Demos",
};

export const DemoButton = () => {
	// return Template();
	return Template;
};

export const H1 = () => "<h1>Heading 1</h1>";
export const H2 = () => "<h2>Heading 2</h2>";
export const H3 = () => "<h3>Heading 3</h3>";
export const H4 = () => "<h4>Heading 4</h4>";
export const H5 = () => "<h5>Heading 5</h5>";
export const H6 = () => "<h6>Heading 6</h6>";
