import React from 'react';
import { Icon, Slider } from 'antd';
import 'antd/dist/antd.css';
import './locations.css';
const ConstraintSlider = (({ iconType, value, onChange, text }) => {
  return (
    < section className="" >
      <div className="">
        <Icon className="font-1-5 mr-4" type={iconType} />
        <Slider className="w-100" value={value} min={0} max={60} onChange={onChange} />
      </div>
      <span className="text-center">{text}</span>
    </section >
  );
});

export default ConstraintSlider;