# マスコット「まるっと」イラスト 発注／生成 仕様

このフォルダに透過PNGを置くだけで、サイトのマスコットが差し替わります。
（コード側は `<Mascot src="/mascot/xxxx.png" />` で参照。src未指定時は仮のSVGが出ます）

## ファイル要件
- **形式**: PNG（背景透過）※できればWebPも可
- **サイズ**: 1024×1024px 以上の正方形、被写体は中央
- **余白**: 上下左右に10〜15%の余白（浮遊アニメで動くため）
- **命名**: 下記のポーズ名で保存

## 用意したいポーズ（最低は①だけでOK。あると嬉しい順）
1. `marutto-wave.png` … 手を振る／こんにちは（Heroメイン）
2. `marutto-hello.png` … 正面・にっこり（汎用）
3. `marutto-point.png` … 何かを指さす／案内（料金・CTA横）
4. `marutto-ok.png` … 親指グッド／安心（FAQ・実績）
5. `marutto-think.png` … 考える・相談（お問い合わせ）

## デザインの方向性（トーンを既存サイトに合わせる）
- 丸くて親しみのある体型（「まるっと」の世界観）
- 配色: クリーム #FFF7EC / 焦げ茶の輪郭 #6B543A / タオル等のアクセントに オレンジ #F5A623
- フラットイラスト、やわらかい線、かわいい系
- 整骨院・治療院を支える「やさしい相棒」感（ケア・安心）

## 画像生成AI用プロンプト例（コピペ用）
> かわいいフラットイラストのマスコットキャラクター、丸くてやわらかい体型のやさしい動物、
> クリーム色の体に焦げ茶色のやわらかい輪郭線、オレンジ色のタオルを首にかけている、
> にっこり笑顔、手を振っているポーズ、正方形、背景透過、余白広め、
> 日本の整骨院・治療院向けの親しみやすいブランドマスコット、
> パステル調、やさしい色使い、ステッカー風、高解像度
>
> （英語例）cute flat illustration mascot character, round soft friendly animal,
> cream-colored body with warm dark-brown soft outline, orange towel around neck,
> gentle smile, waving hello pose, centered, transparent background, generous padding,
> friendly brand mascot for a Japanese osteopathy clinic, pastel palette, sticker style, high resolution

## まばたき等の凝った動きが欲しい場合（任意）
- 目だけを別レイヤーの透過PNG（`marutto-eyes.png`）で用意すると、目パチも実装できます。
- 通常は1枚絵でOK（浮遊・ゆらぎ・カーソル追従・拡大は1枚絵でも動きます）
