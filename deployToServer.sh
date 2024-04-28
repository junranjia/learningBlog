#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sudo npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@8.222.200.253:/home/www/website/jjr.git master

cd -
