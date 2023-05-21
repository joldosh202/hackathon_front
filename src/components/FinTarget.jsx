import React from 'react';

// styles
import "../styles/FinTarget.css";

// images
import globusImg from "../imgs/globus.png";

// icons
import keyIcon from "../imgs/house-key 1.svg";
import cardIcon from "../imgs/credit-card 1.svg";
import productsIcon from "../imgs/healthy-food 1.svg";
import walletIcon from "../imgs/wallet 1 (1).svg";
import { Link } from 'react-router-dom';

const FinTarget = () => {
  return (
    <div className='fin-target'>
      <div className="container">
        <div className="fin-target_title">
          Финансовые цели
        </div>
        <div className="fin-target_subtitle">
          Ставьте финансовые цели и отслеживайте их выполнение
        </div>
        <div className="fin-target_info-block">
          <div className="fin-target_left">
            <img className="fin-target_left_img" src={globusImg} />
            <div className="fin-target_left_text">
              Создавайте неограниченное количество категорий, чтобы отслеживать, что для вас важно. Чем бы вы ни занимались, мы можем помочь вам спланировать это.
            </div>
            <Link to="/cardlist">

            <button className="fin-target_left_btn">
              Создать счет
            </button>
            </Link>
          </div>
          <div className="fin-target_right">
            <div className="fin-target_right_date">
              31/12/2023
            </div>
            <div className="fin-target_right_list">
              <div className="fin-target_right_item">
                <div className="fin-target_right_item-circle circle-key">
                  <img src={keyIcon} alt="" />
                </div>
                <div className="fin-target_right_item-text">
                  <div className="fin-target_right_item-title">
                    Квартира в новостройке
                  </div>
                  <div className="fin-target_right_item-subtitle">
                    новое
                  </div>

                </div>
                <div className="fin-target_right_item-price">
                  <div className="fin-target_right_item-price-main">
                    344 232,86 сом
                  </div>
                  <div className="fin-target_right_item-price-secondary">
                    200 0000 сом
                  </div>
                </div>

              </div>
              <div className="fin-target_right_item">
                <div className="fin-target_right_item-circle circle-card">
                  <img src={cardIcon} alt="" />
                </div>
                <div className="fin-target_right_item-text">
                  <div className="fin-target_right_item-title">
                    Погасить долги по кредитам ___
                  </div>
                  <div className="fin-target_right_item-subtitle">
                    новое
                  </div>

                </div>
                <div className="fin-target_right_item-price">
                  <div className="fin-target_right_item-price-main">
                    32 4000 сом
                  </div>
                  <div className="fin-target_right_item-price-secondary">
                    27 300 сом
                  </div>
                </div>

              </div><div className="fin-target_right_item">
                <div className="fin-target_right_item-circle circle-product">
                  <img src={productsIcon} alt="" />
                </div>
                <div className="fin-target_right_item-text">
                  <div className="fin-target_right_item-title">
                    Еда
                  </div>
                  <div className="fin-target_right_item-subtitle">
                    Декабрь
                  </div>

                </div>
                <div className="fin-target_right_item-price">
                  <div className="fin-target_right_item-price-main">
                    4231 сом
                  </div>
                  <div className="fin-target_right_item-price-secondary">
                    Остаток
                  </div>
                </div>

              </div><div className="fin-target_right_item">
                <div className="fin-target_right_item-circle circle-wallet">
                  <img src={walletIcon} alt="" />
                </div>
                <div className="fin-target_right_item-text">
                  <div className="fin-target_right_item-title">
                    Зарабатывать 170 000 сом в месяц
                  </div>
                  <div className="fin-target_right_item-subtitle">
                    Декабрь
                  </div>

                </div>
                <div className="fin-target_right_item-price">
                  <div className="fin-target_right_item-price-main">
                    150 000 сом
                  </div>
                  <div className="fin-target_right_item-price-secondary">
                    120 000сом
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTarget;