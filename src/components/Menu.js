import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about_image">
              <img src="images/gheyme_1.jpg" alt="" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>درباره ما</h3>
            <h1>به رستوران رشیدی خوش آمدید</h1>
            <p>
              رستوران‌های زنجیره‌ای رشیدی با بیش از ۶۰ سال تجربه، افتخار آن را
              دارد که در ۶ شعبه در سراسر کشور، میزبان محافل دوستانه و کاری،
              جشن‌ها و مراسم‌های شما عزیزان باشد. برای آنکه برایتان بهترین
              باشیم، متناسب با تمامی ذائقه‌ها و سلیقه‌ها، با تکیه بر هنر آشپزان
              ماهر و باتجربه، منوی کامل غذایی را ترتیب داده‌ایم و با به کارگیری
              استاندارهای جهانی و سبک‌های گوناگونی از معماری و طراحی‌های مدرن،
              فضایی دلنشین برای صرف یک وعده غذا را به صورت رستوران گردون،
              رستوران‌های با فضای روباز و بسته ایجاد کرده‌ایم. همچنین آمادگی
              پذیرائی از مهمان‌ها با جمعیت بالا در هر زمانی را داشته و با
              امکانات رفاهی کم‌نظیر همچون سالن‌های VIP، خانه بازی کودکان، پله
              برقی، پارکینگ اختصاصی، کافی‌شاپ مجزا، آلاچیق و... سعی بر آن داریم
              که اوقات خوشی را برایتان رقم زده و همیشه نام ارکیده میان
              انتخاب‌هایتان بدرخشد.
            </p>
            <div className="about_btn">
              <a href="" className="btn btn-smart">
                بیشتر بخوانید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
