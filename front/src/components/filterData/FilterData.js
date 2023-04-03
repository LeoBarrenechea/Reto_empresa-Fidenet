import { useEffect } from "react"

export default function FilterData({apiData, setMentions, cloud, setCloud})
{
    let other = [];
    let person = [];
    let organization = [];
    let place = [];
    let Other = {};
    let Organization = {};
    let Person = {};
    let Place = {};
    let fullObj = {};

    useEffect(() => {

        if(apiData)
        {
            const arrayWords = apiData.filter(array => {
                let mention = array[5]
                if(mention !== "None" && !mention.includes("urls")){
                    mention = mention.replaceAll("'", "\"")
                    mention = JSON.parse(mention)
                    return mention; 
                }
                else
                {
                    return ''
                }
                
            })
            
            const arrayDatas = arrayWords.map(pos => {
        
                let mention = pos[5];
                    if (mention)
                    {
                        mention = mention.replaceAll("'", "\"");
                        mention = JSON.parse(mention);
                        return mention;
                    }
            });

            const newData = arrayDatas.map( pos => {
                if (pos.annotations)
                {
                    return pos.annotations;
                }
            });

            function convertArrayToObject(array, key) {
                const initialValue = {};
                // console.log(array);
                return array.reduce((obj, item) => {
                    /* console.log(item);
                    console.log(obj); */
                  return {
                    name: item[key],
                    children: array
                  };
                }, initialValue);
              };

            let sunburst = [];
            let worldCloud = [];
            newData.forEach(mention => {
                if (mention !== undefined)
                {
                    for (let i = 0; i < mention.length; i++)
                    {
                            worldCloud.push({"text": mention[i].normalized_text, "value": Math.floor(mention[i].probability * 50)})
                            if (mention[i].type === 'Other')
                            {
                                other.push({name: mention[i].normalized_text, size: Math.floor(mention[i].probability * 1000), type: mention[i].type})
                                Other = convertArrayToObject(other, "type");
                            }
                            if (mention[i].type === 'Place')
                            {
                                place.push({name: mention[i].normalized_text, size: Math.floor(mention[i].probability * 1000), type: mention[i].type})
                                Place = convertArrayToObject(place, "type");
                            }
                            if (mention[i].type === 'Person')
                            {
                                person.push({name: mention[i].normalized_text, size: Math.floor(mention[i].probability * 1000), type: mention[i].type})
                                Person = convertArrayToObject(person, "type");
                            }
                            if (mention[i].type === 'Organization')
                            {
                                organization.push({name: mention[i].normalized_text, size: Math.floor(mention[i].probability * 1000), type: mention[i].type})
                                Organization = convertArrayToObject(organization, "type");
                            }
                    }
                    
                }
            })

            fullObj = {Person, Place, Other, Organization};
            console.log(fullObj);
            setMentions(fullObj);



            setCloud(worldCloud);
            /* setCloud(worldCloud);
            setMentions(mentionObj); */            
            /* for (let i = 0; i < mentionObj.length; i++)
            {
                for (let j = 0; j < mentionObj[i].length; j++)
                {
                    if (mentionObj[i][j].type && !arrayType.some(pos => pos.type === mentionObj[i][j].type))
                    arrayType.push({type: mentionObj[i][j].type});
                }
            } */
            /* setType(arrayType);
            setMentions(mentionObj); */
        }
    }, [apiData])
}