#!/bin/bash
# 自動送信デーモン起動スクリプト

PLIST_NAME="com.webbrio.autosender"
PLIST_SRC="/Users/kosai/Desktop/整骨院web/seikotsuin-web/営業/com.webbrio.autosender.plist"
PLIST_DST="$HOME/Library/LaunchAgents/$PLIST_NAME.plist"

echo "=== WEBBRIO 自動送信システム 起動 ==="

# plistをLaunchAgentsにコピー
cp "$PLIST_SRC" "$PLIST_DST"

# 既存のジョブをアンロード（エラーは無視）
launchctl unload "$PLIST_DST" 2>/dev/null

# ジョブをロード
launchctl load "$PLIST_DST"

echo "自動送信デーモンを起動しました"
echo ""
echo "状態確認: launchctl list | grep webbrio"
echo "停止: ./stop_autosender.sh"
echo "ログ確認: tail -f 営業/auto_sender.log"
