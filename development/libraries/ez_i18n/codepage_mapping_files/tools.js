var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

YAHOO.namespace( "dwn" );
var Dom = YAHOO.util.Dom;
var dwn = YAHOO.dwn;

dwn.DONWLOAD_STRING = "/download-ga/";

dwn.onLinkClick = function( event )
{
    // Grab the last part of the link's href (hopefully the filename)
    var split = event.target.pathname.split( "/" );
    var string = dwn.DONWLOAD_STRING + split[split.length - 1];

    pageTracker._trackPageview( string );
}

dwn.init = function() 
{
    function addLinkListeners( link )
    {
        YAHOO.util.Event.addListener( link, "click", dwn.onLinkClick );
    }
    // Class name - tag - root - method
    Dom.getElementsByClassName( "download", "A", "main", addLinkListeners );    
}

YAHOO.util.Event.onDOMReady( dwn.init );



/* Embed flash/movies IE FIX: Insert tags supplied as arguments back into main document */
function insertMedia()
{
    for( k = 0; k < arguments.length; k++ )
    {
        document.write( arguments[k] );
    }
}



}
/*
     FILE ARCHIVED ON 05:17:27 Sep 23, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:24:32 Oct 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.524
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 48.406
  LoadShardBlock: 56.977 (3)
  PetaboxLoader3.datanode: 81.06 (4)
  load_resource: 97.603
  PetaboxLoader3.resolve: 41.235
*/