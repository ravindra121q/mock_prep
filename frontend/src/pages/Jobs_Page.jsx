import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_Data_Handler } from "../redux/GET_Data_Reducer/action";
import { store } from "../redux/store";

export const Jobs_Page = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const Data = useSelector((store) => store.GET_DATA_REDUCER.data);
  const isLoading = useSelector((store) => store.GET_DATA_REDUCER.isLoading);
  // const [newData, setNewData] = useState(Data);
  useEffect(() => {
    dispatch(Get_Data_Handler(page));
  }, [dispatch, page]);
  return (
    <div>
      <h2>Job List</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {isLoading
          ? "Loading..."
          : Data.length > 0 &&
            Data.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid black",
                  width: "60%",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 20px 0 20px",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    // border: "1px solid black",
                    height: "10%",
                  }}
                >
                  <div>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      style={{
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: "12px", textAlign: "left" }}>
                        {item.company}
                      </h3>
                      <h3>{item.position}</h3>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "4px",
                        fontSize: "12px",
                      }}
                    >
                      <h3>{item.postedAt}</h3>
                      <h3>{item.contract}</h3>
                      <h3>{item.location}</h3>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "4px",
                    placeItems: "center",
                  }}
                >
                  <h3>{item.role}</h3>
                  <h3>{item.level}</h3>
                  <h3>{item.language}</h3>
                </div>
              </div>
            ))}
      </div>
      <div>
        <h6>Paginition</h6>
        <div>
          <div>
           <button disabled={1} onClick={()=>setPage(page-1)}>Pre</button>
          </div>
          <div>
            <button onClick={()=>setPage(page+1)}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
