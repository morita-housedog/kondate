わたしの献立帖（家族共有版）

このフォルダの中身を、まるごとGitHub Pagesなどにアップロードして使います。
くわしい手順は、一緒にお渡しした「セットアップ手順書」を見てください。

ファイルの説明
- index.html / app.js / styles.css … アプリ本体
- manifest.webmanifest / sw.js / icons/ … ホーム画面に追加してアプリとして使うためのファイル
- vendor/ … React・Firebase・文字読み取り（Tesseract）などのライブラリ（オフラインでも動くよう同梱）
- firestore.rules … Firebaseのデータベースに貼り付ける「ルール」

アプリを更新したら、sw.js の VERSION の数字を1つ上げてからアップロードしてください。
