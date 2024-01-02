import { menuBtn } from "/js/menubtn.js";
import { modal } from "/js/modal.js";
import { swiperSlide } from "/js/slider.js";
import { validateForm } from "/js/validate.js";
import { getAddress } from "/js/getAddress.js";
import { scrollHops } from "/js/scrollHops.js";

menuBtn();
modal();
swiperSlide();
validateForm();
scrollHops();
document.getElementById("zipcode").addEventListener("keyup", getAddress);
