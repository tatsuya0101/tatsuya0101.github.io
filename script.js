// 地図の中心座標とズームレベルを設定
var map = L.map('map').setView([35.6895, 139.6917], 13); // 東京を初期表示

// OpenStreetMap のタイルレイヤーを追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// GeoJSON ファイルを読み込み、地図に追加
fetch('data.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data).addTo(map);
  });
