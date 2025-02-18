import React from "react";
import { useParams } from "react-router-dom";
import { data1, data2 } from "../layouts/sections/sections";
import handPhone from "../../assets/hand_phone.svg";
import bookIcon from "../../assets/book_icon.svg";
import star from "../../assets/star.svg";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState({});
  React.useEffect(() => {
    if (+id <= 6) {
      data1.forEach((item) => {
        if (item.id === +id) {
          setBook(item);
        }
      });
    } else {
      data2.forEach((item) => {
        if (item.id === +id) {
          setBook(item);
        }
      });
    }
  }, []);
  return (
    <section className="pt-[25px] pb-[40px]">
      <div className="container">
        <div className="flex items-start gap-[24px]">
          <div className="w-[300px] h-[422px] shrink-0">
            <img className="w-full h-auto" src={book.img} alt="" />
          </div>
          <div className="flex flex-col grow">
            <div className="flex mb-[16px] items-start justify-between">
              <div>
                <h2 className="font-bold text-[30px] text-[#11142d]">
                  {book.title}
                </h2>
                <p className="text-left block text-[14px] text-[#3f51b5]">
                  {book.type}
                </p>
              </div>
              <div className="flex items-center gap-[16px]">
                <button>
                  <img src={handPhone} alt="" />
                </button>
                <button>
                  <img src={bookIcon} alt="" />
                </button>
                <div className="flex items-center gap-[24px] ml-[29px]">
                  <div className="flex items-center gap-[8px]">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <p className="font-bold text-[24px]">{book.rating}</p>
                </div>
              </div>
            </div>
            <p className="text-[18px] leading-[171%] text-[#11142d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
