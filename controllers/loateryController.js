


exports.getAllLoatery = async (req, res) => {
    // console.log(req.params.id);
    try {
    const {mobile} = req.body;
      const result = await User.findOne({mobile});
      console.log("result",result);
      res.status(200).send(result)
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


  exports.updateLoadtery = async (req, res) => {
    // console.log(req.params.id);
    try {
    const {mobile} = req.body;
      const result = await User.findOne({mobile});
      console.log("result",result);
      res.status(200).send(result)
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };