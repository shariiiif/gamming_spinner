import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="text-light">
      <div className="row g-0">
        <div className="col-3 menu">
          <div className="m-1">
            <img
              style={{ maxWidth: "80px" }}
              className="img-fluid"
              src="spen.jpg"
              alt=""
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="p-3 border-bottom border-secondary">Home</li>
            <li className="p-3 border-bottom border-secondary">Play</li>
            <li className="p-3 border-bottom border-secondary">Deposit</li>
            <li className="p-3 border-bottom border-secondary">Withdraw</li>
            <li className="p-3 border-bottom border-secondary">Provably Fair</li>
            <li className="p-3 border-bottom border-secondary">FAQ</li>
          </ul>
        </div>
        <div className="col-9">
          <div className="container">
            <div>
              <p className="heading">Game result will be displayed here</p>
            </div>
            <div className="text-center m-4">
              <img className="img-fluid" src="spen.jpg" alt="" />
            </div>
            <div className="container">
              <p>Neighbour bets</p>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <span className="orphelins">Orphelins(Orphans) </span>{" "}
                  <span className="orphelins ">{">"}</span>
                </p>
                <p className="hints">
                  <span>/2</span>
                  <span>x2</span>
                  <span>-</span>
                  <span>-</span>
                </p>
              </div>
            </div>
            {/* numbers  */}
            <div className="">
              <div className="grid-container">
                <div className="item0 rounded-1 d-flex align-items-center justify-content-center">
                  0
                </div>
                <div className="item3 rounded-1">3</div>
                <div className="item6 rounded-1">6</div>
                <div className="item9 rounded-1">9</div>
                <div className="item12 rounded-1">12</div>
                <div className="item15 rounded-1">15</div>
                <div className="item18 rounded-1">18</div>
                <div className="item21 rounded-1">21</div>
                <div className="item24 rounded-1">24</div>
                <div className="item27 rounded-1">27</div>
                <div className="item30 rounded-1">30</div>
                <div className="item33 rounded-1">33</div>
                <div className="item36 rounded-1">36</div>
                <div className="item2_1 rounded-1">2:1</div>
                <div className="item2 rounded-1">2</div>
                <div className="item5 rounded-1">5</div>
                <div className="item8 rounded-1">8</div>
                <div className="item11 rounded-1">11</div>
                <div className="item14 rounded-1">14</div>
                <div className="item17 rounded-1">17</div>
                <div className="item20 rounded-1">20</div>
                <div className="item23 rounded-1">23</div>
                <div className="item26 rounded-1">26</div>
                <div className="item29 rounded-1">29</div>
                <div className="item32 rounded-1">32</div>
                <div className="item35 rounded-1">35</div>
                <div className="item2_1 rounded-1">2:1</div>
                <div className="item1 rounded-1">1</div>
                <div className="item4 rounded-1">4</div>
                <div className="item7 rounded-1">7</div>
                <div className="item10 rounded-1">10</div>
                <div className="item13 rounded-1">13</div>
                <div className="item16 rounded-1">16</div>
                <div className="item19 rounded-1">19</div>
                <div className="item22 rounded-1">22</div>
                <div className="item25 rounded-1">25</div>
                <div className="item28 rounded-1">28</div>
                <div className="item31 rounded-1">31</div>
                <div className="item34 rounded-1">34</div>
                <div className="item2_1 rounded-1">2:1</div>
              </div>
            </div>
            <div>
              <div className="grid-container1">
                <div className="item_zero rounded-1">0</div>
                <div className="item_one rounded-1">
                  <div className="position rounded-1">1ST 12</div>
                  <div className="grid-container2">
                    <div className="position rounded">1 TO 18</div>
                    <div className="position rounded-1">EVEN</div>
                  </div>
                </div>
                <div className="item_two rounded-1">
                  <div className="position rounded-1">2ND 12</div>
                  <div className="grid-container2">
                    <div className="position_red rounded-1">
                      <span className="item_zero">asdf</span>
                    </div>
                    <div className="position_gray rounded-1">
                      <span className="item_zero">asdf</span>
                    </div>
                  </div>
                </div>
                <div className="item_three rounded-1">
                  <div className="position rounded-1">3RD 12</div>
                  <div className="grid-container2">
                    <div className="position rounded-1">ODD</div>
                    <div className="position rounded-1">19 TO 36</div>
                  </div>
                </div>
                <div className="item_last rounded-1">9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
