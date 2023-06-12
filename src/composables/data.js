// export const originData = {
//   "alias": "通道1解析服务",
//   "endpt": "service-pars_chn1",
//   "host": "192.168.0.8",
//   "params": [
//       {
//           "Value": {
//               "U64": 0
//           },
//           "alias": "下行通路帧缓存(入)",
//           "name": "iq_mchn",
//           "unit": "pkt"
//       },
//       {
//           "Value": {
//               "U64": 0
//           },
//           "alias": "下行通路包缓存(出)",
//           "name": "oq_chnpkt",
//           "unit": "pkt"
//       },
//       {
//           "Value": {
//               "U64": 3393
//           },
//           "alias": "累计下行通路帧",
//           "name": "mchn_frm_cnt",
//           "unit": "pkt"
//       },
//       {
//           "Value": {
//               "U64": 22465
//           },
//           "alias": "累计下行通路包(数量)",
//           "name": "mchn_rpt_cnt",
//           "unit": "pkt"
//       },
//       {
//           "Value": {
//               "U64": 78998
//           },
//           "alias": "累计下行通路包(体积)",
//           "name": "mchn_rpt_size",
//           "unit": "bytes"
//       },
//       {
//           "Value": {
//               "Str": "192.168.0.8"
//           },
//           "alias": "主机地址",
//           "name": "bindaddress"
//       }
//   ],
//   "reporttm": 1686570677
// }

export const originData = {
  "alias": "业务处理服务器",
  "endpt": "machine-bis",
  "host": "192.168.0.7",
  "params": [
      {
          "Value": {
              "Str": "reboots(1), boot(2022-06-21 09:03:29), mem(6MB)"
          },
          "alias": "同步214",
          "name": "同步214"
      },
      {
          "Value": {
              "Str": "reboots(1), boot(2022-06-21 09:03:29), mem(3MB)"
          },
          "alias": "封装后端",
          "name": "封装后端"
      },
      {
          "Value": {
              "Str": "reboots(1), boot(2022-06-21 09:03:30), mem(3MB)"
          },
          "alias": "综合前端",
          "name": "综合前端"
      },
      {
          "Value": {
              "Str": "reboots(1), boot(2022-06-21 09:03:33), mem(3MB)"
          },
          "alias": "综合后端",
          "name": "综合后端"
      },
      {
          "Value": {
              "Str": "availiable(1741GB), capaticy(1787GB), free(1741GB)"
          },
          "alias": "存储状态",
          "name": "disk"
      },
      {
          "Value": {
              "Str": "availiable(243GB), capacity(255GB), load(4%)"
          },
          "alias": "内存负载",
          "name": "mem"
      },
      {
          "Value": {
              "Str": "load(0%)"
          },
          "alias": "计算负载",
          "name": "cpu"
      },
      {
          "Value": {
              "Str": "192.168.0.7"
          },
          "alias": "主机地址",
          "name": "bind-address"
      }
  ],
  "reporttm": 1686565165
}