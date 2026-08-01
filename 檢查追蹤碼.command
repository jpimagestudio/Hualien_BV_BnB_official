#!/bin/zsh
# 導覽輸出後的追蹤碼檢查工具
# 用法：從 Pano2VR 重新輸出、拷貝到這個資料夾之後，直接用滑鼠點兩下這個檔案。
# 作用：檢查 index.html 裡的 GA4 追蹤碼在不在，不在就自動補回去。

cd "$(dirname "$0")"
ID="G-6JSJ1S9E27"
F="index.html"

echo "=============================================="
echo "  導覽追蹤碼檢查"
echo "  資料夾：$(pwd)"
echo "=============================================="
echo

if [ ! -f "$F" ]; then
  echo "❌ 找不到 $F，請確認這個工具放在導覽資料夾裡"
  echo; read "?按 Enter 關閉..."; exit 1
fi

if grep -q "$ID" "$F"; then
  echo "✅ 追蹤碼還在，不用做任何事。"
  echo "   可以直接去 GitHub Desktop 提交、推送。"
  echo; read "?按 Enter 關閉..."; exit 0
fi

echo "🔴 追蹤碼不見了（重新輸出時被覆蓋）。正在補回去..."
cp "$F" "$F.bak-$(date +%Y%m%d-%H%M%S)"

python3 - "$F" "$ID" <<'PY'
import sys
p, gid = sys.argv[1], sys.argv[2]
cur = open(p, encoding='utf-8').read().split('\n')
ga4 = [
 f'\t\t<!-- Google tag (gtag.js) — GA4 追蹤（工作室資源 {gid}）。注意：pano2VR 重新輸出會覆蓋本檔，輸出後需重插此段 -->',
 f'\t\t<script async src="https://www.googletagmanager.com/gtag/js?id={gid}"></script>',
 '\t\t<script>',
 '\t\t\twindow.dataLayer = window.dataLayer || [];',
 '\t\t\tfunction gtag(){dataLayer.push(arguments);}',
 "\t\t\tgtag('js', new Date());",
 f"\t\t\tgtag('config', '{gid}');",
 '\t\t</script>',
]
try:
    i = next(n for n, l in enumerate(cur) if 'og:image' in l)
except StopIteration:
    i = next(n for n, l in enumerate(cur) if '<head' in l.lower())
open(p, 'w', encoding='utf-8').write('\n'.join(cur[:i+1] + ga4 + cur[i+1:]))
PY

if grep -q "$ID" "$F"; then
  echo "✅ 已補回追蹤碼。原檔備份在同資料夾（檔名結尾 .bak-日期時間）。"
  echo "   現在可以去 GitHub Desktop 提交、推送。"
else
  echo "❌ 補不回去，請找 Claude 處理，先不要推送。"
fi

echo
read "?按 Enter 關閉..."
