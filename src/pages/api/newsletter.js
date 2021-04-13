export default async (req, res) => {
  axios({
    method: "POST",
    url:
      "https://blubbr.us1.list-manage.com/subscribe/post?u=620a18422b78481eb1e7e0320&amp;id=bcb1f8eb89",
    data: formData,
    headers: {
      crossdomain: true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => (res.status = 200))
    .catch((err) => console.error(err));
};
