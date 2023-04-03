/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-card': 'rgba(224, 224, 224, 0.5)',
        'text-subtitle': '#3E3E3E',
        'button-text': '#4580BA'
      },
      backgroundColor: {
        'separador': 'rgba(0, 0, 0, 0.23)'
      },
      backgroundImage: {
        'poc': 'url(https://cdn.pixabay.com/photo/2017/09/25/15/08/sunflower-2785420_960_720.jpg)',
        'sol': 'url(https://cdn.pixabay.com/photo/2022/09/11/09/26/sea-7446433_960_720.jpg)',
        'nub': 'url(https://cdn.pixabay.com/photo/2021/09/25/08/18/fields-6654366_960_720.jpg)',
        'mnub': 'url(https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270_960_720.jpg)',
        'llu': 'url(https://cdn.pixabay.com/photo/2016/11/29/05/55/adult-1867665_960_720.jpg)',
        'mllu': 'url(https://cdn.pixabay.com/photo/2016/06/05/20/41/girl-1438138_960_720.jpg)',
        'nie': 'url(https://cdn.pixabay.com/photo/2021/11/30/17/06/tree-6835828_960_720.jpg)',
        'vie': 'url(https://cdn.pixabay.com/photo/2018/10/25/20/54/palm-trees-3773414_960_720.jpg)',
        'ray': 'url(https://cdn.pixabay.com/photo/2016/06/13/22/12/flash-1455285_960_720.jpg)'
      }

    },
  },
  plugins: [],
}

