export const station = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];

export const line = [
  {
    name: '2호선',
    station: ['교대', '강남', '역삼'],
    cost: [
      {
        'ascending-pathway': '교대',
        'descending-pathway': '강남',
        'path-cost': 2,
        'time-cost': 3,
      },
      {
        'ascending-pathway': '강남',
        'descending-pathway': '역삼',
        'path-cost': 2,
        'time-cost': 3,
      },
    ],
  },
  {
    name: '3호선',
    station: ['교대', '남부터미널', '양재', '매봉'],
    cost: [
      {
        'ascending-pathway': '교대',
        'descending-pathway': '남부터미넣',
        'path-cost': 3,
        'time-cost': 2,
      },
      {
        'ascending-pathway': '남부터미널',
        'descending-pathway': '양재',
        'path-cost': 6,
        'time-cost': 5,
      },
      {
        'ascending-pathway': '양재',
        'descending-pathway': '매봉',
        'path-cost': 1,
        'time-cost': 1,
      },
    ],
  },
  {
    name: '신분당선',
    station: ['강남', '양재', '양재시민의숲'],
    cost: [
      {
        'ascending-pathway': '강남',
        'descending-pathway': '양재',
        'path-cost': 2,
        'time-cost': 8,
      },
      {
        'ascending-pathway': '양재',
        'descending-pathway': '양재시민의숲',
        'path-cost': 10,
        'time-cost': 3,
      },
    ],
  },
];
