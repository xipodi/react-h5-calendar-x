# 说明

工作中碰到一个需求：h5的日历选择（react技术线），支持多选，支持快捷选择近7日、30日、工作日，支持周视图，支持手指滑动。拿来主义者我在网上搜到一个最接近的——[https://github.com/TangSY/react-hash-calendar]，其功能有

- 支持手势滑动操作
- 上下滑动 切换 周/月 模式
  > 【周模式中】 左右滑动可切换 上一周/下一周
  > 【月模式中】 左右滑动可切换 上一月/下一月

最主要的问题是不支持多选。那只好站在人家的肩膀上，做一些改造/扩展的工作：

- 支持多选
- 支持选择近n天且符合自定义规则的日期
- 支持点击操作来快速左右切换月份/周

其他改动有：1）defaultDatetime可以为null，代表初始化选择的日期是无。 2）日期多选模式打开，则自动隐藏timePicker-时间选择。3）actionSlot支持函数。  4）支持顶部点击快速左右切换月份/周。

# 安装使用说明

```
npm i react-h5-calendar-x
```
```
import { ReactH5Calendar } from 'react-h5-calendar-x'

function App () {
  return (
    <div className="App">
      <ReactH5Calendar model="inline" />
    </div>
  );
}

export default App;
```

# Demo及Api

简原版见 https://github.com/TangSY/react-hash-calendar/tree/master#readme



本库新增加[|改动]（相比较于原作）有：



| 属性                 | 说明                                                         |                       类型                        | 默认 |
| :------------------- | :----------------------------------------------------------- | :-----------------------------------------------: | :--: |
| monthTitleActionSlot | 控制日历组件顶部左右操作切换月/周的类dom或文案               |          Array<React.ReactNode\|string>           |  -   |
| multiple             | 是否多选                                                     |                      boolean                      |  -   |
| defaultDatetime      | 指定默认时间。                                               |               Date\|undefined\|null               | now  |
| dateClickCallback    | 日历被点击时调用，参数为 { date }。（返回的日期格式取决于 format 属性） | (date: Date｜string, isSelected: boolean) => void |  -   |
| checkedDateOnChange  | 多选模式下，选中的日期发生变化时的回调，参数为所选中的日期数组—— 数组元素格式取决于 format 属性） |     (dateArr: Array<Date \| string>) => void      |  -   |

实例新增几个方法（都是针对“多选模式”）：

（1）选中临近n天（方法内部会执行checkedDateOnChange的回调）

nextSomeDayChecking = (

  days = 7,

  isPast?: boolean,

  includeToday?: boolean

 ) => void



（2）选择以指定条件过滤后的本月的天（方法内部会执行checkedDateOnChange的回调,入参是选中的日期数组）

currentMonthChecking = (

  onlyWorkday?: boolean,

  filterFn?: (checkedDate: any) => boolean

 ) => void



（3）清空所有选中日期（方法内部会执行checkedDateOnChange的回调，入参是空数组）

clearCheckedDate= () => void





## Other

- 如果有其他问题， 或者功能上不兼容的。可以邮件沟通 liubochinabei@163.com，或者 github 提交 issue。

## 打赏

如果觉得可用，那当然好了。小小打赏的二维码见作者头像。[抱拳] [祝美好]
