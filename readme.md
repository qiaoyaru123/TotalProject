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
