import axios from "axios";
import dotenv from "dotenv";
import Express from "express";

const app = Express();

dotenv.config();

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

app.post("/run", async (req, res) => {
    console.log("running");
    let resp = {};
    const contactId = req.query.contactId;
    const customFieldId = req.query.customeFieldId;
    const value = req.query.value;
    const email = req.query.email;
    3t7JDcpa8qQa4HnOAfT3 field
    yhner4FX2jKzrPuQTHvf contact
    const data = {
        email: email,
        customFields: [
            {
                customFieldId: value,
            },
        ],
    };
    try {
        const response1 = await axios.get(`contacts/${contactId}`);
        resp.contact = response1.data?.contact;

        const response2 = await axios.get(`custom-fields/${customFieldId}`);
        resp.customField = response2.data;

        const response3 = await axios.put(`contacts/${contactId}`, {
            email: email,
            customFields: {
                customFieldId: value,
            },
        });
        resp.updatedContact = response3.data?.contact;
    } catch (error) {
        console.log(error);
    }
    res.send(resp).status(200);
    // res.send({
    //   data: data,
    //   req: req.body,
    //   params: req.query,
    // });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const contactId = "pyytrTDvGcaplNjF25sX";
// const customFieldId = "8Ce8a0bFshmJ4mRQxEpc";
// const data = {
//     customFields: [
//         {
//             id: customFieldId,
//             value: "new new test",
//         },
//     ],
// };

// const getallContacts = async () => {
//     try {
//         const response = await axios.get("contacts");
//         contactId = response.data.contacts[0].id;
//         console.log(`Fetching contact with id: ${contactId}`);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getContactById = async (ID) => {
//     try {
//         const response = await axios.get(`contacts/${ID}`);
//         console.log(response.data?.contact);
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getCustomFieldById = async (ID) => {
//     try {
//         const response = await axios.get(`custom-fields/${ID}`);
//         console.log(JSON.stringify(response.data));
//     } catch (error) {
//         console.log(error);
//     }
// };

// const updateContact = async (ID, data) => {
//     try {
//         const response = await axios.put(`contacts/${ID}`, data);
//         console.log(response.data?.contact?.customField);
//         console.log("Updated");
//     } catch (error) {
//         console.log(error);
//     }
// };

// async function main() {
//     await getallContacts();
//     await updateContact(contactId, data);
//     await getContactById(contactId);
// }
