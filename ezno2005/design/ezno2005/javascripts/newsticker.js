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

var newstickerID = 'newsticker';
var tickerDelay = 4000;
var shouldTick = true;
var waiting = false;

var hasFaded = false;

var tickers;
var element;
var currentItem = 0;

function newstickerInit()
{
    tickerContainer = document.getElementById( newstickerID )
    tickers = tickerContainer.getElementsByTagName( 'li' );
    element = tickers[currentItem];
    startTicking();
}

function tick()
{
    waiting = false;
    if ( shouldTick || hasFaded == true )
    {
        if ( hasFaded == false )
        {
            element = tickers[currentItem];    
            hasFaded = true;
            element.style.display = 'none';
            setTimeout( 'tick()', 40 );
            return;
        }
        hasFaded = false;

        if ( currentItem + 1 >= tickers.length )
            currentItem = 0;
        else
            currentItem++;            

        element = tickers[currentItem];
        element.style.display = 'inline'; 
    
        waiting = true;
        var tickTimer = setTimeout( 'tick()', tickerDelay );
    }
}

function startTicking()
{
    shouldTick = true;
    if ( !waiting )
    {
        waiting = true;
        var tickTimer = setTimeout( 'tick()', tickerDelay );
    }
}

function stopTicking()
{
    shouldTick = false;
}

}
/*
     FILE ARCHIVED ON 02:58:42 Oct 13, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:53:31 Oct 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.021
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 12.331
  LoadShardBlock: 178.772 (3)
  PetaboxLoader3.datanode: 70.952 (4)
  PetaboxLoader3.resolve: 189.171 (3)
  load_resource: 105.846
*/