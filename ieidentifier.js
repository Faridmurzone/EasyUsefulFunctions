function GetIEVersion() {
  var uAgent = window.navigator.userAgent;
  var Idx = uAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0) { 
    return parseInt(uAgent.substring(Idx+ 5, uAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  } else if (!!navigator.userAgent.match(/Trident\/7\./)) {  
    return 11;
  } else {
    return 0; 
  //It is not IE
  }
}
