1. git init
2. git add
3. git commit -m "注释"
4. git status //查看提交状态
5. git diff // 查看文件变化
6. git log // 查看log
7. git reflog // 查看记录 所有版本
8. git reset --hard HEAD^  // 恢复到某个版本
9. git checkout -- file // 撤销修改回到和版本库一样，或者撤销到添加到暂存区后的状态
10. git rm file => git commit// 删除文件
11. git remote add origin https://github.com/xuanyanghou/system.git  // 关联一个远程仓库 使用https协议 速度慢 每次输入口令和密码
11-1: git remote add origin git@github.com:xuanyanghou/gitkills.git // 使用ssh协议 速度最快
12. git push -u origin master // 第一次推送master分支所有内容
13. git clone https://github.com/xuanyanghou/gitkills.git or git@github.com:xuanyanghou/gitkills.git //clone 一个本地仓库
14. git checkout -b dev // 创建分支 并切换到dev分支  相当于两步  1.git branch <name> 创建  2. git checkout <name> 换到分支
15. git branch // 查看当前分支
16. git checkout master // 切换到主分支
17. git merge dev // 合并分支
18. git branch -d dev // 删除分支
19. 