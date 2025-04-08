window.onload=function() {
  for(let i=0;i<=7;i++) {
    point[i]={
      x:75-50*Math.sin(i*2*Math.PI/8).toFixed(2),
      y:75-50*Math.cos(i*2*Math.PI/8).toFixed(2)
    }
  }
  bow=new Bezier(point);
  for(let i in point) {
    c[i]=new MovePoint(point[i].x,point[i].y);  
    tp[i]=c[i].svg.tp;  
  }  
  window.ontouchstart=function() {    
    let targetIndex=tp.indexOf(event.touches[0].target);
    if(targetIndex>=0) {
      if(targetC>=0) {
        svgChgProp(c[targetC].svg.circle,{
          fill:"red"
        })     
      }
      if(targetC==targetIndex) {
        targetC=-1;  
      } 
      else {
        svgChgProp(c[targetIndex].svg.circle,{
          fill:"orange"
        });  
        targetC=targetIndex;
      }
    }
    if(targetC>=0) {
      point[targetC]={
        x:event.touches[0].clientX.toFixed(1),
        y:event.touches[0].clientY.toFixed(1)
      } 
      c[targetC].move(point[targetC].x,point[targetC].y);
      //l[Math.floor(targetC/2)].move(point[targetC-targetC%2].x,point[targetC-targetC%2].y,point[targetC+1-targetC%2].x,point[targetC+1-targetC%2].y);
      bow.move(point);
    }
  }
  window.ontouchmove=function() {
    if(targetC>=0) {
      point[targetC]={
        x:event.touches[0].clientX.toFixed(2),
        y:event.touches[0].clientY.toFixed(2)
      } 
      c[targetC].move(point[targetC].x,point[targetC].y);
     // l[Math.floor(targetC/2)].move(point[targetC-targetC%2].x,point[targetC-targetC%2].y,point[targetC+1-targetC%2].x,point[targetC+1-targetC%2].y);
      bow.move(point);    
    }  
  }
  window.onmousedown = function() {    
    let targetIndex=tp.indexOf(event.target);
    if(targetIndex>=0) {
      if(targetC>=0) {
        svgChgProp(c[targetC].svg.circle,{
          fill:"red"
        })     
      }
      if(targetC==targetIndex) {
        targetC=-1;  
      } 
      else {
        svgChgProp(c[targetIndex].svg.circle,{
          fill:"orange"
        });  
        targetC=targetIndex;
      }
    }
    if(targetC>=0) {
      point[targetC]={
        x:event.clientX.toFixed(1),
        y:event.clientY.toFixed(1)
      } 
      c[targetC].move(point[targetC].x,point[targetC].y);
      bow.move(point);
    }
  }
  window.onmousemove=function() {
    if(targetC>=0) {
      point[targetC]={
        x:event.clientX.toFixed(2),
        y:event.clientY.toFixed(2)
      } 
      c[targetC].move(point[targetC].x,point[targetC].y);
      bow.move(point);    
    }  
  }
}