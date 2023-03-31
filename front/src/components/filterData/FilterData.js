import { useEffect } from "react"

export default function FilterData({data, setMentions, setType, setProbability, type, probability})
{
    const arrayType = [];
    useEffect(() => {

        if(data !== '')
        {

            const arrayWords = data.filter(array => {
                let mention = array[5]
                if(mention !== "None" && !mention.includes("urls")){
                    console.log(mention);
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

            let newData = arrayDatas.map( pos => {
                if (pos.annotations)
                {
                    console.log(pos.annotations)
                    return pos.annotations;
                }
            })

            console.log(newData);

            let mentionObj = [];
            newData.forEach(mention => {
                if (mention !== undefined)
                {
                    for (let i = 0; i < mention.length; i++)
                    {
                            console.log(mention[i]);
                            mentionObj.push({name: mention[i].type, children: [{"name": mention[i].normalized_text, "size": mention[i].probability}]})
                    }
                }
            })
            setMentions(mentionObj);            
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
    }, [data])
}