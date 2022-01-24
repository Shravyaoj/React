import React, { useState } from "react";
import Styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const StyledWrapper = Styled.div`
   padding:100px 40px 60px;
   border-radius:10px;
   width:700px;
   .card{
    background-color: #eeeeee6b;
    border-radius: 10px;
    box-shadow: 3px 3px 7px 0 rgb(0 0 0 / 25%);
    padding: 30px 40px 20px 30px;
   }
   form{
    label{
      font-size: 16px;
      font-weight: 700;
      margin: 8px 0px 8px 0px;
      display: inline-block;
      padding: 0;
      &.end-date{
          padding-left: 24px;
          width: calc(50% - 24px);
      }
    }
    input{
      font-size: 15px;
      height:32px;
      margin-bottom: 0;
      margin-top: 6px;
      border-radius: 4px;
      border: 1px solid #cbc9c9;
      padding-left:10px;
      width:100%;
      &:focus{
        outline: none !important;
        border-color:#870607 !important;
      }
    }
   }
   table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin-top:30px;
    input{
      width:auto !important;
    }
  }
  
  td, th {
    text-align: left;
    padding: 8px;
  }
  .btn-block{
    display: flex;
    align-items: center;
    justify-content: end;
    button{
      padding:8px 12px;
      font-size: 14px;
      cursor:pointer;
      margin-top:20px;
      &.primary{
        color:white;
        background:#870607;
        border:1px solid #870607;
        border-radius:4px;
        margin-left:20px;
        &:hover{
          background: #9d2f30;
          border:1px solid #9d2f30;
        }
      }
      &.secondary{
        color:#870607;
        background:white;
        border:1px solid #870607;
        border-radius:4px;
        &:hover{
          box-shadow: 0px 0px 4px 0px #870607;
        }
      }
    }
   
  }
`;
const infoList = [
  {
    id: 1,
    channel: "SEA",
    budget: "",
    keepConsistent: true,
    exclude: false,
  },
  {
    id: 2,
    channel: "Display",
    budget: "",
    keepConsistent: false,
    exclude: false,
  },
  {
    id: 3,
    channel: "Social",
    budget: "",
    keepConsistent: false,
    exclude: false,
  },
  {
    id: 4,
    channel: "Affiliate",
    budget: "",
    keepConsistent: false,
    exclude: false,
  },
  {
    id: 5,
    channel: "Remarketing",
    budget: "",
    keepConsistent: false,
    exclude: false,
  },
];
const Product = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [listData, setListData] = useState(infoList);

  const savePlan = (event) => {
    event.preventDefault();
    // construct result data
    let resultValue = {};
    resultValue["media-plan"] = name;
    resultValue["start-date"] = startDate;
    resultValue["end-date"] = endDate;
    resultValue["list-data"] = listData;
    console.log(resultValue);
  };
  const copyPlan = (event) => {
    event.preventDefault();
    // construct copy data
    let resultValue = {};
    resultValue["media-plan"] = name;
    resultValue["start-date"] = startDate;
    resultValue["end-date"] = endDate;
    resultValue["list-data"] = listData;
    console.log(resultValue);
  };

  const handleKeyPress = (e, index) => {
    // to restrict number for 2 decimal after dot
    var t = e.target.value;
    e.target.value =
      t.indexOf(".") >= 0
        ? t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)
        : t;

    //update budget in listData
    const newDate = [...listData];
    newDate[index].budget = e.target.value;
    setListData(newDate);
  };
  const toggleKeepConsistent = (e, index) => {
    const newCheckboxes = [...listData];
    newCheckboxes[index].keepConsistent = e.target.checked;
    setListData(newCheckboxes);
  };
  const toggleExclude = (e, index) => {
    const newCheckboxes = [...listData];
    newCheckboxes[index].exclude = e.target.checked;
    setListData(newCheckboxes);
  };

  return (
    <StyledWrapper>
      <div className="card">
        <form onSubmit={savePlan}>
          {/* Media Plan */}
          <label className="w-12 ">
            Media Plan
            <input
              className="w-12 "
              placeholder="Enter Media Plan"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          {/* Start Data */}
          <label className="w-6 ">
            Start Date
            <DatePicker
              selected={startDate}
              placeholderText="Select Start Date"
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>

          {/* End Date */}
          <label className="w-6 end-date">
            End Date
            <DatePicker
              selected={endDate}
              placeholderText="Select End Date"
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            />
          </label>

          {/* Table component */}
          <table>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Budget</th>
                <th>Keep Consistent</th>
                <th>Exclude</th>
              </tr>
            </thead>
            <tbody>
              {listData.map((data, index) => (
                <tr key={index}>
                  <td>{data.channel}</td>
                  <td>
                    <input
                      type="number"
                      id="depositedAmount"
                      placeholder="Enter Budget"
                      onChange={(e) => handleKeyPress(e, index)}
                      defaultValue={data.budget}
                    />
                  </td>
                  <td className="text-align-center">
                    <div className="form-group">
                      <input
                        className="checkbox-input"
                        type="checkbox"
                        checked={data.keepConsistent}
                        disabled={data.exclude}
                        onChange={(e) => toggleKeepConsistent(e, index)}
                        id={"keepConsistent" + data.id}
                      />
                      <label
                        htmlFor={"keepConsistent" + data.id}
                        className={data.exclude ? "disabled" : ""}
                      ></label>
                    </div>
                  </td>
                  <td className="text-align-center">
                    <div className="form-group">
                      <input
                        className="checkbox-input"
                        type="checkbox"
                        checked={data.exclude}
                        disabled={data.keepConsistent}
                        onChange={(e) => toggleExclude(e, index)}
                        id={"exclude" + data.id}
                      />
                      <label
                        htmlFor={"exclude" + data.id}
                        className={data.keepConsistent ? "disabled" : ""}
                      ></label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="btn-block">
            <button className="secondary" onClick={(e) => copyPlan(e)}>
              Copy Plan
            </button>
            <button className="primary" type="submit">
              Save Plan
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

export default Product;
