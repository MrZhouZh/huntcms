import { ref } from 'vue'
import { originData } from './data'

// function getObjFirstItem(obj) {
//   return Object.entries(obj)[0]
// }

// 处理硬件信息
export const hardwareKeys = [
  'disk',
  'mem',
  'cpu',
]

// 处理进程信息
export const processKeys = [
  'reboots',
  'boot',
  'mem',
]

// 对比两个数组
// export function isSubSet(arr1 = [], arr2 = []) {
//   return arr2.every(key => arr1.some(element => element.includes(key)))
// }

/**
 * 重新格式化数据 row & col
 * @param {object} v 源数据
 * @returns {object} { row: object, colChildren: array }
 */
function formatSource(v, reg) {
  let columnKey, row = {}, colChildren = []
  v.Value.Str.split(',').forEach(curr => {
    const [_, property, propValue] = curr.replace(/^\s|\s$/, '').match(reg) || []
    columnKey = `${v.name}(${property})`
    row[columnKey] = propValue
    colChildren.push({
      title: `${property}`,
      dataIndex: columnKey,
      key: columnKey,
    })
  })
  return {
    row, colChildren
  }
}

export function useTableData() {
  const serviceName = ref('')
  // const columns = ref([])
  // const dataSource = ref([])
  
  const hardwareColumns = ref([])
  const hardwareDataSource = ref([])
  const processColumns = ref([])
  const processDataSource = ref([])

  // let row = {}, colsRet = {}
  let names = [], hardwareRow  = {}, hardwareCol = {},
    processRow  = {}, processCol = {}
  // row.origin = originData

  for (const [key, value] of Object.entries(originData)) {
    if (key === 'alias') {
      names.push(value)
    }
    if (key === 'reporttm') {
      // row.key = value
      hardwareRow[key] = processRow[key] = value
    }
    if (key === 'params') {
      const reg = /^(\w+)\((.+)\)$/
      let columnKey = ''
      value.forEach(v => {
        hardwareCol = {}
        processCol = {}
        hardwareCol['flag'] = false
        processCol['flag'] = false
        // 如果 v.name 是硬件状态 (disk/mem/cpu), 则压入硬件信息集合
        if (hardwareKeys.includes(v.name)) {
          hardwareCol['flag'] = true
          hardwareCol['title'] = v.alias
        }
        // colsRet = {
        //   title: `${v.alias}`,
        // }
        if (typeof v.Value.Str !== 'undefined' && reg.test(v.Value.Str)) {
          // 如果 v.Value.Str 主要参数是进程状态 (reboots/boot/mem), 则压入进程信息集合
          if (processKeys.every(k => v.Value.Str.includes(k))) {
            processCol['title'] = v.alias
            processCol['flag'] = true
            processCol['children'] = []
          }
          // colsRet.children = []

          const res = formatSource(v, reg)
          if (hardwareCol['flag']) {
            hardwareCol['title'] = v.alias
            hardwareCol.children = []
            Object.assign(hardwareRow, res.row)
            hardwareCol.children.push(...res.colChildren)
          }

          if (processCol['flag']) {
            Object.assign(processRow, res.row)
            processCol.children.push(...res.colChildren)
          }

          // Object.assign(row, res.row)
          // colsRet.children.push(...res.colChildren)
          // v.Value.Str.split(',').forEach(curr => {
          //   const [_, property, propValue] = curr.replace(/^\s|\s$/, '').match(reg) || []
          //   columnKey = `${v.name}(${property})`
          //   row[columnKey] = propValue
          //   colsRet.children.push({
          //     title: `${property}`,
          //     dataIndex: columnKey,
          //     key: columnKey,
          //   })
          // })
        }
        // else {
        //   columnKey = v.name
        //   const [_, propValue] = getObjFirstItem(v.Value)
        //   row[columnKey] = propValue
          
        //   Object.assign(colsRet, {
        //     title: `${v.alias}`,
        //     dataIndex: columnKey,
        //     key: columnKey,
        //   })
        // }

        
        hardwareCol.flag && hardwareColumns.value.push(hardwareCol)
        processCol.flag && processColumns.value.push(processCol)
        // columns.value.push(colsRet)
      })
    }
  }

  serviceName.value = names.join()

  hardwareDataSource.value.push(hardwareRow)
  processDataSource.value.push(processRow)
  // dataSource.value.push(row)

  // console.log(columns.value, '-- columns.value')
  // console.log(dataSource.value, '-- dataSource.value')

  console.log(hardwareColumns.value, '-- hardwareColumns.value')
  console.log(hardwareDataSource.value, '-- hardwareDataSource.value')

  console.log(processColumns.value, '-- processColumns.value')
  console.log(processDataSource.value, '-- processDataSource.value')

  return {
    serviceName,
    // columns, 
    // dataSource,

    hardwareColumns,
    hardwareDataSource,

    processColumns,
    processDataSource,
  }
}
