var kan_list =[
    //名前、見た目、タイプ、胸、魅力、足、特徴1または特徴2、性格、髪色、露出度
    ['綾波','少女','クール','胸小さい','お腹','肌色多め','太もも','わき','耳','銀髪系','スカート短め','露出まぁまぁ','まぁまぁえっち'],
    ['ジャベリン','少女','パッション','胸小さい','わき','太もも','肌色多め','髪飾り','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['ラフィー','ロリ','キュート','胸小さい','太もも','絶対領域','耳','鎖骨','髪飾り','銀髪系','スカート短め','露出少ない','すこしえっち'],
    ['Z23','少女','クール','胸普通','わき','太もも','わき','肌色多め','帽子','髪飾り','銀髪系','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['シグニット','ロリ','キュート','胸大きい','絶対領域','ガーター','帽子','アホ毛','銀髪系','スカート短め','露出少ない','まぁまぁえっち'],
    ['ハムマン','ロリ','キュート','胸小さい','絶対領域','耳','髪飾り','銀髪系','スカート短め','露出少ない','すこしえっち'],
    ['ヴァンパイア','ロリ','キュート','胸小さい','太もも','絶対領域','ガーター','おしり','髪飾り','銀髪系','露出多い','すごいえっち'],
    ['ニコラス','ロリ','キュート','胸小さい','太もも','絶対領域','ほくろ','アホ毛','スカート短め','胸元','銀髪系','鎖骨','露出少ない','すこしえっち'],
    ['雪風','ロリ','パッション','胸小さい','お腹','太もも','絶対領域','耳','髪飾り','銀髪系','スカート短め','露出多い','まぁまぁえっち'],
    ['エルドリッジ','ロリ','キュート','胸小さい','太もも','絶対領域','アホ毛','髪飾り','鎖骨','スカート短め','金髪系','露出少ない','まぁまぁえっち'],
    ['夕立','ロリ','パッション','胸普通','お腹','太もも','肌色多め','耳','銀髪系','スカート短め','露出多い','まぁまぁえっち'],
    ['アマゾン','ロリ','パッション','胸小さい','太もも','絶対領域','髪飾り','アホ毛','スカート短め','金髪系','露出少ない','すこしえっち'],
    ['如月','ロリ','キュート','胸小さい','太もも','絶対領域','帽子','耳','スカート短め','露出少ない','すこしえっち'],
    ['睦月','ロリ','キュート','胸小さい','太もも','肌色多め','帽子','耳','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['グリッドレイ','ロリ','パッション','胸小さい','太もも','絶対領域','ガーター','鎖骨','アホ毛','金髪系','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['時雨','ロリ','パッション','胸普通','太もも','肌色多め','おしり','胸元','黒髪系','耳','スカート短め','露出多い','まぁまぁえっち'],
    ['Z46','ロリ','クール','胸小さい','肌色多め','帽子','銀髪系','髪飾り','スカート長め','露出少ない','すこしえっち'],
    ['江風','少女','クール','胸小さい','絶対領域','帽子','銀髪系','鎖骨','耳','スカート短め','露出少ない','すこしえっち'],
    ['ル・トリオンファン','ロリ','パッション','胸普通','絶対領域','髪飾り','太もも','金髪系','わき','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['ル・テメレール','少女','キュート','胸大きい','絶対領域','髪飾り','太もも','金髪系','わき','ガーター','アホ毛','スカート短め','露出少ない','すごいえっち'],
    ['キュラソー','大人','キュート','胸大きい','肌色多め','黒髪系','スカート長め','髪飾り','露出少ない','まぁまぁえっち'],
    ['カーリュー','大人','クール','胸大きい','肌色多め','スカート長め','髪飾り','露出少ない','すこしえっち'],
    ['リアンダー','少女','キュート','胸普通','太もも','ガーター','絶対領域','スカート短め','髪飾り','露出少ない','すこしえっち'],
    ['フェニックス','少女','パッション','胸普通','太もも','おしり','わき','胸元','鎖骨','スカート短め','絶対領域','アホ毛','露出多い','まぁまぁえっち'],
    ['ホノルル','大人','クール','胸大きい','太もも','ガーター','帽子','鎖骨','胸元','絶対領域','スカート短め','露出多い','すごいえっち'],
    ['アキリーズ','少女','パッション','胸普通','太もも','肌色多め','胸元','スカート短め','露出少ない','アホ毛','すこしえっち'],
    ['エイジャックス','少女','クール','胸普通','太もも','肌色少なめ','帽子','スカート短め','露出少ない','すこしえっち'],
    ['ニューカッスル','大人','クール','胸大きい','胸元','肌色少なめ','髪飾り','露出少ない','スカート長め','アホ毛','黒髪系','まぁまぁえっち'],
    ['セントルイス','大人','クール','胸大きい','胸元','絶対領域','太もも','ほくろ','スカート短め','ガーター','髪飾り','露出多い','アホ毛','すごいえっち'],
    ['ライプツィヒ','少女','キュート','胸大きい','おしり','絶対領域','太もも','金髪系','スカート短め','帽子','露出ほどほど','すごいえっち'],
    ['ヘレナ','少女','クール','胸普通','おしり','絶対領域','太もも','アホ毛','スカート短め','髪飾り','露出多い','まぁまぁえっち'],
    ['クリーブランド','少女','パッション','胸小さい','太もも','肌色多め','お腹','金髪系','スカート短め','露出ほどほど','すこしえっち'],
    ['オーロラ','少女','キュート','胸大きい','太もも','絶対領域','ガーター','胸元','おしり','スカート短め','鎖骨','髪飾り','金髪系','露出ほどほど','まぁまぁえっち'],
    ['シェフィールド','少女','クール','胸普通','太もも','絶対領域','ガーター','鎖骨','髪飾り','スカート長め','銀髪系','露出少ない','すこしえっち'],
    ['エディンバラ','大人','パッション','胸普通','肌色多め','鎖骨','髪飾り','銀髪系','スカート短め','メガネ','露出少ない','すこしえっち'],
    ['ベルちゃん','ロリ','クール','胸小さい','肌色少なめ','鎖骨','髪飾り','銀髪系','スカート長め','露出少ない','すこしえっち'],
    ['夕張','ロリ','キュート','胸普通','絶対領域','鎖骨','太もも','おしり','髪飾り','黒髪系','スカート短め','耳','アホ毛','露出ほどほど','まぁまぁえっち'],
    ['神通','大人','クール','胸大きい','肌色多め','鎖骨','胸元','太もも','髪飾り','スカート短め','耳','露出ほどほど','すごいえっち'],
    ['最上','少女','クール','胸大きい','絶対領域','わき','太もも','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['逸仙','大人','クール','胸大きい','絶対領域','おしり','太もも','お腹','髪飾り','スカートはいてない','胸元','黒髪系','露出ほどほど','すごいえっち'],
    ['寧海','ロリ','キュート','胸大きい','太もも','肌色多め','髪飾り','胸元','アホ毛','黒髪系','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['平海','ロリ','クール','胸小さい','太もも','肌色多め','髪飾り','胸元','アホ毛','黒髪系','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['サンディエゴ','少女','パッション','胸普通','太もも','絶対領域','鎖骨','ガーター','髪飾り','胸元','アホ毛','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['ベルファスト','大人','クール','胸大きい','肌色少なめ','胸元','鎖骨','髪飾り','銀髪系','スカート長め','露出少ない','まぁまぁえっち'],
    ['シリアス','大人','クール','胸大きい','絶対領域','胸元','鎖骨','髪飾り','太もも','銀髪系','スカート短め','露出ほどほど','すごいえっち'],
    ['ネプチューン','少女','キュート','胸大きい','肌色少なめ','胸元','鎖骨','わき','髪飾り','太もも','スカート長め','露出少ない','まぁまぁえっち'],
    ['モントピリア','少女','クール','胸小さい','絶対領域','髪飾り','太もも','露出少ない','スカートはいてない','銀髪系','すこしえっち'],
    ['ブルックリン','大人','クール','胸大きい','絶対領域','ガーター','褐色','アホ毛','髪飾り','スカート短め','太もも','露出多い','すごいえっち'],
    ['ポートランド','少女','パッション','胸大きい','肌色多め','胸元','鎖骨','アホ毛','髪飾り','スカート短め','太もも','銀髪系','露出多い','まぁまぁえっち'],
    ['ケント','少女','パッション','胸大きい','肌色多め','わき','アホ毛','髪飾り','太もも','スカート短め','銀髪系','露出ほどほど','まぁまぁえっち'],
    ['サフォーク','少女','キュート','胸大きい','絶対領域','わき','胸元','ガーター','髪飾り','鎖骨','スカート短め','露出少ない','まぁまぁえっち'],
    ['インディアナポリス','少女','クール','胸普通','肌色多め','お腹','褐色','アホ毛','髪飾り','スカート短め','露出多い','まぁまぁえっち'],
    ['ウィチタ','大人','クール','胸大きい','絶対領域','お腹','ガーター','アホ毛','胸元','髪飾り','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['ロンドン','少女','クール','胸普通','肌色多め','メガネ','アホ毛','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['エクセター','大人','クール','胸大きい','肌色少なめ','胸元','帽子','鎖骨','黒髪系','露出少ない','まぁまぁえっち'],
    ['ヨーク','少女','パッション','胸大きい','絶対領域','太もも','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['ドイッチュラント','少女','クール','胸普通','肌色多め','胸元','ほくろ','帽子','黒髪系','スカートはいてない','露出少ない','すこしえっち'],
    ['アドミラル・グラーフ・シュペー','少女','クール','胸普通','肌色多め','太もも','銀髪系','スカート短め','露出少ない','すこしえっち'],
    ['アドミラル・ヒッパー','少女','パッション','胸小さい','絶対領域','ほくろ','太もも','金髪系','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['高雄','大人','クール','胸大きい','肌色少なめ','太もも','黒髪系','耳','髪飾り','スカート短め','露出少ない','すごいえっち'],
    ['愛宕','大人','キュート','胸大きい','絶対領域','太もも','ほくろ','ガーター','黒髪系','耳','髪飾り','スカート短め','露出少ない','すごいえっち'],
    ['摩耶','大人','クール','胸小さい','肌色多め','太もも','お腹','銀髪系','耳','スカート短め','露出ほどほど','すこしえっち'],
    ['鳥海','大人','キュート','胸大きい','太もも','絶対領域','髪飾り','ほくろ','黒髪系','耳','スカート短め','露出少ない','すごいえっち'],
    ['プリンツ・オイゲン','大人','クール','胸大きい','太もも','おしり','ガーター','髪飾り','ほくろ','銀髪系','スカート短め','アホ毛','露出ほどほど','すごいえっち'],
    ['鈴谷','少女','キュート','胸大きい','太もも','肌色少なめ','ツノ','髪飾り','胸元','黒髪系','スカート短め','露出少ない','すごいえっち'],
    ['ミネアポリス','少女','パッション','胸普通','太もも','肌色多め','お腹','おしり','髪飾り','褐色','スカート短め','銀髪系','露出多い','すごいえっち'],
    ['伊吹','少女','クール','胸大きい','太もも','絶対領域','お腹','わき','ツノ','髪飾り','スカート短め','露出ほどほど','すごいえっち'],
    ['ローン','大人','クール','胸大きい','太もも','肌色多め','髪飾り','胸元','スカート短め','露出少ない','まぁまぁえっち'],
    ['サン・ルイ','大人','クール','胸大きい','太もも','肌色少なめ','ほくろ','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['レパルス','少女','パッション','胸普通','太もも','絶対領域','お腹','髪飾り','鎖骨','黒髪系','スカート短め','露出ほどほど','すこしえっち'],
    ['レナウン','少女','クール','胸小さい','太もも','絶対領域','お腹','髪飾り','金髪系','スカート短め','露出ほどほど','すこしえっち'],
    ['ダンケルク','大人','クール','胸大きい','太もも','絶対領域','胸元','鎖骨','髪飾り','銀髪系','スカート短め','露出少ない','まぁまぁえっち'],
    ['フッド','大人','クール','胸普通','肌色少なめ','帽子','金髪系','スカート長め','露出少ない','すこしえっち'],
    ['天城','大人','クール','胸大きい','肌色少なめ','耳','黒髪系','髪飾り','スカートはいてない','露出少ない','すこしえっち'],
    ['アリゾナ','大人','クール','胸普通','太もも','ガーター','絶対領域','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['クイーン・エリザベス','ロリ','キュート','胸小さい','太もも','絶対領域','髪飾り','お腹','鎖骨','金髪系','スカート短め','露出ほどほど','すこしえっち'],
    ['ネルソン','大人','クール','胸大きい','太もも','絶対領域','髪飾り','おしり','金髪系','スカート短め','露出ほどほど','すごいえっち'],
    ['ロドニー','大人','キュート','胸大きい','太もも','絶対領域','胸元','わき','鎖骨','銀髪系','スカート短め','露出ほどほど','すごいえっち'],
    ['陸奥','ロリ','パッション','胸小さい','絶対領域','わき','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['ワシントン','大人','パッション','胸大きい','肌色少なめ','お腹','胸元','ほくろ','わき','髪飾り','銀髪系','スカート短め','露出ほどほど','すごいえっち'],
    ['サウスダコタ','大人','クール','胸大きい','絶対領域','褐色','胸元','鎖骨','わき','髪飾り','黒髪系','スカートはいてない','露出多い','すごいえっち'],
    ['ウォースパイト','ロリ','クール','胸小さい','肌色多め','太もも','髪飾り','金髪系','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['デューク・オブ・ヨーク','大人','クール','胸大きい','肌色少なめ','太もも','胸元','スカート短め','露出ほどほど','すごいえっち'],
    ['プリンス・オブ・ウェールズ','大人','クール','胸大きい','絶対領域','太もも','金髪系','スカート短め','露出少ない','すこしえっち'],
    ['三笠','大人','パッション','胸普通','肌色多め','太もも','ツノ','鎖骨','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['長門','ロリ','キュート','胸小さい','肌色多め','鎖骨','耳','太もも','髪飾り','黒髪系','スカート短め','露出ほどほど','すこしえっち'],
    ['ティルピッツ','大人','クール','胸大きい','絶対領域','太もも','帽子','銀髪系','スカート短め','露出少ない','すこしえっち'],
    ['ジャン・バール','大人','クール','胸普通','肌色多め','太もも','胸元','黒系','鎖骨','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['モナーク','大人','クール','胸大きい','絶対領域','太もも','帽子','おしり','スカート短め','露出少ない','まぁまぁえっち'],
    ['出雲','大人','クール','胸大きい','絶対領域','太もも','ツノ','髪飾り','おしり','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['マサチューセッツ','大人','クール','胸大きい','肌色多め','太もも','褐色','胸元','お腹','銀髪系','鎖骨','髪飾り','露出多い','すごいえっち'],
    ['オクラホマ','大人','パッション','胸大きい','肌色多め','太もも','胸元','アホ毛','銀髪系','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['山城','少女','キュート','胸大きい','絶対領域','太もも','わき','耳','黒髪系','髪飾り','スカートはいてない','露出ほどほど','まぁまぁえっち'],
    ['扶桑','少女','クール','胸大きい','絶対領域','太もも','胸元','鎖骨','耳','黒髪系','髪飾り','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['ノースカロライナ','大人','クール','胸大きい','肌色少なめ','太もも','胸元','鎖骨','金髪系','髪飾り','スカート短め','露出少ない','まぁまぁえっち'],
    ['レキシントン','大人','クール','胸大きい','絶対領域','お腹','太もも','ガーター','わき','髪飾り','スカート短め','露出少ない','まぁまぁえっち'],
    ['サラトガ','ロリ','キュート','胸小さい','肌色少なめ','わき','髪飾り','太もも','アホ毛','スカート短め','露出少ない','すこしえっち'],
    ['ヨークタウン','大人','クール','胸大きい','肌色少なめ','胸元','銀髪系','鎖骨','スカート長め','露出少ない','すこしえっち'],
    ['ホーネット','少女','パッション','胸大きい','絶対領域','太もも','胸元','お腹','金髪系','帽子','スカートはいてない','露出多い','すごいえっち'],
    ['アーク・ロイヤル','大人','クール','胸大きい','絶対領域','太もも','胸元','ガーター','黒髪系','鎖骨','スカート短め','露出少ない','まぁまぁえっち'],
    ['蒼龍','大人','クール','胸大きい','絶対領域','太もも','メガネ','黒髪系','耳','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['飛龍','大人','パッション','胸普通','肌色多め','太もも','銀髪系','耳','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['エンタープライズ','大人','クール','胸大きい','絶対領域','太もも','銀髪系','わき','帽子','スカート短め','露出少ない','すこしえっち'],
    ['エセックス','大人','クール','胸大きい','肌色少なめ','太もも','胸元','髪飾り','スカート短め','露出少ない','まぁまぁえっち'],
    ['シャングリラ','大人','クール','胸大きい','肌色多め','太もも','胸元','メガネ','髪飾り','スカート短め','露出少ない','まぁまぁえっち'],
    ['イラストリアス','大人','クール','胸大きい','絶対領域','太もも','ほくろ','胸元','ガーター','帽子','髪飾り','スカート短め','露出ほどほど','すごいえっち'],
    ['ヴィクトリアス','大人','パッション','胸大きい','太もも','お腹','胸元','わき','髪飾り','金髪系','髪飾り','スカートはいてない','露出多い','すごいえっち'],
    ['赤城','大人','キュート','胸大きい','太もも','胸元','絶対領域','耳','黒髪系','スカート短め','露出ほどほど','すごいえっち'],
    ['加賀','大人','クール','胸普通','肌色多め','胸元','鎖骨','耳','銀髪系','スカート短め','露出ほどほど','まぁまぁえっち'],
    ['翔鶴','大人','クール','胸大きい','絶対領域','ほくろ','太もも','おしり','髪飾り','銀髪系','スカート短め','露出少ない','まぁまぁえっち'],
    ['瑞鶴','大人','パッション','胸大きい','肌色多め','太もも','髪飾り','黒髪系','スカート短め','露出少ない','すこしえっち'],
    ['大鳳','大人','キュート','胸大きい','絶対領域','太もも','胸元','鎖骨','髪飾り','スカート短め','黒髪系','露出ほどほど','すごいえっち'],
    ['グラーフ・ツェッペリン','大人','クール','胸大きい','肌色多め','太もも','胸元','帽子','スカート短め','銀髪系','露出少ない','まぁまぁえっち'],
    ['ラングレー','ロリ','キュート','胸小さい','肌色少なめ','太もも','メガネ','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['レンジャー','大人','キュート','胸大きい','絶対領域','太もも','胸元','髪飾り','スカート短め','露出少ない','すごいえっち'],
    ['ハーミーズ','少女','パッション','胸普通','絶対領域','銀髪系','髪飾り','スカート短め','露出少ない','すこしえっち'],
    ['ロング・アイランド','少女','キュート','胸普通','肌色多め','太もも','黒髪系','髪飾り','スカートはいてない','露出多い','まぁまぁえっち'],
    ['祥鳳','ロリ','パッション','胸小さい','肌色多め','太もも','銀髪系','スカート短い','露出少ない','すこしえっち'],
    ['ユニコーン','ロリ','キュート','胸普通','肌色少なめ','わき','髪飾り','アホ毛','スカート長い','露出少ない','すこしえっち'],
    ['セントー','大人','キュート','胸大きい','肌色多い','太もも','わき','胸元','髪飾り','金髪系','アホ毛','スカート短い','髪飾り','おしり','露出多い','すごいえっち'],
    ['エレバス','ロリ','クール','胸小さい','絶対領域','帽子','スカート短い','銀髪系','露出少ない','すこしえっち'],
    ['テラー','ロリ','キュート','胸普通','肌色多め','髪飾り','スカート短い','鎖骨','アホ毛','銀髪系','露出少ない','すこしえっち'],
    ['アバークロンビー','ロリ','パッション','胸小さい','絶対領域','太もも','髪飾り','スカート短い','金髪系','露出少ない','すこしえっち'],
    ['ヴェスタル','少女','キュート','胸大きい','絶対領域','太もも','ガーター','髪飾り','帽子','スカート短い','露出少ない','まぁまぁえっち'],
    ['明石','ロリ','キュート','胸小さい','肌色多め','耳','髪飾り','鎖骨','ほくろ','スカート短い','露出少ない','すこしえっち'],
    ['伊58','ロリ','クール','胸小さい','肌色多め','おしり','わき','髪飾り','太もも','黒髪系','アホ毛','スカートはいてない','露出多い','まぁまぁえっち'],
    ['アルバコア','ロリ','パッション','胸小さい','肌色多め','おしり','鎖骨','胸元','髪飾り','太もも','金髪系','アホ毛','スカートはいてない','露出多い','すごいえっち'],
    ['伊19','ロリ','キュート','胸大きい','髪飾り','太もも','耳','おしり','鎖骨','スカートはいてない','露出多い','すごいえっち'],
    ['U-47','少女','クール','胸大きい','髪飾り','太もも','耳','おしり','わき','胸元','黒髪系','スカートはいてない','露出多い','すごいえっち'],
    ['伊26','ロリ','パッション','胸普通','太もも','肌色多め','耳','お腹','鎖骨','わき','黒髪系','褐色','スカートはいてない','露出多い','すごいえっち'],
    ['デイス','ロリ','パッション','胸普通','太もも','肌色多め','胸元','お腹','髪飾り','わき','スカートはいてない','露出多い','すごいえっち'],
];

var toi_list =[
    ['質問１','「好みのタイプ」','ロリ、幼い','少女、中高生','大人、お姉さん'],
    ['質問２','「好みの属性」','キュート','クール','パッション'],
    ['質問３','「胸の大きさ」','大きいほうがイイ！','普通で大丈夫です','小さいほうがイイ！'],
    ['質問４','「足のこだわり」','絶対領域！','肌色多め！','肌色少なめ！'],
    ['質問５','「好みの部位(1)」','おなか！','わき！','太もも！'],
    ['質問６','「好みの部位(2)」','胸元！','鎖骨！首周り！','おしり！'],
    ['質問７','「見た目(1)」','ケモ耳、つけ耳','帽子','ツノ'],
    ['質問８','「見た目(2)」','メガネ','アホ毛','髪留め、髪飾り'],
    ['質問９','「見た目(3)」','ほくろ','ガーター','褐色'],
    ['質問１０','「スカートの長さ」','スカート長め','スカート短め','スカートはいてない'],
    ['質問１１','「好みの髪色」','銀、白系','金、黄系','地味、黒系'],
    ['質問１２','「露出度」','多いほうがイイ！','ほどほど、普通で！','少ないほうがイイ！'],
    ['質問１３','「えっち度」','すごいえっち！','まぁまぁえっち！','すこしえっち！'],
];

var toi_henkan=[
    ['ロリ','少女','大人'],
    ['キュート','クール','パッション'],
    ['胸大きい','胸普通','胸小さい'],
    ['絶対領域','肌色多め','肌色少なめ'],
    ['お腹','わき','太もも'],
    ['胸元','鎖骨','おしり'],
    ['耳','帽子','ツノ'],
    ['メガネ','アホ毛','髪飾り'],
    ['ほくろ','ガーター','褐色'],
    ['スカート長め','スカート短め','スカートはいてない'],
    ['銀髪系','金髪系','黒髪系'],
    ['露出多い','露出ほどほど','露出少ない'],
    ['すごいえっち','まぁまぁえっち','すこしえっち'],
];

var toi_n = 0;
var kaitou = [];
var vs_area01 = document.getElementById("vs_first");
var vs_area02 = document.getElementById("vs_second");
var vs_area03 = document.getElementById("vs_thaad");
var text_area01 = document.getElementById("name_area01");
var text_area02 = document.getElementById("name_area02");
var text_area03 = document.getElementById("name_area03");
var text_area04 = document.getElementById("name_area04");

function toiset(){
    vs_area01.textContent = toi_list[toi_n][0];
    vs_area02.textContent = toi_list[toi_n][1];
    text_area01.textContent = toi_list[toi_n][2];
    text_area02.textContent = toi_list[toi_n][3];
    text_area03.textContent = toi_list[toi_n][4];
}

function kaitouset(button){
    if(button!=4){
        kaitou.push(toi_henkan[toi_n][button-1]);
    }
    toi_n++;
    if(toi_n==13){
        resultset();
    }else{
        toiset();
    }
}
var hantei = [];
var rankdeta = "";
function resultset(){
    hantei = [];
    for(var i=0; i<kan_list.length; i++){
        var math = 0;
        for(var p=0; p<kaitou.length; p++){
            for(var o=1; o<kan_list[i].length; o++){
                if(kan_list[i][o]==kaitou[p]){
                    math++;
                }
            }
        }
        hantei.push([kan_list[i][0],math]);
    }
    hantei.sort(function(a, b){
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        return 0;
    });
    rankdeta = "";
    for(var d=1; d<10; d++){
        rankdeta = rankdeta+d+'位：'+hantei[d-1][0]+'('+hantei[d-1][1]+')<br>';
    }

    document.getElementById("result_box").textContent = "";
    document.getElementById("result_box").insertAdjacentHTML('afterbegin','<strong>選んだ選択肢</strong><br>'+'['+kaitou+']<br><br>'+'<strong>マッチした艦船</strong>'+'<br>'+rankdeta);
    document.getElementById("az_content").style.display="none";
    document.getElementById("result_area").style.display="block";

twion();
}

var shareUrl = "https://az-royalojisann.hatenablog.com/entry/";
var targetId = "tweet1";
//var message = 'アズレンマッチング！'+'\n'+'\n'+'マッチした艦船'+'\n'+'１位：'+hantei[0][0]+'\n'+'２位：'+hantei[1][0]+'\n'+'３位：'+hantei[2][0]+'\n'+'４位：'+hantei[3][0]+'\n'+'５位：'+hantei[4][0]+'\n'+'アズールレーン'+'\n';
var hashtag = "アズールレーン";

// Twitterの初期化
var d = document;
var s = 'script';
var id = 'twitter-wjs';
var js, fjs = d.getElementsByTagName(s)[0];
if (!d.getElementById(id)) {
 js = d.createElement(s);
 js.id = id;
 js.src = 'https://platform.twitter.com/widgets.js';
 fjs.parentNode.insertBefore(js, fjs);
}
function twion(){
// twttrの初期化(platform.twitter.com/widgets.jsの完了)が未だなら待つ。
function callAfterTwitterInitialization(callback){
if(typeof twttr !== "undefined"){
 callback();
} else {
 setTimeout(function(){
     callAfterTwitterInitialization(callback);
 }, 100);
}
}
 
// twttrが使えるようになったらシェアボタンを作る。
callAfterTwitterInitialization(function(){
$('#' + targetId).empty();
twttr.widgets.createShareButton(
 shareUrl,
 document.getElementById(targetId),
 {
   count: 'none',
   text: '#アズレンマッチング！'+'\n'+'\n'+'マッチした艦船'+'\n'+'１位：'+hantei[0][0]+'\n'+'２位：'+hantei[1][0]+'\n'+'３位：'+hantei[2][0]+'\n'+'４位：'+hantei[3][0]+'\n'+'５位：'+hantei[4][0]+'\n'+'#アズールレーン'+'\n',
   size: "large",
   hashtags: "",
 });
});
}

function retry(){
    document.getElementById("az_content").style.display="block";
    document.getElementById("result_area").style.display="none";
    toi_n = 0;
    kaitou = [];
    hantei = [];
    toiset();
}
