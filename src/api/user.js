import Mock from 'mockjs';

// 数据模板
const template = {
    list: []
  }
   
  // 模拟的API路由
  Mock.mock('/api/items', 'get', () => {
    return Mock.mock(template)
  })
   
  Mock.mock('/api/items', 'post', (req) => {
    const newItem = JSON.parse(req.body)
    template.list?.push(newItem)
    // 添加新项目的逻辑...
    // return { status: 'success', item: newItem }
  })
   
  Mock.mock('/api/items/:id', 'get', (req) => {
    const id = Mock.mock(req.url.split('/').pop())
    // 查询项目的逻辑...
    return { status: 'success', item: template.list.find(item => item.id === id) }
  })
   
  Mock.mock(`/api/items/del`, 'post', (req) => {
      let delItem = JSON.parse(req.body);
      console.log(delItem)
    // if(req.name == '张三'){
    //     template.list.find()
    // }
    // const id = Mock.mock(req.url.split('/').pop())
    // console.log(id)
    template.list = template.list.filter(ei=>{
        return ei.id != delItem.id
    })
    // return { status: 'success', list:template.list }
    // // 删除项目的逻辑...
    // return { status: 'success', id }
  })
   
  Mock.mock('/api/items/:id', 'put', (req) => {
    const id = Mock.mock(req.url.split('/').pop())
    const updatedItem = JSON.parse(req.body)
    // 更新项目的逻辑...
    return { status: 'success', item: { ...updatedItem, id } }
  })

