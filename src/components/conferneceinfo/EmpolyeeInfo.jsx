import React, { useEffect, useState } from "react";
import "../../assets/css/employee.css";
import vector from "../../assets/images/Vector.svg";

const EmpolyeeInfo = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [employees, setEmployee] = useState([]);
  const isActive1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    getData(setEmployee);
  };
  const isActive2 = () => {
    setButton1(false);
    setButton2(true);
    setButton3(false);
    setButton4(false);
    setButton5(false);
    getData(setEmployee);
  };
  const isActive3 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(true);
    setButton4(false);
    setButton5(false);
    getData(setEmployee);
  };
  const isActive4 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(true);
    setButton5(false);
    getData(setEmployee);
  };
  const isActive5 = () => {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setButton5(true);
    getData(setEmployee);
  };
  /* fetch data */
  const getData = () => {
    fetch("json/empolyee.json")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      });
  };
  useEffect(() => {
    fetch("json/empolyee.json")
    .then((res) => res.json())
    .then((data) => {
      setEmployee(data);
    });
  }, [])
  

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="item1 col-span-10 md:col-span-4">
          <div className="mx-auto">
            <div
              onClick={isActive1}
              className={
                button1 ? "custom-button bg-yellow-400" : "custom-button"
              }
            >
              <div>
                <img
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt=""
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div className={button1 ? "my-4-10  show-table block md:hidden":"my-4-10  show-table hidden md:hidden"}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            <div
              onClick={isActive2}
              className={
                button2 ? "custom-button bg-yellow-400" : "custom-button"
              }
            >
              <div>
                <img
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt=""
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div className={button2 ? "my-4-10  show-table block md:hidden":"my-4-10  show-table hidden md:hidden"}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            <div
              onClick={isActive3}
              className={
                button3 ? "custom-button bg-yellow-400" : "custom-button"
              }
            >
              <div>
                <img
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt=""
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div className={button3 ? "my-4-10  show-table block md:hidden":"my-4-10  show-table hidden md:hidden"}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            <div
              onClick={isActive4}
              className={
                button4 ? "custom-button bg-yellow-400" : "custom-button"
              }
            >
              <div>
                <img
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt=""
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div className={button4 ? "my-4-10  show-table block md:hidden":"my-4-10  show-table hidden md:hidden"}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            <div
              onClick={isActive5}
              className={
                button5 ? "custom-button bg-yellow-400" : "custom-button"
              }
            >
              <div>
                <img
                  className="bg-white py-2 px-2 rounded-md"
                  src={vector}
                  alt=""
                />
              </div>
              <p className="ml-16">jfghfdgfg</p>
            </div>
            <div className={button5 ? "my-4-10  show-table block md:hidden":"my-4-10  show-table hidden md:hidden"}>
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
        <div class="item1 col-span-9 md:col-span-8">
          <div className="ml-10 show-table hidden md:block">
            {employees.map((e, i) => {
              return (
                <div key={i}>
                  <div className="flex mb-4">
                    <div className="mr-6">
                      <img className="img-body" src={e.img} alt="" />
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <p className="heading">{e.author}</p>
                        <p className="heading">{e.company}</p>
                      </div>
                      <div>
                        <p className="pera">{e.pera}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpolyeeInfo;
