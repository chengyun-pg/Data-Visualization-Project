import { ref, watch, onMounted, onUnmounted } from 'vue'

import * as echarts from 'echarts'

const data = [
  // 违章停车,渣土车,建筑垃圾倾倒,占道经营,垃圾堆放
  { name: '违章停车', value: 66 },
  { name: '渣土车', value: 34 },
  { name: '建筑垃圾倾倒', value: 12 },
  { name: '占道经营', value: 42 },
  { name: '垃圾堆放', value: 55 }
]
const max = Math.max(...data.map((item) => item.value))

export default function useChart({ el }) {
  const chartInstance = ref(null)
  onMounted(() => {
    chartInstance.value = echarts.init(el.value)
    const options = {
      tooltip: {
        show: false,
        confine: true
      },
      legend: {
        data: [],
        show: false
      },
      grid: {
        top: 2,
        left: 0,
        right: 10,
        bottom: 0
      },
      xAxis: {
        show: false,
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(243,244,246,0.7)'
          }
        },
        splitArea: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        axisTick: 'none',
        axisLine: 'none',
        inverse: true,
        data: data.map((item) => `${item.name}`),
        axisLabel: 'none'
      },
      series: [
        // 横向 进度条 黑色 背景框
        {
          type: 'bar',
          barWidth: 10,
          barCategoryGap: '150%',
          label: {
            show: true,
            offset: [10, -15],
            color: '#F3F4F6',
            position: 'left',
            align: 'left',
            fontSize: 16,
            formatter: function (params) {
              return params.name
            }
          },
          axisLabel: {},
          itemStyle: {
            normal: {
              // barBorderRadius: 5,
              barBorderRadius: [0, 100, 100, 0],
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#0086FF'
                  },
                  {
                    offset: 1,
                    color: '#00FCFE'
                  }
                ],
                global: false
              }
            }
          },
          data: data.map((item) => item.value)
        },

        {
          name: '白框',
          type: 'bar',
          barGap: '-100%',
          data: data.map(() => max),
          barWidth: 10, // 边框 宽度
          itemStyle: {
            normal: {
              color: '#1F3F5E', // 边框颜色
              barBorderRadius: 5 // 边框圆角
            }
          },
          label: {
            normal: {
              color: '#F3F4F6',
              show: true,
              position: ['90%', -15],
              formatter: function (params) {
                return data[params.dataIndex].value
              },
              textStyle: {
                fontSize: 16
              }
            }
          },
          z: 1
        }
      ]
    }
    chartInstance.value.setOption(options)
  })

  onUnmounted(() => {
    // window.removeEventListener('resize', pieChartResize.value);
    chartInstance.value.dispose()
  })
}
