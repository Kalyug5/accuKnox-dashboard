import React from "react";
import { useSelector } from "react-redux";
import Category from "../../stories/Category";

const Dashboard = () => {
  const { categories, searchList } = useSelector((state) => state.dashboard);

  const fetchData = () => {
    let data;
    if (searchList.length > 0) {
      data = searchList;
    } else {
      data = categories;
    }
    return data;
  };
  return (
    <div className="dashboard">
      {fetchData().map((category, index) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Dashboard;
