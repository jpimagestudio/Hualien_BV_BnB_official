// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: Skin_for_Gallery3_tea_bar.ggsk
// Generated 2025-10-28T23:45:55

function pano2vrSkin(player,base) {
	player.addVariable('vis_pictureDescription', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwICAgIGMyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOS45MTYsMjIuNjE2bC01Lj'+
			'g5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDAgICAgIGw1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMDNsMCwwdjExLjUyMSAgICAgYzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsMEMyMC40NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNiAgICAgTDE5LjkxNiwyMi42MTZ6IE0xNi41Njks'+
			'MTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMCAgICAgYzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCAgICAgYzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS42OTFsMCwwICAgICBjLT'+
			'AuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBN'+
			'OC44NTMsOC44NTMgICAgQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICBjMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgIEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwICAgICBsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjEgICAgIGMwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5'+
			'LjkxNiwyMi42MTYgICAgIEwxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPgogICA8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDAgICAgIGMwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNywwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDAgICAgIGMwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3Mi'+
			'wwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCAgICAgYy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_prev__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45'+
			'MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1My'+
			'w4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45'+
			'NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bD'+
			'UsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCww'+
			'YzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS'+
			'4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2'+
			'MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNz'+
			'YxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Prev";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_prev.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_prev.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pano_prev.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pano_prev.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pano_prev.style.transition='';
				if (me._pano_prev.ggCurrentLogicStateVisible == 0) {
					me._pano_prev.style.visibility="hidden";
					me._pano_prev.ggVisible=false;
				}
				else {
					me._pano_prev.style.visibility=(Number(me._pano_prev.style.opacity)>0||!me._pano_prev.style.opacity)?'inherit':'hidden';
					me._pano_prev.ggVisible=true;
				}
			}
		}
		me._pano_prev.logicBlock_visible();
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseenter=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_prev']=true;
		}
		me._pano_prev.onmouseleave=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_prev']=false;
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYs'+
			'Ny4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMC43ODQsMjIuODY0Yy'+
			'0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMCAgICAgYzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwICAgICBsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLjA5LDIyLjk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45MiAg'+
			'ICAgTDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPgogICA8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcgICAgIGMtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEgICAgIGMwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNjEsNS43NjEgICAgIGMtMC'+
			'4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2'+
			'eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2LDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2ei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDAgICAgIGMwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMCAgICAgbC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQs'+
			'MjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTIgICAgIEwxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4KICAgPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3ICAgICBjLTAuNDczLTAuNDYxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxICAgICBjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi'+
			'0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxICAgICBjLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUw'+
			'MSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5My'+
			'wxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3'+
			'LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLT'+
			'AuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBj'+
			'Ni45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMT'+
			'guNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQt'+
			'MC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMG'+
			'MwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Next";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 23px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_next.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_next.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pano_next.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pano_next.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pano_next.style.transition='';
				if (me._pano_next.ggCurrentLogicStateVisible == 0) {
					me._pano_next.style.visibility="hidden";
					me._pano_next.ggVisible=false;
				}
				else {
					me._pano_next.style.visibility=(Number(me._pano_next.style.opacity)>0||!me._pano_next.style.opacity)?'inherit':'hidden';
					me._pano_next.ggVisible=true;
				}
			}
		}
		me._pano_next.logicBlock_visible();
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseenter=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_next']=true;
		}
		me._pano_next.onmouseleave=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_next']=false;
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pano_next);
		el=me._loader=document.createElement('div');
		els=me._loader__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMT'+
			'YiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuMjVzIiBrZXlTcGxpbmVzPSIwLjIg'+
			'MC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjM3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZW'+
			'Zpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC43NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNC'+
			'AwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loader__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Loader";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loader.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loader.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTileLoading() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loader.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loader.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loader.style.transition='';
				if (me._loader.ggCurrentLogicStateVisible == 0) {
					me._loader.style.visibility=(Number(me._loader.style.opacity)>0||!me._loader.style.opacity)?'inherit':'hidden';
					me._loader.ggVisible=true;
				}
				else {
					me._loader.style.visibility="hidden";
					me._loader.ggVisible=false;
				}
			}
		}
		me._loader.logicBlock_visible();
		me._loader.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loader);
		el=me._picturediscription=document.createElement('div');
		els=me._picturediscription__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PictureDiscription";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(100,100,100,0.784314);';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(20%);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(40% - 35px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px 4px 4px 8px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-shadow: 1px 1px #5a5a5a;";
		els.setAttribute('style',hs);
		me._picturediscription.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u8fce\u8cd3\u9ede\u5fc3\u6211\u5011\u6e96\u5099\u4e86\u82b1\u84ee\u5728\u5730\u7279\u8272\u5c0f\u54c1\uff1a \u82b1\u84ee\u7279\u7522\u7684\u8543\u85af\u9905\u3001\u5730\u74dc\u6c99\u5176\u746a\u8207\u828b\u982d\u6c99\u5176\u746a\uff0c\u751c\u800c\u4e0d\u81a9\uff0c\u5145\u6eff\u5bb6\u9109\u5473\u3002\n\n\u4e00\u65c1\u642d\u914d\u56b4\u9078\u5357\u6295\u540d\u9593\u5c0f\u8449\u7a2e\u5ae9\u82bd\u624b\u6458\u88fd\u6210\u7684\u871c\u9999\u7d05\u8336\uff0c\u4ee5\u53ca\u878d\u5408\u53f0\u7063\u4e2d\u6d77\u62d4\u9ad8\u5c71\u70cf\u9f8d\u53ca\u7121\u767c\u9175\u9ad8\u5c71\u7da0\u8336\u8abf\u88fd\u800c\u6210\u7684\u91d1\u70cf\u9f8d\u7da0\u8336\uff0c\u8336\u9999\u9187\u539a\uff0c\u53e3\u611f\u9806\u6ed1\uff0c\u70ba\u65c5\u7a0b\u958b\u555f\u6eab\u6f64\u7684\u5e8f\u66f2\u3002", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._picturediscription.ggUpdateText();
		el.appendChild(els);
		me._picturediscription.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._picturediscription.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == "")) || 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._picturediscription.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._picturediscription.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._picturediscription.style.transition='';
				if (me._picturediscription.ggCurrentLogicStateVisible == 0) {
					me._picturediscription.style.visibility="hidden";
					me._picturediscription.ggVisible=false;
				}
				else {
					me._picturediscription.style.visibility=(Number(me._picturediscription.style.opacity)>0||!me._picturediscription.style.opacity)?'inherit':'hidden';
					me._picturediscription.ggVisible=true;
				}
			}
		}
		me._picturediscription.logicBlock_visible();
		me._picturediscription.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._picturediscription);
		el=me.__desktop=document.createElement('div');
		el.ggId="--- \u6211\u662f\u5206\u9694\u7dda --- Desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 301px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__desktop);
		el=me._controller=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="Controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((160px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 160px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return (me._controller.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._controller.ggTimestamp) / me._controller.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggDeactivate=function () {
			me._pano_next.onclick.call(me._pano_next);
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._home=document.createElement('div');
		els=me._home__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2Ljg3NCw4LjEzNWMtMC4yMjUtMC4yNC0wLjUzMi0wLjM3Ni0wLjg2MS0wLjM3OWMtMC4zMjgtMC4wMDQtMC42MzksMC4xMjUtMC44NjgsMC4zNmwtNS43NjEsNS44OTUgICAgYy0wLjIxNywwLjIyMi0wLjM0MSwwLjUyNS0wLjM0MSwwLjgzNnY1LjkwNWMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2czAuNTMxLDAuMzUxLDAuODQ2LDAu'+
			'MzUxaDExLjUyMiAgICBjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di01LjYzOWMwLTAuMzA2LTAuMTE0LTAuNTk0LTAuMzIyLTAuODE3TDE2Ljg3NCw4LjEzNXogTTIwLjU2NSwxOS41NTYgICAgSDE1Ljk1YzAuMDA5LTAuMDU5LDAuMDE4LTAuMTE2LDAuMDE4LTAuMTc3di0yLjMxYzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djIuMzEgICAgYzAsMC4wNjEsMC4wMDksMC4xMTgsMC4wMTgsMC4xNzdoLTIuMTU4di00LjIyMmw0LjU0Ni00LjY1MWw0LjU4NCw0LjkwMVYxOS41NT'+
			'Z6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDcgICAgYy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZj'+
			'Mi43OTUsMCw1LjMxMywxLjEyOSw3LjE0NywyLjk2ICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTE2Ljg3NCw4LjEzNWMtMC4yMjUtMC4yNC0wLjUzMi0wLjM3Ni0wLjg2MS0wLjM3OWMtMC4zMjgtMC4wMDQtMC42MzksMC4xMjUtMC44NjgsMC4zNmwtNS43NjEsNS44OTUgICAgYy0wLjIxNywwLjIyMi0wLjM0MSwwLjUyNS0wLjM0MSwwLjgzNnY1LjkwNWMwLD'+
			'AuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2czAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDExLjUyMiAgICBjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MXMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di01LjYzOWMwLTAuMzA2LTAuMTE0LTAuNTk0LTAuMzIyLTAuODE3TDE2Ljg3NCw4LjEzNXogTTIwLjU2NSwxOS41NTYgICAgSDE1Ljk1YzAuMDA5LTAuMDU5LDAuMDE4LTAuMTE2LDAuMDE4LTAuMTc3di0yLjMxYzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djIuMzEgICAgYzAsMC4wNjEsMC4wMDksMC4xMTgsMC4wMTgs'+
			'MC4xNzdoLTIuMTU4di00LjIyMmw0LjU0Ni00LjY1MWw0LjU4NCw0LjkwMVYxOS41NTZ6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDcgICAgYy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01Lj'+
			'MxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEyOSw3LjE0NywyLjk2ICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._home__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._home__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuODc0LDguMTM1Yy0wLjIyNS0wLjI0LTAuNTMyLTAuMzc2LTAuODYxLTAuMzc5Yy0wLjMyOC0wLjAwNC0wLjYzOSwwLjEyNS0wLjg2OCwwLjM2bC01Ljc2MSw1Ljg5NSAgICBjLTAuMjE3LDAuMjIyLTAuMzQxLDAuNTI1LTAuMzQxLDAuODM2'+
			'djUuOTA1YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZzMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMTEuNTIyICAgIGMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxczAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTUuNjM5YzAtMC4zMDYtMC4xMTQtMC41OTQtMC4zMjItMC44MTdMMTYuODc0LDguMTM1eiBNMjAuNTY1LDE5LjU1NiAgICBIMTUuOTVjMC4wMDktMC4wNTksMC4wMTgtMC4xMTYsMC4wMTgtMC4xNzd2LTIuMzFjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2Mi4zMSAgICBjMCwwLjA2MSwwLjAwOSwwLj'+
			'ExOCwwLjAxOCwwLjE3N2gtMi4xNTh2LTQuMjIybDQuNTQ2LTQuNjUxbDQuNTg0LDQuOTAxVjE5LjU1NnogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwNCw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NiwxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NyAgICBjLTEuODMzLDEuODMtNC4zNTMsMi45NTktNy4xNDcsMi45NmMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1'+
			'LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEuMTI5LDcuMTQ3LDIuOTYgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xNi44NzQsOC4xMzVjLTAuMjI1LTAuMjQtMC41Mz'+
			'ItMC4zNzYtMC44NjEtMC4zNzljLTAuMzI4LTAuMDA0LTAuNjM5LDAuMTI1LTAuODY4LDAuMzZsLTUuNzYxLDUuODk1ICAgIGMtMC4yMTcsMC4yMjItMC4zNDEsMC41MjUtMC4zNDEsMC44MzZ2NS45MDVjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NnMwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgxMS41MjIgICAgYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTFzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtNS42MzljMC0wLjMwNi0wLjExNC0wLjU5NC0wLjMyMi0wLjgxN0wxNi44NzQsOC4xMzV6IE0yMC41NjUsMTkuNTU2ICAgIEgxNS45NWMwLjAwOS0wLjA1OSwwLjAxOC0wLjEx'+
			'NiwwLjAxOC0wLjE3N3YtMi4zMWMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYyLjMxICAgIGMwLDAuMDYxLDAuMDA5LDAuMTE4LDAuMDE4LDAuMTc3aC0yLjE1OHYtNC4yMjJsNC41NDYtNC42NTFsNC41ODQsNC45MDFWMTkuNTU2eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3ICAgIGMtMS44MzMsMS44My'+
			'00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4xMjksNy4xNDcsMi45NiAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._home__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._home.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._home.onclick=function (e) {
			player.moveToDefaultViewEx(5,0);
		}
		me._home.onmouseenter=function (e) {
			me._home__img.style.visibility='hidden';
			me._home__imgo.style.visibility='inherit';
			me.elementMouseOver['home']=true;
		}
		me._home.onmouseleave=function (e) {
			me._home__img.style.visibility='inherit';
			me._home__imgo.style.visibility='hidden';
			me.elementMouseOver['home']=false;
		}
		me._home.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._home);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwx'+
			'LjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMT'+
			'QtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gt'+
			'NC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5Lj'+
			'A5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMs'+
			'Ny4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoom_in__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoom_in__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5'+
			'N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy'+
			'41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBz'+
			'dHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLj'+
			'UzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUu'+
			'ODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoom_in__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Zoom in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.onmouseenter=function (e) {
			me._zoom_in__img.style.visibility='hidden';
			me._zoom_in__imgo.style.visibility='inherit';
			me.elementMouseOver['zoom_in']=true;
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.onmouseleave=function (e) {
			me._zoom_in__img.style.visibility='inherit';
			me._zoom_in__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
		}
		me._zoom_in.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoom_in']) {
				player.changeFovLog(-1,true);
			}
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_in);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5'+
			'NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxICAgIG'+
			'MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4w'+
			'OTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLD'+
			'cuMTQ2LDIuOTYxICAgIGMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoom_out__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoom_out__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUu'+
			'MzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiAgICBjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0Lj'+
			'M1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEgICAgYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2ICAgIGMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Lj'+
			'g5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSAgICBjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoom_out__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Zoom out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.onmouseenter=function (e) {
			me._zoom_out__img.style.visibility='hidden';
			me._zoom_out__imgo.style.visibility='inherit';
			me.elementMouseOver['zoom_out']=true;
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.onmouseleave=function (e) {
			me._zoom_out__img.style.visibility='inherit';
			me._zoom_out__imgo.style.visibility='hidden';
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
		}
		me._zoom_out.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoom_out']) {
				player.changeFovLog(1,true);
			}
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_out);
		el=me._play=document.createElement('div');
		els=me._play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAu'+
			'MjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNS'+
			'wxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3'+
			'LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLT'+
			'AuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5'+
			'LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42OD'+
			'csNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwICAgIGMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDku'+
			'OTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwICAgIGwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiAgICAgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi'+
			'40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1'+
			'Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLj'+
			'AzNmwwLDAgICAgYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDAgICAgbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6ICAgICBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+CiAgPHBhdGggZD0iTTMuNSwxNkwzLjUs'+
			'MTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LT'+
			'EuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Play";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._play.onclick=function (e) {
			me._controller.ggTimeout=Number("3") * 1000.0;
			me._controller.ggTimestamp=skin.ggCurrentTime;
			me._play.style.transition='none';
			me._play.style.visibility='hidden';
			me._play.ggVisible=false;
			me._pause.style.transition='none';
			me._pause.style.visibility=(Number(me._pause.style.opacity)>0||!me._pause.style.opacity)?'inherit':'hidden';
			me._pause.ggVisible=true;
		}
		me._play.onmouseenter=function (e) {
			me._play__img.style.visibility='hidden';
			me._play__imgo.style.visibility='inherit';
			me.elementMouseOver['play']=true;
		}
		me._play.onmouseleave=function (e) {
			me._play__img.style.visibility='inherit';
			me._play__imgo.style.visibility='hidden';
			me.elementMouseOver['play']=false;
		}
		me._play.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._play);
		el=me._pause=document.createElement('div');
		els=me._pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45'+
			'Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMj'+
			'AuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVs'+
			'MCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1Mi'+
			'wyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQz'+
			'MywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLj'+
			'E5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIy'+
			'LjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMT'+
			'QsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1'+
			'LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwIC'+
			'AgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4w'+
			'MjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OT'+
			'h2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pause";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pause.onclick=function (e) {
			me._controller.ggTimeout=Number("0") * 1000.0;
			me._controller.ggTimestamp=skin.ggCurrentTime;
			me._pause.style.transition='none';
			me._pause.style.visibility='hidden';
			me._pause.ggVisible=false;
			me._play.style.transition='none';
			me._play.style.visibility=(Number(me._play.style.opacity)>0||!me._play.style.opacity)?'inherit':'hidden';
			me._play.ggVisible=true;
		}
		me._pause.onmouseenter=function (e) {
			me._pause__img.style.visibility='hidden';
			me._pause__imgo.style.visibility='inherit';
			me.elementMouseOver['pause']=true;
		}
		me._pause.onmouseleave=function (e) {
			me._pause__img.style.visibility='inherit';
			me._pause__imgo.style.visibility='hidden';
			me.elementMouseOver['pause']=false;
		}
		me._pause.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._pause);
		el=me._fullscreen_button=document.createElement('div');
		el.ggId="Fullscreen_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_button.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_button.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_normalscreen_button=document.createElement('div');
		els=me._image_normalscreen_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYt'+
			'MC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny'+
			'0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3'+
			'NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLj'+
			'E5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5'+
			'NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5Ni'+
			'wxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAu'+
			'MjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40Mj'+
			'csMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4x'+
			'NDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi'+
			'45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAu'+
			'NjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMC'+
			'wxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4z'+
			'OTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMj'+
			'IuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0w'+
			'LjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5Ni'+
			'wxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0w'+
			'LjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMT'+
			'k2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMT'+
			'UuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEs'+
			'MC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_normalscreen_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_normalscreen_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSww'+
			'LjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy'+
			'40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5'+
			'Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOT'+
			'YgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAu'+
			'NjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4'+
			'LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MW'+
			'MtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjky'+
			'NHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAw'+
			'MDAiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42Mj'+
			'MtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUs'+
			'MS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2'+
			'ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQz'+
			'I4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0'+
			'LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS'+
			'4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCww'+
			'LjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC'+
			'40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEu'+
			'MjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_normalscreen_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_normalscreen_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_normalscreen_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_normalscreen_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_normalscreen_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_normalscreen_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_normalscreen_button.style.transition='';
				if (me._image_normalscreen_button.ggCurrentLogicStateVisible == 0) {
					me._image_normalscreen_button.style.visibility=(Number(me._image_normalscreen_button.style.opacity)>0||!me._image_normalscreen_button.style.opacity)?'inherit':'hidden';
					me._image_normalscreen_button.ggVisible=true;
				}
				else {
					me._image_normalscreen_button.style.visibility="hidden";
					me._image_normalscreen_button.ggVisible=false;
				}
			}
		}
		me._image_normalscreen_button.logicBlock_visible();
		me._image_normalscreen_button.onmouseenter=function (e) {
			me._image_normalscreen_button__img.style.visibility='hidden';
			me._image_normalscreen_button__imgo.style.visibility='inherit';
			me.elementMouseOver['image_normalscreen_button']=true;
		}
		me._image_normalscreen_button.onmouseleave=function (e) {
			me._image_normalscreen_button__img.style.visibility='inherit';
			me._image_normalscreen_button__imgo.style.visibility='hidden';
			me.elementMouseOver['image_normalscreen_button']=false;
		}
		me._image_normalscreen_button.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_button.appendChild(me._image_normalscreen_button);
		el=me._image_fullscreen_button=document.createElement('div');
		els=me._image_fullscreen_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNTEgICAgQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHY4LjExOGMwLDAuMDAxLDAsMC4wMDIsMCwwLjAwMnY4LjEyYzAsMC4zMTUsMC4xMjcsMC42MjMsMC4zNSwwLjg0NiAgICBjMC4y'+
			'MjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMCwwLDAuMDAxLDAsMC4wMDEsMGgxMS4zMDJjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxICAgIGMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTE0LjgwNCwyMi45MjRINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogICAgIE0yNi4xMDcsMjIuOTI0aC04LjkxMVYxNmMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDUuODkzVjkuMDc3aDIwLjIxNVYyMi'+
			'45MjR6ICAgICBNMTguNjgyLDE1LjEzNWMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTZsMC4yMjEtMC4xNDhjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTEgICAgYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5LTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTEgICAgQzE4LjA4NywxNC45OSwxOC4zODIsMTUuMTM1LDE4LjY4MiwxNS4xMzV6IE0yNC4yMDgsMTEuNDQyYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTdsMC4yMjItMC4xNDggICAgYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkx'+
			'Yy0wLjI4NS0wLjQyNy0wLjg2Mi0wLjU0Mi0xLjI5LTAuMjU2bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOSAgICBDMjMuNjEzLDExLjI5NywyMy45MDcsMTEuNDQyLDI0LjIwOCwxMS40NDJ6IE0yMS40NDQsMTMuMjg5YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMiwwLjE0N2MtMC40MjgsMC4yODYtMC41NDMsMC44NjMtMC4yNTcsMS4yOTEgICAgQzIwLjg1LDEzLjE0NCwyMS'+
			'4xNDUsMTMuMjg5LDIxLjQ0NCwxMy4yODl6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1MSAgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djguMTE4YzAsMC4wMDEsMCwwLjAwMiwwLDAuMDAydjguMTJjMCwwLjMxNSwwLjEyNywwLjYyMywwLjM1LDAuODQ2ICAgIGMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMw'+
			'LDAsMC4wMDEsMCwwLjAwMSwwaDExLjMwMmMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICAgYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNMTQuODA0LDIyLjkyNEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiAgICAgTTI2LjEwNywyMi45MjRoLTguOTExVjE2YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NmMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINS44OTNWOS4wNzdoMjAuMjE1VjIyLjkyNHogICAgIE0xOC42ODIsMTUuMTM1YzAuMTc4LDAsMC4zNT'+
			'ctMC4wNSwwLjUxNy0wLjE1NmwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MSAgICBjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjktMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MSAgICBDMTguMDg3LDE0Ljk5LDE4LjM4MiwxNS4xMzUsMTguNjgyLDE1LjEzNXogTTI0LjIwOCwxMS40NDJjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1N2wwLjIyMi0wLjE0OCAgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFjLTAuMjg1LTAuNDI3LTAuODYyLTAuNTQyLTEuMjktMC4yNTZs'+
			'LTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5ICAgIEMyMy42MTMsMTEuMjk3LDIzLjkwNywxMS40NDIsMjQuMjA4LDExLjQ0MnogTTIxLjQ0NCwxMy4yODljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyLDAuMTQ3Yy0wLjQyOCwwLjI4Ni0wLjU0MywwLjg2My0wLjI1NywxLjI5MSAgICBDMjAuODUsMTMuMTQ0LDIxLjE0NSwxMy4yODksMjEuNDQ0LDEzLjI4OXoiLz4KIDwvZz4KPC'+
			'9zdmc+Cg==';
		me._image_fullscreen_button__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_fullscreen_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1MSAgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djguMTE4YzAsMC4wMDEs'+
			'MCwwLjAwMiwwLDAuMDAydjguMTJjMCwwLjMxNSwwLjEyNywwLjYyMywwLjM1LDAuODQ2ICAgIGMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLDAsMC4wMDEsMCwwLjAwMSwwaDExLjMwMmMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICAgYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNMTQuODA0LDIyLjkyNEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiAgICAgTTI2LjEwNywyMi45MjRoLTguOTExVjE2YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0Nm'+
			'MtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINS44OTNWOS4wNzdoMjAuMjE1VjIyLjkyNHogICAgIE0xOC42ODIsMTUuMTM1YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NmwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MSAgICBjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjktMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MSAgICBDMTguMDg3LDE0Ljk5LDE4LjM4MiwxNS4xMzUsMTguNjgyLDE1LjEzNXogTTI0LjIwOCwxMS40NDJjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUx'+
			'Ni0wLjE1N2wwLjIyMi0wLjE0OCAgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFjLTAuMjg1LTAuNDI3LTAuODYyLTAuNTQyLTEuMjktMC4yNTZsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5ICAgIEMyMy42MTMsMTEuMjk3LDIzLjkwNywxMS40NDIsMjQuMjA4LDExLjQ0MnogTTIxLjQ0NCwxMy4yODljMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyLDAuMT'+
			'Q3Yy0wLjQyOCwwLjI4Ni0wLjU0MywwLjg2My0wLjI1NywxLjI5MSAgICBDMjAuODUsMTMuMTQ0LDIxLjE0NSwxMy4yODksMjEuNDQ0LDEzLjI4OXoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNTEgICAgQzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwz'+
			'LjUsNy44OHY4LjExOGMwLDAuMDAxLDAsMC4wMDIsMCwwLjAwMnY4LjEyYzAsMC4zMTUsMC4xMjcsMC42MjMsMC4zNSwwLjg0NiAgICBjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMCwwLDAuMDAxLDAsMC4wMDEsMGgxMS4zMDJjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxICAgIGMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTE0LjgwNCwyMi45MjRINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogICAgIE0yNi4xMDcsMjIuOTI0aC04LjkxMVYxNmMwLTAuMzE1LT'+
			'AuMTI4LTAuNjIzLTAuMzUtMC44NDZjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDUuODkzVjkuMDc3aDIwLjIxNVYyMi45MjR6ICAgICBNMTguNjgyLDE1LjEzNWMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTZsMC4yMjEtMC4xNDhjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTEgICAgYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5LTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTEgICAgQzE4LjA4NywxNC45OSwxOC4zODIsMTUuMTM1LDE4LjY4MiwxNS4xMzV6IE0yNC4yMDgsMTEuNDQyYzAu'+
			'MTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTdsMC4yMjItMC4xNDggICAgYzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxYy0wLjI4NS0wLjQyNy0wLjg2Mi0wLjU0Mi0xLjI5LTAuMjU2bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOSAgICBDMjMuNjEzLDExLjI5NywyMy45MDcsMTEuNDQyLDI0LjIwOCwxMS40NDJ6IE0yMS40NDQsMTMuMjg5YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi'+
			'0xLjI5MS0wLjI1N2wtMC4yMiwwLjE0N2MtMC40MjgsMC4yODYtMC41NDMsMC44NjMtMC4yNTcsMS4yOTEgICAgQzIwLjg1LDEzLjE0NCwyMS4xNDUsMTMuMjg5LDIxLjQ0NCwxMy4yODl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_fullscreen_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		ela=me._image_fullscreen_button__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEgICBTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3ICAgYzAu'+
			'MzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCAgIFY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiAgIGMtMC'+
			'42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYgICBDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiAgIGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTIgICBsLTAuMjIyLDAu'+
			'MTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3ICAgbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcgICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS'+
			'0wLjE0OCAgIGMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYgICBjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4ICAg'+
			'Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LT'+
			'AuODQ2LDAuMzUxICAgUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyAgIGMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQgICBWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDIgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYgICBjMCwwLjY2MSwwLjUzNiwxLj'+
			'E5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyICAgbC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyAgIGwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIy'+
			'LDAuMTQ3ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNT'+
			'M1LDEuMTk2LTEuMTk2VjE2ICAgYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_fullscreen_button__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggSubElementActive = ela;
		el.ggId="image_fullscreen_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_fullscreen_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_fullscreen_button.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_fullscreen_button.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_fullscreen_button.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_fullscreen_button.style.transition='';
				if (me._image_fullscreen_button.ggCurrentLogicStateVisible == 0) {
					me._image_fullscreen_button.style.visibility="hidden";
					me._image_fullscreen_button.ggVisible=false;
				}
				else {
					me._image_fullscreen_button.style.visibility=(Number(me._image_fullscreen_button.style.opacity)>0||!me._image_fullscreen_button.style.opacity)?'inherit':'hidden';
					me._image_fullscreen_button.ggVisible=true;
				}
			}
		}
		me._image_fullscreen_button.logicBlock_visible();
		me._image_fullscreen_button.onmouseenter=function (e) {
			me._image_fullscreen_button__img.style.visibility='hidden';
			me._image_fullscreen_button__imgo.style.visibility='inherit';
			me.elementMouseOver['image_fullscreen_button']=true;
		}
		me._image_fullscreen_button.onmousedown=function (e) {
			me._image_fullscreen_button__imga.style.visibility='inherit';
			me._image_fullscreen_button__imgo.style.visibility='hidden';
		}
		me._image_fullscreen_button.onmouseup=function (e) {
			me._image_fullscreen_button__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._image_fullscreen_button__img.style.visibility='inherit';
			} else {
				me._image_fullscreen_button__imgo.style.visibility='inherit';
			}
		}
		me._image_fullscreen_button.onmouseleave=function (e) {
			me._image_fullscreen_button__img.style.visibility='inherit';
			me._image_fullscreen_button__imgo.style.visibility='hidden';
			me._image_fullscreen_button__imga.style.visibility='hidden';
			me.elementMouseOver['image_fullscreen_button']=false;
		}
		me._image_fullscreen_button.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_button.appendChild(me._image_fullscreen_button);
		me._controller.appendChild(me._fullscreen_button);
		me.divSkin.appendChild(me._controller);
		el=me._pano_prev_m=document.createElement('div');
		els=me._pano_prev_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNSwwLDEyLjUsNS41OTUsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ2LDIuOTZsMCwwICAgIGMyLjc5NSwwLDUuMzE1LTEuMTI5LDcuMTQ4LTIuOTZsMCwwYzEuODMtMS44MzMsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xOS45MTYsMjIuNjE2bC01Lj'+
			'g5NS01Ljc2Yy0wLjIzMi0wLjIyNy0wLjM2LTAuNTMyLTAuMzYtMC44NTZsMCwwYzAtMC4zMjQsMC4xMjgtMC42MjksMC4zNi0wLjg1NWwwLDAgICAgIGw1Ljg5NS01Ljc2MWMwLjM0NC0wLjMzNiwwLjg1OC0wLjQzNCwxLjMwMS0wLjI0N2wwLDBjMC40NDIsMC4xODYsMC43MzIsMC42MjIsMC43MzIsMS4xMDNsMCwwdjExLjUyMSAgICAgYzAsMC40NzktMC4yOSwwLjkxNy0wLjczMiwxLjEwM2wwLDBjLTAuMTQ5LDAuMDYzLTAuMzA3LDAuMDk0LTAuNDYzLDAuMDk0bDAsMEMyMC40NDcsMjIuOTU3LDIwLjE0NSwyMi44MzksMTkuOTE2LDIyLjYxNiAgICAgTDE5LjkxNiwyMi42MTZ6IE0xNi41Njks'+
			'MTZsMi45ODgsMi45MTl2LTUuODM4TDE2LjU2OSwxNkwxNi41NjksMTZ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNC4wMTEsMjIuNjE2bC01Ljg5Ni01Ljc2MWMtMC4yMzQtMC4yMjktMC4zNjMtMC41NC0wLjM2LTAuODY4bDAsMCAgICAgYzAuMDA0LTAuMzI5LDAuMTM5LTAuNjM3LDAuMzc5LTAuODYxbDAsMGw2LjE2MS01Ljc2MWMwLjQ4Mi0wLjQ1MiwxLjI0LTAuNDI2LDEuNjkxLDAuMDU3bDAsMCAgICAgYzAuNDUxLDAuNDgyLDAuNDI2LDEuMjM5LTAuMDU2LDEuNjlsMCwwbC01LjI0OCw0LjkwN2w1LDQuODg2djAuMDAxYzAuNDcyLDAuNDYxLDAuNDgxLDEuMjE5LDAuMDIsMS42OTFsMCwwICAgICBjLT'+
			'AuMjM1LDAuMjM5LTAuNTQ1LDAuMzU5LTAuODU2LDAuMzU5bDAsMEMxNC41NDYsMjIuOTU3LDE0LjI0NCwyMi44NDQsMTQuMDExLDIyLjYxNkwxNC4wMTEsMjIuNjE2eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDUsMCwxMi41LDUuNTk1LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBN'+
			'OC44NTMsOC44NTMgICAgQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMDUsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICBjMi43OTUsMCw1LjMxNS0xLjEyOSw3LjE0OC0yLjk2bDAsMGMxLjgzLTEuODMzLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgIEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTkuOTE2LDIyLjYxNmwtNS44OTUtNS43NmMtMC4yMzItMC4yMjctMC4zNi0wLjUzMi0wLjM2LTAuODU2bDAsMGMwLTAuMzI0LDAuMTI4LTAuNjI5LDAuMzYtMC44NTVsMCwwICAgICBsNS44OTUtNS43NjFjMC4zNDQtMC4zMzYsMC44NTgtMC40MzQsMS4zMDEtMC4yNDdsMCwwYzAuNDQyLDAuMTg2LDAuNzMyLDAuNjIyLDAuNzMyLDEuMTAzbDAsMHYxMS41MjEgICAgIGMwLDAuNDc5LTAuMjksMC45MTctMC43MzIsMS4xMDNsMCwwYy0wLjE0OSwwLjA2My0wLjMwNywwLjA5NC0wLjQ2MywwLjA5NGwwLDBDMjAuNDQ3LDIyLjk1NywyMC4xNDUsMjIuODM5LDE5'+
			'LjkxNiwyMi42MTYgICAgIEwxOS45MTYsMjIuNjE2eiBNMTYuNTY5LDE2bDIuOTg4LDIuOTE5di01LjgzOEwxNi41NjksMTZMMTYuNTY5LDE2eiIvPgogICA8cGF0aCBkPSJNMTQuMDExLDIyLjYxNmwtNS44OTYtNS43NjFjLTAuMjM0LTAuMjI5LTAuMzYzLTAuNTQtMC4zNi0wLjg2OGwwLDAgICAgIGMwLjAwNC0wLjMyOSwwLjEzOS0wLjYzNywwLjM3OS0wLjg2MWwwLDBsNi4xNjEtNS43NjFjMC40ODItMC40NTIsMS4yNC0wLjQyNiwxLjY5MSwwLjA1N2wwLDAgICAgIGMwLjQ1MSwwLjQ4MiwwLjQyNiwxLjIzOS0wLjA1NiwxLjY5bDAsMGwtNS4yNDgsNC45MDdsNSw0Ljg4NnYwLjAwMWMwLjQ3Mi'+
			'wwLjQ2MSwwLjQ4MSwxLjIxOSwwLjAyLDEuNjkxbDAsMCAgICAgYy0wLjIzNSwwLjIzOS0wLjU0NSwwLjM1OS0wLjg1NiwwLjM1OWwwLDBDMTQuNTQ2LDIyLjk1NywxNC4yNDQsMjIuODQ0LDE0LjAxMSwyMi42MTZMMTQuMDExLDIyLjYxNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_prev_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev_m__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45'+
			'MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1My'+
			'w4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45'+
			'NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNzYxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bD'+
			'UsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCww'+
			'YzYuOTA1LDAsMTIuNSw1LjU5NSwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgYzIuNzk1LDAsNS4zMTUtMS4xMjksNy4xNDgtMi45NmwwLDBjMS44My0xLjgzMywyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMGMtMC4wMDEtMi43OTUtMS'+
			'4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8Zz4KICAgPHBhdGggZD0iTTE5LjkxNiwyMi42MTZsLTUuODk1LTUuNzZjLTAuMjMyLTAuMjI3LTAuMzYtMC41MzItMC4zNi0wLjg1NmwwLDBjMC0wLjMyNCwwLjEyOC0wLjYyOSwwLjM2LTAuODU1bDAsMCAgICAgbDUuODk1LTUuNzYxYzAuMzQ0LTAuMzM2LDAuODU4LTAuNDM0LDEuMzAxLTAuMjQ3bDAsMGMwLjQ0MiwwLjE4NiwwLjczMiwwLjYyMiwwLjczMiwxLjEwM2wwLDB2'+
			'MTEuNTIxICAgICBjMCwwLjQ3OS0wLjI5LDAuOTE3LTAuNzMyLDEuMTAzbDAsMGMtMC4xNDksMC4wNjMtMC4zMDcsMC4wOTQtMC40NjMsMC4wOTRsMCwwQzIwLjQ0NywyMi45NTcsMjAuMTQ1LDIyLjgzOSwxOS45MTYsMjIuNjE2ICAgICBMMTkuOTE2LDIyLjYxNnogTTE2LjU2OSwxNmwyLjk4OCwyLjkxOXYtNS44MzhMMTYuNTY5LDE2TDE2LjU2OSwxNnoiLz4KICAgPHBhdGggZD0iTTE0LjAxMSwyMi42MTZsLTUuODk2LTUuNzYxYy0wLjIzNC0wLjIyOS0wLjM2My0wLjU0LTAuMzYtMC44NjhsMCwwICAgICBjMC4wMDQtMC4zMjksMC4xMzktMC42MzcsMC4zNzktMC44NjFsMCwwbDYuMTYxLTUuNz'+
			'YxYzAuNDgyLTAuNDUyLDEuMjQtMC40MjYsMS42OTEsMC4wNTdsMCwwICAgICBjMC40NTEsMC40ODIsMC40MjYsMS4yMzktMC4wNTYsMS42OWwwLDBsLTUuMjQ4LDQuOTA3bDUsNC44ODZ2MC4wMDFjMC40NzIsMC40NjEsMC40ODEsMS4yMTksMC4wMiwxLjY5MWwwLDAgICAgIGMtMC4yMzUsMC4yMzktMC41NDUsMC4zNTktMC44NTYsMC4zNTlsMCwwQzE0LjU0NiwyMi45NTcsMTQuMjQ0LDIyLjg0NCwxNC4wMTEsMjIuNjE2TDE0LjAxMSwyMi42MTZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev_m__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Prev_M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 23px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_prev_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_prev_m.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev_m.onmouseenter=function (e) {
			me._pano_prev_m__img.style.visibility='hidden';
			me._pano_prev_m__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_prev_m']=true;
		}
		me._pano_prev_m.onmouseleave=function (e) {
			me._pano_prev_m__img.style.visibility='inherit';
			me._pano_prev_m__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_prev_m']=false;
		}
		me._pano_prev_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pano_prev_m);
		el=me._pano_next_m=document.createElement('div');
		els=me._pano_next_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYs'+
			'Ny4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTMtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5NCwxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMC43ODQsMjIuODY0Yy'+
			'0wLjQ0My0wLjE4Ny0wLjczMi0wLjYyMi0wLjczMi0xLjEwM2wwLDBWMTAuMjM5YzAtMC40OCwwLjI5LTAuOTE3LDAuNzMyLTEuMTAzbDAsMCAgICAgYzAuNDQyLTAuMTg2LDAuOTU3LTAuMDg4LDEuMywwLjI0N2wwLDBsNS44OTUsNS43NjFjMC4yMzIsMC4yMjYsMC4zNiwwLjUzMSwwLjM2LDAuODU1bDAsMGMwLDAuMzI0LTAuMTI4LDAuNjI5LTAuMzYsMC44NTZsMCwwICAgICBsLTUuODk1LDUuNzZjLTAuMjI4LDAuMjI0LTAuNTMsMC4zNDEtMC44MzcsMC4zNDFsMCwwQzExLjA5LDIyLjk1NywxMC45MzMsMjIuOTI3LDEwLjc4NCwyMi44NjRMMTAuNzg0LDIyLjg2NHogTTEyLjQ0NCwxOC45MiAg'+
			'ICAgTDE1LjQzMiwxNmwtMi45ODctMi45MTlWMTguOTJMMTIuNDQ0LDE4LjkyeiIvPgogICA8cGF0aCBkPSJNMTYuMDEzLDIyLjU3OGMtMC40NTEtMC40ODItMC40MjYtMS4yMzksMC4wNTctMS42OWwwLDBsNS4yNDctNC45MDdsLTUtNC44ODcgICAgIGMtMC40NzMtMC40NjEtMC40ODItMS4yMTktMC4wMi0xLjY5MWwwLDBjMC40NjItMC40NzMsMS4yMTktMC40ODIsMS42OTItMC4wMmwwLDBsNS44OTUsNS43NjEgICAgIGMwLjIzNSwwLjIyOSwwLjM2NCwwLjU0LDAuMzYsMC44NjlsMCwwYy0wLjAwNCwwLjMyOS0wLjE0LDAuNjM2LTAuMzc5LDAuODYxbDAsMGwtNi4xNjEsNS43NjEgICAgIGMtMC'+
			'4yMywwLjIxNi0wLjUyNCwwLjMyMy0wLjgxNywwLjMyM2wwLDBDMTYuNTY3LDIyLjk1OCwxNi4yNDksMjIuODMsMTYuMDEzLDIyLjU3OEwxNi4wMTMsMjIuNTc4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2'+
			'eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2LDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzEzLTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODcsNS44OTQsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2ei'+
			'IvPgogIDxnPgogICA8cGF0aCBkPSJNMTAuNzg0LDIyLjg2NGMtMC40NDMtMC4xODctMC43MzItMC42MjItMC43MzItMS4xMDNsMCwwVjEwLjIzOWMwLTAuNDgsMC4yOS0wLjkxNywwLjczMi0xLjEwM2wwLDAgICAgIGMwLjQ0Mi0wLjE4NiwwLjk1Ny0wLjA4OCwxLjMsMC4yNDdsMCwwbDUuODk1LDUuNzYxYzAuMjMyLDAuMjI2LDAuMzYsMC41MzEsMC4zNiwwLjg1NWwwLDBjMCwwLjMyNC0wLjEyOCwwLjYyOS0wLjM2LDAuODU2bDAsMCAgICAgbC01Ljg5NSw1Ljc2Yy0wLjIyOCwwLjIyNC0wLjUzLDAuMzQxLTAuODM3LDAuMzQxbDAsMEMxMS4wOSwyMi45NTcsMTAuOTMzLDIyLjkyNywxMC43ODQs'+
			'MjIuODY0TDEwLjc4NCwyMi44NjR6IE0xMi40NDQsMTguOTIgICAgIEwxNS40MzIsMTZsLTIuOTg3LTIuOTE5VjE4LjkyTDEyLjQ0NCwxOC45MnoiLz4KICAgPHBhdGggZD0iTTE2LjAxMywyMi41NzhjLTAuNDUxLTAuNDgyLTAuNDI2LTEuMjM5LDAuMDU3LTEuNjlsMCwwbDUuMjQ3LTQuOTA3bC01LTQuODg3ICAgICBjLTAuNDczLTAuNDYxLTAuNDgyLTEuMjE5LTAuMDItMS42OTFsMCwwYzAuNDYyLTAuNDczLDEuMjE5LTAuNDgyLDEuNjkyLTAuMDJsMCwwbDUuODk1LDUuNzYxICAgICBjMC4yMzUsMC4yMjksMC4zNjQsMC41NCwwLjM2LDAuODY5bDAsMGMtMC4wMDQsMC4zMjktMC4xNCwwLjYzNi'+
			'0wLjM3OSwwLjg2MWwwLDBsLTYuMTYxLDUuNzYxICAgICBjLTAuMjMsMC4yMTYtMC41MjQsMC4zMjMtMC44MTcsMC4zMjNsMCwwQzE2LjU2NywyMi45NTgsMTYuMjQ5LDIyLjgzLDE2LjAxMywyMi41NzhMMTYuMDEzLDIyLjU3OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next_m__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGhlaWdodD0iMzJweCIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIHN0cm9rZT0iIzNDM0MzQyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUw'+
			'MSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5My'+
			'wxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQtMC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3'+
			'LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMGMwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLT'+
			'AuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBj'+
			'Ni45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45Niw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ny0yLjk2bDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxMy0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMT'+
			'guNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODk0LDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEwLjc4NCwyMi44NjRjLTAuNDQzLTAuMTg3LTAuNzMyLTAuNjIyLTAuNzMyLTEuMTAzbDAsMFYxMC4yMzljMC0wLjQ4LDAuMjktMC45MTcsMC43MzItMS4xMDNsMCwwICAgICBjMC40NDItMC4xODYsMC45NTctMC4wODgsMS4zLDAuMjQ3bDAsMGw1Ljg5NSw1Ljc2MWMwLjIzMiwwLjIyNiwwLjM2LDAuNTMxLDAuMzYsMC44NTVsMCwwYzAsMC4zMjQt'+
			'MC4xMjgsMC42MjktMC4zNiwwLjg1NmwwLDAgICAgIGwtNS44OTUsNS43NmMtMC4yMjgsMC4yMjQtMC41MywwLjM0MS0wLjgzNywwLjM0MWwwLDBDMTEuMDksMjIuOTU3LDEwLjkzMywyMi45MjcsMTAuNzg0LDIyLjg2NEwxMC43ODQsMjIuODY0eiBNMTIuNDQ0LDE4LjkyICAgICBMMTUuNDMyLDE2bC0yLjk4Ny0yLjkxOVYxOC45MkwxMi40NDQsMTguOTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0xNi4wMTMsMjIuNTc4Yy0wLjQ1MS0wLjQ4Mi0wLjQyNi0xLjIzOSwwLjA1Ny0xLjY5bDAsMGw1LjI0Ny00LjkwN2wtNS00Ljg4NyAgICAgYy0wLjQ3My0wLjQ2MS0wLjQ4Mi0xLjIxOS0wLjAyLTEuNjkxbDAsMG'+
			'MwLjQ2Mi0wLjQ3MywxLjIxOS0wLjQ4MiwxLjY5Mi0wLjAybDAsMGw1Ljg5NSw1Ljc2MSAgICAgYzAuMjM1LDAuMjI5LDAuMzY0LDAuNTQsMC4zNiwwLjg2OWwwLDBjLTAuMDA0LDAuMzI5LTAuMTQsMC42MzYtMC4zNzksMC44NjFsMCwwbC02LjE2MSw1Ljc2MSAgICAgYy0wLjIzLDAuMjE2LTAuNTI0LDAuMzIzLTAuODE3LDAuMzIzbDAsMEMxNi41NjcsMjIuOTU4LDE2LjI0OSwyMi44MywxNi4wMTMsMjIuNTc4TDE2LjAxMywyMi41Nzh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_next_m__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="Pano Next_M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 23px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pano_next_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pano_next_m.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next_m.onmouseenter=function (e) {
			me._pano_next_m__img.style.visibility='hidden';
			me._pano_next_m__imgo.style.visibility='inherit';
			me.elementMouseOver['pano_next_m']=true;
		}
		me._pano_next_m.onmouseleave=function (e) {
			me._pano_next_m__img.style.visibility='inherit';
			me._pano_next_m__imgo.style.visibility='hidden';
			me.elementMouseOver['pano_next_m']=false;
		}
		me._pano_next_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pano_next_m);
		el=me._loader_m=document.createElement('div');
		els=me._loader_m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgZmlsbD0id2hpdGUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMT'+
			'YiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4xMjVzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuMjVzIiBrZXlTcGxpbmVzPSIwLjIg'+
			'MC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjM3NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZW'+
			'Zpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuNjI1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC43NXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNC'+
			'AwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIgYmVnaW49IjAuODc1cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loader_m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Loader_M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loader_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loader_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTileLoading() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loader_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loader_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loader_m.style.transition='';
				if (me._loader_m.ggCurrentLogicStateVisible == 0) {
					me._loader_m.style.visibility=(Number(me._loader_m.style.opacity)>0||!me._loader_m.style.opacity)?'inherit':'hidden';
					me._loader_m.ggVisible=true;
				}
				else {
					me._loader_m.style.visibility="hidden";
					me._loader_m.ggVisible=false;
				}
			}
		}
		me._loader_m.logicBlock_visible();
		me._loader_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loader_m);
		el=me._picturediscription_m=document.createElement('div');
		els=me._picturediscription_m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PictureDiscription_M";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(100,100,100,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="text-shadow: 1px 1px #5a5a5a;";
		els.setAttribute('style',hs);
		me._picturediscription_m.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p>\u8fce\u8cd3\u9ede\u5fc3\u6211\u5011\u6e96\u5099\u4e86\u82b1\u84ee\u5728\u5730\u7279\u8272\u5c0f\u54c1\uff1a \u82b1\u84ee\u7279\u7522\u7684\u8543\u85af\u9905\u3001\u5730\u74dc\u6c99\u5176\u746a\u8207\u828b\u982d\u6c99\u5176\u746a\uff0c\u751c\u800c\u4e0d\u81a9\uff0c\u5145\u6eff\u5bb6\u9109\u5473\u3002<\/p>\n<p>\u4e00\u65c1\u642d\u914d\u56b4\u9078\u5357\u6295\u540d\u9593\u5c0f\u8449\u7a2e\u5ae9\u82bd\u624b\u6458\u88fd\u6210\u7684\u871c\u9999\u7d05\u8336\uff0c\u4ee5\u53ca\u878d\u5408\u53f0\u7063\u4e2d\u6d77\u62d4\u9ad8\u5c71\u70cf\u9f8d\u53ca\u7121\u767c\u9175\u9ad8\u5c71\u7da0\u8336\u8abf\u88fd\u800c\u6210\u7684\u91d1\u70cf\u9f8d\u7da0\u8336\uff0c\u8336\u9999\u9187\u539a\uff0c\u53e3\u611f\u9806\u6ed1\uff0c\u70ba\u65c5\u7a0b\u958b\u555f\u6eab\u6f64\u7684\u5e8f\u66f2\u3002<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._picturediscription_m.ggUpdateText();
		el.appendChild(els);
		me._picturediscription_m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._picturediscription_m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) != "")) && 
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._picturediscription_m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._picturediscription_m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._picturediscription_m.style.transition='';
				if (me._picturediscription_m.ggCurrentLogicStateVisible == 0) {
					me._picturediscription_m.style.visibility=(Number(me._picturediscription_m.style.opacity)>0||!me._picturediscription_m.style.opacity)?'inherit':'hidden';
					me._picturediscription_m.ggVisible=true;
				}
				else {
					me._picturediscription_m.style.visibility="hidden";
					me._picturediscription_m.ggVisible=false;
				}
			}
		}
		me._picturediscription_m.logicBlock_visible();
		me._picturediscription_m.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._picturediscription_m);
		el=me.__mobile=document.createElement('div');
		el.ggId="--- \u6211\u662f\u5206\u9694\u7dda --- Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 20px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 301px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__mobile);
		el=me.__start_mobile=document.createElement('div');
		el.ggId="_Start_Mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 349px;';
		hs+='position : absolute;';
		hs+='top : 452px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__start_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__start_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__start_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__start_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__start_mobile.style.transition='';
				if (me.__start_mobile.ggCurrentLogicStateVisible == 0) {
					me.__start_mobile.style.visibility=(Number(me.__start_mobile.style.opacity)>0||!me.__start_mobile.style.opacity)?'inherit':'hidden';
					me.__start_mobile.ggVisible=true;
				}
				else {
					me.__start_mobile.style.visibility="hidden";
					me.__start_mobile.ggVisible=false;
				}
			}
		}
		me.__start_mobile.logicBlock_visible();
		me.__start_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__start_mobile);
		el=me.__start_desktop=document.createElement('div');
		el.ggId="_Start_Desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 402px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__start_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__start_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__start_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__start_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__start_desktop.style.transition='';
				if (me.__start_desktop.ggCurrentLogicStateVisible == 0) {
					me.__start_desktop.style.visibility="hidden";
					me.__start_desktop.ggVisible=false;
				}
				else {
					me.__start_desktop.style.visibility=(Number(me.__start_desktop.style.opacity)>0||!me.__start_desktop.style.opacity)?'inherit':'hidden';
					me.__start_desktop.ggVisible=true;
				}
			}
		}
		me.__start_desktop.logicBlock_visible();
		me.__start_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__start_desktop);
		el=me._code_element_1=document.createElement('div');
		el.ggId="Code Element 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 62px;';
		hs+='position : absolute;';
		hs+='top : 436px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code_element_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._code_element_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._code_element_1);
		me._pano_prev.logicBlock_visible();
		me.elementMouseOver['pano_prev']=false;
		me._pano_next.logicBlock_visible();
		me.elementMouseOver['pano_next']=false;
		me._loader.logicBlock_visible();
		me._picturediscription.logicBlock_visible();
		me._controller.logicBlock_visible();
		me.elementMouseOver['home']=false;
		me.elementMouseOver['zoom_in']=false;
		me.elementMouseOver['zoom_out']=false;
		me.elementMouseOver['play']=false;
		me.elementMouseOver['pause']=false;
		me._image_normalscreen_button.logicBlock_visible();
		me.elementMouseOver['image_normalscreen_button']=false;
		me._image_fullscreen_button.logicBlock_visible();
		me.elementMouseOver['image_fullscreen_button']=false;
		me.elementMouseOver['pano_prev_m']=false;
		me.elementMouseOver['pano_next_m']=false;
		me._loader_m.logicBlock_visible();
		me._picturediscription_m.logicBlock_visible();
		me.__start_mobile.logicBlock_visible();
		me.__start_desktop.logicBlock_visible();
		el = me._code_element_1;
		;
		player.addListener('activehotspotchanged', function(event) {
			me._picturediscription.logicBlock_visible();
			me._picturediscription_m.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			me._picturediscription.logicBlock_visible();
			me._picturediscription_m.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._pano_prev.logicBlock_visible();
			me._pano_next.logicBlock_visible();
			me._picturediscription.logicBlock_visible();
			me._controller.logicBlock_visible();
			me._picturediscription_m.logicBlock_visible();
			me.__start_mobile.logicBlock_visible();
			me.__start_desktop.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._image_normalscreen_button.logicBlock_visible();
			me._image_fullscreen_button.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._image_normalscreen_button.logicBlock_visible();
			me._image_fullscreen_button.logicBlock_visible();
		});
		player.addListener('tilesready', function(event) {
			me._loader.logicBlock_visible();
			me._loader_m.logicBlock_visible();
		});
		player.addListener('tilesrequested', function(event) {
			me._loader.logicBlock_visible();
			me._loader_m.logicBlock_visible();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		if (me._controller.ggLastIsActive!=me._controller.ggIsActive()) {
			me._controller.ggLastIsActive=me._controller.ggIsActive();
			if (me._controller.ggLastIsActive) {
			} else {
				me._pano_next.onclick.call(me._pano_next);
			}
		}
		me._zoom_in.ggUpdateConditionTimer();
		me._zoom_out.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};