#!/bin/bash
# 送信状態確認スクリプト

echo "=== WEBBRIO 自動送信システム 状態確認 ==="
echo ""

# デーモン状態
echo "【デーモン状態】"
if launchctl list | grep -q webbrio; then
    echo "✓ 稼働中"
else
    echo "✗ 停止中"
fi
echo ""

# 送信状態
echo "【送信状態】"
cd /Users/kosai/Desktop/整骨院web/seikotsuin-web/営業
python3 auto_sales_sender.py --status
echo ""

# 最新ログ
echo "【最新ログ（直近5件）】"
if [ -f auto_sender.log ]; then
    tail -5 auto_sender.log
else
    echo "ログファイルなし"
fi
echo ""

# リスト状況
echo "【リスト状況】"
python3 << 'EOF'
import openpyxl
wb = openpyxl.load_workbook('整骨院web_営業リスト_個別営業文付き.xlsx')
auto_count = wb['自動送信可能'].max_row - 1
manual_count = wb['手動送信のみ'].max_row - 1
print(f"自動送信可能: {auto_count}件")
print(f"手動送信のみ: {manual_count}件")
wb.close()
EOF
