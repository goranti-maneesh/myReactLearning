const Notification = (props) => {
  //  Write your code here.
  const { classN, ImagePic } = props;
  return (
    <div>
      <image className={classN}>{ImagePic}</image>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-container">
    <div className="container">
      <h1 className="main-heading">Notifications</h1>
      <div className="bg-container">
        <Notification
          paragraphText="Information Message"
          className="information-text"
        />
        <Notification paragraphText="Success Message" classN="success-text" />
        <Notification paragraphText="Warning Message" classN="warming-text" />
        <Notification paragraphText="Error Message" classN="error-text" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
