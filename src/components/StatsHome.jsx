import React from 'react';

// styles
import "../styles/Stats.css"

const StatsHome = () => {
  return (
    <div className='stats'>
      <div className="container">
        <div className="stats__title">
          Статистика
        </div>
        <div className="stats__table">
          <div className="stats__income">
            <div className="stats__income_title">
              Доход
            </div>
            <div className="stats__income_info">
              <div className="stats_income_list">
                <div className="stats_income_item">
                  8 000 сом
                </div>
                <div className="stats_income_item">
                  15 000 сом
                </div>
                <div className="stats_income_item">
                  20 000 сом
                </div>
              </div>
            </div>
          </div>
          <div className="stats__outgo">
            <div className="stats__outgo_title">
              Расход
            </div>
            <div className="stats__outgo_info">
              <div className="stats_outgo_list">
                <div className="stats_outgo_item st-bar_1"></div>
                <div className="stats_outgo_item st-bar_2"></div>
                <div className="stats_outgo_item st-bar_3"></div>
                <div className="stats_outgo_item st-bar_4"></div>
                <div className="stats_outgo_item st-bar_5"></div>
                <div className="stats_outgo_item st-bar_6"></div>
                <div className="stats_outgo_item st-bar_7"></div>
              </div>
            </div>
            <div className="stats_outgo_footer">
              <div className="stats_outgo_footer-item">
                1 май
              </div>
              <div className="stats_outgo_footer-item">
                12
              </div>
              <div className="stats_outgo_footer-item">
                17
              </div>
              <div className="stats_outgo_footer-item">
                25
              </div>
              <div className="stats_outgo_footer-item">
                31 май
              </div>
            </div>
          </div>
        </div>
        <div className="stats__last">
          <div className="stats__amount">
            <div className="stats__amount_balance">
              Баланс:
            </div>
            <div className="stats__amount_number">
              60 000 сом
            </div>
          </div>
          <div className="stats__list">
            <div className="stats__item">
              <div className="stats__item_name">
                Квартира
              </div>
              <div className="stats__item_month">
                декабрь
              </div>
              <div className="stats__item_cost">
                16 000 сом
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item_name">
                Кафе и ресторан
              </div>
              <div className="stats__item_month">
                декабрь
              </div>
              <div className="stats__item_cost">
                5 500 сом
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item_name">
                Продукты
              </div>
              <div className="stats__item_month">
                декабрь
              </div>
              <div className="stats__item_cost">
                5 500 сом
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item_name">
                Транспорт
              </div>
              <div className="stats__item_month">
                декабрь
              </div>
              <div className="stats__item_cost">
                3 500 сом
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item_name">
                Дом/Хоз
              </div>
              <div className="stats__item_month">
                декабрь
              </div>
              <div className="stats__item_cost">
                6000 сом
              </div>
            </div>
            <div className="stats__item">
              <div className="stats__item_name">
                Одежды
              </div>
              <div className="stats__item_month">
                май
              </div>
              <div className="stats__item_cost">
                10 000 сом
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsHome;