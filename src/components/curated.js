import { Link } from "react-router-dom";

function Curated() {
  return (
    <>
      <section id="curatedBg">
        <div className="container">
          <div className="item" id="animOne">
            <div className="svg-container">
              <Link to ="/five-min-pick-me-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 117.54 170.91"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Ebene_1" data-name="Ebene 1">
                      <path
                        className="cls-1"
                        d="M105.74,142.59c-17,29.69-42.85,36.24-70.25,17.35a54,54,0,0,1-6-4.51C3.6,132.27,6,117.23,1.43,98.23c-4.22-17.09,4.23-31.94,15.3-53.8C22.63,33.8,28.87,21.86,37.36,11,44.48,1.78,54.24-2.63,66.61,2.49A73.18,73.18,0,0,1,86,14.8C99.25,26,111.15,48,115.31,72.67,119.74,97.22,116.43,124.54,105.74,142.59Z"
                      />
                    </g>
                  </g>
                </svg>
              </Link>
              <h3 className="title">5 min pick me up</h3>
            </div>
          </div>
          <div className="item" id="animThree">
            <div className="svg-container">
            <Link to ="/relax">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 137.56 181.17"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Ebene_1" data-name="Ebene 1">
                    <path
                      className="cls-1"
                      d="M137.23,83.29c.37,4.27-1,6.6-3.3,9.85s-5.85,7.22-10,13.33a160.61,160.61,0,0,0-13.55,24.91c-4.66,10-9,21.74-14.57,28.5-11.7,12.35-24.72,24.6-44.38,20.06-9.86-3.09-22.75-13-34-33.58C5.9,126.87-.45,96,.33,80.81c.65-21,5.26-25,12.2-33.68,7-7.66,17.35-19.1,28.95-28.65C53.52,8.53,65.24,1.9,74.69.6,84.23-.92,91.5,2.89,96.57,9c11,12.73,17.82,21.75,24.5,36.64,3.36,7.22,7.07,15.26,10.34,22S137,79.68,137.23,83.29Z"
                    />
                  </g>
                </g>
              </svg>
              </Link>
              <h3 className="title">relax</h3>
            </div>
          </div>
          <div className="item" id="curatedItem" >
            <div className="svg-container">
            <Link to ="/i-want-to-sleep">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128.87 179.49"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Ebene_1" data-name="Ebene 1">
                      <path
                        className="cls-1"
                        d="M79.66,123.86c-9.14-21.63-19.3-35.27-31.48-47.92C33.35,60.06,13.34,47.19,2.66,25.31A18.2,18.2,0,0,1,.37,15.77c2.8-20,25.53-16.43,42.69-12,15.07,4.19,26,5.05,40,.31,11.12-7.29,26.1,9.64,32.58,25,5.79,13,6.37,26,8.83,44.78,1.42,15.61,5.77,36.64,3.3,50.62-2,10.77-13.93,26.53-19.93,35-3.42,4.58-6.3,8.38-9,12.19-5.6,7.48-7.34,10.94-6.58,2.64C93.24,166.83,88.47,143.64,79.66,123.86Z"
                      />
                    </g>
                  </g>
             
                </svg>
                <h3 className="title" id="three">
                  i want to sleep
                </h3>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curated;
