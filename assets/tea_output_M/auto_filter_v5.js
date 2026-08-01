(function () {
  if (!window.player) return;

  function getTags(nodeId) {
    var ud = player.getNodeUserData ? player.getNodeUserData(nodeId) : null;
    if (!ud || !ud.tags) return "";
    return Array.isArray(ud.tags) ? ud.tags.join(" ").toLowerCase() : String(ud.tags).toLowerCase();
  }

  function hasTag(tags, key) { return tags.indexOf(key) !== -1; }

  function groupNodes() {
    var all = player.getNodeIds ? player.getNodeIds() : [];
    var mobile = [], desktop = [];
    for (var i = 0; i < all.length; i++) {
      var t = getTags(all[i]);
      if (hasTag(t, "mobile"))  mobile.push(all[i]);
      if (hasTag(t, "desktop")) desktop.push(all[i]);
    }
    return { all: all, mobile: mobile, desktop: desktop };
  }

  function showGroup(keepId, idsToShow, all) {
    var shown = 0;
    for (var i = 0; i < all.length; i++) {
      var id = all[i];
      var on = (idsToShow.indexOf(id) !== -1) || (id === keepId);
      if (player.setNodeVisible) player.setNodeVisible(id, on);
      if (on) shown++;
    }
    if (!shown) for (var j = 0; j < all.length; j++) player.setNodeVisible && player.setNodeVisible(all[j], true);
  }

  function openAndFilter() {
    var g = groupNodes();
    if (!g.all.length) return;
    var vs = player.getViewerSize ? player.getViewerSize() : {width:0, height:0};
    var isMobileLike = vs.height > vs.width; // 判斷螢幕比例
    var targetList = isMobileLike ? (g.mobile.length ? g.mobile : g.desktop)
                                  : (g.desktop.length ? g.desktop : g.mobile);
    var targetId = targetList[0] || g.all[0];
    var current = player.getCurrentNode ? player.getCurrentNode() : null;

    if (targetId && current !== targetId) {
      player.openNext(targetId, null, "fade(0.6)");
      setTimeout(function(){ showGroup(targetId, targetList, g.all); }, 250);
    } else {
      showGroup(targetId || current, targetList, g.all);
    }
  }

  player.addListener && player.addListener("configloaded", openAndFilter);
  player.addListener && player.addListener("sizechanged", openAndFilter);
})();