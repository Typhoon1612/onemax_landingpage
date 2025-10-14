/// <reference types="vite/client" />

declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/effect-fade";
declare module "swiper/css/thumbs";
declare module "swiper/css/scrollbar";
