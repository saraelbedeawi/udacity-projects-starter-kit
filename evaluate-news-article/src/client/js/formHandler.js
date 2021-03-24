import {ValidURL} from './ValidURL'
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {
     const url = document.getElementById('article-url').value
     
     if(ValidURL(url)) {
       const data = await post("http://localhost:8081/add-url", {url})    
        document.getElementById('agreement').innerHTML=data.agreement;
        document.getElementById('subjectivity').innerHTML=data.subjectivity;
        document.getElementById('confidence').innerHTML=data.confidence;
        document.getElementById('irony').innerHTML=data.irony;
        document.getElementById('score_tag').innerHTML=data.score_tag;
     }
     else
     {
       
        document.getElementById("text").innerHTML = "invalid input";
        alert("not a url");
        return
     }
    
}
export default handleSubmit
