import { ref, watch, onMounted, onUnmounted } from 'vue'

import * as echarts from 'echarts'

var echartData = [
  {
    value: 22,
    name: '价值观'
  },
  {
    value: 33,
    name: '压力易感人格'
  },
  {
    value: 44,
    name: '其他'
  },
  {
    value: 32,
    name: '行为习惯'
  },
  {
    value: 41,
    name: '工作驱力'
  }
]

const color = ['#ECDF10', '#4179FF', '#7AF3C2', '#FE6F65', '#00CBFF']

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
    show:true
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  title: {
    text: '风险占比',
    left: 'center',
    top: '40%',
    textStyle: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: 'normal'
    }
  },
  series: [
    {
      type: 'pie',
      minAngle: 5,
      startAngle: 10, //起始角度
      labelLine: {
        show: true,
        length: 6,
        length2: 6,
        lineStyle: {
          width: 2
        }
      },
      label: {
        formatter: (params) => {
          const name = params.name
          return `{f${params.dataIndex + 1}|${params.percent}%}\n{t|${name}}`
        },
        rich: {
          t: {
            color: '#FFF',
            lineHeight: 14,
            fontSize: 12,
            align: 'left'
          },
          ...color.reduce((acc, cur, index) => {
            acc[`f${index + 1}`] = {
              color: cur,
              fontSize: 12,
              align: 'center',
              lineHeight: 12
            }
            return acc
          }, {})
        }
      },
      center: ['50%', '45%'],
      radius: ['30%', '55%'],
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
