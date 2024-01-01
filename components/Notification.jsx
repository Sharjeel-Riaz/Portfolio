import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  duration: 5000,
  dismissible: true,
  ripple: true,
  position: {
    x: "right",
    y: "bottom",
  },
});

export default notyf;
