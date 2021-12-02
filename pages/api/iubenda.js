
export default async (req, res) => {
  //console.log("req", req)
  //console.log("res", res)


  try {

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong..`,
    });
  }
};