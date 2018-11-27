---
order: 2
zh-CN:
	title: 测试
	button: 测试
en-US:
	title: Disabled
	button: Button disabled
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
