import { useState } from "react";

function Cangratulation() {
  const [click, setClick] = useState("show");
  const [Value, setValue] = useState("");
  const [err, setErr] = useState("noErr");
  const [language, setLanguage] = useState("english");

  let content = {
    english: {
      text1: " You did it! So proud of you.",
      text2: "Congratulation",
      text_btn: " Congratulation",
      text_err: " Fill the input!",
      text_placeholder: "Enter Your Name",
    },
    persian: {
      text1: ".توانجامش دادی! خیلی به تو افتخار میکنم",
      text2: "تبریک",
      text_btn: "تبریک",
      text_err: "نام را پر کنید!",
      text_placeholder: "نام خود را وارد کنید",
    },
  };

  language == "english"
    ? (content = content.english)
    : (content = content.persian);

  return (
    <>
      <div className="flex_of_congratulation">
        <div className="flex_main_div_of_congratulation">
          <div className="flex_of_language">
            <div class="dropdown">
              <button class="dropbtn">Language &#10061;</button>
              <div class="dropdown-content">
                <a
                  href="#"
                  onClick={() => {
                    setLanguage("english");
                  }}
                >
                  English
                </a>
                <a
                  href="#"
                  onClick={() => {
                    setLanguage("persian");
                  }}
                >
                  Persian
                </a>
              </div>
            </div>
          </div>
          <h1 className="style_of_text_congratulation">
            {/* You did it! So proud of you. */}
            {content.text1}
          </h1>

          <h1
            className="style_of_text_congratulation aa"
            style={{ display: click == "show" ? "none" : "block" }}
          >
            {content.text2} <span style={{ color: "#FBA100" }}>{Value}</span>
          </h1>
          <div style={{ display: click == "show" ? "block" : "none" }}>
            <div className="flex_of_imput_congratulation">
              <input
                className="style_input_congratulation"
                type="text"
                placeholder={content.text_placeholder}
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
                {content.text_btn}
              </button>
            </div>
            <h6
              className="style_of_text_congratulation"
              style={{
                display: err == "err" ? "block" : "none",
                marginTop: "50px",
              }}
            >
              {content.text_err}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cangratulation;
