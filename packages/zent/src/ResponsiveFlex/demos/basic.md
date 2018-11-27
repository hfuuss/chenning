---
order: 1
zh-CN:
	title: 基础用法
	button: 移动端响应式列表
en-US:
	title: Basic Usage
	button: ResponsiveFlex
---

```jsx
import { ResponsiveFlex } from 'zent';

ReactDOM.render(
	<ResponsiveFlex gutter={13} rowVolume={3} className="FeedbackDetail__imgs">
    <img
      className="FeedbackDetail__img"
      src={'http://placebeard.it/150/150'}
      alt=""
    />
    <img
      className="FeedbackDetail__img"
      src={'http://placebeard.it/150/150'}
      alt=""
    />
    <img
      className="FeedbackDetail__img"
      src={'http://placebeard.it/150/150'}
      alt=""
    />
</ResponsiveFlex>
	, mountNode
);
```
