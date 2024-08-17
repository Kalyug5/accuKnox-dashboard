import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 1,
          name: "WorkLoad Alerts",
          text: "Random text for WorkLoad Alerts",
        },
      ],
    },
  ],
  searchList: [],
  sidebarVisible: false,
};

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: initialValue,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(
        (category) => category.id === categoryId
      );
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      category.widgets = category.widgets.filter(
        (widget) => widget.id !== widgetId
      );
    },
    searchWidgets: (state, action) => {
      const { searchQuery } = action.payload;
      if (searchQuery === "") {
        state.searchList = [];
      } else {
        state.searchList = state.categories
          .map((category) => ({
            ...category,
            widgets: category.widgets.filter((widget) =>
              widget.name.toLowerCase().includes(searchQuery)
            ),
          }))
          .filter((category) => category.widgets.length > 0);
      }
    },
  },
});

export const { addWidget, removeWidget, searchWidgets, toggleSidebar } =
  dashBoardSlice.actions;
export default dashBoardSlice.reducer;
