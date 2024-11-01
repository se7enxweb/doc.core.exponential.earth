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

/* PAGE WIDTH SWITCH - th[eZ]+jk[eZ]20070125 */

var switchLinkID = 'setwidth';
var widthElementID = ['page-width1','page-width2','page-width3','page-width4','page-width5','page-width6'];
var fixedWidth = '870px';
var dynamicMargin = '2em';
var elementLeft = 'logo';
var elementRight = 'searchbox';
var dynamicClass = 'dynamicwidth';
var fixedClass = 'fixedwidth';

var fixedSize = ( getCookie( 'width' ) == 'dynamic' )? false: true;
if ( !fixedSize )
{
    document.writeln( '<style type="text/css">@import url(\'/extension/ezno2005/design/ezno2005/stylesheets/dynamicwidth.css\');</style>' );
}

function setWidth()
{
    if (fixedSize)
    {
        setDynamicWidth();
    }
    else
    {
        setFixedWidth();
    }
    setCookie( 'width', ( fixedSize )? 'fixed': 'dynamic' );
}

function setDynamicWidth()
{
    document.getElementById(widthElementID[0]).style.position = 'static';
    document.getElementById(widthElementID[1]).style.position = 'static';
    document.getElementById(widthElementID[0]).className = dynamicClass;
    document.getElementById(elementLeft).style.left = dynamicMargin;
    document.getElementById(elementRight).style.right = dynamicMargin;

    for ( k=0; k < widthElementID.length; k++ )
    {
        document.getElementById(widthElementID[k]).style.width = 'auto';
        document.getElementById(widthElementID[k]).style.marginLeft = dynamicMargin;
        document.getElementById(widthElementID[k]).style.marginRight = dynamicMargin;
    }

    switchText('Fixed width');

    fixedSize = false;
}

function setFixedWidth()
{
    document.getElementById(widthElementID[0]).style.position = 'relative';
    document.getElementById(widthElementID[1]).style.position = 'relative';
    document.getElementById(widthElementID[0]).className = fixedClass;
    document.getElementById(elementLeft).style.left = '0';
    document.getElementById(elementRight).style.right = '0';

    for ( k=0; k < widthElementID.length; k++ )
    {
        document.getElementById(widthElementID[k]).style.width = fixedWidth;
        document.getElementById(widthElementID[k]).style.marginLeft = 'auto';
        document.getElementById(widthElementID[k]).style.marginRight = 'auto';
    }
    
    switchText('Dynamic width');

    fixedSize = true;
}

function switchText( textString )
{
    document.getElementById(switchLinkID).replaceChild(document.createTextNode(textString), document.getElementById(switchLinkID).firstChild);
}

function getCookie( name )
{
    if ( !document.cookie )
    return '';

    var cookie = document.cookie;
    firstChar = document.cookie.indexOf(name);
    if ( firstChar != -1 )
    {
        firstChar += name.length + 1;
        lastChar = cookie.indexOf( ';', firstChar );
        if ( lastChar == -1 )
            lastChar = cookie.length;
        return unescape( cookie.substring( firstChar, lastChar ) );
    }
    return '';
}

function setCookie( name, value )
{
    var expiration = new Date();
    expiration.setTime( expiration.getTime() + 10000 * 60 * 60 * 24 * 365 );
    document.cookie = name + '=' + escape( value ) + '; expires=' + expiration.toGMTString() + '; path=/';
}



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
     FILE ARCHIVED ON 02:59:15 Oct 13, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:39:09 Oct 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.484
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 10.709
  LoadShardBlock: 85.176 (3)
  PetaboxLoader3.datanode: 97.194 (4)
  load_resource: 56.537
  PetaboxLoader3.resolve: 38.104
*/