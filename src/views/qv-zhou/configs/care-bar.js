import { ref, watch, onMounted, onUnmounted } from 'vue'

import * as echarts from 'echarts'

const data = [
  // 违章停车,渣土车,建筑垃圾倾倒,占道经营,垃圾堆放
  { name: '工地人员', value: 66 },
  { name: '企业人员', value: 47 },
  { name: '服务人员', value: 35 },
  { name: '其他人员', value: 29 }
]

const percent = [
  { percent: '100', warn: '1' },
  { percent: '100', warn: '0' },
  { percent: '100', warn: '1' },
  { percent: '100', warn: '0' }
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
        top: -5,
        left: 80,
        right: 200,
        bottom: 20
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
          label: {
            show: true,
            color: '#F3F4F6',
            position: ['-70', 0],
            align: 'left',
            fontSize: 16,
            formatter: function (params) {
              return params.name
            }
          },
          axisLabel: {},
          itemStyle: {
            normal: {
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
              position: ['105%', 0],
              formatter: function (params) {
                // icon1|● 100 %    icon2|● 66 人
                // return `{icon1|●} ${params.data} {icon2|●}${params.data}`
                return `${data[params.dataIndex].value}人     {icon1|●} ${
                  percent[params.dataIndex].percent
                } %      {icon${percent[params.dataIndex].warn > 0 ? '2' : '1'}|●} ${
                  percent[params.dataIndex].warn
                } 人`
              },
              textStyle: {
                fontSize: 16
              },
              rich: {
                icon1: {
                  width: 10,
                  height: 10,
                  color: '#1AFFFF'
                },
                icon2: {
                  width: 10,
                  height: 10,
                  color: '#E18C03'
                }
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
