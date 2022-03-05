import { useState } from "react";

function Cangratulation() {
  const [click, setClick] = useState("show");
  const [Value, setValue] = useState("");
  const [err, setErr] = useState("noErr");

  return (
    <>
      <div className="flex_of_congratulation">
        <div className="flex_main_div_of_congratulation">
          {/* <h1 className="style_of_text_congratulation">Congratulation</h1> */}
          <h1 className="style_of_text_congratulation">
            You did it! So proud of you.
          </h1>

          <h1
            className="style_of_text_congratulation aa"
            style={{ display: click == "show" ? "none" : "block" }}
          >
            Congratulation <span style={{ color: "#FBA100" }}>{Value}</span>
          </h1>
          <div style={{ display: click == "show" ? "block" : "none" }}>
            <div className="flex_of_imput_congratulation">
              <input
                className="style_input_congratulation"
                type="text"
                placeholder="Enter Your Name"
                required="required"
                onChange={(x) => setValue(x.target.value)}
              ></input>
            </div>
            <div className="flex_of_imput_congratulation">
              <button
                className="style_of_btn_congratulation"
                onClick={() => {
                  if (!Value) {
                    setErr("err");
                    return;
                  }
                  if (click === "show") {
                    setClick("hide");
                  } else {
                    setClick("show");
                  }
                }}
              >
                Congratulation
              </button>
            </div>
            <h6
              className="style_of_text_congratulation"
              style={{
                display: err == "err" ? "block" : "none",
                marginTop: "50px",
              }}
            >
              Fill the input
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

// function Err(props){
//   return<h1 style={{display:err=="err"?"block":"none"}}>Fill the input</h1>
// }
export default Cangratulation;
