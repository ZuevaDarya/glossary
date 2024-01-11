import { MarkerType } from 'react-flow-renderer';

const mindMap = {
  nodes: [
    {
      id: '1',
      position: {x: 0, y: 0},
      data: {label: 'Веб-разработка'},
      type: 'input',
    },
    {
      id: '2',
      position: {x: -450, y: 100},
      data: {label: 'Библиотека'}
    },
    {
      id: '3',
      position: {x: -300, y: 250},
      data: {label: 'WebGL'},
    },
    {
      id: '4',
      position: {x: -50, y: 180},
      data: {label: 'Three.js'},
    },
    {
      id: '5',
      position: {x: 150, y: 250},
      data: {label: 'Веб-сайт'},
    },
    {
      id: '6',
      position: {x: -150, y: 350},
      data: {label: '3D-графика'},
    },
    {
      id: '7',
      position: {x: 280, y: 150},
      data: {label: 'Браузер'},
      type: 'input'
    },
    {
      id: '8',
      position: {x: -150, y: 450},
      data: {label: 'Производительность отрисовки'},
    },
    {
      id: '9',
      position: {x: -350, y: 550},
      data: {label: 'FPS'},
    },
    {
      id: '10',
      position: {x: -150, y: 650},
      data: {label: 'Бэнчмарк-сервис'},
      type: 'output'
    },
    {
      id: '11',
      position: {x: 50, y: 550},
      data: {label: 'Web Vitals'},
      type: 'output'
    },
    {
      id: '12',
      position: {x: -430, y: 415},
      data: {label: 'GPU'},
    },
    {
      id: '13',
      position: {x: -530, y: 650},
      data: {label: 'Stats.js'},
      type: 'output'
    },
    {
      id: '14',
      position: {x: -650, y: 530},
      data: {label: 'GPUStatsPanel.js'},
      type: 'output'
    }
  ],
  edges: [
    {
      id: '1-2',
      source: '1',
      target: '2',
      label: 'Использует',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '2-3',
      source: '2',
      target: '3',
      label: 'Включает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '2-4',
      source: '2',
      target: '4',
      label: 'Включает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '3-4',
      source: '3',
      target: '4',
      label: 'Основан на',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '1-5',
      source: '1',
      target: '5',
      label: 'Создает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '3-6',
      source: '3',
      target: '6',
      label: 'Отрисовывает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '4-6',
      source: '4',
      target: '6',
      label: 'Отрисовывает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '7-5',
      source: '7',
      target: '5',
      label: 'Отображает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '5-6',
      source: '5',
      target: '6',
      label: 'Использует',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '6-8',
      source: '6',
      target: '8',
      label: 'Имеет показатель',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '8-9',
      source: '8',
      target: '9',
      label: 'Определяет',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '8-10',
      source: '8',
      target: '10',
      label: 'Измеряется с помощью',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '8-11',
      source: '8',
      target: '11',
      label: 'Измеряется с помощью',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '6-12',
      source: '6',
      target: '12',
      label: 'Оказывает влияние на',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '2-13',
      source: '2',
      target: '13',
      label: 'Включает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '9-14',
      source: '9',
      target: '13',
      label: 'Измеряется с помощью',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '12-14',
      source: '12',
      target: '14',
      label: 'Измеряется с помощью',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    },
    {
      id: '2-14',
      source: '2',
      target: '14',
      label: 'Включает',
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#000000',
      },
      style: {
        stroke: '#000000',
      },
      type: 'step',
    }
  ]
}

export default mindMap;