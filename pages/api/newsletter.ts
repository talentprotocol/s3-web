import axios from "axios";

// @ts-ignore
export default function handler(req, res) {
  if (req.method === "POST") {
    console.info("received /api/newsletter post request");
    console.info("checking if user already exists");
    axios
      .get(
        `https://api.mailerlite.com/api/v2/subscribers/search?query=${req.body.email}`,
        {
          headers: {
            "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
          },
        }
      )
      .then(({ data }) => {
        if (!data.length) {
          console.info(
            "user does not exist, adding him to the newsletter subscription"
          );
          axios
            .post(
              "https://api.mailerlite.com/api/v2/subscribers",
              {
                email: req.body.email,
                fields: {
                  receive_community_newsletter: 1,
                },
              },
              {
                headers: {
                  "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
                },
              }
            )
            .then(() => {
              console.info(
                "succssfully added user to the newsletter subscription"
              );
              res
                .status(200)
                .json({ message: "Subscription created" });
            })
            .catch((err) => {
              console.error(
                "error adding user to the newsletter subscription"
              );
              console.error(err);
              res
                .status(500)
                .json({ error: "Internal server error" });
            });
        } else {
          console.info(
            "user already exists, updating his newsletter subscription status"
          );
          axios
            .put(
              `https://api.mailerlite.com/api/v2/subscribers/${req.body.email}`,
              {
                email: req.body.email,
                fields: {
                  receive_community_newsletter: 1,
                },
              },
              {
                headers: {
                  "X-MailerLite-ApiKey": process.env.MAILERLITE_KEY,
                },
              }
            )
            .then(() => {
              console.info(
                "succssfully updated users subscription status"
              );
              res
                .status(200)
                .json({ message: "Subscription created" });
            })
            .catch((err) => {
              console.error(
                "error updating users subscription status"
              );
              console.error(err);
              res
                .status(500)
                .json({ error: "Internal server error" });
            });
        }
      })
      .catch((err) => {
        console.error("error checking if user already exists");
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
