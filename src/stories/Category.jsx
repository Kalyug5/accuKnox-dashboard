import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../components/dashboard/dashboardSlice";
import Widget from "./Widget";

const Category = ({ category }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const dispatch = useDispatch();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleAddWidget = () => {
    const newWidget = {
      id: new Date().getTime(),
      name: widgetName,
      text: widgetText,
    };
    dispatch(addWidget({ categoryId: category.id, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
    closeModal();
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}

        <div className="add-widget-card" onClick={openModal}>
          <div className="add-widget-button">+ Add Widget</div>
        </div>
      </div>

      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2>Add {category.name} Widget</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Widget Name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Widget Text"
                value={widgetText}
                onChange={(e) => setWidgetText(e.target.value)}
              />
            </div>
            <div className="button-group">
              <button className="submit-button" onClick={handleAddWidget}>
                Submit
              </button>
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
