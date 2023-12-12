// import { FileList } from "filelist";
// import { pathExists } from "fs-extra";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  // console.log(pathExists);
  return (
    <Fragment>
      <section className={`${props.className}`}>
        <div className="grid grid-cols-2 gap-7">
          <ItemLandingPage></ItemLandingPage>
          <ItemLandingPage></ItemLandingPage>
        </div>
      </section>
    </Fragment>
  );
};

const ItemLandingPage = () => {
  return (
    <Fragment>
      <div
        className="flex flex-col"
        style={{
          borderRadius: "15px",
          boxShadow:
            "0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
          overflow: "hidden",
        }}
      >
        <Link>
          <img
            src="https://images.unsplash.com/photo-1682687220015-186f63b8850a?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Lading page images"
            className="w-full h-[250px] object-cover"
          />
        </Link>
        <div className="flex flex-col gap-3 px-7 py-7">
          <Link>
            <h2 className="text-2xl font-bold text-black">
              [Quan trọng] – Hướng dẫn mua và thanh toán khóa học Evondev mới
              nhất
            </h2>
          </Link>
          <Link>
            <p className="text-base text-[#4B5563]">
              Chào các bạn nhé, sắp tới thì KTcity sẽ tạm ngưng hoạt động kinh
              doanh, nghĩa là các bạn đã mua các khóa học của…
            </p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
