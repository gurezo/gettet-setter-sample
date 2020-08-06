## getter / setter sample
TypeScript で作成したクラスの getter/setter がどのように JavaScript にトランスパイルされるかを確認するサンプルです。  
Sample to see how getter/setters of TypeScript created classes are transpiled into JavaScript.

### 事前準備
typescript をグローバルインストールする / install typescript globally
```
npm install -g typescript
```


### ES5 で、トランスパイル
```
$ tsc -t es2015 main.ts
```

### ES2015 で、トランスパイル
```
$ tsc -t es2015 main.ts
```
