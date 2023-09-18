import React from 'react'
import JsonData from './data.json'

const Faq = (props) => {

  // const filterFirst = () =>
  // {
    const first = JsonData.filter(data => data.id === "1");
    const notFirst = JsonData.filter(data => data.id != "1");
    console.log(notFirst);
  // }

  return (
    <>
      {JsonData.map((faq) => {
        // console.log(faq);
        return (
          <div className="container" key={faq.id}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + faq.target} aria-expanded="true" aria-controls={faq.target}>
                    {faq.title}
                  </button>
                </h2>
                <div id={faq.target} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {faq.text}
                  </div>
                </div>
              </div>
              {/* {notFirst.map((faq2) =>
              {
                return(
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + faq2.target} aria-expanded="false" aria-controls={faq2.target}>
                        {faq2.title}
                      </button>
                    </h2>
                    <div id={faq.target} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        {faq2.text}
                      </div>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Faq