<!-- # 开始使用 -->

请先[安装](#/doc/installation)本组件库。

### 完整引入

在 main.js 中写入以下内容，就可以将 轱辘ui 完整引入使用：

```
import { createApp } from "vue";
const app = createApp(App);
import guluUI from 'w-gulu-ui';
app.use(guluUI);
```

### Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "w-gulu-ui"
export default {
  components: {Button}
}
</script>
```