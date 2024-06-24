import { ref, watch, onMounted, onUnmounted } from 'vue'

import * as echarts from 'echarts'

var echartData = [
  {
    value: 22,
    name: '智慧公厕'
  },
  {
    value: 33,
    name: '智慧管网'
  },
  {
    value: 44,
    name: '智慧巡逻车'
  },
  {
    value: 32,
    name: '智慧垃圾桶'
  },
  {
    value: 41,
    name: '智慧井盖'
  }
]

const color = ["#ECDF10","#4179FF","#7AF3C2","#FE6F65","#00CBFF"]

echartData.forEach((item, index) => {
  item.itemStyle = {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: color[index] },
      { offset: 1, color: color[index] }
    ])
  }
})

const option = {
  color,
  tooltip: {
    show: true
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  series: [
    {
      type: 'pie',
      minAngle: 5,
      startAngle: 10, //起始角度
      labelLine: {
        show: true,
        length: 10,
        length2: 10,
        lineStyle: {
          width: 2
        }
      },
      label: {
        formatter: (params) => {
          const name = params.name
          return `{f${params.dataIndex + 1}|${params.data.value}}\n{t|${name}}`
        },
        rich: {
          t: {
            color: '#FFF',
            lineHeight: 16,
            fontSize: 14,
            align: 'left'
          },
          ...color.reduce((acc, cur, index) => {
            acc[`f${index + 1}`] = {
              color: cur,
              fontSize: 14,
              align: 'center',
              lineHeight: 14
            }
            return acc
          }, {})
        }
      },
      center: ['50%', '40%'],
      radius: ['20%', '45%'],
      data: echartData
    }
  ]
}

export default function useChart({ el }) {
  const pieChartInstance = ref(null)
  onMounted(() => {
    pieChartInstance.value = echarts.init(el.value)

    pieChartInstance.value.setOption(option)
  })

  onUnmounted(() => {
    pieChartInstance.value.dispose()
  })
}
