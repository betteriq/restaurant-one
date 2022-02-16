import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h3>رستوران رافع صالح </h3>
            <p>
              چلو کباب بدون شک معروف ترین غذای ایرانی است و خیلی ها آشپزی ایرانی
              را با چلو کباب می شناسند. انواع کباب و به ویژه کوبیده در بین
              ایرانی ها و توریست ها بسیار پرطرفدار است. چلو کباب کوبیده همان طور
              که می دانید معمولا با گوجه و فلفل کبابی، برنج زعفرانی، دوغ و سبزی
              تازه سرو می شود. البته گاهی کوبیده را به جای برنج با نان هم می
              خورند که صد البته بهتر است نان سنگک باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
