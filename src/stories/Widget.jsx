import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../components/dashboard/dashboardSlice";
const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h3 className="widget_heading">{widget.name}</h3>
      <p className="widget_para">{widget.text}</p>
      <button onClick={handleRemoveWidget}>×</button>
    </div>
  );
};

export default Widget;
