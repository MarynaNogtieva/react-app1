let visibility = false

const app = {
  details: null,
  title: "Visibility Toggle"
}

const getDetails = () => {
  
}

const toggleVisibility = () => {
  visibility = !visibility
  render();
  // if(app.details){
  //   app.details =  null;
  // } else{
  //   app.details =  "hey there, here are details you wanted to see";
  // }
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>{visibility ? "Hide details" : "Show Details"}</button>
      {visibility && (<div>hey there, here are details you wanted to see</div>)}
    </div>
  )

  ReactDOM.render(template, appRoot);
};

render();