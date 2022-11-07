const Button = (props) => {
  let { classn, text } = props;

  return <button className={classn}>{text}</button>;
};

const element = (
  <div className="main_container">
    <h1 className="main_heading">Social Buttons</h1>

    <div className="sub_container">
      <Button classn="yellow_button" text="Like" />

      <Button classn="white_button" text="Comment" />

      <Button classn="blue_button" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
