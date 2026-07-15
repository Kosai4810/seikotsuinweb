#!/bin/bash
# 自動送信デーモン停止スクリプト

PLIST_NAME="com.webbrio.autosender"
PLIST_DST="$HOME/Library/LaunchAgents/$PLIST_NAME.plist"

echo "=== WEBBRIO 自動送信システム 停止 ==="

# ジョブをアンロード
launchctl unload "$PLIST_DST" 2>/dev/null

# plistを削除
rm -f "$PLIST_DST"

echo "自動送信デーモンを停止しました"
