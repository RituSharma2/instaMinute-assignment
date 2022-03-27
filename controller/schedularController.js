const moment = require("moment");

const triggerFunction = async function (req, res) {
  try {
    let eventData = req.body.events;
    if (!eventData) {
      return res
        .status(400)
        .send({ status: false, msg: "please provide details" });
    }
    for (let i = 0; i < eventData.length; i++) {
      const scheduleTime = moment(
        new Date(`${eventData[i].dateTime}`)
      ).format();
      if (scheduleTime < moment().format()) {
        res
          .status(400)
          .send({ status: false, msg: "provide vaild date and time" });
      }

      const date = new Date(scheduleTime);
      const currentDate = new Date();
      let difference = date - currentDate;
      let delayTime = difference + eventData[i].text.length * 1000;
      console.log(scheduleTime);
      console.log(delayTime); // check delay time

      setTimeout(() => {
        console.log(`after ${eventData[i].text.length} second`);
        console.log(eventData[i].text.split("").reverse().join(""));
      }, delayTime);
    }
    res.status(201).send({ status: true, meg: "event scheduled" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
module.exports.triggerFunction = triggerFunction;
