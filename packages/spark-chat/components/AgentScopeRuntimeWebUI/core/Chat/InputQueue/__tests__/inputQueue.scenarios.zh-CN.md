# 输入队列测试用例

> 语雀参考文档在当前环境返回 BUC SSO 登录页，无法读取正文。以下用例基于当前输入队列实现、组件配置项以及已知业务场景整理。

## 自动化覆盖

| ID     | 场景                       | 前置条件                                          | 操作                               | 预期                                                   |
| ------ | -------------------------- | ------------------------------------------------- | ---------------------------------- | ------------------------------------------------------ |
| IQ-A01 | FIFO 入队和出队            | 空队列                                            | 连续加入 first、second，再出队两次 | 出队顺序为 first、second                               |
| IQ-A02 | 直接发送条件               | loading=false、队列为空、未 drain                 | 判断是否可直接发送                 | 返回 true                                              |
| IQ-A03 | loading 时不直接发送       | loading=true                                      | 判断是否可直接发送                 | 返回 false，应进入入队路径                             |
| IQ-A04 | 队列已有任务时不直接发送   | queueLength>0                                     | 判断是否可直接发送                 | 返回 false，后续输入排到队尾                           |
| IQ-A05 | 队列暂停时不直接发送       | paused=true                                       | 判断是否可直接发送                 | 返回 false                                             |
| IQ-A06 | 非 owner tab 不直接发送    | canExecute=false                                  | 判断是否可直接发送                 | 返回 false，仅允许编辑/排序                            |
| IQ-A07 | 队列满                     | maxSize=1 且已有 1 条                             | 再入队 1 条                        | 返回 full，原队列不变                                  |
| IQ-A08 | 附件消息别名               | 输入包含 fileList                                 | 创建 queued item                   | text/query、attachments/fileList 保持可发送结构        |
| IQ-A09 | 发送失败恢复               | 任务发送失败                                      | restore failed item                | 任务回到队首，状态 failed，自动 drain 被阻塞           |
| IQ-A10 | 重试失败任务               | failed item                                       | retry                              | 状态变回 pending，可再次出队                           |
| IQ-A11 | 删除任务                   | 队列含 q1、q2                                     | 删除 q1                            | 仅剩 q2；删除不存在 id 不影响队列                      |
| IQ-A12 | 拖拽排序                   | 队列含 q1、q2、q3                                 | q3 移到 q1 前                      | 顺序变为 q3、q1、q2                                    |
| IQ-A13 | 编辑 queued query          | failed item                                       | 修改 query                         | query/text 同步更新，状态回 pending                    |
| IQ-A14 | 空队列可清理存储           | 队列为空/非空                                     | 判断 empty                         | 空队列为 true，非空为 false                            |
| IQ-A15 | send-now 命令              | 指定 itemId 和 sourceTabId                        | 创建命令                           | 命令携带 itemId、sourceTabId、createdAt                |
| IQ-A16 | 无 session 不入队          | current/pending/active 均为空                     | 解析 queue session                 | 返回 undefined，用于触发 session-not-ready 提示        |
| IQ-A17 | 初始化会话 route 未回填    | currentSessionId 为空，pendingRouteSessionId 有值 | 解析 route queue session           | 使用 pendingRouteSessionId 作为队列 key                |
| IQ-A18 | active request 兜底        | current/pending 为空，activeSessionId 有值        | 解析 visible queue session         | visible queue 使用 activeSessionId；route queue 仍为空 |
| IQ-A19 | session 优先级             | current、pending、active 同时存在                 | 解析 visible session               | current 优先，其次 pending，再次 active                |
| IQ-A20 | CoPaw temp/realId 稳定 key | tempId 和 realId 都映射到同一 backend session_id  | 分别解析 queue session             | 两者得到同一个 queue key                               |
| IQ-A21 | 切换 session 存储隔离      | session-a 和 session-b 各有队列                   | 分别读写 localStorage key          | 两个 session 的队列互不污染                            |
| IQ-A22 | 多 tab 同 session          | tab-a/tab-b 打开同一 session                      | 比较 storage key 和 owner          | storage key 相同；仅 owner tab 可发送                  |

## 浏览器回归用例

| ID     | 场景                       | 前置条件                                        | 操作                       | 预期                                                |
| ------ | -------------------------- | ----------------------------------------------- | -------------------------- | --------------------------------------------------- |
| IQ-M01 | 初始化对话首条消息         | `/chat` 无 sessionId，队列开启                  | 输入首条消息并发送         | 直接创建会话并发送，不出现队列项                    |
| IQ-M02 | 初始化会话生成中再次输入   | 首条消息已发送，后端/路由尚未产生稳定 sessionId | 再次尝试入队               | 不发起入队，出现“当前会话生成中”提示，输入不被清空  |
| IQ-M03 | 初始化会话 pending id 可用 | createSession 已返回 id，但外部 route 还未回填  | 再次输入                   | 队列绑定 pending id，不落到空 key                   |
| IQ-M04 | realId 回填后队列不丢      | 新会话已有队列，随后 URL 更新到真实 id          | 查看队列                   | 队列仍展示在同一会话，不丢失、不串到其他会话        |
| IQ-M05 | 切换 session 隔离          | session A 有队列，session B 无队列              | 从 A 切到 B，再切回 A      | B 不显示 A 队列；切回 A 队列仍在                    |
| IQ-M06 | 切换时队列任务不写入新会话 | A 正在 drain 队列，用户切到 B                   | 等待队列发送               | A 的任务不渲染到 B；若检测到切换，任务恢复到 A 队列 |
| IQ-M07 | 多 tab 同 session 同步     | 两个标签页打开同一 session                      | tab-a 入队，tab-b 观察     | tab-b 同步显示队列                                  |
| IQ-M08 | 多 tab owner 限制          | tab-a 是 owner，tab-b 同 session                | tab-b 点击发送/立即发送    | tab-b 只能编辑/排序；真实发送由 owner tab 执行      |
| IQ-M09 | owner tab 关闭             | tab-a owner，tab-b 同 session                   | 关闭 tab-a，等待 owner TTL | tab-b 可接管发送                                    |
| IQ-M10 | 暂停/恢复跨 tab 同步       | 同 session 两个 tab                             | tab-a 暂停/恢复            | tab-b 状态同步；暂停时不自动 drain                  |
| IQ-M11 | 队列满提示                 | maxSize 设小                                    | 连续入队到超过上限         | 超限输入不入队，提示 queue full，原队列不变         |
| IQ-M12 | 附件队列                   | 上传成功附件但文本为空                          | 入队并发送                 | 队列显示附件消息，发送体保留 attachments/fileList   |
| IQ-M13 | 失败任务重试               | 模拟请求失败                                    | 点击重试                   | 任务回到 pending 并重新发送                         |
| IQ-M14 | 立即发送                   | 队列中有多条任务                                | 对第二条点击立即发送       | 该任务优先发送，其他任务顺序保持                    |
| IQ-M15 | 清空队列                   | 队列非空                                        | 点击清空                   | 队列清空，localStorage 对应 key 被移除              |
