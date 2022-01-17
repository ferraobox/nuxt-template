import { ServerApi } from "~cloudinary/server";

const configuration = {
  "privateCdn": false,
  "cloudName": "dngke1rir",
  "url": "https://res.cloudinary.com",
  "secure": true
}

export default function(context, inject) {
  const cloudinary = new ServerApi(configuration);

  context.$cloudinary = cloudinary;
  inject("cloudinary", cloudinary);
}