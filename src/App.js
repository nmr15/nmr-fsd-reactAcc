import './App.css';
import JsonData from './data.json';
import Faq from './Faq';

function App() {

  let show = "show";

  return (
    <>
      <Faq show={show}/>
      {/* {JsonData.map((faq) =>
      {
        return(
          <div className="container">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + faq.target} aria-expanded="true" aria-controls={faq.target}>
                  {faq.title}
                </button>
                </h2>
                <div id={faq.target} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {faq.text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}
    </> 
  );

}

export default App;
