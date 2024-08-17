import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar, addWidget, removeWidget } from "./dashboardSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { categories, sidebarVisible } = useSelector(
    (state) => state.dashboard
  );

  const [checkedWidgets, setCheckedWidgets] = useState([]);

  const handleWidgetToggle = (categoryId, widget) => {
    if (
      checkedWidgets.some(
        (item) => item.id === widget.id && item.categoryId === categoryId
      )
    ) {
      if (
        checkedWidgets.some(
          (item) => item.id !== widget.id && item.categoryId === categoryId
        )
      )
        setCheckedWidgets(
          checkedWidgets.filter((item) => item.id !== widget.id)
        );
      else if (
        checkedWidgets.some(
          (item) => item.id === widget.id && item.categoryId !== categoryId
        )
      )
        setCheckedWidgets(
          checkedWidgets.filter((item) => item.categoryId !== categoryId)
        );
      else {
        setCheckedWidgets(
          checkedWidgets.filter((item) => item.id !== widget.id)
        );
      }
    } else {
      setCheckedWidgets((prev) => {
        return [
          ...prev,
          {
            id: widget.id,
            categoryId: categoryId,
          },
        ];
      });
    }
  };

  console.log(checkedWidgets);

  const handleRemove = () => {
    checkedWidgets.forEach((item) => {
      dispatch(
        removeWidget({ categoryId: item.categoryId, widgetId: item.id })
      );
    });

    dispatch(toggleSidebar());
  };

  return (
    <div>
      <div className="sidebar-header-cnt">
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
          CNAPP Dashboard
        </div>
        <button onClick={() => dispatch(toggleSidebar())}>category +</button>
      </div>
      <div className={`sidebar ${sidebarVisible ? "active" : ""}`}>
        <div>
          <div className="sidebar-header">Select the widgets for removing</div>
          {categories.map((category) => (
            <div key={category.id} className="category-sidebar">
              <h3>{category.name}</h3>
              {category.widgets.map((widget) => (
                <div key={widget.id} className="widget-sidebar">
                  <input
                    type="checkbox"
                    checked={checkedWidgets.some(
                      (item) =>
                        item.id === widget.id && item.categoryId === category.id
                    )}
                    onChange={() => handleWidgetToggle(category.id, widget)}
                  />
                  <label>{widget.name}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="btn-cnt">
          <button className="cnl-btn" onClick={() => dispatch(toggleSidebar())}>
            Cancel
          </button>
          <button onClick={handleRemove} className="cnf-btn">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
