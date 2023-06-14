import girlImg from "../../assets/images/girlimg.png";
import rectangle from "../../assets/images/bgrectangle.png";
import "./lawyer.css";
import lawyerImg from "../../assets/images/topLawyer.png";
import img1 from "../../assets/images/Rectangle 23 (1).png";
import img3 from "../../assets/images/Rectangle 23.png";
import ReactStars from "react-stars";
const Lawyers = () => {
  const cardArr = [
    {
      img: img1,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
    
    },
    {
      img: img1,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
      
    },
    {
      img: img3,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
      
    },
    {
      img: img1,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
     
    },
    {
      img: img3,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
      
    },
    {
      img: img1,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
      
    },
    {
      img: img3,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
     
    },
    {
      img: img1,
      name: "Courtney Henry",
      catgerory: "Finance and Banking",
     
    },
  ];
  return (
    <>
      <div className="background-rectangle bg ">
        <img src={rectangle} alt="" className="image-fluid bgimg" />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="details col-md-5">
              <div>
                <h1 className="heading">
                  Find the Right <br />
                  Lawyer for you
                </h1>
                <p className="para">
                  Need help but do not know where to start? look
                  <br />
                  no further!
                </p>
                <button className="btn-contact">Contact Us</button>
              </div>
            </div>
            <div className="girl-img  col-md-5">
              <img src={girlImg} alt="" className="image-fluid under-bgimg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-4">
            <select className="opt-time" name="" id="">
              <option value="">Time</option>
            </select>
            <input
              className="input-date"
              placeholder="2021-12-23"
              type="text"
              name=""
              id=""
            />
            <input className="date" type="date" />
          </div>
          <div className="col-md-4">
            <select className="opt-mem" name="" id="">
              <option value="">Members</option>
            </select>
            <input
              className="opt-input"
              placeholder="input"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="col-md-4">
            <div className="mx-5">
              <button className="mx-3 btn-clean">clean</button>
              <button className="mx-3 btn-search">search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center my-4">
        <div className="row">
          <div className="col-4 py-3">
            <div style={{ borderRadius: "18px" }}>
              <img src={lawyerImg} style={{ height: "408px" }} alt="" />
            </div>
          </div>
          {cardArr.map((e) => {
            return (
              <>
                <div className="col-4 py-3">
                  <div className="lawayer-cards" style={{}}>
                    <img
                      src={e.img}
                      style={{ overflow: "hidden", zIndex: "1" }}
                      alt=""
                    />
                    <div
                      className="hide mx-3 py-3"
                      style={{
                        backgroundColor:'#fffcf7',
                        textAlign: "center",
                        width: "80%",
                        borderRadius: "12px",
                        position: "relative",
                        bottom: "6rem",
                        overflow: "hidden",
                      }}
                    >
                      <div className="fw-bold">{e.name}</div>
                      <div className="category">{e.catgerory}</div>
                          <div style={{
                            paddingLeft:'6rem'
                          }}>
                        <ReactStars count={5} value={4} size={24} color2={"#ffd700"} />
                          </div>
                      
                    </div>
                  </div>
                </div>
              </>
            );
          })}
         
          <nav className="d-flex justify-content-center" >
  <ul class="pagination col-3">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
         
        </div>
      </div>
    </>
  );
};
export default Lawyers;
