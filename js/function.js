var DDSPEED = 10;
var DDTIMER = 15;

function getOs() { 
	var OsObject = "";
	if(navigator.userAgent.indexOf("MSIE")>0) { 
		return "MSIE"; 
	} 
	if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
		return "Firefox"; 
	} 
	if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
		return "Safari"; 
	}  
	if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
		return "Camino"; 
	} 
	if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ 
		return "Gecko"; 
	} 
}

function ddSlide(c, d){
	var currh = c.offsetHeight;
	var dist;
	if(d == 1){
		dist = (Math.round((c.maxh - currh) / DDSPEED));
	}
	else{
		dist = (Math.round(currh / DDSPEED));
	}
	if(dist <= 1 && d == 1){
		dist = 1;
	}
	c.style.top = parseInt(c.style.top.replace("px","")) - parseInt(dist * d) + "px";
	c.style.height = currh + (dist * d) + "px";
	if(getOs()=="MSIE"){
		c.style.opacity = currh / c.maxh;
		c.style.filter = "alpha(opacity=" + (currh * 80 / c.maxh) + ")";
	}
	if(getOs()=="Firefox"){	
		c.style.opacity = currh / c.maxh;
		c.style.filter = "alpha(opacity=" + (currh * 100 / c.maxh) + ")";
	}
	if((currh < 2 && d != 1) || (currh > (c.maxh - 2) && d == 1)){
		clearInterval(c.timer);
	}
}

function ddCollapse(c){
	c.timer = setInterval(function(){ddSlide(c,-1)},DDTIMER);
}

function ddMenu(id, s) {
    var h = document.getElementById("dt" + id);
    var c = document.getElementById("dd" + id);
    clearInterval(c.timer);
    if(s == 1) {
        clearTimeout(h.timer);
        if(c.maxh && c.maxh <= c.offsetHeight) {
            return;
        }
        else if(!c.maxh) {
            c.style.top = "-" + c.offsetHeight + "px";
            c.style.display = "block";
            c.style.height = "auto";
            c.maxh = c.offsetHeight;
            c.style.height = "0px";
        }
        c.timer = setInterval(function(){ddSlide(c,1)},DDTIMER);
    }
    else {
        h.timer = setTimeout(function(){ddCollapse(c)},50);
    }
}

function Menu(id, count) {
	var iID = document.getElementById("TemMenu").value;
	if (iID != "") {
		if (iID == id) {
			ddMenu(id, 0);
			document.getElementById("TemMenu").value = "";
		}
		else {
			ddMenu(iID, 0);
			ddMenu(id, 1);
			document.getElementById("TemMenu").value = id;
		}
	}
	else {
		ddMenu(id, 1);
		document.getElementById("TemMenu").value = id;
	}
}