# Modal Component Package For React

![mtvk-modal-react]

#### Easy to use modal components!

Easy to use modal components in Reactjs...

- [Installation](#installation)
- [Usage](#USE)
- [Props](#Props)
- [License](#license)
- [Author](#author)

### Installation

```bash
npm i mtvk-modal-react
```

## USE Modal Package

```js
import React from "react";
import Modal from 'mtvk-modal-react'
function App() {
  return (
    <div>
      <h1>This is a test</h1>
      <Modalcomponent type="secondary" size="lg" label="ثبت نام" />
    </div>
  );
}
```

## Props

| props    | defaultValue | description                                              |
| -------- | ------------ | -------------------------------------------------------- |
| type     | null         | select (primary or secondary or null)                    |
| size     | null         | select (lg or md or sm or null)                          |
| onClick  | null         | select (optional function)                               |
| label    | null         | select (optional string)                                 |

### License

MIT

### Author

> Mina Tavakoli