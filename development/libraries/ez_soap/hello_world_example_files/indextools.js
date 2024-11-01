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

//<!-- IndexTools Code v4.42 - All rights reserved -->
function createITT(){var pid='1000672744030';var trdom='stats.indextools.com';var sectrdom='secure.indextools.com';return new ITT(pid,trdom,sectrdom);}
function ITT(pid,trdom,sectrdom){var i;this.version="4.42";this.dbg=false;this.PID=pid;this._ud="undefined";this.tpc=(typeof window._S_NOTPC!=this._ud&&window._S_NOTPC)?'&tp=0':'';this.BD=(window.location.protocol.indexOf('https:')==0?'https://'+sectrdom:'http://'+trdom);this.BU=this.BD+'/p.pl?a='+this.PID+this.tpc+'&v='+this.version;this.URL=this.getClnUrl(document.URL?document.URL:document.location);if(typeof window._S_URL!=this._ud)this.URL=this.getClnUrl(window._S_URL);this.cfn=new Array;this.cfv=new Array;this.IT="";var nan=navigator.appName;this.net=(nan=="Netscape");this.mic=(nan.substring(0,9)=="Microsoft"&&(typeof navigator.plugins==this._ud||navigator.plugins.length==0));this.mac=(navigator.userAgent.indexOf('Mac')>=0);this.gec=(navigator.userAgent.indexOf('Firefox')>=0||navigator.userAgent.indexOf('Netscape')>=0);this.date=new Date();this.DOCUMENTNAME=document.title;this.CAMPAIGN="";this.CMPPARM="";this.PROMO="";this.PROMOPARM="";this.EXCL="";this.FPCR="";this.FPCN='fpc'+this.PID;this.FPCV="";this.FPCD="";this.ENC="";this.itvs="";this.itsid="";this.itvid="";this.place=document.body;var heads=document.getElementsByTagName('head');if(typeof heads!=this._ud&&heads.length>0)this.place=heads[0];this.FLV=this.flash();if(typeof window.ITTs==this._ud)window.ITTs=new Array;this.idx=window.ITTs.length;window.ITTs[this.idx]=this;eval("ITT.prototype._e=function(){window.ITTs["+this.idx+"]._track(false,true);return true;}");this.ita=["URL","f","DOCUMENTNAME","b","DOCUMENTGROUP","c","MEMBERID","m","ACTION","x","AMOUNT","xa","ORDERID","oc","_S_TAX","xt","_S_SHIPPING","xs","_S_DISCOUNT","xd","_S_SKU","p","_S_PRODUCTS","u","_S_UNITS","q","_S_AMOUNTS","r","_S_CMPQUERY","cq","_S_ISK","isk","_S_ISR","isr"];for(i=0;i<10;i++){eval("window.ITTs["+this.idx+"].ita[window.ITTs["+this.idx+"].ita.length]=\"_S_P"+(1+i)+"\";window.ITTs["+this.idx+"].ita[window.ITTs["+this.idx+"].ita.length]=\"p"+(1+i)+"\"");}for(i=0;i<99;i++){eval("window.ITTs["+this.idx+"].ita[window.ITTs["+this.idx+"].ita.length]=\"_s_cf"+((i<9)?"0":"")+(1+i)+"\";window.ITTs["+
this.idx+"].ita[window.ITTs["+this.idx+"].ita.length]=\"cf"+(1+i)+"\"");}if(typeof window.imgs==this._ud)window.imgs=new Array;if(typeof document.charset!=this._ud)this.ENC=document.charset;else if(typeof document.characterSet!=this._ud)this.ENC=document.characterSet;else if(typeof window._S_ENC!=this._ud)this.ENC=window._S_ENC;this.FPCR='&ittidx='+this.idx+'&fpc='+escape(this.getCookie(this.FPCN));}
ITT.prototype.pp=function(){var i;for(i=0;i+1<this.ita.length;i+=2){if(i>0)eval("if ((typeof window."+this.ita[i]+" != 'undefined') && (window."+this.ita[i]+" != '')){window.ITTs["+this.idx+"]."+this.ita[i]+"=window."+this.ita[i]+";window."+this.ita[i]+"='';}");eval("if ((typeof window.ITTs["+this.idx+"]."+this.ita[i]+" != 'undefined') && (window.ITTs["+this.idx+"]."+this.ita[i]+" != '')){window.ITTs["+this.idx+"].IT+=\"&"+this.ita[i+1]+"=\"+escape(window.ITTs["+this.idx+"]."+this.ita[i]+");}");}}
ITT.prototype.flash=function(){if(typeof window._s_itt_flash==this._ud){var fd="";var np=navigator.plugins;if(np!=null&&np.length>0){if(np["Shockwave Flash 2.0"]||np["Shockwave Flash"]){var swVer2=np["Shockwave Flash 2.0"]?" 2.0":"";fd=np["Shockwave Flash"+swVer2].description;}}else{var _vb=document.createElement("script");_vb.language="VBScript";_vb.text='\nFunction sVBSwfVer(i)\non error resume next\nDim swC,swV\nswV=0\nset swC=CreateObject("ShockwaveFlash.ShockwaveFlash."+CStr(i))\nif(IsObject(swC))then\nswV=swC.GetVariable("$version")\nend if\nsVBSwfVer=swV\nEnd Function\n';this.place.appendChild(_vb);fd=sVBSwfVer(1);}window._s_itt_flash=fd;return window._s_itt_flash;}return window._s_itt_flash;}
ITT.prototype.setCookie=function(name,value,off){var _d=new Date();_d.setTime(_d.getTime()+(off*1000));var expiry=(off>0)?"; expires="+_d.toGMTString():"";if((typeof(_S_DOMAIN)!=this._ud)&&(_S_DOMAIN!=""))this.FPCD=_S_DOMAIN;if(off<0)expiry="; expires=Thu, 01-Jan-1970 00:00:01 GMT";var cookie=name+"="+value+expiry+"; path=/"+((this.FPCD!="")?("; domain="+this.FPCD):(""));document.cookie=cookie;}
ITT.prototype.deleteCookie=function(name){return this.setCookie(name,"1",-1);}
ITT.prototype.getCookie=function(name){var dc=document.cookie;var pos=dc.indexOf(name+"=");if(pos!=-1){var start=pos+name.length+1;var end=dc.indexOf(";",start);if(end==-1){end=dc.length;}return dc.substring(start,end);}return"";}
ITT.prototype.FPCSupport=function(){if(typeof window._S_NOFPC!=this._ud&&window._S_NOFPC)return false;if(this.getCookie(this.FPCN)!="")return true;var _dn="itfpctmp";var _d=new Date();var _dt="fpc-"+_d.getTime();this.setCookie(_dn,_dt,180);var _dr=this.getCookie(_dn);if(_dr==_dt){this.deleteCookie(_dn);return true;}return false;}
ITT.prototype.ol=function(){if(typeof window._S_ONLOAD!=this._ud&&!window._S_ONLOAD)return;if((window.screen)||((new Array()).toSource)||((new Array()).shift&&this.mic)){if(window.onload){eval("if(!window._s_itt_ool"+this.idx+")window._s_itt_ool"+this.idx+"=window.onload;");}eval("function olo"+this.idx+"(evt){if(window._s_itt_ool"+this.idx+")window._s_itt_ool"+this.idx+"(evt);var ln=document.links.length;for(var i=0;i<ln;i++){if(document.links[i].onclick)document.links[i].oc"+this.idx+"=document.links[i].onclick;eval(\"document.links[i].onclick=function(e){var rv=true;if(this.oc"+this.idx+")rv=this.oc"+this.idx+"(e);window.ITTs["+this.idx+"].oco(this);return rv;}\");}}");eval("window.onload=olo"+this.idx+";");}}
ITT.prototype.chkl0=function(x,y,z,Z,r){for(var i=0;i<y.length&&x.length>z;i++){var d=x.length-z;var l1=x.indexOf("&"+y[i]+"=");if(l1>0){l1+=y[i].length+2;var l2=x.indexOf("&",l1);if(l2>0){var bbf=l1;var iq=x.toLowerCase().indexOf("%3f",l1);var ik=x.toLowerCase().indexOf("%3d",l1);if(l2-l1>d+r.length+Z){l1+=l2-l1-d-r.length;for(var k=1;k<10;k++){if(x.charAt(l1-k)=='%'){l1-=k;break;}}}else if(l2-l1>Z){l1+=Z;for(var k=1;k<10;k++){if(x.charAt(l1-k)=='%'){l1-=k;break;}}}else continue;var x2=x.substring(0,l1);if(iq>0&&iq<l2){if(ik<0||ik>l2)x2+="%3D";x2+="%26";}x2+=r;x2+=x.substring(l2);x=x2;}}}if(x.length>z)return this.chkl(x,y,z,Z/2,r);return x;}
ITT.prototype.chkl=function(x,y,z,Z,r){x=this.chkl0(x,y,z,Z,r);if(x.length>z)x=this.chkl0(x,y,z,Z/2,r);return x;}
ITT.prototype.trk=function(s){var i=window.imgs.length;var _s=this.chkl(this.BU+"&enc="+escape(this.ENC)+this.IT+s+"&ix="+i+this.FPCR,["e","t","f","b"],2000,200,"[truncated]");window.imgs[i]=new Image();if(this.dbg)alert(_s);else if(this.net||(typeof window._S_BT!=this._ud&&window._S_BT))setTimeout("window.imgs["+i+"].src='"+_s+"';",1);else window.imgs[i].src=_s;this.reset();this.IT="";return _s;}
ITT.prototype.reset=function(){var i;for(i=8;i+1<this.ita.length;i+=2){eval("if ((typeof window.ITTs["+this.idx+"]."+this.ita[i]+" != 'undefined') && (window.ITTs["+this.idx+"]."+this.ita[i]+" != '')){window.ITTs["+this.idx+"]."+this.ita[i]+" = ''}");}}
ITT.prototype.gcpn=function(x){var z=location.search;var i=z.indexOf("?"+x+"=");var j=z.indexOf("&"+x+"=");if((i==0)||(j>-1)){var k=(i==0)?0:j;var l=z.indexOf('&',k+1);return z.substring(k+2+x.length,(l>-1)?l:z.length);}return"";}
ITT.prototype.getFileName=function(x){var i=x.indexOf("?");if(i>0)x=x.substring(0,i);return(x.substring(x.lastIndexOf("/")+1,x.length));}
ITT.prototype.gh=function(x){var i=x.host.indexOf(":");return(i>=0)?x.host.substring(0,i):x.host;}
ITT.prototype.ghs=function(x){var i=x.indexOf("//");if(i>=0){x=x.substring(i+2,x.length);i=x.indexOf('/');if(i>=0)return x.substring(0,i);return x.substring(i+2,x.length);}return"";}
ITT.prototype.gpr=function(x){var y=x.protocol;var i=y.indexOf(":");return(i>=0)?y:y+":";}
ITT.prototype.gp=function(x){var y=x.pathname;var i=y.indexOf("/");return(i==0)?y:"/"+y;}
ITT.prototype.mxDmnRGXP=function(v){if(v.toUpperCase().indexOf("REGEXP:")==0)return new RegExp(v.substring(7),"i");else return new RegExp(this.mxRgXpStr(v),"i");}
ITT.prototype.mxRgXpStr=function(e){while(e.indexOf(" ")>=0)e=e.replace(" ","");var r="";var a=e.split(",");for(var i=0;i<a.length;i++){var b=a[i].split(".");for(var j=0;j<b.length;j++)if(b[j].indexOf("*")>=0)b[j]="\.\+";if(b.length>0)a[i]=b.join("\\.");}if(a.length>0)r+=a.join("$|^");if(r.length>0)return"^"+r+"$";return"";}
ITT.prototype.customfield_reset=function(){this.cfn.length=0;this.cfv.length=0;}
ITT.prototype.customfield_submit=function(){if(this.cfn.length>0&&this.cfv.length>0){var _u=this.cf_ts();this.customfield_reset();this.pp();return this.trk(_u);}return"";}
ITT.prototype.customfield_set=function(n,v){this.cfn[this.cfn.length]=n;this.cfv[this.cfv.length]=v;}
ITT.prototype.cf_ts=function(){var i;var _u="&cf=1";for(i=0;i<this.cfn.length&&i<this.cfv.length;i++){_u+="&cn"+i+"="+escape(this.cfn[i])+"&cv"+i+"="+escape(this.cfv[i]);}return _u;}
ITT.prototype.submit_action=function(){this.pp();this.trk("&ca=1");}
ITT.prototype.submit_icmp=function(){this.pp();this.trk("&ci=1");}
ITT.prototype.exitlink=function(ln){this.pp();this.trk('&el='+escape(ln));}
ITT.prototype.el=function(x){if(this.gh(location)==this.gh(x))return true;var pt=(typeof window.DOMAINS!=this._ud&&window.DOMAINS!="")?this.mxDmnRGXP(window.DOMAINS):this.mxDmnRGXP(this.gh(location));if(pt.test(this.gh(x)))return true;if(x.href.indexOf("java")!=0)this.exitlink(x.href);return true;}
ITT.prototype.download=function(fn){this.pp();this.trk("&fn="+escape(fn));}
ITT.prototype.oco=function(x){if(typeof x.pathname!=this._ud){var fn=this.getFileName(x.pathname);if(fn!=""){var pt=new RegExp("\\..?html?|\\.asp|\\.cfm|\\.jsp|\\.cgi|\\.php[3-5]?|\\.pl|\\.taf|\\.tml|\\.dll|\\.vm|\\.mv|\\.do|\\.go|\\.weml|\\.tpl|\\.rcmx|jsessionid","i");if((!pt.test(fn))&&(fn.indexOf(".")!=-1)){if(((this.EXCL!="")&&(!this.mxDmnRGXP(this.EXCL).test(x.pathname)))||(this.EXCL.length==0)){this.download(x.href);}}else this.el(x);}else this.el(x);}}
ITT.prototype._track=function(_d,_i){var t="";var r=document.referrer;if(typeof _S_REFERRER!=this._ud&&_S_REFERRER.length>0)r=_S_REFERRER;else{if((navigator.userAgent.indexOf('Mac')>=0)&&(navigator.userAgent.indexOf('MSIE 4')>=0))r=document.referrer;else if(_d){window._itt_e=window.onerror;window.onerror=this._e;if(document.location!=top.location){r=top.document.referrer;t=top.location.href;}}else{this.IT+="&nr=t";}}if(window._itt_e)window.onerror=window._itt_e;else window.onerror=null;this.pp();if(r.length>0){var pt=(typeof window.DOMAINS!=this._ud&&window.DOMAINS!="")?this.mxDmnRGXP(window.DOMAINS):this.mxDmnRGXP(this.gh(location));this.IT+="&e="+escape(pt.test(this.ghs(r))?this.getClnUrl(r):r);}if(t.length>0)this.IT+="&t="+escape(t);var cs=this.FPCSupport();this.date=new Date();this.IT+="&flv="+escape(this.FLV);this.IT+="&d="+escape(this.date.toGMTString());this.IT+="&n="+escape(parseInt(this.date.getTimezoneOffset()/60));this.IT+="&g="+escape(this.net?navigator.language:navigator.userLanguage);this.IT+="&h="+escape((navigator.javaEnabled()?'Y':'N'));try{this.IT+="&j="+escape(screen.width+'x'+screen.height);this.IT+="&k="+escape((this.mic)?screen.colorDepth:screen.pixelDepth);}catch(e){}this.IT+="&l="+((cs)?"true":"false");if(this.CAMPAIGN!="")this.IT+="&cp="+escape(this.CAMPAIGN);if(this.CMPPARM!="")this.IT+="&cp="+escape(gcpn(this.CMPPARM));if(this.PROMO!="")this.IT+="&scp="+escape(this.PROMO);if(this.PROMOPARM!="")this.IT+="&scp="+escape(gcpn(this.PROMOPARM));if(typeof window._S_RUN!=this._ud&&!window._S_RUN)return;if(cs&&_i)this.fpc();else this.trk("");}
ITT.prototype.submit=function(){return this._track(true,false);}
ITT.prototype._submit=function(){return this._track(true,true);}
ITT.prototype.fpc=function(){this.getFPCvars();}
ITT.prototype.testscript=function(id){if(this.mac&&this.mic)return 0;else if(document.getElementById&&document.getElementById(id))return 1;else if(document.all&&document.all[id])return 2;else return 0;}
function _s_mozilla(){window._s_mozilla=new function(){};for(var i=0;i<window.ITTs.length;i++)window.ITTs[i]._s_w3c(0);}
ITT.prototype._s_w3c=function(mode){var m_url=this.chkl(this.BD+"/fpc.pl?a="+this.PID+this.tpc+'&v='+this.version+"&enc="+escape(this.ENC)+this.IT+this.FPCR,["e","t","f","b"],2000,200,"[truncated]");this.reset();this.IT="";if(mode==0){var idScr=document.createElement("SCRIPT");idScr.defer=true;idScr.type="text/javascript";idScr.src=m_url;this.place.appendChild(idScr);}else{document.write("<SCR"+"IPT Language='JavaScript' src='"+m_url+"'></SCR"+"IPT>");}}
ITT.prototype.getFPCvars=function(){if(this.mic)this._s_w3c(0);else if(this.gec)document.addEventListener("DOMContentLoaded",_s_mozilla,false);else this._s_w3c(1);}
ITT.prototype.setFPCookies=function(){if(this.FPCV!="")this.setCookie(this.FPCN,this.FPCV,31536000);}
ITT.prototype.page=function(docName,docGroup,memberid,action,amount){this.URL='FLASH';if(typeof FLASHURL!=this._ud)this.FU=FLASHURL;this.DOCUMENTNAME=docName;this.DOCUMENTGROUP=docGroup;this.MEMBERID=memberid;this.ACTION=action;this.AMOUNT=amount;this.submit();}
ITT.prototype.getClnUrl=function(u){var nonexc="_S_PEPOS,_S_PEPRM";if(typeof window._S_EXCLPRM==this._ud)return u;var u2=u.split('?');if(u2.length==1)return u;var p=u2[1].split('&');var exc=((window._S_EXCLPRM.indexOf(';')>=0)?window._S_EXCLPRM.split(';'):window._S_EXCLPRM.split(','));var r="";for(k=0;k<p.length;k++){var pn=p[k].split('=')[0];var re=new RegExp("\\b"+pn+"\\b","gi");if((pn!="")&&((re.test(nonexc))||(!re.test(exc))))r+=((r.length>0)?"&":"")+p[k];}return u2[0]+((r.length>0)?"?"+r:"");}
function _s_customfield_reset(){_s_itt.cfn.length=0;_s_itt.cfv.length=0;}
function _s_customfield_submit(){if(_s_itt.cfn.length>0&&_s_itt.cfv.length>0){var _u=_s_itt.cf_ts();_s_itt.customfield_reset();_s_itt.pp();return _s_itt.trk(_u);}return"";}
function _s_customfield_set(n,v){_s_itt.cfn[_s_itt.cfn.length]=n;_s_itt.cfv[_s_itt.cfv.length]=v;}
function _s_action(a,xa,oc,xd,xt,xs){if(typeof a==_s_itt._ud||a=="")return;var IU="&ca=1"+"&x="+escape(a);if(typeof xa!=_s_itt._ud)IU+="&xa="+escape(xa);if(typeof oc!=_s_itt._ud)IU+="&oc="+escape(oc);if(typeof xd!=_s_itt._ud)IU+="&xd="+escape(xd);if(typeof xt!=_s_itt._ud)IU+="&xt="+escape(xt);if(typeof xs!=_s_itt._ud)IU+="&xs="+escape(xs);_s_itt.pp();_s_itt.trk(IU);}
function _s_exitlink(ln){_s_itt.pp();_s_itt.trk('&el='+escape(ln));}var _s_itt=createITT();_s_itt.ol();_s_itt._submit();var __IT=_s_itt;
//<!-- End of IndexTools Code -->


}
/*
     FILE ARCHIVED ON 19:10:28 Oct 24, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:28:07 Oct 31, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.428
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.009
  cdx.remote: 18.737
  LoadShardBlock: 114.312 (3)
  PetaboxLoader3.datanode: 126.542 (4)
  load_resource: 223.41
  PetaboxLoader3.resolve: 107.926
*/