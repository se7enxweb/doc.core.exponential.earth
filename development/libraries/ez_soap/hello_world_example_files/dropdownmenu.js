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

/* DROPDOWN MENU INITIALIZATION */

var mainMenuID = 'mainmenu';
var dropdownMenuID = 'submenuID';
var dropdownMenuClass = 'dropdownmenu';
var iframeID = 'iframeID';

var subMenues = new Array();
var subMenuIframes = new Array();
var stillHover, delayHide;
var hoverOffDelay = 500;
var minWidthPixels = 120; /* Only used for IE */
var setMenuWidth = '10em'; /* Only used for IE */

function menuInit()
{
	var elementNodeList = document.getElementById( mainMenuID ).getElementsByTagName( 'li' );
    var elementItems = new Array();
    
  	for( var copyCount = 0; copyCount < elementNodeList.length; copyCount++ )
    {
        elementItems[copyCount] = elementNodeList[copyCount];
    }
    
	for( var dropdownMenu = 0; dropdownMenu < elementItems.length; dropdownMenu++ )
	{
        var newMenuDiv = document.createElement( 'div' );
        var newUl = document.createElement( 'ul' );
        
	    for( var dropdownItems = 0; dropdownItems < menu[dropdownMenu].length; dropdownItems += 2 )
        {
            var newLi = document.createElement( 'li' );
            var newDiv = document.createElement( 'div' );
            var newA = document.createElement( 'a' );
            var newText = document.createTextNode( menu[dropdownMenu][dropdownItems] );

            newA.setAttribute( 'href', menu[dropdownMenu][dropdownItems+1] );
            newA.appendChild( newText );
            newDiv.appendChild( newA );
            newLi.appendChild( newDiv );
            newUl.appendChild( newLi );
        }
        newMenuDiv.setAttribute( 'id', dropdownMenuID + dropdownMenu );
        newMenuDiv.className = dropdownMenuClass;

        if( newUl.childNodes.length > 0 )
        {
            newMenuDiv.appendChild( newUl );
        }

        if( /MSIE [67]/.test( navigator.appVersion ) ) 
        {
            var newIframe = document.createElement( 'iframe' );

       		subMenuIframes[dropdownMenu] = iframeID + dropdownMenu;
            newIframe.setAttribute( 'id', subMenuIframes[dropdownMenu] );
            if (document.location.protocol == 'https:')
            {
                /* This is a workaround for using IFRAMEs in SSL. If we don`t provide this src attribute 
                   IE will pop up with a very annoying "this page contains both secure and nonsecure items". And no, about:blank does not work.
                */
                newIframe.setAttribute( 'src', "javascript:document.open();document.write('<html></html>');document.close();" );
            }
            newMenuDiv.appendChild( newIframe );
        }
        elementItems[dropdownMenu].appendChild( newMenuDiv );
		subMenues[dropdownMenu] = dropdownMenuID + dropdownMenu;
	}
}

/* DROPDOWN CONTROL */

function switchSubMenu( element )
{
    var getElement = element.nextSibling.id;
    
    if( !getElement ) /* Fix for IE */
    {
        getElement = element.nextSibling.nextSibling.id;
    }
    
	if( /(^submenuID)(\d+)/.test( getElement ) )
	{
		var currentMenuNumber = RegExp.$2;
	}
	else
	{
		return false;
	}
	
	for( menuCount = 0; menuCount < subMenues.length; menuCount++ )
	{
		if( menuCount == currentMenuNumber )
		{
			showSubMenu( menuCount );
		}
		else
		{
			hideSubMenu( menuCount );
		}
	}
	stillHover = true;
}

function showSubMenu( menuNumber )
{
    var currentMenu = document.getElementById( subMenues[menuNumber] );
	currentMenu.style.display = 'block';
    currentMenu.parentNode.firstChild.className = 'menuhover';

    if( /MSIE [567]/.test( navigator.appVersion ) ) 
    {
        var currentIframe = document.getElementById( subMenuIframes[menuNumber] );

        if( currentMenu.offsetWidth < minWidthPixels )
        {
            currentMenu.style.width = setMenuWidth;
        }

        currentIframe.style.height = currentMenu.offsetHeight;
        currentIframe.style.width = currentMenu.offsetWidth;
    }
}

function menuHover()
{
	stillHover = true;
}

function tryHideSubMenues()
{
	stillHover = false;
	clearTimeout( delayHide );
	delayHide = setTimeout( 'hideSubMenues()', hoverOffDelay );
}

function hideSubMenues()
{
	if( !stillHover )
	{
		for( menuCount = 0; menuCount < subMenues.length; menuCount++ )
		{
			hideSubMenu( menuCount );
		}
	}
}

function hideSubMenu( menuNumber )
{
    var currentMenu = document.getElementById( subMenues[menuNumber] );
	currentMenu.style.display = 'none';
    currentMenu.parentNode.firstChild.className = '';
}

}
/*
     FILE ARCHIVED ON 19:09:56 Oct 24, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:28:07 Oct 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.047
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 48.044
  LoadShardBlock: 57.173 (3)
  PetaboxLoader3.datanode: 82.944 (4)
  load_resource: 73.284
  PetaboxLoader3.resolve: 30.059
*/