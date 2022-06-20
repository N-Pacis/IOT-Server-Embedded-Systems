
export const postData = async (req, res) => {
    try {
        let data = []
        req.body.map(dt=>{
            dt = JSON.stringify(dt)
            data.push(dt.replace(/[{}]/g,'').replace(/[""]/g,''));
        })
        console.warn({message: "Uploaded successfully",data,status:200})
        return res.json({message: "Uploaded successfully",data,status:200})
    } catch (ex) {
        res.status(400).send(ex.message)
    }
};