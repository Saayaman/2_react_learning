Reactのポートフォリオの作り方を順を追って説明しています。
番号はコミットについている番号を反映しています。

### 0. 前回来てない人 OR 宿題終わらなかった人へ

前回のプロジェクトを自分のパソコンにクローンしてください

- `$ git clone https://github.com/Saayaman/1_react_learning.git`
- `$ cd 1_react_learning`
- `$ yarn`

[ここにあるよん](https://github.com/Saayaman/1_react_learning)


### 1. [今日使うパッケージを全部インストールしておこう!](https://github.com/Saayaman/2_react_learning/commit/381044e807246636bce1ef2e5af2c928e9970c69)

#### Npmの場合

```
$ npm i react-media 
$ npm i prop-types
$ npm i classnames
$ npm i react-router
$ npm i react-router-dom
```

#### yarn の場合

```
$ yarn add react-media 
$ yarn add prop-types
$ yarn add classnames
$ yarn add react-router
$ yarn add react-router-dom
```

### 2. [react-mediaでヘッダーのアイコンを見せる](https://github.com/Saayaman/2_react_learning/commit/4280b237fc39a0dfd92049aff1cb723822497891)
コミットの内容通りに作成


### 3-1. [classnamesでクラス名を出しわけする その１](https://github.com/Saayaman/2_react_learning/commit/aa14caf826dca2c5898022fe0041be47478b0c7c)

### 3-2. [classnamesでクラス名を出しわけする その2](https://github.com/Saayaman/2_react_learning/commit/6c7bf8eac57db402adbf36671fa4dc149eda50df)

### 4. [prop-typesでタイプチェッキング](https://github.com/Saayaman/2_react_learning/commit/352580a39cb8a8108b92701939ec2bcc1ddd44ac)

### 5-1. [react-routerでリンクのパスを作る](https://github.com/Saayaman/2_react_learning/commit/53655c2f40c104970d0519f2f23abb95f7065457)



### 5-2. [HeaderのNavにリンクを作る](https://github.com/Saayaman/2_react_learning/commit/d4c845846282ced7f5d73bca763affec2760df8d)

### 5-3. [ヘッダーのメニューにactive cssを加える](https://github.com/Saayaman/2_react_learning/commit/2b7b304df27a0392e1296c89644ef86cb0564f6c)

### 5-4. [Portfolioアイテムの個別ページを作ってリンクさせる](https://github.com/Saayaman/2_react_learning/commit/573937a81172545d4d9a253a9395f4d5babed158)

#### ボーナス問題.　ヘッダーロゴがトップページにリンクされる様にしてください。(答えなし)

### *[css をちょっと直す](https://github.com/Saayaman/2_react_learning/commit/b93521b975f4a9b72513f433217684f832502d6a)

### 6.見ずにやってみよう!!!

**正解は一つじゃないので、自分ができそうな方法で実行して見てください
**ネットを調べてもOK
**デザインの良し悪しは今回は重要じゃないです

#### お題：
Headerのアイコンをボタン化して、クリックしたらドロップダウンが現れるようにしてください。
(スマフォサイズのみです)

#### ヒント： 
ドロップダウンの表示、非表示をコントロールするにはStateが使えます。

ヒントステップ(自分のコミットと順番が違うので注意)
0. スマフォサイズ様にドロップダウンメニューを作ってください
1. メニューボタンがクリックできるようにしてください。
2. ドロップダウンのon/offの状態をトラッキングできる`state`を作ってください。`showDropdown` という名前がいいですね
- (これは on/offの2パターンしかないので、boolean(true or false)です)
3. クリックしたらsetState({})で`state`を
変更してください。
4.showDropdownの状態が　`false`でドロップダウンメニューを非表示、`true`で表示されるようにしてください
