document.addEventListener("click",t=>{let e=document.querySelector(".wall"),l=document.querySelector(".spider"),i=e.getBoundingClientRect(),c={top:t.clientY-i.top-e.clientTop-l.clientHeight/2,left:t.clientX-i.left-e.clientLeft-l.clientWidth/2};c.top<0&&(c.top=0),c.left<0&&(c.left=0),c.left+l.clientWidth>e.clientWidth&&(c.left=e.clientWidth-l.clientWidth),c.top+l.clientHeight>e.clientHeight&&(c.top=e.clientHeight-l.clientHeight),l.style.left=c.left+"px",l.style.top=c.top+"px"});//# sourceMappingURL=index.f0e307ff.js.map

//# sourceMappingURL=index.f0e307ff.js.map
