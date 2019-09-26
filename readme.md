# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 样式 一像素细线
```
@mixin setBottomBorder($color:#ccc) {
    & {
        position: relative;
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 1px;
        background: $color;
        transform: scaleY(.5);
    }
}
 @include setBottomBorder(#ccc);
```
##### 城市选择
```
yarn add vant -S

按需引入 main.ts
import { Area } from 'vant';
import 'vant/lib/area/style';
Vue.use(Area);

应用页面
 <van-area :area-list="areaList"  title="请选择地址"  :value="code" @confirm="onAddrConfirm"	@cancel="shut" @change="chenge"/>

  @confirm 确认按钮
  @cancel  取消按钮
  @change  监听事件

 chenge(picker){
     let val=picker.getValues();
     console.log(val)
  }
```