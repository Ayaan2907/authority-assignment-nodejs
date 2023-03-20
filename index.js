import axios from "axios";
import dotenv from "dotenv";
import Express from "express";
import bodyParser from "body-parser";
dotenv.config();

const app = Express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 8000;

const defaultConfig = {
    baseUrl: "https://rest.gohighlevel.com/v1",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

axios.defaults.baseURL = defaultConfig.baseUrl;
axios.defaults.headers = defaultConfig.headers;

const actionFunction = async (req, res) => {
    const data = req.body;
    const { contactId, update } = data;
    const result = async () => {
        try {
            const response = await axios.put(`/contacts/${contactId}`, update);
            console.log(update);
            return response.data?.contact;
        } catch (error) {
            console.error(error);
        }
    };

    const finalResult = await result();
    res.send(finalResult);
};

app.post("/", actionFunction);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// sample body
/* 
{
	"contactId":"yhner4FX2jKzrPuQTHvf",
	"customFieldId":"3t7JDcpa8qQa4HnOAfT3",
	"update":{
	"customFieldId":"3t7JDcpa8qQa4HnOAfT3",
   "customField": {
		 "email": "john@deo.com",
		 "3t7JDcpa8qQa4HnOAfT3": "TEST "
    }
		
	}
}
*/
