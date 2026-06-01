import {
  Heart,
  Clock,
  Camera,
  FileText,
  Smartphone,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Sparkles,
  Users,
  Star,
  Palette,
  Share2,
  Globe,
  Stethoscope,
  Activity,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "トップ", href: "/" },
  { label: "料金", href: "/pricing" },
  { label: "業種別", href: "/industries" },
  { label: "制作の流れ", href: "/flow" },
  { label: "よくある質問", href: "/faq" },
  { label: "お問い合わせ", href: "/contact" },
];

export const siteConfig = {
  name: "整骨院ウェブ",
  company: "CraftLead",
  url: "https://seikotsuin-web.vercel.app",
  phone: "070-7615-5231",
  phoneHref: "tel:07076155231",
  email: "info@example.com",
  description:
    "整骨院・接骨院・鍼灸院専門の格安ホームページ制作。地域で選ばれる院になるための集客に強いホームページを低価格で制作します。",
};

export const worries = [
  "ホームページを持っていない",
  "古いサイトのまま放置している",
  "スマホで見ると見にくい",
  "新規の患者さんが増えない",
  "検索しても上位に出てこない",
  "予約や問い合わせが少ない",
];

export const reasons = [
  "院の雰囲気や特徴を伝えられる",
  "症状別ページで患者さんを集められる",
  "営業時間・アクセスを見せられる",
  "予約や問い合わせを受けられる",
  "Google検索で見つけてもらえる",
  "口コミや患者様の声を載せられる",
];

export const lowPriceReasons = [
  {
    title: "整骨院業態に特化しているから",
    text: "整骨院・接骨院・鍼灸院で必要になりやすいページ構成や見せ方をあらかじめ整理しています。毎回ゼロから企画しないため、打ち合わせや設計の時間を抑えられます。",
  },
  {
    title: "来院に必要な内容へ絞るから",
    text: "最初から大きなシステムや複雑な機能を入れるのではなく、施術内容、料金、営業時間、アクセス、予約導線を中心に作ります。まず反応を見るための実用的なホームページにすることで、制作費を抑えます。",
  },
];

export const strengths = [
  {
    title: "整骨院業態に特化",
    text: "院の雰囲気、施術の特徴、先生の人柄など、整骨院で見せたい情報を優先して構成します。",
    icon: Heart,
  },
  {
    title: "症状別ページで集客",
    text: "腰痛、肩こり、交通事故など、症状別ページで検索からの流入を増やします。",
    icon: Activity,
  },
  {
    title: "スマホ対応",
    text: "患者さんがスマホで見ても、予約や電話ボタンまですぐ進める設計にします。",
    icon: Smartphone,
  },
  {
    title: "予約・問い合わせ導線つき",
    text: "電話、LINE、フォームをわかりやすく置き、予約につながる流れを作ります。",
    icon: Phone,
  },
  {
    title: "信頼感のあるデザイン",
    text: "清潔感と安心感を伝えるデザインで、「ここなら任せられる」という印象を作ります。",
    icon: Sparkles,
  },
  {
    title: "Googleマップ連携・MEO対策",
    text: "Googleビジネスプロフィールと連携し、地域検索からの集客を強化します。",
    icon: MapPin,
  },
];

export const services = [
  { title: "1ページホームページ制作", icon: FileText },
  { title: "複数ページホームページ制作", icon: Globe },
  { title: "症状別ページ作成", icon: Activity },
  { title: "スマホ対応", icon: Smartphone },
  { title: "予約フォーム設置", icon: Mail },
  { title: "LINE問い合わせ導線", icon: MessageSquare },
  { title: "Googleマップ連携", icon: MapPin },
  { title: "保守、修正対応", icon: Palette },
];

export const plans = [
  {
    name: "ライトプラン",
    price: "39,800円〜",
    summary: "まずはホームページを持ちたい方向け",
    items: [
      "スマホ対応",
      "院紹介・施術内容",
      "営業時間・アクセス",
      "Googleマップ掲載",
    ],
  },
  {
    name: "スタンダードプラン",
    price: "79,800円〜",
    summary: "集客を強化したい方向け・SEO対策込み",
    featured: true,
    items: [
      "ライトプランの内容",
      "症状別ページ（5ページ）",
      "予約・お問い合わせフォーム",
      "患者様の声ページ",
      "SEO対策",
    ],
  },
  {
    name: "保守プラン",
    price: "月額5,500円〜",
    summary: "公開後の修正や管理まで相談",
    items: ["軽微な修正", "画像差し替え", "情報更新", "相談対応", "サイト管理"],
  },
];

export const industries = [
  "整骨院",
  "接骨院",
  "鍼灸院",
  "整体院",
  "カイロプラクティック",
  "スポーツ整骨院",
  "骨盤矯正専門院",
  "産後ケア専門院",
  "訪問マッサージ",
  "訪問鍼灸",
  "美容鍼専門院",
  "リラクゼーションサロン",
];

