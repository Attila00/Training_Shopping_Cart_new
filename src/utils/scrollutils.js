export const scrollTop = (top=0, left=0, behavior='smooth') =>{
  return window.scrollTo({
        top,
        left,
        behavior:behavior
      });
}
export const compareScrollHeight = (height) =>{
  return (document.body.scrollTop > height || document.documentElement.scrollTop > height)
   ? true :false;
}