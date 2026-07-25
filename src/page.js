export function getPageHtml() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>WLOC 虚拟定位</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="WLOC">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<link rel="icon" href="data:image/jpeg;base64,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" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
<style>
:root { --blue:#007aff; --green:#34c759; --red:#ff3b30; --gray:#8e8e93; --bg:#f2f2f7; --orange:#ff9500; }
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:-apple-system,system-ui,"SF Pro","Helvetica Neue",sans-serif; background:var(--bg); }
#map { height:50vh; width:100%; min-height:250px; }
.panel { padding:16px; max-width:600px; margin:0 auto; }
.card { background:#fff; border-radius:12px; padding:16px; margin-bottom:12px; box-shadow:0 1px 3px rgba(0,0,0,.08); }
.card h3 { font-size:15px; font-weight:600; margin-bottom:10px; }
.coords { font-family:"SF Mono",monospace; font-size:14px; color:#333; padding:8px 12px; background:var(--bg); border-radius:8px; word-break:break-all; }
.row { display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; }
.btn { flex:1; min-width:100px; padding:12px 16px; border:none; border-radius:10px; font-size:14px; font-weight:500; cursor:pointer; transition:all .15s; }
.btn-primary { background:var(--blue); color:#fff; }
.btn-primary:active { background:#005bb5; transform:scale(.97); }
.btn-secondary { background:#e5e5ea; color:#333; }
.btn-secondary:active { background:#d1d1d6; transform:scale(.97); }
.btn-danger { background:var(--red); color:#fff; }
.btn-danger:active { background:#d63027; transform:scale(.97); }
.btn.success { background:var(--green); color:#fff; }
.btn-sm { flex:none; min-width:auto; padding:6px 12px; font-size:12px; border-radius:8px; }
.input-row { display:flex; gap:8px; margin-top:10px; }
.input-row input { flex:1; padding:10px 12px; border:1px solid #d1d1d6; border-radius:8px; font-size:14px; outline:none; min-width:0; }
.input-row input:focus { border-color:var(--blue); }
.status { font-size:12px; color:var(--gray); margin-top:8px; text-align:center; }
.error-banner { background:var(--red); color:#fff; padding:14px 16px; border-radius:12px; margin-bottom:12px; font-size:14px; line-height:1.5; display:none; }
.error-banner b { display:block; margin-bottom:4px; }
.toast { position:fixed; top:60px; left:50%; transform:translateX(-50%); background:rgba(0,0,0,.8); color:#fff; padding:10px 20px; border-radius:20px; font-size:14px; opacity:0; transition:opacity .3s; pointer-events:none; z-index:9999; max-width:90vw; text-align:center; }
.toast.show { opacity:1; }
.active-loc { background:var(--bg); border-radius:8px; padding:10px 12px; font-size:13px; color:#333; }
.active-loc .label { font-size:11px; color:var(--gray); margin-bottom:4px; }
.active-loc .value { font-family:"SF Mono",monospace; font-size:13px; }
.fav-list { max-height:240px; overflow-y:auto; }
.fav-item { display:flex; align-items:center; gap:8px; padding:10px 12px; background:var(--bg); border-radius:8px; margin-bottom:6px; cursor:pointer; transition:background .15s; }
.fav-item:active { background:#e0e0e5; }
.fav-item .fav-info { flex:1; min-width:0; }
.fav-item .fav-name { font-size:14px; font-weight:500; color:#333; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.fav-item .fav-coords { font-size:11px; color:var(--gray); font-family:"SF Mono",monospace; margin-top:2px; }
.fav-item .fav-active { font-size:10px; color:var(--green); font-weight:600; }
.fav-item .fav-del { flex:none; width:28px; height:28px; border:none; border-radius:50%; background:transparent; color:var(--red); font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .15s; }
.fav-item .fav-del:hover { background:rgba(255,59,48,.1); }
.fav-empty { text-align:center; color:var(--gray); font-size:13px; padding:16px 0; }
.fav-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
.fav-header h3 { margin-bottom:0; }
.modal-overlay { position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,.4); z-index:10000; display:none; align-items:center; justify-content:center; padding:20px; }
.modal-overlay.show { display:flex; }
.modal { background:#fff; border-radius:16px; padding:20px; width:100%; max-width:340px; }
.modal h3 { font-size:17px; font-weight:600; margin-bottom:16px; text-align:center; }
.modal input { width:100%; padding:12px; border:1px solid #d1d1d6; border-radius:10px; font-size:15px; outline:none; margin-bottom:12px; }
.modal input:focus { border-color:var(--blue); }
.modal .modal-btns { display:flex; gap:8px; }
.modal .modal-btns .btn { padding:12px; }
.layer-switch { position:absolute; top:10px; right:10px; z-index:1000; display:flex; gap:4px; background:rgba(255,255,255,.92); border-radius:8px; padding:4px; box-shadow:0 2px 8px rgba(0,0,0,.15); }
.layer-btn { border:none; background:transparent; padding:6px 10px; border-radius:6px; font-size:12px; font-weight:500; color:#333; cursor:pointer; transition:all .15s; white-space:nowrap; }
.layer-btn.active { background:var(--blue); color:#fff; }
.layer-btn:active { transform:scale(.95); }
@media(max-width:480px) { #map { height:44vh; } .panel { padding:12px; } .layer-btn { padding:5px 7px; font-size:11px; } }
</style>
</head>
<body>
<div style="position:relative">
<div id="map"></div>
<div class="layer-switch">
  <button class="layer-btn active" data-layer="satellite" onclick="switchLayer('satellite')">卫星</button>
  <button class="layer-btn" data-layer="wgs84" onclick="switchLayer('wgs84')">WGS84</button>
  <button class="layer-btn" data-layer="amap" onclick="switchLayer('amap')">高德</button>
  <button class="layer-btn" data-layer="voyager" onclick="switchLayer('voyager')">彩色</button>
  <button class="layer-btn" data-layer="standard" onclick="switchLayer('standard')">标准</button>
  <button class="layer-btn" data-layer="dark" onclick="switchLayer('dark')">暗色</button>
</div>
</div>
<div class="panel">
  <div class="error-banner" id="errorBanner">
    <b>模块未生效</b>
    请检查以下配置：<br>
    1. 已安装并启用 WLOC 定位模块<br>
    2. MITM 已开启且信任证书<br>
    3. MITM 主机名包含 gs-loc.apple.com<br>
    4. 当前网络已走代理
  </div>
  <div class="card">
    <h3>选择目标位置</h3>
    <div class="coords" id="coords">点击地图或使用下方工具选择位置</div>
    <div class="row">
      <button class="btn btn-primary" id="saveBtn" onclick="save()">储存到设备</button>
      <button class="btn btn-secondary" onclick="addFav()">收藏位置</button>
      <button class="btn btn-secondary" onclick="locateMe()">当前位置</button>
    </div>
  </div>
  <div class="card">
    <div class="fav-header">
      <h3>收藏的位置</h3>
      <button class="btn btn-sm btn-secondary" onclick="clearAllFav()" id="clearAllBtn" style="display:none">清空全部</button>
    </div>
    <div id="favList" class="fav-list"></div>
  </div>
  <div class="card">
    <h3>当前生效坐标</h3>
    <div class="active-loc" id="activeLoc">
      <div class="label">设备持久化数据 (wloc_settings)</div>
      <div class="value" id="activeValue">查询中...</div>
    </div>
    <div class="row">
      <button class="btn btn-sm btn-secondary" onclick="queryActive()">刷新</button>
      <button class="btn btn-sm btn-danger" onclick="clearActive()">清除数据</button>
    </div>
  </div>
  <div class="card">
    <h3>粘贴地图链接</h3>
    <div class="input-row">
      <input id="urlInput" placeholder="Apple/Google/高德地图链接 或 经纬度" />
      <button class="btn btn-secondary" style="flex:none;min-width:56px" onclick="parseUrl()">解析</button>
    </div>
    <div style="font-size:11px;color:var(--gray);margin-top:6px">支持 Apple Maps · Google Maps · 高德 · 百度 · 坐标文本</div>
  </div>
  <div class="card">
    <h3>搜索地点</h3>
    <div class="input-row">
      <input id="searchInput" placeholder="输入地名（如: 上海外滩）" />
      <button class="btn btn-secondary" style="flex:none;min-width:56px" onclick="searchPlace()">搜索</button>
    </div>
  </div>
  <div class="status" id="status">选好位置后点击「储存到设备」写入代理工具</div>
</div>
<div class="toast" id="toast"></div>
<div class="modal-overlay" id="favModal">
  <div class="modal">
    <h3>收藏此位置</h3>
    <input id="favNameInput" placeholder="输入备注名称（如: 公司、家）" maxlength="30" />
    <div style="font-size:12px;color:var(--gray);margin-bottom:12px;text-align:center" id="favModalCoords"></div>
    <div class="modal-btns">
      <button class="btn btn-secondary" onclick="closeFavModal()">取消</button>
      <button class="btn btn-primary" onclick="confirmFav()">保存</button>
    </div>
  </div>
</div>
<script>
const SAVE_API = 'https://gs-loc.apple.com/wloc-settings/save';
const FAV_KEY = 'wloc_favorites';
let lat = 22.544577, lon = 113.94114;
let selected = false;
let activeLon = null, activeLat = null;

const map = L.map('map').setView([lat, lon], 13);
const tiles = {
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom:19, attribution:'ArcGIS'}),
  wgs84: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {maxZoom:19, attribution:'ArcGIS WGS84'}),
  standard: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'\\u00a9 OSM'}),
  dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {maxZoom:19, attribution:'\\u00a9 Carto'}),
  amap: L.tileLayer('https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {maxZoom:18, subdomains:'1234', attribution:'\\u00a9 高德'}),
  voyager: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {maxZoom:19, attribution:'\\u00a9 Carto'})
};
let currentLayer = tiles.satellite;
currentLayer.addTo(map);
function switchLayer(name) {
  map.removeLayer(currentLayer);
  currentLayer = tiles[name];
  currentLayer.addTo(map);
  document.querySelectorAll('.layer-btn').forEach(b => b.classList.toggle('active', b.dataset.layer === name));
}
let marker = L.marker([lat, lon], {draggable:true}).addTo(map);

marker.on('dragend', e => { const p=e.target.getLatLng(); setPos(p.lat, p.lng); });
map.on('click', e => { setPos(e.latlng.lat, e.latlng.lng); });

function setPos(newLat, newLon) {
  lat = newLat; lon = newLon; selected = true;
  marker.setLatLng([lat, lon]);
  document.getElementById('coords').textContent = '经度 ' + lon.toFixed(6) + '  纬度 ' + lat.toFixed(6);
}

function moveTo(newLat, newLon, zoom) {
  setPos(newLat, newLon);
  map.setView([lat, lon], zoom || 15);
}

function toast(msg, ms) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), ms || 2500);
}

function showError(show) {
  document.getElementById('errorBanner').style.display = show ? 'block' : 'none';
}

/* ---- Favorites (localStorage) ---- */
function getFavs() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch(e) { return []; }
}
function saveFavs(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
}

function renderFavs() {
  const favs = getFavs();
  const el = document.getElementById('favList');
  const clearBtn = document.getElementById('clearAllBtn');
  clearBtn.style.display = favs.length ? '' : 'none';
  if (!favs.length) {
    el.innerHTML = '<div class="fav-empty">暂无收藏，选好位置后点击「收藏位置」</div>';
    return;
  }
  el.innerHTML = favs.map((f, i) => {
    const isActive = activeLon !== null && Math.abs(f.lon - activeLon) < 0.000001 && Math.abs(f.lat - activeLat) < 0.000001;
    return '<div class="fav-item" onclick="loadFav(' + i + ')">' +
      '<div class="fav-info">' +
        '<div class="fav-name">' + escHtml(f.name) + '<\\/div>' +
        '<div class="fav-coords">' + f.lon.toFixed(6) + ', ' + f.lat.toFixed(6) + '<\\/div>' +
        (isActive ? '<div class="fav-active">\\u2713 当前生效<\\/div>' : '') +
      '<\\/div>' +
      '<button class="fav-del" onclick="event.stopPropagation();delFav(' + i + ')" title="删除">\\u00d7<\\/button>' +
    '<\\/div>';
  }).join('');
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function addFav() {
  if (!selected) { toast('请先在地图上选择一个位置'); return; }
  document.getElementById('favModalCoords').textContent = lon.toFixed(6) + ', ' + lat.toFixed(6);
  document.getElementById('favNameInput').value = '';
  document.getElementById('favModal').classList.add('show');
  setTimeout(() => document.getElementById('favNameInput').focus(), 100);
}

function closeFavModal() {
  document.getElementById('favModal').classList.remove('show');
}

function confirmFav() {
  const name = document.getElementById('favNameInput').value.trim();
  if (!name) { toast('请输入备注名称'); return; }
  const favs = getFavs();
  favs.push({ name, lon, lat, time: new Date().toISOString() });
  saveFavs(favs);
  closeFavModal();
  renderFavs();
  toast('已收藏: ' + name);
}

function loadFav(i) {
  const favs = getFavs();
  if (!favs[i]) return;
  moveTo(favs[i].lat, favs[i].lon, 15);
  toast(favs[i].name + ' (' + favs[i].lon.toFixed(4) + ', ' + favs[i].lat.toFixed(4) + ')');
}

function delFav(i) {
  const favs = getFavs();
  if (!favs[i]) return;
  const name = favs[i].name;
  favs.splice(i, 1);
  saveFavs(favs);
  renderFavs();
  toast('已删除: ' + name);
}

function clearAllFav() {
  if (!confirm('确定清空所有收藏？')) return;
  saveFavs([]);
  renderFavs();
  toast('已清空所有收藏');
}

/* ---- Active location query ---- */
function queryActive() {
  const el = document.getElementById('activeValue');
  el.textContent = '查询中...';
  fetch(SAVE_API + '?action=query', { method:'GET', mode:'cors', cache:'no-store' })
    .then(r => r.json())
    .then(d => {
      if (d.success && d.longitude && d.latitude) {
        activeLon = parseFloat(d.longitude);
        activeLat = parseFloat(d.latitude);
        el.textContent = '经度 ' + activeLon.toFixed(6) + '  纬度 ' + activeLat.toFixed(6) + (d.accuracy ? '  精度 ' + d.accuracy + 'm' : '');
        renderFavs();
      } else {
        activeLon = null; activeLat = null;
        el.textContent = '无已保存的坐标';
        renderFavs();
      }
    })
    .catch(() => {
      el.textContent = '查询失败 (需要代理模块支持)';
    });
}

function clearActive() {
  if (!confirm('确定清除设备上已保存的坐标？清除后将使用模块默认参数或停止修改定位。')) return;
  fetch(SAVE_API + '?action=clear', { method:'GET', mode:'cors', cache:'no-store' })
    .then(r => r.json())
    .then(d => {
      if (d.success) {
        activeLon = null; activeLat = null;
        document.getElementById('activeValue').textContent = '已清除';
        renderFavs();
        toast('已清除设备坐标');
      } else { toast('清除失败: ' + (d.error || ''), 3000); }
    })
    .catch(() => { toast('清除失败 - 请检查模块配置', 3000); });
}

/* ---- Save to device ---- */
async function save() {
  if (!selected) { toast('请先在地图上选择一个位置'); return; }
  const btn = document.getElementById('saveBtn');
  btn.textContent = '储存中...'; btn.disabled = true;
  showError(false);
  try {
    const r = await fetch(SAVE_API + '?lon=' + lon + '&lat=' + lat + '&acc=25', {
      method: 'GET', mode: 'cors', cache: 'no-store'
    });
    const d = await r.json();
    if (d.success) {
      activeLon = lon; activeLat = lat;
      btn.textContent = '\\u2713 已储存'; btn.className = 'btn btn-primary success';
      document.getElementById('status').textContent = '\\u2713 已写入: ' + lon.toFixed(6) + ', ' + lat.toFixed(6) + ' \\u00b7 ' + new Date().toLocaleTimeString('zh-CN');
      document.getElementById('activeValue').textContent = '经度 ' + lon.toFixed(6) + '  纬度 ' + lat.toFixed(6) + '  精度 25m';
      renderFavs();
      toast('\\u2713 坐标已写入设备，下次定位生效');
      setTimeout(() => { btn.textContent='储存到设备'; btn.className='btn btn-primary'; btn.disabled=false; }, 2500);
    } else {
      throw new Error(d.error || '写入失败');
    }
  } catch(e) {
    btn.textContent = '储存到设备'; btn.className = 'btn btn-primary'; btn.disabled = false;
    showError(true);
    toast('\\u2717 储存失败 - 请检查模块配置', 4000);
  }
}

function locateMe() {
  if (!navigator.geolocation) return toast('浏览器不支持定位');
  toast('获取位置中...');
  navigator.geolocation.getCurrentPosition(
    pos => { moveTo(pos.coords.latitude, pos.coords.longitude, 16); toast('已获取当前位置'); },
    err => toast('定位失败: ' + err.message, 3000),
    { enableHighAccuracy:true, timeout:10000 }
  );
}

function parseMapUrl(text) {
  let m;
  m = text.match(/ll=([0-9.-]+),([0-9.-]+)/);
  if (m) return { lat: parseFloat(m[1]), lon: parseFloat(m[2]) };
  m = text.match(/@([0-9.-]+),([0-9.-]+)/);
  if (m) return { lat: parseFloat(m[1]), lon: parseFloat(m[2]) };
  m = text.match(/lnglat=([0-9.-]+),([0-9.-]+)/);
  if (m) return { lat: parseFloat(m[2]), lon: parseFloat(m[1]) };
  m = text.match(/(?:location|center)=([0-9.-]+),([0-9.-]+)/);
  if (m) return { lat: parseFloat(m[2]), lon: parseFloat(m[1]) };
  m = text.match(/([0-9]+\\.[0-9]+)[,\\s]+([0-9]+\\.[0-9]+)/);
  if (m) {
    const a = parseFloat(m[1]), b = parseFloat(m[2]);
    if (a < 90 && b > 90) return { lat: a, lon: b };
    if (b < 90 && a > 90) return { lat: b, lon: a };
    return { lat: a, lon: b };
  }
  return null;
}

function parseUrl() {
  const input = document.getElementById('urlInput').value.trim();
  if (!input) return toast('请粘贴地图链接或坐标');
  const result = parseMapUrl(input);
  if (!result) { toast('无法解析坐标，请检查链接格式', 3000); return; }
  moveTo(result.lat, result.lon, 15);
  toast('已解析: ' + result.lon.toFixed(4) + ', ' + result.lat.toFixed(4));
}

async function searchPlace() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return toast('请输入地名');
  toast('搜索中...');
  try {
    const r = await fetch('https://nominatim.openstreetmap.org/search?format=json&limit=1&q='+encodeURIComponent(q));
    const results = await r.json();
    if (!results.length) { toast('未找到: ' + q, 3000); return; }
    const p = results[0];
    moveTo(parseFloat(p.lat), parseFloat(p.lon), 15);
    toast(p.display_name.slice(0, 40));
  } catch(e) { toast('搜索失败', 3000); }
}

document.addEventListener('paste', e => {
  const text = (e.clipboardData||window.clipboardData).getData('text');
  if (text && (text.includes('map') || text.includes('loc') || text.includes('lnglat') || /[0-9]+\\.[0-9]+/.test(text))) {
    document.getElementById('urlInput').value = text;
    setTimeout(parseUrl, 200);
  }
});
document.getElementById('searchInput').addEventListener('keydown', e => { if(e.key==='Enter') searchPlace(); });
document.getElementById('urlInput').addEventListener('keydown', e => { if(e.key==='Enter') parseUrl(); });
document.getElementById('favNameInput').addEventListener('keydown', e => { if(e.key==='Enter') confirmFav(); });

renderFavs();
queryActive();
<\/script>
</body>
</html>`;
}
