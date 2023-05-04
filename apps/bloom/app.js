
// a flowery clock test test test

{ //
let drawTimeout;
  
let draw = function() {
  var centerx = g.getWidth() / 2;
  var centery = g.getHeight() / 2;
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millisec = date.getMilliseconds();
  
  var i;
  var j;
  var k;
  var a;
  var b;
  var x1;
  var y1;
  var x2;
  var y2;
  var x3;
  var y3;
  
  var lwidth = 13;
  var angle;
  var anglec;
  var angles;
  
  var col;
  var shade;
  var col2;
  
  g.setColor(0,0,0);
  g.fillRect(0,0,175,175);
  
// draw one leaf 
  for (j=0; j < 6; j= j+1){
    angle = j * 2 * Math.PI / 6;
    angle = angle + 2* Math.PI + minute/60;
    anglec = Math.cos(angle);
    angles = Math.sin(angle);
  for(i=0; i < centerx*0.707; i= i+0.5){
  
    
    a =  Math.sqrt( Math.sin( i * Math.PI / centerx ));
    b = - Math.sin( i * 1.5 * Math.PI/ centerx + 0.5 * Math.PI)*0.5 + 0.5;
    a = lwidth *a + 0.62*lwidth*b;
    
    x1 = a * anglec - i * angles;
    y1 = a * angles + i * anglec;
    x2 = -a * anglec - i * angles;
    y2 = -a * angles + i * anglec;
    
   
    x3 = anglec - (1 +0.62*b)* i * angles;
    y3 = angles + (1 +0.62*b) * i * anglec;
    
    var iprocent =i/centerx;
    var ypercent = y3 / centery;
    col = g.toColor(0.4*Math.abs(b) + 0.6*iprocent,iprocent*Math.abs(b),iprocent);
    col2 =  g.toColor(a/lwidth,a/lwidth,a/lwidth);
    col = g.blendColor(col,col2,iprocent);
    shade = g.toColor((iprocent+ypercent)*0.5,iprocent,iprocent);
  g.setColor(g.blendColor(col,shade,0.5));
  g.drawLine(x3+centerx,y3 + centery,x1+centerx,y1+ centery);
        col = g.toColor(0.4*Math.abs(b) + 0.6*iprocent,iprocent*Math.abs(b),iprocent);
  col2 =  g.toColor(1-a/lwidth,1-a/lwidth,1-a/lwidth);
        col = g.blendColor(col,col2,0.5);
    shade = g.toColor((iprocent+ypercent)*0.5,iprocent,iprocent);
  g.setColor(g.blendColor(col,shade,0.5));
    g.drawLine(x3+centerx,y3 + centery,x2+centerx,y2+ centery);
  }
  }
  
  for (j=0; j < 6; j= j+1){
    angle = j * 2 * Math.PI / 6;
    angle = angle + 2* Math.PI + minute/60;
    anglec = Math.cos(angle);
    angles = Math.sin(angle);
  for(i=0; i < centerx*0.707; i= i+0.5){
  
    
    a =  Math.sqrt( Math.sin( i * Math.PI / centerx ));
    b = - Math.sin( i * 1.5 * Math.PI/ centerx + 0.5 * Math.PI)*0.5 + 0.5;
    a = lwidth *a + 0.62*lwidth*b;
    
    x1 = a * anglec - i * angles;
    y1 = a * angles + i * anglec;
    x2 = -a * anglec - i * angles;
    y2 = -a * angles + i * anglec;
    
   
    x3 = anglec - (0.38*b)* i * angles;
    y3 = angles + (0.38*b) * i * anglec;
  
     iprocent =i/centerx;
  g.setColor(0,0,0);
 g.setPixel(centerx+x2,centery+y2);
  
   g.setColor(iprocent,iprocent,iprocent);
 g.setPixel(centerx+x1,centery+y1);
  
  }}

//g.setFontAlign(0, 0).setFont("6x8", 2).drawString("test", centerx, centery);

  // queue next draw
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 15000 - (Date.now() % 15000));
};

// Show launcher when middle button pressed
Bangle.setUI({
  mode : "clock",
  remove : function() {
    // Called to unload all of the clock app
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
  }});
// Load widgets
Bangle.loadWidgets();
draw();
setTimeout(Bangle.drawWidgets,0);
}