export const industryPages = [
  {
    slug: "seikotsuin",
    name: "整骨院・接骨院",
    keyword: "整骨院 ホームページ制作",
    lead: "保険診療、交通事故対応、スポーツ外傷など、整骨院・接骨院の強みを伝え、地域で選ばれる院になるサイトを制作します。",
  },
  {
    slug: "shinkyu",
    name: "鍼灸院",
    keyword: "鍼灸院 ホームページ制作",
    lead: "東洋医学の魅力、施術の効果、先生の技術を伝え、鍼灸に興味がある患者さんに響くサイトを作ります。",
  },
  {
    slug: "seitai",
    name: "整体院",
    keyword: "整体院 ホームページ制作",
    lead: "施術の特徴、ビフォーアフター、リラクゼーション要素を伝え、体のケアを求める患者さんを集客します。",
  },
  {
    slug: "sports",
    name: "スポーツ整骨院",
    keyword: "スポーツ整骨院 ホームページ制作",
    lead: "スポーツ障害、パフォーマンス向上、テーピング技術など、アスリートに選ばれる院としてアピールします。",
  },
  {
    slug: "kotsuban",
    name: "骨盤矯正・産後ケア専門院",
    keyword: "骨盤矯正 ホームページ制作",
    lead: "産後の骨盤ケア、姿勢改善など、女性特有のお悩みに特化した院の魅力を伝えます。",
  },
  {
    slug: "houmon",
    name: "訪問マッサージ・訪問鍼灸",
    keyword: "訪問マッサージ ホームページ制作",
    lead: "訪問エリア、対応症状、介護保険対応など、訪問施術の強みを分かりやすく伝えます。",
  },
];

export const areaPages = [
  {
    slug: "tokyo",
    name: "東京",
    keyword: "東京 整骨院 ホームページ制作",
    lead: "競合の多い東京都内でも、院の個性と強みを伝え、地域で選ばれるサイトを作ります。",
  },
  {
    slug: "osaka",
    name: "大阪",
    keyword: "大阪 整骨院 ホームページ制作",
    lead: "大阪府内の整骨院・接骨院向けに、地域密着型のホームページを制作します。",
  },
  {
    slug: "nagoya",
    name: "愛知・名古屋",
    keyword: "名古屋 整骨院 ホームページ制作",
    lead: "愛知県・名古屋市の整骨院向けに、地域検索で上位表示を狙うサイトを設計します。",
  },
  {
    slug: "fukuoka",
    name: "福岡",
    keyword: "福岡 整骨院 ホームページ制作",
    lead: "福岡県内の整骨院・接骨院向けに、スマホから予約しやすいホームページを制作します。",
  },
];

export const columnCards = [
  {
    title: "整骨院にホームページが必要な理由",
    text: "口コミだけに頼らず、新規患者を安定して集客するためのホームページ活用法を解説。",
    href: "/columns",
  },
  {
    title: "症状別ページでSEO対策する方法",
    text: "腰痛、肩こり、交通事故など、症状別ページを作って検索からの流入を増やすコツ。",
    href: "/columns",
  },
  {
    title: "Googleマップで上位表示する方法",
    text: "Googleビジネスプロフィールを活用して、地域検索からの来院を増やす方法。",
    href: "/columns",
  },
];

export const flow = [
  "無料相談",
  "ヒアリング",
  "お見積もり",
  "制作開始",
  "確認・修正",
  "公開",
  "保守・運用サポート",
];

export const faqs = [
  {
    q: "ホームページの知識がなくても大丈夫ですか？",
    a: "はい。文章や構成もこちらでサポートします。先生は施術に集中していただければ大丈夫です。",
  },
  {
    q: "写真がなくても作れますか？",
    a: "はい。必要に応じてフリー素材や簡易的な構成で制作できます。院内写真がある場合は、より魅力的なサイトになります。",
  },
  {
    q: "スマホ対応ですか？",
    a: "はい。スマートフォンでも見やすいデザインで制作します。患者さんの8割以上がスマホで検索しています。",
  },
  {
    q: "予約機能はつけられますか？",
    a: "はい。予約フォームやLINE予約導線を設置できます。既存の予約システムとの連携も相談可能です。",
  },
  {
    q: "保険診療と自費診療、両方載せられますか？",
    a: "はい。保険診療の案内と自費メニューを分かりやすく整理して掲載します。",
  },
  {
    q: "どれくらいで完成しますか？",
    a: "内容によりますが、ライトプランであれば最短1〜2週間程度を想定してください。",
  },
  {
    q: "開業前でも依頼できますか？",
    a: "もちろんです。開業前からホームページを準備しておくことで、オープン時からの集客に繋がります。",
  },
  {
    q: "公開後の修正はできますか？",
    a: "はい。軽微な修正は無料で対応いたします。大幅な変更は別途お見積りします。",
  },
];

export const contactMethods = [
  { label: "電話相談", value: siteConfig.phone, icon: Phone },
  { label: "LINE相談", value: "友だち追加後に相談", icon: MessageSquare },
  { label: "メール相談", value: siteConfig.email, icon: Mail },
];

export const seoKeywords = [
  "整骨院 ホームページ制作",
  "接骨院 ホームページ制作",
  "鍼灸院 ホームページ制作",
  "整体院 ホームページ制作",
  "整骨院 集客",
  "整骨院 Web制作",
  "整骨院 格安 ホームページ",
  "柔道整復師 ホームページ",
];

export const legalBusinessRows = [
  ["販売事業者", "整骨院ウェブ"],
  ["運営責任者", "代表者名を記載してください"],
  ["所在地", "所在地を記載してください"],
  ["電話番号", siteConfig.phone],
  ["メールアドレス", siteConfig.email],
  ["販売価格", "各サービスページに税込または税別の表示を記載します"],
  ["商品代金以外の必要料金", "振込手数料、ドメイン費用、サーバー費用など"],
  ["支払方法", "銀行振込、その他個別に定める方法"],
  ["支払時期", "お申し込み後、請求書に記載の期日まで"],
  ["サービス提供時期", "ヒアリング完了後、個別に定めた制作期間内"],
  ["キャンセル・返金", "制作着手後の返金は原則として対応いたしかねます"],
];

export const quickStats = [
  { value: "39,800円〜", label: "初期制作" },
  { value: "最短1〜2週間", label: "ライトプラン目安" },
  { value: "予約導線対応", label: "電話・LINE・フォーム" },
];

export const pageFeatureIcons = {
  heart: Heart,
  users: Users,
  star: Star,
};
