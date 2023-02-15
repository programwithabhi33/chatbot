(async function getData(){
    let fetch_data = await fetch("https://api.openai.com/v1/completions",{
        method:"POST",
        data: {"model":"text-davinci-001","prompt":"Write a tagline for an ice cream shop.","temperature":0.4,"max_tokens":64,"top_p":1,"frequency_penalty":0,"presence_penalty":0},
        Accept: "application/json, text/plain, */*",
        'Content-Type': 'application/json',
        Authorization: 'Bearer Your_open_api_key',
        'Content-Length': 165
    })
    let res_data = await fetch_data.json();
    console.log(res_data)
})();