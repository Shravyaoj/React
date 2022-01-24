import React from "react";
import ReactECharts from "echarts-for-react";
import Styled from "styled-components";
const StyledWrapper = Styled.div`
padding:100px 40px 60px;

width:800px;
`;
const option = {
  title: {
    text: 'Social Facebook',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    type: "category",
    data: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75,2],
    name: 'Fraction of actual speed',
    position: 'right',
    boundaryGap: false,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Social_facebook",
      data: [0, 230, 410, 540, 620, 680, 720, 740, 760],
      type: "line",
      smooth: true,
      symbolSize: 10,
      lineStyle: {
        color: '#870607',
        width: 4,
        type: 'line'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#870607',
        color: '#870607'
      }
    },
  ],
};
const Category = () => {
  return (
    <StyledWrapper>
      <ReactECharts
        option={option}
        style={{ height: "350px", width: "100%" }}
        className="echarts-for-echarts"
        theme="my_theme"
        opts={{renderer: 'svg'}}
      />
    </StyledWrapper>
  );
};

export default Category;
