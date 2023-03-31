export default function convertArrayToObject(persons, organizations)
{
    const initialValue = {};
    return mentions.reduce((obj, item) => {
        console.log(item);
       return {
                ...obj,
                name: "person",
                children: mentions
            }
    }, initialValue);
};