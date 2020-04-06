import React from "react";
import styled from "styled-components";

const Range = styled.input.attrs({ 
  type: 'range'
})`
  position: relative;
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: grab;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #3e768b;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #7ca2b1;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #7ca2b1;
    cursor: grab;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #2497E3;
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: grab;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #2497E3;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #7ca2b1;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #7ca2b1;
    cursor: grab;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: grab;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    background: #2497E3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }

  &::-ms-fill-upper {
    background: #2497E3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }

  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497E3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #3e768b;
    cursor: grab;
  }

  &:focus::-ms-fill-lower,
  &:focus::-ms-fill-upper {
    background: #2497E3;
  }
`;

const Output = styled.span`
  display: flex;
  justify-content: center;
  position: relative;
  width: 15%;
  color: #2497E3;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
`;

const InputRange = ({ value, id, onChange, min, max }) => (
  <div className="col-md-12">
    <div className="row no-gutter">
      <Range name={id} className="form-control-range" min={min} max={max} id={id} onChange={(e) => onChange(e.target.value)} value={value}  />
    </div>
    <div className="row no-gutter justify-content-between">
      <Output htmlFor={id}>{min}</Output>
      <Output htmlFor={id}>{value}</Output>
    </div>
  </div>
)

export default InputRange;