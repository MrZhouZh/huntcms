import { ref } from 'vue'
import { originData } from './data'

function getObjFirstItem(obj) {
  return Object.entries(obj)[0]
}

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

export function useTableData() {
  const serviceName = ref('')
  const columns = ref([])
  const dataSource = ref([])

  let row = {}, colsRet = {}, names = []
  row.origin = originData

  for (const [key, value] of Object.entries(originData)) {
    if (key === 'alias') {
      names.push(value)
    }
    if (key === 'reporttm') {
      row.key = value
    }
    if (key === 'params') {
      const reg = /^(\w+)\((.+)\)$/
      let columnKey = ''
      value.forEach(v => {
        colsRet = {
          title: `${v.alias}`,
        }
        if (typeof v.Value.Str !== 'undefined' && reg.test(v.Value.Str)) {
          colsRet.children = []
          
          v.Value.Str.split(',').forEach(curr => {
            const [_, property, propValue] = curr.replace(/^\s|\s$/, '').match(reg) || []
            columnKey = `${v.name}(${property})`
            row[columnKey] = propValue
            colsRet.children.push({
              title: `${property}`,
              dataIndex: columnKey,
              key: columnKey,
            })
          })
        } else {
          columnKey = v.name
          const [_, propValue] = getObjFirstItem(v.Value)
          row[columnKey] = propValue
          
          Object.assign(colsRet, {
            title: `${v.alias}`,
            dataIndex: columnKey,
            key: columnKey,
          })
          
        }
        columns.value.push(colsRet)
      })
    }
  }

  serviceName.value = names.join()

  console.log(columns.value, '-- columns.value')
  console.log(dataSource.value, '-- dataSource.value')

  
  // processColumns.value.filter(cols => {
  //   if (cols.children && cols.children.some(col => [''].(col.dataIndex)))
  // })

  // processDataSource.value.filter(cols => {
  //   // 
  // })


  dataSource.value.push(row)

  return {
    serviceName,
    columns, 
    dataSource,
  }
}
